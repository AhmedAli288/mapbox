import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { Box, Container, Typography } from "@mui/material";
import "./css/map.css";
import {
	generateGeoJSON,
	// Levels
	countryLevel,
	stateLevel,
	areaLevel,
} from "./utils/mapUtils";
import {
	HomeMarkerIcon,
	PriceMarkerOneIcon,
	PriceMarkerTwoIcon,
	mapAllListingsPayload,
} from "../../Constants/ConstantValues";
import { getListings } from "../../network/apiServices";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN;

const Map = () => {
	const [listing, setListing] = useState([]);
	const [map, setMap] = useState(null);
	const mapContainerRef = useRef(null);

	const fetchData = async () => {
		try {
			const res = await getListings(mapAllListingsPayload);
			console.log("got res");
			setListing(res.data.listings);
		} catch (err) {
			console.log("got error: ", err);
			setListing([]);
		}
	};

	useEffect(() => {
		const fetchDataWithRetry = async () => {
			try {
				await fetchData();
			} catch (error) {
				// Handle error after retry
				console.log("Error after retry:", error);
			}
		};

		fetchDataWithRetry();
	}, []);

	useEffect(() => {
		const mapInstance = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: "mapbox://styles/valcom-properties/cli4gd20x00mu01pga0ku7j3k",
			center: [54.509965507462056, 24.161223056689067], //54.509965507462056, 24.161223056689067
			minZoom: 6,
			zoom: 6,
		});

		mapInstance.on("load", () => {
			mapInstance.loadImage(HomeMarkerIcon, function (error, image) {
				if (error) throw error;
				mapInstance.addImage("home-marker-icon", image);
			});
			mapInstance.loadImage(PriceMarkerOneIcon, function (error, image) {
				if (error) throw error;
				mapInstance.addImage("marker-with-price-small", image);
			});
			mapInstance.loadImage(PriceMarkerTwoIcon, function (error, image) {
				if (error) throw error;
				mapInstance.addImage("marker-with-price-big", image);
			});
			setMap(mapInstance);
		});

		return () => {
			mapInstance.remove();
		};
	}, []);

	useEffect(() => {
		if (map && listing.length > 0) {
			console.log("listing: ", listing);
			const geoJSON = generateGeoJSON(listing);

			areaLevel(mapboxgl, map, geoJSON, 10, 15.99);
			stateLevel(map, geoJSON, 9.0, 10, 100);
			countryLevel(map, geoJSON, 6, 8.99, 160);
		}
	}, [map, listing]);

	return (
		<Container disableGutters={true} className="mapAreaContainer">
			<Box>
				<Typography variant="GothamBlack26">Our Map</Typography>
			</Box>
			<Typography variant="DubaiRegular20">
				Explore the city's best properties
			</Typography>
			<div id="map" className="map-container" ref={mapContainerRef} />
		</Container>
	);
};

export default Map;
