import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getObjectById } from "../../../utils/utility";
import { exclusives } from "../../../Constants/ConstantValues";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";

function Neighborhood({ listingId }) {
  const listingObject = getObjectById(exclusives, listingId.id);

  return (
    <Box id="neighborhoodSection" className="neighborhoodWrapper">
      <Box className="exploreNeighborhoodWrapper">
        <Box>
          <Grid container>
            <Grid item xs={6} md={6}>
              <Box className="exploreNeighborhoodImage">
                <LazyLoadImage src={listingObject.neighborhoodImage} className="homePageBackgroundImage" />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box className="exploreNeighborhoodTextAreaWrapper">
                <Typography variant="GothamBlack30">Explore the neighborhood</Typography>
                <Box className="neighborhoodCommunityWrapper">
                  <Typography variant="DubaiRegular20Bold">{listingObject.community}</Typography>
                </Box>
                <Box className="neighborhoodCommunityWrapper">
                  <Typography variant="DubaiRegular18">{listingObject.neighborhoodDescription}</Typography>
                </Box>
                <Box className="neighborhoodButtonWrapper">
                  <Grid container spacing={2}>
                    <Grid item xs md={6}>
                      <CustomButton dark={false} text={`${listingObject.community} Guide`} rightIcon={<ButtonRightArrow />} />
                    </Grid>
                    <Grid item xs md={5}>
                      <CustomButton dark={false} text={`All Neighborhoods`} rightIcon={<ButtonRightArrow />} />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="nearbyNeighborhoods">
        <Typography variant="DubaiRegular20Bold">Nearby Neighborhods</Typography>

        <Grid container spacing={2} mt={2}>
          {listingObject.nearbyNeighborhoods.map((item, id) => {
            return (
              <Grid item key={id} xs={12} sm={3.8} md={3.8}>
                <Link href={"#"}>
                  <Box className="findAreaBox">
                    <Box className="findAreaOpacity"></Box>
                    <LazyLoadImage effect="opacity" src={item.imgPath} alt={item.name} className="findAreaImg" />
                    <Typography variant="GothamBlack27" className="findAreaTypography">
                      {item.name}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Neighborhood;
