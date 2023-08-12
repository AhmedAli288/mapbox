import React, { useContext } from "react";
import _ from "lodash";
import { Box, Grid, Container, Typography } from "@mui/material";
import FindAreaCard from "./FindAreaCard/FindAreaCard";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import { findArea } from "../../../Constants/ConstantValues";
import AppContext from "../../../context/AppContext";
import { objToBase64 } from "../../../utils/utility";
import { useNavigate } from "react-router-dom";

const LandingPageFindArea = () => {
  const { selectedCountry, buyOrRent } = useContext(AppContext);
  const navigate = useNavigate();

  const handleViewMore = () => {
    //navigate to search landing page with
    //build object
    let data = {
      value: null,
      key: null,
      city: null,
      state: "All",
      country: selectedCountry,
      buyOrRent: buyOrRent,
    };

    const queryParamValue = objToBase64(data);
    navigate(`/${buyOrRent}/search?value=${queryParamValue}`);
  };

  if (!_.isArray(findArea)) {
    return (findArea = []);
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
        {findArea?.map((item, id) => {
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
    </Container>
  );
};

export default LandingPageFindArea;
