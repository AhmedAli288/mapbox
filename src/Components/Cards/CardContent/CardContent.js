import React, { useState } from "react";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Divider,
  IconButton,
} from "@mui/material";

function CardContent({ onClick, item, isHovered }) {
  const [likedShape, setLikedShape] = useState("like");

  const handleLike = () => {
    setLikedShape((prevColor) =>
      prevColor === "alreadyLiked" ? "like" : "alreadyLiked"
    );
  };

  return (
    <Box >
      <Paper square elevation={0} className="upperPaperBoxWrapper">
        <Grid container spacing={0} direction="row"
  justifyContent="flex-end"
  alignItems="center" >
      
          <Grid item sm={1.25} md={1.25}>
            <IconButton className="upperBoxListingCardIcon">
              <ListingCardIcon shape={"360"} />
            </IconButton>
          </Grid>
          <Grid  item sm={1.25} md={1.25}>
            <IconButton
              className="upperBoxListingCardIcon"
              onClick={handleLike}
            >
              <ListingCardIcon shape={likedShape} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Paper square elevation={0} className="lowerPaperBoxWrapper">
        <Box className="lowerCardContentWrapper">
          <Box
            className={`listingCardTitleWrapper ${
              isHovered ? "ListingTitleReplaceEmptySpace" : "mouseOut"
            }`}
          >
            <Typography variant="GothamBlack18" className="listingTitle">
              {item.name}
            </Typography>
          </Box>
          <Box>
            <Box
              className={`listingCardHovered ${
                isHovered ? "textToDisappearDownwardsPrice" : "mouseOut"
              }`}
            >
              <Typography variant="GothamBlack13">{item.price}</Typography>
            </Box>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={6} md={6}>
                  <Box
                    className={`listingCardHovered ${
                      isHovered
                        ? "textToDisappearDownwardsCommunity"
                        : "mouseOut"
                    }`}
                  >
                    <Typography variant="DubaiRegular14">
                      {item.community}
                    </Typography>
                  </Box>
                  <Box
                    className={`listingCardHovered ${
                      isHovered
                        ? "textToDisappearDownwardsBuilding"
                        : "mouseOut"
                    }`}
                  >
                    <Typography variant="DubaiRegular14">
                      {item.building}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1} md={1} >
                  <Box className="lowerCardListingContentWrapper">
                    <Box
                      className={`listingCardHovered ${
                        isHovered
                          ? "textToDisappearDownwardsCommunity"
                          : "mouseOut"
                      }`}
                    >
                      <ListingCardIcon shape={"bed"} />
                    </Box>
                    <Box
                      className={`listingCardHovered ${
                        isHovered
                          ? "textToDisappearDownwardsBuilding"
                          : "mouseOut"
                      }`}
                    >
                      <Typography variant="DubaiRegular14" display="block">
                        {item.bedroom}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  color="white"
                  flexItem
                  className={`cardDivider ${
                    isHovered ? "hoveredDisplayDivider" : "mouseOut"
                  }`}
                />
                <Grid item xs={1} md={1}>
                  <Box className="lowerCardListingContentWrapper">
                    <Box
                      className={`listingCardHovered ${
                        isHovered
                          ? "textToDisappearDownwardsCommunity"
                          : "mouseOut"
                      }`}
                    >
                      <ListingCardIcon shape={"bath"} />
                    </Box>
                    <Box
                      className={`listingCardHovered ${
                        isHovered
                          ? "textToDisappearDownwardsBuilding"
                          : "mouseOut"
                      }`}
                    >
                      <Typography variant="DubaiRegular14">
                        {item.washroom}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  color="white"
                  flexItem
                  className={`cardDivider  ${
                    isHovered ? "hoveredDisplayDivider" : "mouseOut"
                  }`}
                />
                <Grid item xs={1.5} md={1.5}>
                  <Box className="lowerCardListingContentWrapper">
                    <Box
                      className={`listingCardHovered ${
                        isHovered
                          ? "textToDisappearDownwardsCommunity"
                          : "mouseOut"
                      }`}
                    >
                      <ListingCardIcon shape={"m2"} />
                    </Box>
                    <Box
                      className={`listingCardHovered ${
                        isHovered
                          ? "textToDisappearDownwardsBuilding"
                          : "mouseOut"
                      }`}
                    >
                      <Typography variant="DubaiRegular14" display="block">
                        {item.sizeMsqr}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  color="white"
                  flexItem
                  className={`cardDivider   ${
                    isHovered ? "hoveredDisplayDivider" : " mouseOut"
                  }`}
                />
                <Grid item xs={1} md={1}>
                  <Box className="lowerCardListingContentWrapper">
                    <Box
                      className={`listingCardHovered ${
                        isHovered
                          ? "textToDisappearDownwardsCommunity"
                          : "mouseOut"
                      }`}
                    >
                      <ListingCardIcon shape={"sqft"} />
                    </Box>
                    <Box
                      className={`listingCardHovered ${
                        isHovered
                          ? "textToDisappearDownwardsBuilding"
                          : "mouseOut"
                      }`}
                    >
                      <Typography variant="DubaiRegular14" display="block">
                        {item.sizeSqFt}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default CardContent;
