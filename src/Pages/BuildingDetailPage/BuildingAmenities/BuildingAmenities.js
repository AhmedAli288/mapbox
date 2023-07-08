import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

function BuildingAmenities({ listingObject }) {
  const buildingObject = listingObject.buildingData;

  return (
    <Box id="buildingAmenitiesSection" className="buildingAmenitiesWrapper">
      <Typography variant="DubaiRegular24Bold">Building Amenities</Typography>
      <Grid container spacing={1} my={2}>
        {buildingObject.BuildingAmenities.map((amenity, key) => (
          <React.Fragment key={key}>
            <Grid item xs={4}>
              <Typography variant="DubaiRegular18">{amenity} </Typography>
            </Grid>

            {(key + 1) % 3 === 0 && key !== buildingObject.BuildingAmenities.length && <Divider orientation="horizontal" flexItem className="buildingAmenitiesDivider" />}
          </React.Fragment>
        ))}
        {/* <Divider flexItem orientation="horizontal"/>   */}
      </Grid>
    </Box>
  );
}

export default BuildingAmenities;
