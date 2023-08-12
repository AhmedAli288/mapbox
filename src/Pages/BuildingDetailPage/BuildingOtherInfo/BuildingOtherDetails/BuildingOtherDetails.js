import React, { useContext } from "react";
import PriceChargesDetails from "../../../ListingDetailPage/PropertyDetail/PropertyDetailBottom/RatingsOtherDetails/PriceChargesDetails/PriceChargesDetails";
import ServiceCharges from "../../../ListingDetailPage/PropertyDetail/PropertyDetailBottom/RatingsOtherDetails/PropertyInfoDescription/ServiceCharges";
import { convertCurrency,extractMasterDeveloper } from "../../../../utils/utility";
import AppContext from "../../../../context/AppContext";
import { notAvailable } from "../../../../Constants/ConstantValues";
function BuildingOtherDetails({ buildingObject }) {

  const { conversionRates, toCurrency, selectedCurrency } =
    useContext(AppContext);
  const getPropertyTypesString = (buildingObject) => {
    const propertyTypes = [];

    if (buildingObject.penthousefROM || buildingObject.penthouseTo) {
      propertyTypes.push("penthouse");
    }

    if (buildingObject.apartmentsFrom || buildingObject.apartmentsTO) {
      propertyTypes.push("Apartment");
    }

    if (buildingObject.duplexFrom || buildingObject.duplexTo) {
      propertyTypes.push("Duplex");
    }

    if (buildingObject.triplexFrom || buildingObject.triplexTo) {
      propertyTypes.push("Triplex");
    }
    if (buildingObject.townhouseFrom || buildingObject.townhouseTo) {
      propertyTypes.push("Townhouse");
    }

    if (buildingObject.villaFrom || buildingObject.villaTo) {
      propertyTypes.push("Villa");
    }

    return propertyTypes.join(", ");
  };

  function getHeightString(buildingObject) {
    const heightFt = buildingObject.heightFt;
    const heightM = buildingObject.heightM;

    if (heightFt && heightM) {
      return `${heightFt} Ft / ${heightM} M`;
    } else if (heightFt) {
      return `${heightFt} Ft`;
    } else if (heightM) {
      return `${heightM} M`;
    } else {
      return notAvailable;
    }
  }
  const heightString = getHeightString(buildingObject);
  const masterDeveloperEntry = buildingObject.crmAssociates
    ? buildingObject.crmAssociates.find(
        (associate) => associate.crmAssociateType === "Master Developer"
      )
    : null;

    function convertArrayToString(arr) {
      return arr.join(", ");
    }
  const data = [
    {
      label: "Master Community",
      value: buildingObject.subAreaSubCommunity,
      description: null,
    },
    {
      label: "District",
      value: buildingObject.district || buildingObject.subAreaSubCommunity,
      description: null,
    },
    {
      label: "Master Developer",
      value: masterDeveloperEntry
        ? extractMasterDeveloper(masterDeveloperEntry.crmAssociate)
        : notAvailable,
      description: null,
    },
    {
      label: "Units",
      value:
        buildingObject.residentialUnits !== ""
          ? buildingObject.residentialUnits
          : notAvailable,
    },
    {
      label: "Units Types",
      value: getPropertyTypesString(buildingObject),
      description: null,
    },
    {
      label: "Stories",
      value: buildingObject.stories !==''?buildingObject.stories:notAvailable,
      description: null,
    },
    {
      label: "Building Height",
      value: heightString,
      description: null,
    },
    {
      label: "Year Completed",
      value: buildingObject.yearCompleted? buildingObject.yearCompleted:notAvailable,
      description: null,
    },
    {
      label: "Elevators",
      value: buildingObject.elevators,
      description: null,
    },
    {
      label: "Service Elevators",
      value: buildingObject.serviceElevators,
      description: null,
    },
    {
      label: "Parkings",
      value:  buildingObject.numberOfParkingSpaces?buildingObject.numberOfParkingSpaces:buildingObject.parking? buildingObject.parking:buildingObject.publicParking?buildingObject.publicParking:notAvailable,
      description: null,
    },
    {
      label: "Service Level",
      value: buildingObject.serviceLevels?
      convertArrayToString(buildingObject.serviceLevels) :notAvailable,
      description: null,
    },
    {
      label: "Public Parking",
      value: buildingObject.publicParking?buildingObject.publicParking:notAvailable,
      description: null,
    },

    {
      label: "Service Charge / m²",
      value: convertCurrency(
        conversionRates,
        toCurrency,
        selectedCurrency,
        buildingObject.serviceChargeSqM
      ),
      description: {
        description: <ServiceCharges />,
        heading: "Service charges",
      },
    },
    {
      label: "Service Charge / sqft.",
      value: convertCurrency(
        conversionRates,
        toCurrency,
        selectedCurrency,
        buildingObject.serviceChargeSqFt
      ),
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
