import React from "react";
import LandingPageSearchArea from "./LandingPageSearchArea/LandingPageSearchArea";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ErrorBoundaryFallBack from "../../../Components/ErrorBoundaries/ErrorBoundaries";
import { ErrorBoundary } from "react-error-boundary";

function HomePageSearch() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <div className="landingPageSearch">
          <div className="homePageBackgroundImage">
            <LazyLoadImage
              src="/images/HomePageHeader.jpg"
              alt="Luxurious contemporary house in Dubai"
              className="homePageBackgroundImage"
            />
          </div>

          <div className="LandingPageSearchAreaWrapper"
          >
            <LandingPageSearchArea />
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default HomePageSearch;
