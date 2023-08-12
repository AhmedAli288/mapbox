import React from "react";
import { Grid, TextField } from "@mui/material";
import CustomButton from "../../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../../Assets/SVG/Common/CommonSvgs";


const SubscribeForm = ({ email, handleInputChange, error, handleSubmit }) => {
 

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} md={7}>
          <TextField
            className="subscribeEmailInput"
            value={email}
            placeholder="Please enter your email address"
            onChange={handleInputChange}
            error={error}
            helperText={error ? "Invalid email" : ""}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CustomButton
            type="submit"
            text="Subscribe"
            rightIcon={<ButtonRightArrow />}
            fullWidth
            customClassName={"subscribeBtnLanding"}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SubscribeForm;
