import React from "react";
import { Box, Grid, Container } from "@mui/material";
import ExclusivesTopSection from "./ExclusivesTopSection/ExclusivesTopSection";
import Card from "../../../Components/Cards/Card";
import { exclusives } from "../../../Constants/ConstantValues";
import ViewAllExclusivesButton from "./ViewAllExclusivesButton/ViewAllExclusivesButton";
// import { useDispatch } from "react-redux";
// import { openPopUp } from "../../../Redux/features/listingPopUp/listingPopUpSlice";

function LandingPageExclusiveSection() {
  // const dispatch = useDispatch();
  // const handleOpenPopUp = () => {
  //   dispatch(openPopUp());
  // };
  return (
    <Container className="LandingPageExclusiveSectionWrapper">

      <ExclusivesTopSection />
      <Box display="flex" justifyContent="center" className="center">
        <Grid container spacing={1.5}>
          {exclusives.slice(0, 9).map((item, key) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={key}>
                <Card  item={item} key={key} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center">
        <ViewAllExclusivesButton />
      </Box>
    </Container>
  );
}

export default LandingPageExclusiveSection;
