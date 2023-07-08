import React, { useState } from "react";
import { Box, Typography, Tab, Grid } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "../../../Components/Cards/Card";
import { exclusives } from "../../../Constants/ConstantValues";

function SimilarHomesSection() {
  const [value, setValue] = useState("recommended");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // Function to filter and sort exclusives based on the selected tab
  const getFilteredExclusives = () => {
    switch (value) {
      case "recommended":
        return exclusives.slice(0, 9);
      case "price":
        return exclusives.filter((item) => item.price === "1000").slice(0, 9);
      case "layout":
        return exclusives.filter((item) => item.bedroom === "3").slice(0, 9);
      case "location":
        return exclusives.filter((item) => item.location === "Milano Boutique").slice(0, 9);
      default:
        return [];
    }
  };

  return (
    <Box id="similarHomesSection" className="similarHomesContainer">
      <Box className="similarHomesHeader">
        <Typography variant="DubaiRegular30Bold">Similar Homes</Typography>
      </Box>
      <Box className="similarHomesTabAndCardWrapper">
        <Box>
          <TabContext value={value}>
            <Box className="similarHomesTabListWrapper">
              <TabList onChange={handleChange} aria-label="lab API tabs example" className="indicator">
                <Tab label="Recommended" value="recommended" typography="DubaiRegular18" />
                <Tab label="Price" value="price" />
                <Tab label="Layout" value="layout" />
                <Tab label="Location" value="location" />
              </TabList>
            </Box>
            <TabPanel value={value}>
              <Box display="flex" justifyContent="center" className="center">
                <Grid container spacing={2}>
                  {getFilteredExclusives().map((item, key) => (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={key}>
                      <Card item={item} key={key} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
}

export default SimilarHomesSection;
