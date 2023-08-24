import React, { useState, useEffect, useContext } from "react";
import { Grid, Typography } from "@mui/material";
import Card from "../../../Components/Cards/Card";
import AppContext from "../../../context/AppContext";
import { toCarouselArray } from "../../../utils/utility";

const SavedProperties = () => {
  const context = useContext(AppContext);

  const { userPreferences, listingHash } = context;

  const savedProperties = userPreferences?.savedProperties;

  const [savedListing, setSavedListings] = useState([]);

  useEffect(() => {
    let images = toCarouselArray("title", savedProperties, "listingImages");

    setSavedListings(images);
  }, [savedProperties, listingHash]);

  return (
    <>
      {savedListing?.length > 0 ? (
        <Grid container spacing={1.5}>
          {savedListing?.map((item, key) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={key}>
              <Card item={item} key={key} width={768} height={500} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography mt={4}>No record found!</Typography>
      )}
    </>
  );
};

export default React.memo(SavedProperties);
