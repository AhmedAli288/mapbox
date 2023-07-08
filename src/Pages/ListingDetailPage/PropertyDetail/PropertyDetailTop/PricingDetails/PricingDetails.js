import React from "react";
import { Box, Typography } from "@mui/material";
import { BitcoinIcon } from "../../../../../Assets/SVG/Common/CommonSvgs";
import InfoIconDescription from "../../../../../Components/InfoIconDescription/InfoIconDescription";

const PricingDetails = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="DubaiRegular24Bold">
        Milano Boutique Residences
      </Typography>
      <Typography variant="DubaiRegular18">Jumeirah Village Circle</Typography>
      <Typography className="lineThrough lightGrey" variant="DubaiRegular18">
        AED 2,250,000
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="DubaiRegular24Bold">AED 2,200,000</Typography>

        <Box ml={2} mt={0.3} className="bitcoinWithInfo">
          <div className="bitcoinWithInfoContainer">
            <BitcoinIcon />
            <div className="bitcoinWithInfoTextBox">
              <InfoIconDescription
                heading={"Digital Currency"}
                headingColor={"#808080"}
                description={
                  <Typography variant="DubaiRegular16">Accepted</Typography>
                }
              />
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingDetails;
