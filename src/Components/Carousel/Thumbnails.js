import React from "react";
import { Button, Grid, Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NextArrow, BackArrow } from "../../Assets/SVG/Carousel/CarouselIcons";

const CAROUSEL = "carousel";

const Thumbnails = ({ images, Ref, setActiveStep, onViewChange }) => {
  const scrollLeft = () => {
    if (Ref.current) {
      Ref.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (Ref.current) {
      Ref.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  const handleMainCarouselClick = () => {
    onViewChange(CAROUSEL);
  };

  return (
    <Box className="carouselScrollableContainer" ref={Ref}>
      <button
        className="carouselScrollButton carouselScrollLeft"
        onClick={scrollLeft}
      >
        <BackArrow />
      </button>

      <div className="carouselScrollableContent">
        <Grid container spacing={1} wrap="nowrap">
          {images.map((image, index) => (
            <Grid item key={index}>
              
              <Button
                onClick={() => {
                  setActiveStep(index);
                  handleMainCarouselClick();
                }}
                className="thumbnailImageButton"
              >
                <LazyLoadImage
                  height={54}
                  width={85}
                  src={image.imgPath}
                  alt={image.imgLabel}
                  className="carouselImage"
                />
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>

      <button
        className="carouselScrollButton carouselScrollRight"
        onClick={scrollRight}
      >
        <NextArrow />
      </button>
    </Box>
  );
};

export default Thumbnails;
