import React from "react";
import { Grid } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";

import ErrorBoundaryFallBack from "../../Components/ErrorBoundaries/ErrorBoundaries";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LandingPageSearchArea from "../LandingPage/LandingPageSearchSection/LandingPageSearchArea/LandingPageSearchArea";

function BecomeAnAgent() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <Grid className="landingPageSearch">
        <Grid className="homePageBackgroundImage">
          <LazyLoadImage
            src="/images/HomePageHeader.jpg"
            alt="Luxurious contemporary house in Dubai"
            className="homePageBackgroundImage"
          />
        </Grid>
        <Grid className="">section 1</Grid>
        <Grid className="">Section 2</Grid>
        <Grid className="">Section 3</Grid>
        <Grid className="">Section 4</Grid>
        <Grid className="LandingPageSearchAreaWrapper">
          <LandingPageSearchArea />
        </Grid>
      </Grid>

      <Grid>
        <LandingPageSubscribeSection />
      </Grid>
    </ErrorBoundary>
  );
}

export default BecomeAnAgent;
