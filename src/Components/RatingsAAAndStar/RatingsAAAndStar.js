import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import RatingStarAndOthers from "../RatingStarAndOthers/RatingStarAndOthers";
import BuildingClassificationSystem from "../../Pages/ListingDetailPage/PropertyDetail/PropertyDetailBottom/RatingsOtherDetails/PropertyInfoDescription/BuildingClassificationSystem";
import { InfoIcon } from "../../Assets/SVG/Common/CommonSvgs";
import InfoIconDescription from "../InfoIconDescription/InfoIconDescription";

function RatingsAAAndStar({ darkStars = true }) {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Box mb={1} className="tagWithInfo">
          <Typography variant="DubaiRegular20" className="tagWithInfoText">
            AA
          </Typography>
          <Box className="tagWithInfoIcon">
            <div className="tagWithInfoIconContainer">
              <InfoIcon />
              <div className="tagWithInfoIconTextBox">
                <InfoIconDescription
                  heading={"The VALCOM Building Classification System (VBCS)"}
                  headingColor={"#808080"}
                  description={<BuildingClassificationSystem />}
                />
              </div>
            </div>
          </Box>
        </Box>
        <Typography variant="DubaiRegular18">
          Building Classification
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Box className="tagWithInfo">
          <Typography variant="DubaiRegular20" className="tagWithInfoText">
            4.6
          </Typography>
          <Box className="tagWithInfoIcon">
            <div className="tagWithInfoIconContainer">
              <InfoIcon />
              <div className="tagWithInfoIconTextBox">
                <InfoIconDescription
                  heading={"The VALCOM Building Rating"}
                  headingColor={"#808080"}
                  description={
                    <Typography variant="DubaiRegular16">
                      The VALCOM Building Rating shows you how actual residents
                      rate their building.
                    </Typography>
                  }
                />
              </div>
            </div>
          </Box>
        </Box>
        <RatingStarAndOthers defaultValue={4.6} dark={darkStars} />
        <Typography variant="DubaiRegular16" className="ratingComponent">
          (87 Ratings)
        </Typography>
      </Stack>
    </>
  );
}

export default RatingsAAAndStar;
