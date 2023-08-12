import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../../context/AppContext";
import BuildingCard from "../../../Components/SimilarBuildings/BuildingCard";
import { savedAddLiked } from "../../../utils/utility";
import { Grid, Typography } from "@mui/material";

const SavedBuildings = () => {
  const context = useContext(AppContext);

  const { userPreferences, setUserPreferences } = context;
  const savedBuildings = userPreferences?.savedBuildings;
  const [savedBuilding, setSavedBuilding] = useState([]);

  useEffect(() => {
    let buildings = savedAddLiked(savedBuildings);

    const updatedData = {
      ...userPreferences,
      savedBuildings: buildings,
    };
    setUserPreferences(updatedData);
    setSavedBuilding(buildings);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSavedBuilding(userPreferences?.savedBuildings);
  }, [savedBuilding, userPreferences]);

  const metaDataFields = {
    floors: "Floors",
    units: "Units",
  };
  return (
    <>
      <Grid container spacing={1}>
        {savedBuilding?.length > 0 ? (
          savedBuilding?.map((building) => {
            return (
              <BuildingCard
                key={building.buildingReferenceId}
                building={building}
                metaDataFields={metaDataFields}
                defaultItems={4}
                hasHeart
              />
            );
          })
        ) : (
          <Typography mt={4}>No record found!</Typography>
        )}
      </Grid>
    </>
  );
};

export default SavedBuildings;
