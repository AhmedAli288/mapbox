import React from "react";
import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
function BackgroundImageAndTextWithGradientBackground({ customHeroClass, backgroundImage, altText, heroText }) {
  return (
    <div className="landingPageSearch">
      <div className="homePageBackgroundImage">
        <LazyLoadImage src={backgroundImage} alt={altText} className="homePageBackgroundImage" />
        <div className={customHeroClass}>
          <Box className="items-wrapper">
            <Typography variant="GothamBlack60">{heroText}</Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default BackgroundImageAndTextWithGradientBackground;
