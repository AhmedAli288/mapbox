import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FindAreaCard = ({ imgLabel, imgPath, link }) => {
  return (
    <Link href={link}>
      <Box className="findAreaBox">
        <Box className="findAreaOpacity"></Box>
        <LazyLoadImage
          effect="opacity"
          src={imgPath}
          alt={imgLabel}
          className="findAreaImg"
        />
        <Typography variant="GothamBlack27" className="findAreaTypography">
          {imgLabel}
        </Typography>
      </Box>
    </Link>
  );
};

export default FindAreaCard;
