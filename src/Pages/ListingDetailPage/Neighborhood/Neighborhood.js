import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import { useNavigate } from "react-router-dom";
import {
  desirableNeighborhoods,
  comingSoonURL,
} from "../../../Constants/ConstantValues";
import { cdnPath } from "../../../Constants/StaticPagesConstants";
import FindAreaCard from "../../LandingPage/LandingPageFindArea/FindAreaCard/FindAreaCard";
import { findArea } from "../../../Constants/ConstantValues";
import { truncateText } from "../../../utils/utility";
function Neighborhood({ property, width = 544, height = 273 }) {
  const navigate = useNavigate();
  const _ = require("lodash");

  const handleGuide = (value) => {
    switch (value) {
      case "allNeighborhoods":
        navigate("/city-guides");
        break;
      default:
        const neighborhoodObject = desirableNeighborhoods.find(({ title }) =>
          _.isEqual(title, value)
        );

        const linkUrl = neighborhoodObject
          ? neighborhoodObject.link
          : comingSoonURL;

        navigate(linkUrl);
    }
  };

  const neighborhoodName = truncateText(
    property.area || property.subAreaSubCommunity,
    30
  );
  return (
    <Box
      id="neighborhoodSection"
      className="neighborhoodWrapper paddingPageWidth"
    >
      <Box className="exploreNeighborhoodWrapper">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignContent="center"
        >
          <Grid item xs={12} sm={12} md={6}>
            <Box className="exploreNeighborhoodImage">
              <LazyLoadImage
                src={`${cdnPath}/dneighbour/1.jpg?tr=w-${width},h-${height}`}
                className=" defaultNeighborhoodImage"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="alignCenter">
            <Box className="exploreNeighborhoodTextAreaWrapper">
              <Typography variant="GothamBlack30">
                Explore the neighborhood
              </Typography>
              <Box className="neighborhoodCommunityWrapper">
                <Typography variant="DubaiRegular20Bold">
                  {property.subAreaSubCommunity}
                </Typography>
              </Box>
              <Box className="neighborhoodCommunityWrapper">
                <Typography variant="DubaiRegular18">
                  {property.neighborhoodDescription
                    ? property.neighborhoodDescription.slice(0, 100)
                    : null}
                </Typography>
              </Box>
              <Box className="neighborhoodButtonWrapper">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={12} lg={7}>
                    <CustomButton
                      dark={false}
                      text={`${neighborhoodName} Guide`}
                      rightIcon={<ButtonRightArrow />}
                      onClick={() =>
                        handleGuide(
                          property.area || property.subAreaSubCommunity
                        )
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={12} lg={5}>
                    <CustomButton
                      dark={false}
                      text={`All Neighborhoods`}
                      rightIcon={<ButtonRightArrow />}
                      onClick={() => handleGuide("allNeighborhoods")}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="nearbyNeighborhoods">
        <Typography variant="DubaiRegular20Bold">
          Nearby Neighborhods
        </Typography>

        {/* <Grid container spacing={2} mt={2}>
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
        </Grid> */}
        <Grid container spacing={2} mt={1}>
          {findArea.slice(0, 3).map((item, id) => {
            return (
              <Grid item key={id} xs={12} sm={3.8} md={3.8}>
                <FindAreaCard
                  imgLabel={item.imgLabel}
                  imgPath={item.imgPath}
                  link={item.link}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Neighborhood;
