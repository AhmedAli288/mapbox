import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import { Box,Grid, Typography } from "@mui/material";
import BuyOrRentToggleButtom from "../BuyOrRentToggleButtom/BuyOrRentToggleButtom";

function LandingPageSearchArea() {
  return (
    <>
     <Box className='landingPageSearchArea'
>
<Typography variant="GothamBlack36" className="findYourHome" >Find your home</Typography>
  <Grid container justifyContent="space-evenly" spacing={0.25}>
  
    <Grid item xs={11}>
      <BuyOrRentToggleButtom/>
    </Grid>
    <Grid item xs={11}>
      <SearchForm />
    </Grid>
  </Grid>
</Box>
    </>
  );
}

export default LandingPageSearchArea;
