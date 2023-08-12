import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Stack, useMediaQuery, } from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import RatingsAAAndStar from "../../../Components/RatingsAAAndStar/RatingsAAAndStar";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import { cdnPath } from "../../../Constants/StaticPagesConstants";
import { isMediumScreens } from "../../../Constants/ConstantValues";
import { extractMasterDeveloper } from "../../../utils/utility";

function  BuildingSection({ buildingObject, width = 544, height = 473 }) {
  const [detailItems, setDetailItems] = useState({});
  // listingId = listingId.id;
  // const buildingObject = getObjectById(exclusives, listingId);
  // const { listings } = useContext(AppContext);
    // Use useMediaQuery to determine the screen width
    const isMediumScreen = useMediaQuery(isMediumScreens);
  useEffect(() => {
    if (buildingObject) {
      const getPropertyTypesString = (buildingObject) => {
        const propertyTypes = [];

        if (buildingObject.penthousefROM || buildingObject.penthouseTo) {
          propertyTypes.push("penthouse");
        }

        if (buildingObject.apartmentsFrom || buildingObject.apartmentsTO) {
          propertyTypes.push("Apartments");
        }

        if (buildingObject.duplexFrom || buildingObject.duplexTo) {
          propertyTypes.push("Duplex");
        }

        if (buildingObject.triplexFrom || buildingObject.triplexTo) {
          propertyTypes.push("Triplex");
        }
        if (buildingObject.townhouseFrom || buildingObject.townhouseTo) {
          propertyTypes.push("Townhouse");
        }

        if (buildingObject.villaFrom || buildingObject.villaTo) {
          propertyTypes.push("Villa");
        }

        return propertyTypes.join(", ");
      };
      const developerEntry = buildingObject.crmAssociates
        ? buildingObject.crmAssociates.find(
            (associate) => associate.crmAssociateType === "Developer"
          )
        : null;

      setDetailItems({
        Building:
          buildingObject.buildingName || buildingObject.subAreaSubCommunity,
        Developer: developerEntry
          ? extractMasterDeveloper(developerEntry.crmAssociate)
          : "Not Available",

        Stories: buildingObject.stories || "Not Available",
        Units:
          buildingObject.residentialUnits !== ""
            ? buildingObject.residentialUnits
            : "Not Available",
        "Property Use":
          buildingObject.buildingUsage || buildingObject.PropertyType,
        "Year Built": buildingObject.yearCompleted,
        "Units Type": getPropertyTypesString(buildingObject),
      });
    }
  }, [buildingObject]);

  return buildingObject && Object.keys(detailItems).length > 0 ? (
    <Box id="buildingSection" className="buildingSectionWrapper">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={isMediumScreen? 2: 5}
        useFlexGap
        flexWrap="wrap"
      >
        <Box className="buildingImageWrapper">
          <LazyLoadImage
            src={
              buildingObject.buildingImages
                ? `${buildingObject.buildingImages}?tr=w-${width},h-${height}`
               
                : `${cdnPath}/dbuilding/1.jpg?tr=w-${width},h-${height}`
            }
            className="defaultNeighborhoodImage"
          />
        </Box>
        <Box className="buildingTextWrapper">
          <Typography variant="AlwynNewRoundedRegular28">
            {buildingObject.buildingName}
          </Typography>
          <Box className="ratingsStarBuildingSection">
            <RatingsAAAndStar
              darkStars={false}
              className="ratingsStarBuildingSection"
            />
          </Box>

          <Box className="buildingDetailsGridWrapper">
            <Grid container spacing={2}>
              {Object.entries(detailItems).map(([key, value], index) => (
                <React.Fragment key={index}>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="AlwynNewRoundedRegular16">
                      {key}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="AlwynNewRoundedRegular16">
                      {value}
                    </Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Box>
          <Box className="buildingSectionButtonWrapper">
            <Grid container>
              <Grid item  xs={12} sm={12} md={12}>
                <Link
                  to={`/building/${buildingObject.buildingName}/${buildingObject.referenceNo}`}
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
      </Stack>
    </Box>
  ) : null;
}

export default BuildingSection;
