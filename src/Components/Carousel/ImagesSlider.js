import React from "react";
import { NextArrow, BackArrow } from "../../Assets/SVG/Carousel/CarouselIcons";
import { Box, Button, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { placeholderImage } from "../../Constants/ConstantValues";

const ImagesSlider = React.memo(
  ({ handleBack, handleNext, images, activeStep }) => {
    return (
      <Box className="carouselBox">
        <LazyLoadImage
          src={images[activeStep]?.imgPath}
          alt={images[activeStep]?.imgLabel}
          className="homePageBackgroundImage"
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
