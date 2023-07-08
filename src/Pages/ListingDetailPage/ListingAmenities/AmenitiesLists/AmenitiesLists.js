import React from "react";
import { Divider, Grid, Stack, Typography, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoIconDescription from "../../../../Components/InfoIconDescription/InfoIconDescription";
import { InfoIcon } from "../../../../Assets/SVG/Common/CommonSvgs";

const _ = require("lodash");

const AmenitiesLists = ({
  leftData,
  rightData,
  reactComponent,
  buildingDividers,
}) => {
  const propertyAmenities = leftData;
  const buildingAmenities = rightData;

  return (
    <>
      <Grid
        container
        flexDirection={"row"}
        alignItems={"center"}
        className="amenitiesListsContainer"
      >
        {reactComponent()}

        {buildingDividers ? (
          <Grid item xs={12} mt={2} flexDirection={"column"}>
            {propertyAmenities.map((item, id) => {
              return (
                <React.Fragment key={id}>
                  <Grid container display="flex" flexDirection="row">
                    {_.isArray(item) ? (
                      <Grid
                        item
                        xs={4}
                        sm={4}
                        md={4}
                        className="serviceChargeWithIcon"
                      >
                        <Typography variant="DubaiRegular18">
                          {item[0]}
                        </Typography>
                        <Box className="buildingInfoIcon">
                          <div className="tagWithInfoIconContainer">
                            {/* <ListingCardIcon shape={'infoCircle'} />  */}
                            <InfoIcon />
                            <div className="tagWithInfoIconTextBox">
                              <InfoIconDescription
                                heading={item[3]}
                                headingColor={"#777575"}
                                description={item[4]}
                              />
                            </div>
                          </div>
                        </Box>
                      </Grid>
                    ) : (
                      <Grid item xs={4}>
                        <Typography variant="DubaiRegular18">
                          {item}{" "}
                        </Typography>
                      </Grid>
                    )}
                    <Grid item xs={8}>
                      <Typography variant="DubaiRegular18">
                        {buildingAmenities[id]}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </React.Fragment>
              );
            })}
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={5.5} mr={4}>
              {propertyAmenities.map((item, id) => {
                return (
                  <Stack key={id} direction={"column"} spacing={0.5} mt={0.5}>
                    <Typography variant="DubaiRegular18">{item}</Typography>
                    <Divider />
                  </Stack>
                );
              })}
              <Box className="amenitiesListViewBtn">
                <Typography variant="DubaiRegular18">View more</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Grid>
            <Grid item xs={12} sm={5.5}>
              {buildingAmenities.map((item, id) => {
                return (
                  <Stack key={id} direction={"column"} spacing={0.5} mt={0.5}>
                    <Typography variant="DubaiRegular18">{item}</Typography>
                    <Divider />
                  </Stack>
                );
              })}

              <Box className="amenitiesListViewBtn">
                <Typography variant="DubaiRegular18">View more</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default AmenitiesLists;
