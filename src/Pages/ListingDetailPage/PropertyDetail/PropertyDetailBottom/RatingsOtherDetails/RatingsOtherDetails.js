import React from "react";
import BedBathArea from "../../../../../Components/BedBathArea/BedBathArea";
import PriceChargesDetails from "./PriceChargesDetails/PriceChargesDetails";
import RatingsAAAndStar from "../../../../../Components/RatingsAAAndStar/RatingsAAAndStar";
import ServiceCharges from "../RatingsOtherDetails/PropertyInfoDescription/ServiceCharges";

const RatingsOtherDetails = () => {
  const data = [
    { label: "AED / m²", value: "75,215", description: null },
    { label: "AED / Sq. Ft.", value: "6,988", description: null },
    { label: "Service Charge / m²", value: "AED 190", description: { description: <ServiceCharges />, heading: "Service charges" } },
    { label: "Service Charge / sqft.", value: "AED 19", description: { description: <ServiceCharges />, heading: "Service charges" } },
    { label: "Property Type", value: "Villa", description: null },
    { label: "Digital Currency accepted", value: "Yes", description: null },
    { label: "Days on Market", value: 23, description: null },
  ];
  return (
    <>
      <RatingsAAAndStar />
      <BedBathArea beds={"11"} baths={"14"} meters={"2,522"} sqfts={"27,150"} />
      <PriceChargesDetails data={data} />
    </>
  );
};

export default RatingsOtherDetails;
