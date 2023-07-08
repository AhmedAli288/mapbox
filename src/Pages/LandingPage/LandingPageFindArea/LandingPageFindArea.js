import React from "react";
import _ from "lodash";
import { Box, Grid, Container, Typography } from "@mui/material";
import FindAreaCard from "./FindAreaCard/FindAreaCard";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import { findArea } from "../../../Constants/ConstantValues";

const itemsToShowInitially = 6;
let images = findArea;

const LandingPageFindArea = () => {
  const [itemsToShow, setItemsToShow] = React.useState(itemsToShowInitially);

  const handleViewMore = () => {
    setItemsToShow(itemsToShow + itemsToShowInitially);
  };

  if (!_.isArray(images)) {
    return (images = []);
  }

  return (
    <Container disableGutters={true} className="findAreaContainer">
      <Box>
        <Typography variant="GothamBlack26">Find your area</Typography>
      </Box>
      <Typography variant="DubaiRegular20">
        Which neighbourhood suits your lifestyle the best?
      </Typography>
      <Grid container spacing={2} mt={2}>
        {images.slice(0, itemsToShow).map((item, id) => {
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

      {itemsToShow < images.length && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3.8} md={3.8} />
          <Grid item xs={12} sm={3.8} md={3.8}>
            <CustomButton
              onClick={handleViewMore}
              text="View more areas"
              rightIcon={<ButtonRightArrow />}
              customClassName={"learnMoreBtnLanding"}
            />
          </Grid>

          <Grid item xs={12} sm={3.8} md={3.8} />
        </Grid>
      )}
    </Container>
  );
};

export default LandingPageFindArea;
