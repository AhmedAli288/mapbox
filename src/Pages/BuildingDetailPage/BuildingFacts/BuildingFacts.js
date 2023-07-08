import React from "react";
import { Grid, Typography } from "@mui/material";
import ListingAndBuildingFacts from "../../../Components/ListingAndBuildingFacts/ListingAndBuildingFacts";
import RatingsAAAndStar from "../../../Components/RatingsAAAndStar/RatingsAAAndStar";
import ServiceCharges from "../../ListingDetailPage/PropertyDetail/PropertyDetailBottom/RatingsOtherDetails/PropertyInfoDescription/ServiceCharges";

function BuildingFacts({ listingObject }) {
  const buildingObject = listingObject.buildingData;

  const buildingFactsLabels = [
    [
      "Building Type",
      buildingObject.buildingType,
      <ServiceCharges />,
      "Service charges",
      {
        isTable: true,
        isObject: false,
      },
    ],
    [
      "Zoning",
      buildingObject.buildingZoning,
      <ServiceCharges />,
      "Zoning",
      {
        isTable: false,
        isObject: true,
      },
    ],

    "Building Owner",
    "Architect",
    "Developer",
    "Contractor",
    "Year Launched",
    "Year Completed",
    "Pet Policy",
    "Hour Security 24",
    "Fire fighting System",
  ];

  const buildingFactsValues = [
    buildingObject.buildingType,
    buildingObject.buildingZoning,
    buildingObject.buildingOwner,
    buildingObject.Architect,
    buildingObject.developer,
    buildingObject.contractor,
    buildingObject.yearLaunched,
    buildingObject.buildingYearCompleted,
    buildingObject.petPolicy,
    buildingObject.hourSecurity,
    buildingObject.fireFightSystem,
  ];

  const ratingComponent = () => {
    return (
      <>
        <Typography variant="DubaiRegular24Bold">Building Facts</Typography>
        <Grid
          item
          xs={12}
          sm={12}
          mr={12}
          mt={2}
          style={{ flexDirection: "row" }}
        >
          <RatingsAAAndStar darkStars={false} />
        </Grid>
      </>
    );
  };

  return (
    <>
      {/* <div>am here</div> */}
      <ListingAndBuildingFacts
        rightData={buildingFactsValues}
        leftData={buildingFactsLabels}
        text={buildingObject.buildingDescription}
        reactComponent={ratingComponent}
        buildingDividers={true}
        // isTable{}
      />
    </>
  );
}

export default BuildingFacts;
