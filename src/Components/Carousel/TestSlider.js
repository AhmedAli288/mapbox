import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NextArrow, BackArrow } from "../../Assets/SVG/Carousel/CarouselIcons";
import isBoolean from "lodash/isBoolean";
import { useNavigate } from "react-router-dom";

const TestSlider = ({
  handleBack,
  handleNext,
  images,
  activeStep,
  width,
  height,
  availableGrids,
  customState = null,
  setCustomState = null,
}) => {
  const navigate = useNavigate();
  const [newHeight, setNewHeight] = useState("300");

  const slideVariants = {
    hidden: {
      opacity: 0,
      y: 0, // Start from bottom
    },
    visible: {
      opacity: 1,
      y: 0, // Move to original position
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: 0, // Move to top
      transition: {
        duration: 0.5,
      },
    },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
    },
  };

  const handleOverlayClick = () => {
    if (isBoolean(customState)) {
      setCustomState((prev) => !prev);
    } else {
      navigate(customState);
    }
  };

  useEffect(() => {
    console.log("availableGrids", availableGrids);
    const newWidth = window.screen.availWidth;
    if (newWidth < 600) {
      setNewHeight((window.screen.availWidth * 4) / 6);
    } else {
      if (availableGrids !== 2) {
        console.log("availableGrids", availableGrids);
        let widths = window.screen.availWidth / availableGrids;
        setNewHeight((widths * 4) / 4.7);
      } else {
        console.log("availableGrids", availableGrids);
        let widths = window.screen.availWidth / availableGrids;
        setNewHeight((widths * 4) / 7);
      }
    }
  }, []);

  const imgPath = images[activeStep]?.imgPath;
  const separator = imgPath && imgPath.includes("?") ? "&" : "?";
  const src = `${imgPath}${separator}tr=w-${width},h-${height}`;

  return (
    <div className="carouselBox">
      <div className="imageContainer" style={{ height: `${newHeight}px` }}>
        <AnimatePresence>
          <motion.img
            key={activeStep}
            className="homePageBackgroundImage"
            src={src}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
          />
        </AnimatePresence>
        <div className="overlay" onClick={handleOverlayClick} />
      </div>
      <motion.div
        className="carouselNavigationLeftBtn left"
        whileHover="hover"
        onClick={handleBack}
        variants={slidersVariants}
      >
        <BackArrow />
      </motion.div>
      <motion.div
        className="carouselNavigationRightBtn right"
        whileHover="hover"
        onClick={handleNext}
        variants={slidersVariants}
      >
        <NextArrow />
      </motion.div>
    </div>
  );
};

export default TestSlider;
