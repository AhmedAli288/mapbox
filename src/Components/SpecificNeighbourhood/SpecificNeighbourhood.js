import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CustomButton from "../Button/CustomButton";
import { useParams } from "react-router-dom";
import { ButtonRightArrow } from "../../Assets/SVG/Common/CommonSvgs";
import { neighbourhoodData } from "../../Constants/StaticPagesConstants";
import { findArea } from "../../Constants/ConstantValues";
import FindAreaCard from "../../Pages/LandingPage/LandingPageFindArea/FindAreaCard/FindAreaCard";
import GalleryComponent from "../Gallery/GalleryComponent";
import CommuteTimes from "./CommuteTimes/CommuteTimes";
import LocationBoundaries from "./LocationBoundaries/LocationBoundaries";
import KeyFacts from "./KeyFacts/KeyFacts";

const SpecificNeighbourhood = () => {
  const { name } = useParams();

  const specificNeighbourhood = name.includes(" ")
    ? name.replace(/\s+/g, "_")
    : name;

  const {
    [specificNeighbourhood]: {
      backgroundImage,
      neighbourhood,
      WelcomeDesc,
      expectWhatDesc,
      marketDesc,
      loveThingsDesc,
      map,
      neighbours,
      dxbairport,
      dwcairport,
      publicbeach,
      dubaimall,
      expo2020,
      dubaimarina,
      aroundTheBlockDesc,
      aroundTheBlockImages,
      whatToExpectDesc,
      whatToExpectImages,
      theMarketDesc,
      theMarketImages,
      thingsToLoveDesc,
      thingsToLoveImages,
    },
  } = neighbourhoodData;

  const [buttonHovered, setButtonHovered] = useState([
    true, // Hover state for button at index 0
    true, // Hover state for button at index 1
  ]);

  const handleMouseEvent = (index) => {
    setButtonHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = !updatedHovered[index];
      return updatedHovered;
    });
  };
  return (
    <>
      <Box className="specificNeighbourBgContainer">
        <Box component="img" src={backgroundImage} alt="background Image" />
      </Box>
      <Container className="specificNeighbourFactsContainer">
        <Grid container>
          <Grid item xs={7}>
            <KeyFacts
              expectWhatDesc={expectWhatDesc}
              marketDesc={marketDesc}
              loveThingsDesc={loveThingsDesc}
            />
            <Grid container spacing={1} mt={1}>
              <Grid item>
                <CustomButton
                  text={"Homes for Sale in Business Bay"}
                  rightIcon={<ButtonRightArrow />}
                  onMouseEnter={() => handleMouseEvent(0)}
                  onMouseLeave={() => handleMouseEvent(0)}
                  dark={buttonHovered[0]}
                  variant="outlined"
                  customClassName="viewAllExclusiveButton"
                />
              </Grid>
              <Grid item>
                <CustomButton
                  text={"Homes for Rent in Business Bay"}
                  rightIcon={<ButtonRightArrow />}
                  onMouseEnter={() => handleMouseEvent(1)}
                  onMouseLeave={() => handleMouseEvent(1)}
                  dark={buttonHovered[1]}
                  variant="outlined"
                  customClassName="viewAllExclusiveButton"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={4} className="specificNeighbourWelcomeContainer">
            <Box className="specificNeighbourWelcomeNote">
              <Typography variant="GothamBlack30" mb={2}>
                Welcome to {neighbourhood}
              </Typography>
              <Typography variant="DubaiRegular18">{WelcomeDesc}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box className="specificNeighbourLocContainer">
        <Container>
          <LocationBoundaries
            neighbourhood={neighbourhood}
            map={map}
            neighbours={neighbours}
          />
        </Container>
      </Box>

      <Container className="specificNeighbourCommute">
        <CommuteTimes
          dxbairport={dxbairport}
          dwcairport={dwcairport}
          publicbeach={publicbeach}
          dubaimall={dubaimall}
          expo2020={expo2020}
          dubaimarina={dubaimarina}
        />
      </Container>

      <Box className="specificNeighbourGalleryContainer padding4up16lr">
        <Typography variant="GothamBlack24">Around the block:</Typography>
        <Typography variant="DubaiRegular18" mt={2}>
          {aroundTheBlockDesc}
        </Typography>

        <GalleryComponent images={aroundTheBlockImages} />
      </Box>
      <Box className="specificNeighbourGalleryContainer padding1up16lr">
        <Typography variant="GothamBlack24">What To Expect:</Typography>
        <Typography variant="DubaiRegular18" mt={2}>
          {whatToExpectDesc}
        </Typography>

        <GalleryComponent images={whatToExpectImages} />
      </Box>
      <Box className="specificNeighbourGalleryContainer padding1up16lr">
        <Typography variant="GothamBlack24">The Market:</Typography>
        <Typography variant="DubaiRegular18" mt={2}>
          {theMarketDesc}
        </Typography>

        <GalleryComponent images={theMarketImages} />
      </Box>
      <Box className="specificNeighbourGalleryContainer padding1up4dn16lr">
        <Typography variant="GothamBlack24">Things to love:</Typography>
        <Typography variant="DubaiRegular18" mt={2}>
          {thingsToLoveDesc}
        </Typography>
        <GalleryComponent images={thingsToLoveImages} />
      </Box>
      <Box className=" padding4updn16lr">
        <Typography variant="GothamBlack26">
          Other Neighborhoods To Explore
        </Typography>
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
    </>
  );
};

export default SpecificNeighbourhood;
