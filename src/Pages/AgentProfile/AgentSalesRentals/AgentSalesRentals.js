import React, { useState } from "react";
import { Grid, Tab, Typography } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel/TabPanel";
import TabContext from "@mui/lab/TabContext/TabContext";
import TabList from "@mui/lab/TabList/TabList";

function AgentSalesRentals({ titleHeading, handleTabClick, itemSpacing, itemRowSpacing, children }) {
  //   const [value, setValue] = useState("sales");
  const [value, setValue] = useState("sales");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleTabClick(newValue);
  };

  return (
    <Grid container className="salesRentalsContainer">
      <Grid className="tabHeader" item xs={12}>
        <Typography variant="DubaiRegular30Bold">{titleHeading}</Typography>
      </Grid>
      <Grid  item xs={12}>

      <TabContext value={value}>
        <Grid className="tabListWrapper" item xs={12}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" className="indicator">
            <Tab label="Sales" value="sales" typography="DubaiRegular18" />
            <Tab label="Rentals" value="rentals" />
          </TabList>
        </Grid>

        <TabPanel value={value}>
          <Grid container spacing={itemSpacing} rowSpacing={itemRowSpacing}>
            {children}
          </Grid>
        </TabPanel>
      </TabContext>
      </Grid>
    </Grid>
  );
}

export default AgentSalesRentals;
