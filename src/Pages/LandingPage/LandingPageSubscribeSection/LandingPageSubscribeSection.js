import React, { useState } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import SubscribeForm from "./SubscribeForm/SubscribeForm";
import isEmail from "validator/lib/isEmail";
import { subscribeToNewsletter } from "../../../network/apiServices";
import { isEqual } from "lodash";
import { errorToast, successToast } from "../../../utils/useToast";

const LandingPageSubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmail(email)) {
      let data = {
        email: email,
      };

      subscribeToNewsletter(data)
        .then((res) => {
          if (!isEqual(res.data.status, "SUCCESS")) {
            //toast failure message
            errorToast(`Oops! Something went wrong.`);
          } else {
            //success scenario
            successToast(`You've been successfully subscribed`);
          }
        })
        .catch((error) => {});
      setEmail("");
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
