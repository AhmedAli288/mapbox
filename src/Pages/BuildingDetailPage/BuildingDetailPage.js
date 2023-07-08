import React from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import ListingDetailPageHeader from "../ListingDetailPage/ListingDetailPageHeader/ListingDetailPageHeader";
import BuildingOtherInfo from "./BuildingOtherInfo/BuildingOtherInfo";
import { exclusives } from "../../Constants/ConstantValues";
import {
  virtualTourData,
  locationScoringFields,
  otherAgentHeadings,
  ratingsReviewsData,
} from "../../Constants/ConstantValues";
import { getObjectById } from "../../utils/utility";
import BuildingFacts from "./BuildingFacts/BuildingFacts";
import BuildingAmenities from "./BuildingAmenities/BuildingAmenities";
import VirtualTourComponent from "../../Components/VirtualTour/VirtualTourComponent";
import LocationScoring from "../../Components/LocationScoring/LocationScoring";
import BuildingExPloreNeighborhood from "./BuildingExPloreNeighborhood/BuildingExPloreNeighborhood";
import BuildingAvailableUnits from "./BuildingAvailableUnits/BuildingAvailableUnits";
import BuildingAroundTheBlock from "./BuildingAroundTheBlock/BuildingAroundTheBlock";
import OtherAgents from "../../Components/OtherAgents/OtherAgents";
import SimilarBuildings from "./SimilarBuildings/SimilarBuildings";
import RatingsReviewsSection from "./RatingsReviewsSection/RatingsReviewsSection";
import SearchingMap from "../../Components/SearchingMap/SearchMap";

function BuildingDetailPage() {
  const location = useLocation();
  const listingId = location.state;
  const listingObject = getObjectById(exclusives, listingId);

  return (
    <Box className="listingDetailWrapper">
      <ListingDetailPageHeader listingId={listingId} page={"buildingDetails"} />
      <Box className="buildingDetailBodyWrapper">
        <BuildingOtherInfo listingObject={listingObject} />
        <BuildingFacts listingObject={listingObject} />
        <BuildingAmenities listingObject={listingObject} />
        <VirtualTourComponent
          title={virtualTourData.title}
          videoUrl={virtualTourData.videoUrl}
        />
        <SearchingMap />
        <LocationScoring fields={locationScoringFields} />
        <SimilarBuildings />
        <OtherAgents title={otherAgentHeadings.buildingExpert} />
        <BuildingExPloreNeighborhood listingObject={listingObject} />
        <BuildingAvailableUnits listingObject={listingObject} />
        <BuildingAroundTheBlock listingObject={listingObject} />
        <RatingsReviewsSection generalData={ratingsReviewsData} />
      </Box>
    </Box>
  );
}

export default BuildingDetailPage;
