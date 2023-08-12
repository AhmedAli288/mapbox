import React from "react";
import { NextArrow, BackArrow } from "../../Assets/SVG/Carousel/CarouselIcons";
import { Box, Button, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { placeholderImage } from "../../Constants/ConstantValues";

const ImagesSlider = React.memo(
  ({ handleBack, handleNext, images, activeStep, width, height }) => {
    if (!images || images.length === 0) {
      return (
        <Box className="carouselBox">
          <LazyLoadImage
            src={'src'}
       
            className="homePageBackgroundImage"
            width={width}
            height={height}
            threshold={450}
          />
          <Grid className="carouselNavigationBtns" container>
            <Button size="large" onClick={handleBack}>
              <BackArrow />
            </Button>
            <Button size="large" onClick={handleNext}>
              <NextArrow />
            </Button>
          </Grid>
        </Box>
      );
    }
    const imgPath = images[activeStep]?.imgPath;
    const separator = imgPath && imgPath.includes("?") ? "&" : "?";
    const src = `${imgPath}${separator}tr=w-${width},h-${height}`;
    return (
      <Box className="carouselBox">
        <LazyLoadImage
          src={src}
          alt={images[activeStep]?.imgLabel}
          className="homePageBackgroundImage"
          width={width}
          height={height}
          threshold={450}
        />
        <Grid className="carouselNavigationBtns" container>
          <Button size="large" onClick={handleBack}>
            <BackArrow />
          </Button>
          <Button size="large" onClick={handleNext}>
            <NextArrow />
          </Button>
        </Grid>
      </Box>
    );
  }
);

export default ImagesSlider;
