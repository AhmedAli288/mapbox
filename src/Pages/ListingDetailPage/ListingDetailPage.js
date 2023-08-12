import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ListingDetailPageHeader from "./ListingDetailPageHeader/ListingDetailPageHeader";
import SimilarHomesSection from "./SimilarHomesSection/SimilarHomesSection";
import PropertyDetails from "./PropertyDetail/PropertyDetails";
import ListingAmenities from "./ListingAmenities/ListingAmenities";
import AgentSection from "./AgentSection/AgentSection";
import BuildingSection from "./BuildingSection/BuildingSection";
import Neighborhood from "./Neighborhood/Neighborhood";
// import LocationScoring from "../../Components/LocationScoring/LocationScoring";
// import OtherAgents from "../../Components/OtherAgents/OtherAgents";
import VirtualTourComponent from "../../Components/VirtualTour/VirtualTourComponent";
// import { locationScoringFields } from "../../Constants/ConstantValues";
// import MortgageSection from "./MortgageSection/MortgageSection";
// import NearbySchools from "./NearbySchools/NearbySchools";
import SearchMap from "../../Components/SearchingMap/SearchMap";
import AppContext from "../../context/AppContext";
import { getObjectById, toCarouselArray } from "../../utils/utility";
import { getBuildingDetails, getListings } from "../../network/apiServices";
import LoadingSkeleton from "../../Components/LoadingSkeleton/LoadingSkeleton";
import LandingPageLinksArea from "../LandingPage/LandingPageLinksArea/LandingPageLinksArea";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";

function ListingDetailPage() {
  const [buildingObject, setBuildingObject] = useState();
  const listingId = useParams();
  const { setBuildingObjectContext, selectedCountry, listings, setListings } =
    useContext(AppContext);
  const _ = require("lodash");
  const property = getObjectById(listings, listingId.id, "referenceNumber");

  useEffect(() => {
    async function fetchAndSetbuilding() {
      try {
        if (property) {
          const buildingReferenceNumber = property.referenceNumberBuilding;
          const building = await getBuildingDetails({
            //sometimes building referenceNumberBuilding is null. handle this.
            buildingRefNumber: buildingReferenceNumber,
          });

          setBuildingObject(building.data);
          setBuildingObjectContext(building.data);
        }
      } catch (error) {}
    }

    fetchAndSetbuilding();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listings, property]);

  useEffect(() => {
    if (!listings || _.isEqual(listings.length, 0)) {
      async function fetchAndSetListings() {
        try {
          const listingsArray = await getListings({
            countryName: selectedCountry,
            // portal: "Propertyfinder",
          });
          let images = toCarouselArray(
            "title",
            listingsArray.data.listings,
            "listingImages"
          );
          setListings(images);
        } catch (error) {
          console.error("Error Refetching All listings:", error);
        }
      }
      fetchAndSetListings();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return property ? (
    <Box className="listingDetailWrapper ">
      <ListingDetailPageHeader page={"listingDetails"} property={property} />
      <Box className="ListingDetailBody">
        <PropertyDetails property={property} />
        <ListingAmenities property={property} buildingObject={buildingObject} />

        {/* <AgentSection agentDetails={property.owner}/> */}

        <AgentSection
          agentDetails={property.owner}
          propertyDetails={property}
        />
        {property.video ? (
          <VirtualTourComponent
            title={property?.subAreaSubCommunity}
            videoUrl={property.video}
          />
        ) : null}

        <SearchMap property={property} />
        {/* <LocationScoring fields={locationScoringFields} /> */}
        {/* <MortgageSection property={property} /> */}
        {/* {buildingObject?.message?
        null
        : */}
        {buildingObject && <BuildingSection buildingObject={buildingObject} />}

        {/* <OtherAgents title={otherAgentHeadings.listingAgents} /> */}
        {/* <NearbySchools /> */}
        <SimilarHomesSection property={property} rowsPerPage={9} />
        <Neighborhood property={property} />
        <LandingPageLinksArea />
        <LandingPageSubscribeSection />
      </Box>
    </Box>
  ) : (
    <LoadingSkeleton />
  );
}

export default ListingDetailPage;
