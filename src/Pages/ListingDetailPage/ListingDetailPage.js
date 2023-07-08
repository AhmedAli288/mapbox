import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ListingDetailPageHeader from "./ListingDetailPageHeader/ListingDetailPageHeader";
import SimilarHomesSection from "./SimilarHomesSection/SimilarHomesSection";
import PropertyDetails from "./PropertyDetail/PropertyDetails";
import ListingAmenities from "./ListingAmenities/ListingAmenities";
import AgentSection from "./AgentSection/AgentSection";
import BuildingSection from "./BuildingSection/BuildingSection";
import Neighborhood from "./Neighborhood/Neighborhood";
import LocationScoring from "../../Components/LocationScoring/LocationScoring";
import OtherAgents from "../../Components/OtherAgents/OtherAgents";
import VirtualTourComponent from "../../Components/VirtualTour/VirtualTourComponent";
import {
  virtualTourData,
  locationScoringFields,
  otherAgentHeadings,
} from "../../Constants/ConstantValues";
import MortgageSection from "./MortgageSection/MortgageSection";
import NearbySchools from "./NearbySchools/NearbySchools";
import SearchMap from "../../Components/SearchingMap/SearchMap";

function ListingDetailPage() {
  const listingId = useParams();
  return (
    <Box className="listingDetailWrapper">
      <ListingDetailPageHeader page={"listingDetails"} />
      <Box className="ListingDetailBody">
        <PropertyDetails />
        <ListingAmenities />

        <AgentSection />
        <VirtualTourComponent
          title={virtualTourData.title}
          videoUrl={virtualTourData.videoUrl}
        />
        <SearchMap />
        <LocationScoring fields={locationScoringFields} />
        <MortgageSection />
        <BuildingSection listingId={listingId} />
        <OtherAgents title={otherAgentHeadings.listingAgents} />
        <NearbySchools />
        <SimilarHomesSection listingId={listingId} />
        <Neighborhood listingId={listingId} />
      </Box>
    </Box>
  );
}

export default ListingDetailPage;
