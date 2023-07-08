import React from "react";
import { Grid } from "@mui/material";
import PricingDetails from "./PricingDetails/PricingDetails";
import HeadingDetails from "./HeadingDetails/HeadingDetails";

const PropertyDetailTop = () => {
  return (
    <Grid id="propertyDetailSection" container>
      <Grid item xs={12} sm={7} md={7}>
        <HeadingDetails />
      </Grid>
      <Grid item xs={12} sm={5} md={5}>
        <PricingDetails />
      </Grid>
    </Grid>
  );
};

export default PropertyDetailTop;
