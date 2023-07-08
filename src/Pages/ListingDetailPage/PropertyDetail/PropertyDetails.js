import React from "react";
import PropertyDetailTop from "./PropertyDetailTop/PropertyDetailTop";
import PropertyDetailBottom from "./PropertyDetailBottom/PropertyDetailBottom";
import { Box } from "@mui/material";

const PropertyDetails = () => {
  return (
    <Box>
      <PropertyDetailTop />
      <div className="propertyDetailSpacer"></div>
      <PropertyDetailBottom />
    </Box>
  );
};

export default PropertyDetails;
