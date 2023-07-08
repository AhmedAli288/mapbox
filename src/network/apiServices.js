import { axiosInstance } from "./interceptor";
import axios from "axios";
import {
  authTokenPayload,
  AuthURL,
  RefreshTokenURL,
  AllListingsURL,
  UserLoginURL,
  ResetUserPasswordURL,
  UpdateUserPasswordURL,
  emailOtpURL,
  smsOtpURL,
  validateEmailOtpURL,
  validateSmsOtpURL,
  signUpURL,
} from "../Constants/ConstantValues";

export const getAuthToken = () => {
  return new Promise((resolve, reject) => {
    const ref = localStorage.getItem("reference_key");
    axios
      .post(process.env.REACT_APP_BASEURL_STAGING + AuthURL, authTokenPayload, {
        headers: {
          APP_REFERENCE_KEY: ref,
        },
      })
      .then((response) => {
        localStorage.setItem("app_reference", JSON.stringify(response.data));
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const postRefreshToken = async () => {
  return new Promise((resolve, reject) => {
    const app_reference = JSON.parse(localStorage.getItem("app_reference"));
    const ref = localStorage.getItem("reference_key");

    console.log("app_reference: ", app_reference);

    const payload = {
      username: process.env.REACT_APP_RFRESH_TOKEN_USERNAME,
      refreshToken: app_reference.refreshToken,
    };

    axios
      .post(process.env.REACT_APP_BASEURL_STAGING + RefreshTokenURL, payload, {
        headers: {
          APP_REFERENCE_KEY: ref,
          Authorization: `Bearer ${app_reference.accessToken}`,
        },
      })
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("app_reference", JSON.stringify(res.data));
          resolve();
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getListings = async (payload) => {
  return axiosInstance.post(AllListingsURL, payload);
};

export const userLogin = async (payload) => {
  return axiosInstance.post(UserLoginURL, payload);
};

export const resetUserPassword = async (payload) => {
  return axiosInstance.post(ResetUserPasswordURL, payload);
};

export const updateUserPassword = async (payload) => {
  return axiosInstance.post(UpdateUserPasswordURL, payload);
};
export const getEmailOtp = async (emailPayLoad) => {
  // console.log(manseel);
  // try {
  return axiosInstance.post(emailOtpURL, emailPayLoad);

  // Handle the response
  // } catch (error) {
  //   console.error("getEmailError:", error);
  // }
};

export const getMobileOtp = async (smsPayLoad) => {
  try {
    return axiosInstance.post(smsOtpURL, smsPayLoad);

    // Handle the response
  } catch (error) {
    console.error("getMobileError:", error);
  }
};

export const validateSmsOtp = async (smsOtpPayLoad) => {
  try {
    return axiosInstance.post(validateSmsOtpURL, smsOtpPayLoad);

    //   console.log(validateSmsResponse)
  } catch (error) {
    console.error("smsValidateError:", error);
  }
};

// Call the getToken function to get the access token
export const validateEmailOtp = async (emailOtpPayLoad) => {
  try {
    return axiosInstance.post(validateEmailOtpURL, emailOtpPayLoad);

    //   console.log(validateEmailOtpResponse)
  } catch (error) {
    console.error("emailValidateError:", error);
  }
};

export const signUp = async (signUpPayLoad) => {
  try {
    return axiosInstance.post(signUpURL, signUpPayLoad);

    //   console.log(validateEmailOtpResponse)
  } catch (error) {
    console.error("signUpError:", error);
  }
};
