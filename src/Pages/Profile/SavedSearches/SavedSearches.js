import React, { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import SearchedCard from "./SearchedCard/SearchedCard";
import AppContext from "../../../context/AppContext";

const SavedSearches = () => {
  const context = useContext(AppContext);

  const { userPreferences } = context;
  const savedSearches = userPreferences?.savedSearches;

  return (
    <Grid container spacing={2}>
      {savedSearches?.length > 0 ? (
        savedSearches.map((search, id) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={id} mb={5}>
              <div className="savedSearchesCardContainer">
                <SearchedCard
                  id={search.savedSearchId}
                  country={search.country}
                  state={search.state}
                  city={search.city}
                  buildings={search.buildings}
                  propertyType={search.propertyType}
                  beds={search.beds}
                  baths={search.baths}
                  price={search.price}
                  neighbourhood={search.neighbourhood}
                  exclusive={search.exclusive}
                  saleOrRent={search.saleOrRent ? search.saleOrRent : "BUY"}
                />
              </div>
            </Grid>
          );
        })
      ) : (
        <Typography mt={4}>No record found!</Typography>
      )}
    </Grid>
  );
};

export default React.memo(SavedSearches);
