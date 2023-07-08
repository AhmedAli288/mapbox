import * as React from "react";
import { MobileStepper } from "@mui/material";
import ImagesSlider from "./ImagesSlider";

// Props: "images" for images array having object of keys: [ imgPath, imgLabel ] ,
//        "dots = true" for to show dots or not,
//        "dark = true" for to make dots color black and vice versa.

// Note:-
// For infinite Scroll use the formula in handleNext in setState: (prevActiveStep) => (prevActiveStep + 1) % maxSteps
// For infinite Scroll use the formula in handleBack in setState: (prevActiveStep) => prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
// For finite Scroll use the formula in handleNext in setState: (prevActiveStep) => prevActiveStep + 1 and use disabled for button with maxSteps-1
// For finite Scroll use the formula in handleBack in setState: (prevActiveStep) => prevActiveStep - 1 and use disabled for button with activeStep === 0

function Carousel({
  activeStep,
  setActiveStep,
  images,
  dots = true,
  dark = true,
}) {
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return (
    <>
      <ImagesSlider
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        images={images}
      />
      {dots ? (
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={dark ? "darkCarouselDots" : "lightCarouselDots"}
        />
      ) : null}
    </>
  );
}

export default Carousel;
