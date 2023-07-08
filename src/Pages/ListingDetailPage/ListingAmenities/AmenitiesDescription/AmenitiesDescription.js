import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AmenitiesDescription = ({text}) => {
 

  return (
    <Box className="amenitiesDescripBox">
      <pre className="amenitiesDescripText">{text}</pre>
      <Box className="amenitiesListViewBtn">
        <Typography variant="DubaiRegular18">Continue Reading</Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
};

export default AmenitiesDescription;
