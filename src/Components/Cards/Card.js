import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import CardContent from "./CardContent/CardContent";
import { Box } from "@mui/material";

function Card({ onClick, item }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // console.log(item)

  return (
    <>
      <Box
        className={`cardBoxWrapperContainer ${
          isHovered ? "listingCardHovered" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={`/listing/${item.id}/${item.name}`}>
          <Box onClick={onClick} className="listingOpacity"></Box>
        </Link>
        <Box className="cardBoxWrapper">
          <CardContent item={item} isHovered={isHovered} />
          <Carousel
            dots={false}
            images={item.images}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Box>
      </Box>
    </>
  );
}

export default Card;
