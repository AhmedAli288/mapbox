import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NextArrow, BackArrow } from "../../Assets/SVG/Carousel/CarouselIcons";
import isBoolean from "lodash/isBoolean";
import { useNavigate } from "react-router-dom";
import isEqual from "lodash/isEqual";

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
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.75,
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

  const updateHeight = () => {
    const newWidth = window.innerWidth;
    if (newWidth < 600) {
      setNewHeight((newWidth * 9) / 16);
    } else if (newWidth < 900) {
      let widths = newWidth / 2;
      setNewHeight((widths * 4) / 6);
    } else {
      let widths = availableGrids / 12;
      widths = widths * newWidth;
      if (isEqual(availableGrids, 2.4)) {
        setNewHeight((widths * 5) / 4.1);
      } else if (isEqual(availableGrids, 3)) {
        setNewHeight((widths * 4) / 5.5);
      } else if (isEqual(availableGrids, 4)) {
        setNewHeight((widths * 4) / 6.5);
      } else {
        setNewHeight((widths * 9) / 16);
      }
    }
  };

  useEffect(() => {
    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [availableGrids]);

  const imgPath = images[activeStep]?.imgPath;
  const separator = imgPath && imgPath.includes("?") ? "&" : "?";
  const src = `${imgPath}${separator}tr=w-${width},h-${height}`;

  return (
    <div className="carouselBox">
      <div className="imageContainer">
        <motion.div style={{ height: `${newHeight}px` }}>
          <motion.img
            key={activeStep}
            className="homePageBackgroundImage"
            src={src}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
          />
        </motion.div>
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
