import React from "react";
import { Grid, Typography } from "@mui/material";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";

//accepts a string name for a listing card icon, and a heading string
export const LogoHeadingComponent = ({ icon, heading, headingTypoVariant }) => {
  return (
    <Grid container spacing={2} alignItems={"center"}>
      {icon && (
        <Grid item>
          <ListingCardIcon shape={icon} />
        </Grid>
      )}
      <Grid item>
        <Typography variant={headingTypoVariant}>{heading}</Typography>
      </Grid>
    </Grid>
  );
};
