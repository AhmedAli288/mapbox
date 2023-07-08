import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  exclusives,
  keys,
  detailItems,
} from "../../../Constants/ConstantValues";
import { getObjectById } from "../../../utils/utility";
import RatingsAAAndStar from "../../../Components/RatingsAAAndStar/RatingsAAAndStar";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";

function BuildingSection({ listingId }) {
  listingId = listingId.id;
  const listingObject = getObjectById(exclusives, listingId);

  return (
    <Box id="buildingSection" className="buildingSectionWrapper">
      <Box className="buildingImageWrapper">
        <LazyLoadImage
          src={`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`}
          className="homePageBackgroundImage"
        />
      </Box>
      <Box className="buildingTextWrapper">
        <Typography variant="AlwynNewRoundedRegular28">
          {listingObject.building}
        </Typography>
        <Box className="ratingsStarBuildingSection">
          <RatingsAAAndStar
            darkStars={false}
            className="ratingsStarBuildingSection"
          />
        </Box>

        <Box className="buildingDetailsGridWrapper">
          <Grid container spacing={2}>
            {detailItems.map((item, index) => (
              <React.Fragment key={index}>
                <Grid item xs={6} sm={6} md={6}>
                  <Typography variant="AlwynNewRoundedRegular16">
                    {item}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <Typography variant="AlwynNewRoundedRegular16">
                    {listingObject[keys[index]]}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
        <Box className="buildingSectionButtonWrapper">
        <Grid container >
          <Grid item xs={6} sm={6} md={8} lg={8} xl={8} >
            <Link
              to={`/building/${listingObject.buildingData.id}/${listingObject.buildingData.buildingName}`}
              state={listingId}
            >
              <CustomButton
                dark={false}
                text="Learn more about the Building"
                typographyVariant="AlwynNewRoundedRegular16"
                rightIcon={<ButtonRightArrow />}
              />
            </Link>
          </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default BuildingSection;
