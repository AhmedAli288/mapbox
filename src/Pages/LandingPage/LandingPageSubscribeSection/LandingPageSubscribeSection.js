import React, { useState } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { validateEmail } from "../../../utils/utility";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

const LandingPageSubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setEmail("");
      // Perform any additional actions here, such as submitting the form
    } else {
      setError(true);
    }
  };

  return (
    <Container disableGutters={true} className="subscribeSectionContainer">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={8}>
          <Box className="boxColAlign">
            <Typography variant="GothamBlack26">Subscribe</Typography>
            <Typography variant="DubaiRegular20">
              For regular real estate updates, subscribe to our newsletter.
            </Typography>
          </Box>

          <SubscribeForm
            email={email}
            handleInputChange={handleInputChange}
            error={error}
            handleSubmit={handleSubmit}
          />
        </Grid>
        <Grid item xs={12} sm={2} />
      </Grid>
    </Container>
  );
};

export default LandingPageSubscribeSection;
