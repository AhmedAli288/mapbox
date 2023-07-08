import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import BuildingOtherInfoCarousel from "./BuildingOtherInfoCarousel/BuildingOtherInfoCarousel";
import BuildingOtherDetails from "./BuildingOtherDetails/BuildingOtherDetails";

function BuildingOtherInfo({ listingObject }) {
  const buildingObject = listingObject.buildingData;

  return (
    <>
      <Box id="buildingDetailSection" className="buildingOtherInfo">
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={12} sm={9} md={9}>
            <Typography variant="DubaiRegular24Bold" color="initial">
              {buildingObject.buildingName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography variant="DubaiRegular18" color="initial">{`Reference: ${buildingObject.referenceNo}`}</Typography>
          </Grid>
        </Grid>
        <Typography variant="DubaiRegular18" color="initial">
          {buildingObject.buildingCommunity}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7} md={7}>
            <BuildingOtherInfoCarousel buildingObject={buildingObject} />
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <BuildingOtherDetails buildingObject={buildingObject} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default BuildingOtherInfo;
