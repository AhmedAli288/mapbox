import React, { useRef, useState } from "react";
import { MobileStepper, Container } from "@mui/material";
import ThumbnailCarouselBottom from "./ThumbnailCarouselBottom";
import ImagesSlider from "./ImagesSlider";
import VideoComponent from "./VideoComponent";
import { isEmpty } from "lodash";

const CAROUSEL = "carousel";
const FLOOR_PLAN = "floorPlan";
const VIDEO = "video";

function ThumbnailCarousel({
  carouselStep,
  setCarouselStep,
  floorStep,
  setFloorStep,
  carouselImages = [],
  floorImages = [],
  videoUrl = "",
  thumbnails = false,
  dots = true,
  dark = true,
  width,
  height,
}) {
  const scrollableContainerRef = useRef(null);
  const carouselMaxSteps = carouselImages.length || 0;
  const floorMaxSteps = floorImages.length || 0;
  const [view, setView] = useState(CAROUSEL);

  const handleNext = () => {
    if (view === CAROUSEL) {
      setCarouselStep(
        (prevActiveStep) => (prevActiveStep + 1) % carouselMaxSteps
      );
    } else {
      setFloorStep((prevActiveStep) => (prevActiveStep + 1) % floorMaxSteps);
    }
  };

  const handleBack = () => {
    if (view === CAROUSEL) {
      setCarouselStep((prevActiveStep) =>
        prevActiveStep === 0 ? carouselMaxSteps - 1 : prevActiveStep - 1
      );
    } else {
      setFloorStep((prevActiveStep) =>
        prevActiveStep === 0 ? floorMaxSteps - 1 : prevActiveStep - 1
      );
    }
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const renderView = () => {
    switch (view) {
      case CAROUSEL:
        return (
          <ImagesSlider
            activeStep={carouselStep}
            handleBack={handleBack}
            handleNext={handleNext}
            images={carouselImages}
            width={width}
            height={height}
          />
        );
      case FLOOR_PLAN:
        return (
          <ImagesSlider
            activeStep={floorStep}
            handleBack={handleBack}
            handleNext={handleNext}
            images={floorImages}
            width={width}
            height={height}
          />
        );
      case VIDEO:
        return (
          <Container maxWidth="md">
            <VideoComponent videoUrl={videoUrl} />
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderView()}
      {dots && (view === CAROUSEL || view === FLOOR_PLAN) && (
        <MobileStepper
          steps={view === CAROUSEL ? carouselMaxSteps : floorMaxSteps}
          position="static"
          activeStep={view === CAROUSEL ? carouselStep : floorStep}
          className={dark ? "darkCarouselDots" : "lightCarouselDots"}
        />
      )}
      {thumbnails && (
        <ThumbnailCarouselBottom
          activeStep={carouselStep}
          setActiveStep={setCarouselStep}
          images={carouselImages}
          Ref={scrollableContainerRef}
          onViewChange={handleViewChange}
          floorPlan={floorImages.length ? true : false}
          videoTour={isEmpty(videoUrl) ? false : true}
        />
      )}
    </>
  );
}

export default ThumbnailCarousel;
