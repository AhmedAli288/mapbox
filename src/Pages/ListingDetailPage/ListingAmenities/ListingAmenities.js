import React from "react";
import { Grid, Typography } from "@mui/material";
import { PropertyAmenities, BuildingAmenities } from "../../../Constants/ConstantValues";
import ListingAndBuildingFacts from "../../../Components/ListingAndBuildingFacts/ListingAndBuildingFacts";

const text = `Newly constructed, this 8 bedroom and 21 bath modern Spanish Villa spans over 41,000SF of living. A sprawling open floorplan welcomes you upon entry with floor-to-ceiling glass pocket doors for quintessential indoor/outdoor living. 
  
The definition of an entertainer's dream, the lower levels astonish with boundless amenities including basketball court, 36-person theater, 1,200+ bottle wine cellars, recording studio & wellness center with 75' indoor pool, sauna, steam room, salon & fitness studio. 

Resort-like yard features multi-level patios, 75' size infinity`;

const ListingAmenities = () => {
  const reactComponent = () => {
    return (
      <>
        <Grid id="listingAmenitiesSection" item xs={12} sm={5.5} mr={4} mb={2}>
          <Typography variant="DubaiRegular24Bold">Property Amenities</Typography>
        </Grid>
        <Grid item xs={12} sm={5.5} mb={2}>
          <Typography variant="DubaiRegular24Bold">Building Amenities</Typography>
        </Grid>
      </>
    );
  };
  return <ListingAndBuildingFacts rightData={BuildingAmenities} leftData={PropertyAmenities} text={text} reactComponent={reactComponent} />;
};

export default ListingAmenities;
