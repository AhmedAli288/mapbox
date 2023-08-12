import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { BitcoinIcon } from "../../../../../Assets/SVG/Common/CommonSvgs";
import InfoIconDescription from "../../../../../Components/InfoIconDescription/InfoIconDescription";
import AppContext from "../../../../../context/AppContext";
import { convertCurrency } from "../../../../../utils/utility";

const PricingDetails = ({ property }) => {
  const { conversionRates, toCurrency, selectedCurrency } =
    useContext(AppContext);

  const _ = require("lodash");
  const price =
    property?.rentalPrice && !_.isEqual(property?.rentalPrice.trim(), "")
      ? property?.rentalPrice
      : property?.purchasePrice &&
        !_.isEqual(property?.purchasePrice.trim(), "")
      ? property?.purchasePrice
      : "0";

  const buildingName =
    property?.building && !_.isEqual(property?.building.trim(), "")
      ? property?.building
      : property?.subAreaSubCommunity &&
        !_.isEqual(property?.subAreaSubCommunity.trim(), "")
      ? property?.subAreaSubCommunity
      : property?.subAreaSubCommunity &&
        !_.isEqual(property?.subAreaSubCommunity.trim(), "")
      ? property?.subAreaSubCommunity
      : property?.subAreaSubCommunity;

  const convertedAmount = convertCurrency(
    conversionRates,
    toCurrency,
    selectedCurrency,
    price
  );
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="DubaiRegular24Bold">{buildingName}</Typography>
      <Typography variant="DubaiRegular18">{property?.area}</Typography>
      <Typography className="lineThrough lightGrey" variant="DubaiRegular18">
        {property?.discount ? property?.discount : null}
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="DubaiRegular24Bold">{convertedAmount}</Typography>

        <Box ml={2} mt={0.3} className="bitcoinWithInfo">
          <div className="bitcoinWithInfoContainer">
            <BitcoinIcon />
            <div className="bitcoinWithInfoTextBox">
              <InfoIconDescription
                heading={"Digital Currency"}
                headingColor={"#808080"}
                description={<Typography variant="AlwynNewRoundedRegular14">{property?.digitalCurrencyAccepted === "Yes" ? "Accepted" : "Not Accepted"}</Typography>}
              />
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingDetails;
