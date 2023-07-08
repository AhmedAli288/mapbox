import React, { useState } from "react";
import { TextField, Typography, Grid, FormHelperText } from "@mui/material";
import { isEmail } from "validator";
import { Link } from "react-router-dom";
import CustomButton from "../../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { isEqual } from "lodash";
import { resetUserPassword } from "../../../../network/apiServices";

function ResetPassword({ sendEmailUp, advanceCurrentStep }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [resetFailedMsg, setResetFailedMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailError) {
      sendEmailUp(email);
      // Perform any additional actions here, such as submitting the form, on return if email does not exist alert, else do the necessary action
      let data = {
        email,
      };

      resetUserPassword(data)
        .then((data) => {
          console.log("Reset Password: ", data);
          if (!isEqual(data.data.status, "DELIVERED")) {
            setResetFailedMsg(data.data.message);
            setIsEmailTouched(false);
          } else {
            //toast
            advanceCurrentStep();
          }
        })
        .catch((error) => {
          console.log("Error: ", error); //toast
        });

      setEmail("");
      setIsEmailTouched(false);
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (!isEmail(event.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
  };
  const isContinueButtonDisabled = emailError || isEqual(email, "");
  return (
    <Grid item>
      <Grid className="authComponentsWrapper" container justifyContent={"center"} alignItems={"center"}>
        <form className="" onSubmit={handleSubmit}>
          <Grid container rowSpacing={2} direction={"column"} textAlign={"center"}>
            <Grid item>
              <Typography className="loginTypographyLight" variant="GothamBlack18">
                Reset your password
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="loginTypographyLight" variant="DubaiRegular16">
                Please enter your email address and instructions will be sent to your email.
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="email"
                className="loginTextInput"
                placeholder="Email address"
                hiddenLabel
                type={"email"}
                value={email}
                error={emailError}
                fullWidth
                required={true}
                FormHelperTextProps={{ disabled: true }}
                onChange={handleEmail}
                onBlur={handleEmailBlur}
              />
            </Grid>
            {isEmailTouched &&
              (isEqual(email, "") ? (
                <Grid container item columnSpacing={2} alignItems={"start"}>
                  <Grid item xs={1}>
                    <ListingCardIcon shape="exclamationError" />
                  </Grid>
                  <Grid item xs={10}>
                    <FormHelperText className="customHelperText">Email address should not be empty.</FormHelperText>
                  </Grid>
                </Grid>
              ) : emailError ? (
                <Grid container item columnSpacing={2} alignItems={"start"}>
                  <Grid item xs={1}>
                    <ListingCardIcon shape="exclamationError" />
                  </Grid>
                  <Grid item xs={10}>
                    <FormHelperText className="customHelperText">Email is invalid.</FormHelperText>
                  </Grid>
                </Grid>
              ) : (
                ""
              ))}
            {resetFailedMsg && (
              <Grid container item columnSpacing={2} alignItems={"start"}>
                <Grid item xs={1}>
                  <ListingCardIcon shape="exclamationError" />
                </Grid>
                <Grid item xs={10}>
                  <FormHelperText className="customHelperText">{resetFailedMsg}</FormHelperText>
                </Grid>
              </Grid>
            )}
            <Grid item>
              <CustomButton
                customClassName="loginBtn"
                dark={false}
                type="submit"
                text={"Continue "}
                rightIcon={<ListingCardIcon shape={"arrowRight"} />}
                isDisabled={isContinueButtonDisabled}
                fullWidth={true}
              />
            </Grid>
            <Grid item>
              <Typography className="loginTypographyLight" variant="DubaiRegular18">
                Don't have an account?{" "}
                <Link className="loginLinkLight" to="/register">
                  <Typography className="loginTypographyLight" variant="DubaiRegular18">
                    Sign up
                  </Typography>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
export default ResetPassword;
