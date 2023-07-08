import React from "react";
import { Box } from "@mui/material";
import Map from "../../Components/Map/Map";
import HomePageSearch from "../LandingPage/LandingPageSearchSection/LandingPageSearchSection";
import LandingPageExclusiveSection from "./LandingPageExclusiveSection/LandingPageExclusiveSection";
import LandingPageNewDevelopmentSection from "./LandingPageNewDevelopmentSection/LandingPageNewDevelopmentSection";
import ErrorBoundaryFallBack from "../../Components/ErrorBoundaries/ErrorBoundaries";
import { ErrorBoundary } from "react-error-boundary";
import LandingPageInternationalPropertySection from "./LandingPageInternationalPropertySection/LandingPageInternationalPropertySection";
import LandingPageFindArea from "./LandingPageFindArea/LandingPageFindArea";
import LandingPageLinksArea from "./LandingPageLinksArea/LandingPageLinksArea";
import LandingPageSubscribeSection from "./LandingPageSubscribeSection/LandingPageSubscribeSection";

function LandingPageBody() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <Box>
        <HomePageSearch />

        <LandingPageExclusiveSection />
        <Map />
        <LandingPageNewDevelopmentSection />
        <LandingPageInternationalPropertySection />
        <LandingPageFindArea />
        <LandingPageLinksArea />
        <LandingPageSubscribeSection />
      </Box>
    </ErrorBoundary>
  );
}

export default LandingPageBody;
