import React from "react";
import { Grid } from "@mui/material";
import RatingsOtherDetails from "./RatingsOtherDetails/RatingsOtherDetails";
import DetailedCarousel from "./DetailedCarousel/DetailedCarousel";

const PropertyDetailBottom = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={7} md={7} pr={2}>
        <DetailedCarousel />
      </Grid>
      <Grid item xs={12} sm={5} md={5}>
        <RatingsOtherDetails />
      </Grid>
    </Grid>
  );
};

export default PropertyDetailBottom;
