import React from "react";
import { Grid } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../../Components/ErrorBoundaries/ErrorBoundaries";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import LandingPageLinksArea from "../LandingPage/LandingPageLinksArea/LandingPageLinksArea";
import PageSearchArea from "../LandingPage/LandingPageSearchSection/LandingPageSearchSection";
import { cdnPath } from "../../Constants/StaticPagesConstants";

function FindAnAgent() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <Grid item>
      
        <PageSearchArea heading={"Find your Area Specialist"} searchAreaPositionClass={"LandingPageSearchAreaWrapperCenter"} imgUrl={ `${cdnPath}/assets/FindAnAgent.png`} page={"findAgent"} />
      </Grid>
      <Grid item>
        <LandingPageLinksArea />
      </Grid>
      <Grid>
        <LandingPageSubscribeSection />
      </Grid>
    </ErrorBoundary>
  );
}

export default FindAnAgent;
