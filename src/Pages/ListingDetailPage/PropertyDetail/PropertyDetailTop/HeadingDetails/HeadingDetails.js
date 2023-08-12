import React from "react";
import { Box, Typography, Chip } from "@mui/material";

const HeadingDetails = ({ property }) => {
  // console.log('am testing',property);
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <Typography variant="DubaiRegular14">
          Reference: {property?.referenceNumber}
        </Typography>
        <Typography variant="DubaiRegular14" mx={2}>
          |
        </Typography>
        <Typography variant="DubaiRegular14">
          Trakheesi Permit: {property?.trakheesiPermitNumber}
        </Typography>
      </Box>
      <Typography variant="DubaiRegular32Bold">
        {property?.listingTitle}
      </Typography>
      <Box display="flex">
        <Chip className="propertyDetailTag success" label={"Verified"} />
        {!property.maintenanceFee === "" ||!property.maintenanceFee? null :
        <Chip className="propertyDetailTag" label={"No maintenance fee"} />
  }
        {!property.propertyUsage === ""? null : 
          <Chip className="propertyDetailTag" label={property.propertyUsage} />
        }
      </Box>
    </Box>
  );
};

export default HeadingDetails;
