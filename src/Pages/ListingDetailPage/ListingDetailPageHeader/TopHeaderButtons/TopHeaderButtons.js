import React from 'react'
import {  Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import ListingCardIcon from '../../../../Assets/SVG/ListingCardIcons/ListingCardIcons';
import CustomButton from '../../../../Components/Button/CustomButton';

function TopHeaderButtons() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        
        spacing={5}
      >
        <Grid item xs md={2.3}>
          <Grid container>
            <Grid item xs>
            <Link to="/" onClick={() => window.history.back()}>
              <CustomButton
                text="Back to search results"
                dark={false}
                size="12px"
                typographyVariant="DubaiRegular14"
                leftIcon={
                  <ListingCardIcon shape={"redo"} shapeColor={"black"} />
                }
                variant="outlined"
              />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs md={4}>
          <Grid spacing={1} container>
            <Grid item xs md={6}>
              <CustomButton
                text="Book a Viewing"
                dark={false}
                size="small"
                typographyVariant="DubaiRegular14"
                rightIcon={
                  <ListingCardIcon shape={"arrowRight"} shapeColor={"black"} />
                }
                leftIcon={
                  <ListingCardIcon shape={"silhouette"} shapeColor={"black"} />
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs md={6}>
              <CustomButton
                text="Make an Offer"
                dark={false}
                size="small"
                typographyVariant="DubaiRegular14"
                rightIcon={
                  <ListingCardIcon shape={"arrowRight"} shapeColor={"black"} />
                }
                leftIcon={
                  <ListingCardIcon shape={"dollar"} shapeColor={"black"} />
                }
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid spacing={1} container>
            <Grid item xs md={4}>
              <CustomButton
                text="Share"
                dark={false}
                size="small"
                typographyVariant="DubaiRegular14"
                leftIcon={
                  <ListingCardIcon shape={"share"} shapeColor={"black"} />
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs md={6}>
              <CustomButton
                text="Save Search"
                dark={false}
                size="small"
                typographyVariant="DubaiRegular14"
                leftIcon={
                  <ListingCardIcon
                    shape={"featherHeart"}
                    shapeColor={"black"}
                  />
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs md={2}>
              <CustomButton
                text="More"
                dark={false}
                size="small"
                typographyVariant="DubaiRegular14"
                variant="outlined"
                leftIcon={
                  <ListingCardIcon shape={"more"} shapeColor={"black"} />
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default TopHeaderButtons