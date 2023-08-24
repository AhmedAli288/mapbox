import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const AmenitiesDescription = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleText = expanded ? text : text?.slice(0, 550);
  const shouldAddDots = !expanded && text.length > 550;
  const handleClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
  }, [expanded]);
  return (
    <Box className="amenitiesDescripBox">
      <pre className="amenitiesDescripText">
        {visibleText}
        {shouldAddDots && " ..."}
      </pre>
      {text.length <= 550 ? null : (
        <Box className="amenitiesListViewBtn" onClick={handleClick}>
          <Typography variant="DubaiRegular18">
            {expanded ? "Read Less" : "Continue Reading"}
          </Typography>
          {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Box>
      )}
    </Box>
  );
};

export default AmenitiesDescription;
