import React from "react";
import { Box, Typography, Chip } from "@mui/material";

const HeadingDetails = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <Typography variant="DubaiRegular14">Reference: BR-625419</Typography>
        <Typography variant="DubaiRegular14" mx={2}>
          |
        </Typography>
        <Typography variant="DubaiRegular14">
          Trakheesi Permit: 1234567891
        </Typography>
      </Box>
      <Typography variant="DubaiRegular32Bold">
        Amazing View | Available | Beach Access | Balcony
      </Typography>
      <Box display="flex">
        <Chip className="propertyDetailTag success" label={"Verified"} />
        <Chip className="propertyDetailTag" label={"No maintenance fee"} />
        <Chip className="propertyDetailTag" label={"Vacant immediately"} />
      </Box>
    </Box>
  );
};

export default HeadingDetails;
