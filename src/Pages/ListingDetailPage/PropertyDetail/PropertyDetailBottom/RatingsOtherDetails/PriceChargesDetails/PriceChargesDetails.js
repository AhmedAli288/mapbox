import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import { InfoIcon } from "../../../../../../Assets/SVG/Common/CommonSvgs";
import InfoIconDescription from "../../../../../../Components/InfoIconDescription/InfoIconDescription";

const PriceChargesDetails = ({ data }) => {
  const renderGridItem = (label, value, description) => (
    <>
      {description ? (
        <Grid item xs={6} sm={6} md={6} className="serviceChargeWithIcon">
          <Typography variant="DubaiRegular18">{label}</Typography>

          <Box className="serviceChargeInfoIcon">
            <div className="tagWithInfoIconContainer">
              <InfoIcon />
              <div className="tagWithInfoIconTextBox">
                <InfoIconDescription
                  heading={description.heading}
                  headingColor={"#000"}
                  description={description.description}
                />
              </div>
            </div>
          </Box>
        </Grid>
      ) : (
        <Grid item xs={6} sm={6} md={6}>
          <Typography variant="DubaiRegular18">{label}</Typography>
        </Grid>
      )}
      <Grid item xs={6} sm={6} md={6}>
        <Typography variant="DubaiRegular18">{value}</Typography>
      </Grid>
    </>
  );

  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Divider orientation="horizontal" flexItem />
          <Grid container>
            {renderGridItem(item.label, item.value, item.description)}
          </Grid>
        </React.Fragment>
      ))}
      <Divider orientation="horizontal" flexItem />
    </>
  );
};

export default PriceChargesDetails;
