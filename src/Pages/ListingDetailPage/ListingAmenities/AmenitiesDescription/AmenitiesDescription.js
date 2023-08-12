import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AmenitiesDescription = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleText = expanded ? text : text?.slice(0, 360);
  const shouldAddDots = !expanded && text.length > 360;
  const handleClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {}, [expanded]);
  return (
    <Box className="amenitiesDescripBox">
      <pre className="amenitiesDescripText">
        {visibleText}
        {shouldAddDots && " ..."}
      </pre>
      {expanded || text.length <= 360 ? null : (
        <Box className="amenitiesListViewBtn" onClick={handleClick}>
          <Typography variant="DubaiRegular18">Continue Reading</Typography>
          <KeyboardArrowDownIcon />
        </Box>
      )}
    </Box>
  );
};

export default AmenitiesDescription;
