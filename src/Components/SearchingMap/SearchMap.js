import React, { useEffect, useRef, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import polyline from "polyline";
import SearchAndRecents from "./SearchAndRecents";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const SearchMap = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const directionsRef = useRef(null);
  const layerIdRef = useRef(null);
  const sourceIdRef = useRef(null);
  const originMarkerRef = useRef(null);
  const [drivingDuration, setDrivingDuration] = useState(null);
  const [walkingDuration, setWalkingDuration] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSetDestination = (destination) => {
    const origin = [55.32759217693615, 25.27477288473898];

    // Check if the address already exists in searchResults
    const isAddressExists = searchResults.some(
      (result) => result.address === destination
    );

    if (!isAddressExists) {
      directionsRef.current.setOrigin(origin);
      directionsRef.current.setDestination(destination);
      const newSearchResult = {
        address: destination,
        walking: null,
        driving: null,
      };

      setSearchResults((prevSearchResults) => {
        const updatedSearchResults = [...prevSearchResults, newSearchResult];
        if (updatedSearchResults.length > 3) {
          updatedSearchResults.shift(); // Remove the first (oldest) search result
        }
        return updatedSearchResults;
      });
    }
  };

  const getDurationByProfile = (profile, origin, destination) => {
    // Construct the API request URL
    const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${origin[0]}%2C${origin[1]}%3B${destination[1]}%2C${destination[0]}.json?geometries=polyline&steps=true&overview=full&language=en&access_token=${mapboxgl.accessToken}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Retrieve the duration based on the selected profile
        const duration = data.routes[0].duration;
        if (profile === "driving") {
          setDrivingDuration(duration);
        } else {
          setWalkingDuration(duration);
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const lastIndex = searchResults.length - 1;

    if (lastIndex >= 0) {
      const updatedSearchResults = [...searchResults];
      const lastSearchResult = updatedSearchResults[lastIndex];
      lastSearchResult.walking = walkingDuration;
      lastSearchResult.driving = drivingDuration;
      setSearchResults(updatedSearchResults);
    }
  }, [walkingDuration, drivingDuration]);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [55.32759217693615, 25.27477288473898],
      zoom: 12,
    });

    directionsRef.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      controls: {
        inputs: false,
        instructions: false,
      },
      //	to enable/disable dragging comment/uncomment the below line
      interactive: false,
    });

    mapRef.current.addControl(directionsRef.current, "top-right");

    directionsRef.current.on("route", ({ route }) => {
      const existingLayerId = layerIdRef.current;
      const existingSourceId = sourceIdRef.current;

      const origin = [55.32759217693615, 25.27477288473898];
      const polylineString = route[0].geometry;
      const coordinates = polyline.decode(polylineString);

      let coords = coordinates.at(-1);
      getDurationByProfile("walking", origin, coords);
      getDurationByProfile("driving", origin, coords);

      if (existingLayerId && mapRef.current.getLayer(existingLayerId)) {
        mapRef.current.removeLayer(existingLayerId);
      }

      if (existingSourceId && mapRef.current.getSource(existingSourceId)) {
        mapRef.current.removeSource(existingSourceId);
      }

      const newLayerId = `directions-layer-${Date.now()}`;
      const newSourceId = `directions-source-${Date.now()}`;

      // mapRef.current.addLayer({
      //   id: newLayerId,
      //   type: "line",
      //   source: {
      //     type: "geojson",
      //     data: {
      //       type: "Feature",
      //       properties: {},
      //       geometry: {
      //         type: "LineString",
      //         coordinates: route[0].geometry.coordinates,
      //       },
      //     },
      //   },
      //   layout: {
      //     "line-join": "round",
      //     "line-cap": "round",
      //   },
      //   paint: {
      //     "line-color": "#888",
      //     "line-width": 8,
      //   },
      // });

      layerIdRef.current = newLayerId;
      sourceIdRef.current = newSourceId;
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (originMarkerRef.current) {
      originMarkerRef.current.remove();
    }

    if (mapRef.current && directionsRef.current) {
      originMarkerRef.current = new mapboxgl.Marker({
        element: createCustomMarkerElement("A"),
      })
        .setLngLat([55.32759217693615, 25.27477288473898])
        .addTo(mapRef.current);
    }
  }, []);

  const createCustomMarkerElement = (label) => {
    const marker = document.createElement("div");
    marker.className = "custom-marker";
    marker.textContent = label;
    return marker;
  };

  return (
    <Grid container spacing={2} my={5}>
      <Grid item xs={12} md={7}>
        <Box className="mapTransitHeading">
          <Typography
            className="contactAgentSectionHeading"
            variant="GothamBlack24"
          >
            Map and Transit
          </Typography>
        </Box>
        <div className="mapContainerMain">
          <div id="map" ref={mapContainerRef} />
        </div>
      </Grid>

      <Grid item xs={12} md={5}>
        <SearchAndRecents
          handleSetDestination={handleSetDestination}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      </Grid>
    </Grid>
  );
};

export default SearchMap;
