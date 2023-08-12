import React from "react";
import { Grid } from "@mui/material";
import AmenitiesLists from "../../Pages/ListingDetailPage/ListingAmenities/AmenitiesLists/AmenitiesLists";
import AmenitiesDescription from "../../Pages/ListingDetailPage/ListingAmenities/AmenitiesDescription/AmenitiesDescription";

function ListingAndBuildingFacts({
  leftData,
  rightData,
  text,
  reactComponentLeft,
  reactComponentRight,
  buildingDividers,
  property,
  reactComponent,
}) {
  return (
    <>
      <Grid
        container
        flexDirection={"row"}
        className=" amenitiesParentContainer "
        mt={2}
        justifyContent={"space-between"}
        pt={5}
        pb={4}
      >
        <Grid item xs={12} sm={5}>
          {text ? <AmenitiesDescription text={text} /> : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <AmenitiesLists
            leftData={leftData}
            rightData={rightData}
            reactComponentLeft={reactComponentLeft}
            reactComponentRight={reactComponentRight}
            buildingDividers={buildingDividers}
            property={property}
            reactComponent={reactComponent}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ListingAndBuildingFacts;
