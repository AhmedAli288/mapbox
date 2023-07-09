// interceptor.js
import axios from "axios";
import { postRefreshToken } from "./apiServices";
import { authTokenPayload, AuthURL } from "../Constants/ConstantValues";
import { base64Generator } from "../utils/utility";

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASEURL_STAGING,
});

let isRefreshing = false;
let refreshPromise = null;
let retryCount = 0;

const oAuthAPI = (referenceKey) => {
	return new Promise((resolve, reject) => {
		if (referenceKey == null) {
			referenceKey = base64Generator();
			localStorage.setItem("reference_key", referenceKey);
		}

		axios
			.post(
				process.env.REACT_APP_BASEURL_STAGING + AuthURL,
				authTokenPayload,
				{
					headers: {
						APP_REFERENCE_KEY: referenceKey,
					},
				}
			)
			.then((response) => {
				localStorage.setItem(
					"app_reference",
					JSON.stringify(response.data)
				);
				console.log("oAuthAPI response: ", response);
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};

const fetchTokenBeforeRequests = async () => {
	let token = JSON.parse(localStorage.getItem("app_reference"));
	let referenceKey = localStorage.getItem("reference_key");

	if (token == null || token.accessToken == null || referenceKey == null) {
		await oAuthAPI(referenceKey);
	}
	return Promise.resolve();
};

// ...other code...

const refreshToken = async (originalRequest) => {
	if (!isRefreshing) {
		isRefreshing = true;

		if (!refreshPromise) {
			if (retryCount < 2) {
				console.log("retryCount: ", retryCount);
				console.log("refreshPromise: ", refreshPromise);
				refreshPromise = new Promise(async (resolve, reject) => {
					try {
						await postRefreshToken();
						isRefreshing = false;
						refreshPromise = null;
						retryCount = 0;
						resolve(); // Resolve the promise on successful refresh
					} catch (error) {
						isRefreshing = false;
						refreshPromise = null;
						retryCount++;
						console.log("throw error: ", error);
						if (retryCount === 2) {
							const referenceKey =
								localStorage.getItem("reference_key");
							console.log("retryCount: ", retryCount);
							await oAuthAPI(referenceKey);
							resolve();
						} else {
							// Retry the refresh-token API
							await refreshToken(originalRequest);
							reject(error); // Reject the promise on refresh failure
						}
					}
				});
			} else {
				console.log("else isRefreshing: ");
				const referenceKey = localStorage.getItem("reference_key");
				await oAuthAPI(referenceKey);
				isRefreshing = false;
				refreshPromise = null;
			}
		}

		console.log("end refreshPromise: ", refreshPromise);
		await refreshPromise;

		// Retry the original request after successful token refresh
		const response = await axiosInstance(originalRequest);

		console.log("Response:", response);

		return response;
	} else {
		await refreshPromise;
	}
};

// ...other code...

const requestInterceptor = axiosInstance.interceptors.request.use(
	async (request) => {
		let referenceKey = localStorage.getItem("reference_key");
		let token = JSON.parse(localStorage.getItem("app_reference"));

		console.log("request made...");

		if (
			token == null ||
			token.accessToken == null ||
			referenceKey == null
		) {
			await oAuthAPI(referenceKey);
		}

		referenceKey = localStorage.getItem("reference_key");
		token = JSON.parse(localStorage.getItem("app_reference"));

		request.headers["APP_REFERENCE_KEY"] = referenceKey;
		request.headers.Authorization = `Bearer ${token.accessToken}`;

		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);

fetchTokenBeforeRequests();

const responseInterceptor = axiosInstance.interceptors.response.use(
	async (response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;

		if (
			error.response &&
			(error.response.status === 401 || error.response.status === 403) &&
			!originalRequest._retry
		) {
			originalRequest._retry = true;

			try {
				await refreshToken(originalRequest);

				// Update the request headers with the new token
				const token = JSON.parse(localStorage.getItem("app_reference"));
				originalRequest.headers.Authorization = `Bearer ${token.accessToken}`;

				const response = await axiosInstance(originalRequest);

				return response;
			} catch (tokenError) {
				return Promise.reject(tokenError);
			}
		}

		return Promise.reject(error);
	}
);

export const ejectInterceptors = () => {
	axiosInstance.interceptors.request.eject(requestInterceptor);
	axiosInstance.interceptors.response.eject(responseInterceptor);
};

export default axiosInstance;
