import React from "react";
import { Grid, Typography } from "@mui/material";
import ListingAndBuildingFacts from "../../../Components/ListingAndBuildingFacts/ListingAndBuildingFacts";
import RatingsAAAndStar from "../../../Components/RatingsAAAndStar/RatingsAAAndStar";
import ServiceCharges from "../../ListingDetailPage/PropertyDetail/PropertyDetailBottom/RatingsOtherDetails/PropertyInfoDescription/ServiceCharges";
import { notAvailable } from "../../../Constants/ConstantValues";
import { extractMasterDeveloper } from "../../../utils/utility";

function BuildingFacts({ buildingObject }) {
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
  const developerEntry = buildingObject.crmAssociates ? buildingObject.crmAssociates.find((associate) => associate.crmAssociateType === "Developer") : null;

  const contractorEntry = buildingObject.crmAssociates ? buildingObject.crmAssociates.find((associate) => associate.crmAssociateType === "Contractor") : null;
  const architectEntry = buildingObject.crmAssociates ? buildingObject.crmAssociates.find((associate) => associate.crmAssociateType === "Architect") : null;
  const buildingFactsValues = [
    buildingObject.buildingType,
    buildingObject.zoning,
    buildingObject.buildingOwner || buildingObject.ownerShipType||notAvailable,
    architectEntry ? extractMasterDeveloper(architectEntry.crmAssociate) : notAvailable,
    developerEntry ? extractMasterDeveloper(developerEntry.crmAssociate) : notAvailable,
    contractorEntry ? extractMasterDeveloper(contractorEntry.crmAssociate) : notAvailable,
    buildingObject.yearLaunched? buildingObject.yearLaunched:notAvailable,
    buildingObject.yearCompleted?buildingObject.yearCompleted:notAvailable,
    buildingObject.petPolicy,
    buildingObject.serviceLevels,
    buildingObject.fireFightingSystem,
  ];

  const ratingComponent = () => {
    return (
      <>
        <Typography variant="DubaiRegular24Bold">Building Facts</Typography>
        <Grid item xs={12} sm={12} mr={12} mt={2} style={{ flexDirection: "row" }}>
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
        text={buildingObject.description}
        reactComponent={ratingComponent}
        buildingDividers={true}
        // isTable{}
      />
    </>
  );
}

export default BuildingFacts;
