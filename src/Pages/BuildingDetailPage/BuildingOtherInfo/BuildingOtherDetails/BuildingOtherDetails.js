import React from "react";
import PriceChargesDetails from "../../../ListingDetailPage/PropertyDetail/PropertyDetailBottom/RatingsOtherDetails/PriceChargesDetails/PriceChargesDetails";
import ServiceCharges from "../../../ListingDetailPage/PropertyDetail/PropertyDetailBottom/RatingsOtherDetails/PropertyInfoDescription/ServiceCharges";

function BuildingOtherDetails({ buildingObject }) {
  const data = [
    {
      label: "Master Community",
      value: buildingObject.masterCommunity,
      description: null,
    },
    { label: "DIstrict", value: buildingObject.district, description: null },
    {
      label: "Master Developer",
      value: buildingObject.buildingMasterDeveloper,
      description: null,
    },
    { label: "Units", value: buildingObject.buildingUnits, description: null },
    {
      label: "Units Types",
      value: buildingObject.buildingUnitsType,
      description: null,
    },
    {
      label: "Stories",
      value: buildingObject.buildingStories,
      description: null,
    },
    {
      label: "Building Height",
      value: buildingObject.buildingHeight,
      description: null,
    },
    {
      label: "Year Completed",
      value: buildingObject.buildingYearCompleted,
      description: null,
    },
    {
      label: "Elevators",
      value: buildingObject.buildingElevators,
      description: null,
    },
    {
      label: "Service Elevators",
      value: buildingObject.buildingServiceElevators,
      description: null,
    },
    {
      label: "Parkings",
      value: buildingObject.buildingParking,
      description: null,
    },
    {
      label: "Service Level",
      value: buildingObject.buildingServiceElevators,
      description: null,
    },
    {
      label: "Public Parking",
      value: buildingObject.buildingPublicParking,
      description: null,
    },

    {
      label: "Service Charge / m²",
      value: buildingObject.buildingServiceChargeSqM,
      description: {
        description: <ServiceCharges />,
        heading: "Service charges",
      },
    },
    {
      label: "Service Charge / sqft.",
      value: buildingObject.buildingServiceChargeSqft,
      description: {
        description: <ServiceCharges />,
        heading: "Service charges",
      },
    },
  ];
  return (
    <>
      <PriceChargesDetails data={data} />
    </>
  );
}

export default BuildingOtherDetails;
