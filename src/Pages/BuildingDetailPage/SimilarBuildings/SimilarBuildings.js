import React, { useState } from "react";
import { Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { isEqual, startCase } from "lodash";
import { exclusives, similarBuildingsData } from "../../../Constants/ConstantValues";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";

function SimilarBuildings() {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const { title, defaultItems, imgHeight, metaDataFields, dropDownText, dropDownIcons, iconColor, iconHeight, iconWidth } = similarBuildingsData;
  const metaFieldHeadings = Object.keys(metaDataFields);
  const data = exclusives;
  const visibleData = expanded ? data : data.slice(0, defaultItems);

  return (
    <Grid className="similarBuildingsSectionContainer" container rowSpacing={2} px={2} py={5} mt={10}>
      <Grid item xs={12}>
        <Typography className="similarBuildingsSectionHeading" variant="DubaiRegular24Bold" ml={0}>
          {title}
        </Typography>
      </Grid>
      <Grid container item spacing={1} xs={12}>
        {visibleData.map((building, index) => {
          let image = building.images[0].imgPath;
          let buildingName = building.buildingData.buildingName;
          let community = building.buildingData.community;
          let floors = building.buildingData.buildingStories;
          let units = building.buildingData.buildingUnits;
          let listings = building.buildingData.buildingListings;

          return (
            <Grid key={index} item xs={3}>
              <Card className="similarBuildingsCard" raised>
                <CardMedia className="similarBuildingsCardMedia" sx={{ height: imgHeight }} image={image} title={buildingName} />
                <CardContent className="similarBuildingsCardContent">
                  <Grid item>
                    <Grid item xs={12}>
                      <Typography variant="GothamBlack18" component="span">
                        {buildingName}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="DubaiRegular18" component="span">
                        {community}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container columnSpacing={1}>
                      {metaFieldHeadings.map((field, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Grid item textAlign={"center"} pr={1}>
                              <Grid item>
                                <Typography variant="DubaiRegular14Bold" component="span">
                                  {startCase(field)}
                                </Typography>
                              </Grid>
                              {isEqual(startCase(field), metaDataFields.floors) ? (
                                <Grid item>
                                  <Typography variant="DubaiRegular14" component="span">
                                    {floors}
                                  </Typography>
                                </Grid>
                              ) : isEqual(startCase(field), metaDataFields.units) ? (
                                <Grid item xs={12}>
                                  <Typography variant="DubaiRegular14" component="span">
                                    {units}
                                  </Typography>
                                </Grid>
                              ) : isEqual(startCase(field), metaDataFields.listings) ? (
                                <Grid item xs={12}>
                                  <Typography variant="DubaiRegular14" component="span">
                                    {listings}
                                  </Typography>
                                </Grid>
                              ) : (
                                <Grid item xs={12}>
                                  <Typography variant="DubaiRegular14Bold" component="span">
                                    {field}
                                  </Typography>
                                </Grid>
                              )}
                            </Grid>
                            {!isEqual(index, metaFieldHeadings.length - 1) && <Divider className="whiteDivider" orientation="vertical" textAlign="center" flexItem />}
                          </React.Fragment>
                        );
                      })}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {data.length > defaultItems && (
        <Grid className="similarBuildingsSectionHeading" container item alignItems="center" spacing={1} onClick={handleClick}>
          <Grid item>
            <Typography variant="DubaiRegular18" ml={0}>
              {expanded ? dropDownText.expanded : dropDownText.collapsed}
            </Typography>
          </Grid>
          <Grid item mt={expanded ? 0 : 1}>
            <ListingCardIcon shape={expanded ? dropDownIcons.expanded : dropDownIcons.collapsed} color={iconColor} width={iconWidth} height={iconHeight} />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default SimilarBuildings;
