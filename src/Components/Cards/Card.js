import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import CardContent from "./CardContent/CardContent";
import { Box } from "@mui/material";

function Card({ onClick, item, width=768, height=500, cardContentAlignment }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Box
        className={`cardBoxWrapperContainer ${
          isHovered ? "listingCardHovered" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box className="cardBoxWrapper">
          <CardContent item={item} isHovered={isHovered} cardContentAlignment={cardContentAlignment}/>
          <Link
            to={`/listing/${item?.area}/${
              item.referenceNumber
                ? item.referenceNumber
                : item.listingReferenceId
            }`}
          >
            
            <Box onClick={onClick} className={`listingOpacity ${cardContentAlignment?'listingOpacityCardContentAlignment' :'listingOpacityNoCardContentAlignment'}`}></Box>
          </Link>
          <Carousel
            dots={false}
            images={item?.images}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            width={width}
            height={height}
          />
        </Box>
      </Box>
    </>
  );
}

export default Card;
