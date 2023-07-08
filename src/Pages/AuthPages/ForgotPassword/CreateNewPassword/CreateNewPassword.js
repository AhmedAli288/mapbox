import React, { useState } from "react";
import { FormControl, IconButton, OutlinedInput, InputAdornment, Typography, Grid, FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomButton from "../../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { validatePassword } from "../../../../utils/utility";
import { updateUserPassword } from "../../../../network/apiServices";
import { isEqual } from "lodash";

function CreateNewPassword({ email, advanceCurrentStep }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] = useState(false);
  const [passwordValidationErrors, setPasswordValidationErrors] = useState([]);
  const [updateFailedMsg, setUpdateFailedMsg] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!passwordError || !confirmPasswordError) {
      // Perform any additional actions here, such as submitting the form
      let data = {
        username: email,
        password,
      };

      console.log("data from create new:", data);

      updateUserPassword(data)
        .then((data) => {
          console.log("Password Updated: ", data);
          //if email exists good,
          if (isEqual(data.data.status, "INVALID")) {
            setUpdateFailedMsg(data.data.message);
            setIsPasswordTouched(false);
            setIsConfirmPasswordTouched(false);
          } else {
            console.log("delivered"); //toast
            advanceCurrentStep();
          }
        })
        .catch((error) => {
          console.log("Create new password Error: ", error); //toast
        });
      setPassword("");
      setConfirmPassword("");
      setIsPasswordTouched(false);
      setIsConfirmPasswordTouched(false);
      setUpdateFailedMsg("");
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    const validation = validatePassword(event.target.value);
    if (validation.isValid) {
      setPasswordError(false);
      setPasswordValidationErrors([]);
    } else {
      setPasswordError(true);
      setPasswordValidationErrors(validation.errors);
    }

    if (confirmPasswordError && isEqual(event.target.value, confirmPassword)) {
      setConfirmPasswordError(false);
    }
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    if (!isEqual(event.target.value, password) && !isEqual(password, "")) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
  };

  const handleConfirmPasswordBlur = () => {
    setIsConfirmPasswordTouched(true);
  };
  const isSubmitDisabled = passwordError || confirmPasswordError || isEqual(password, "") || isEqual(confirmPassword, "") || !isEqual(password, confirmPassword);

  return (
    <Grid item>
      <Grid className="authComponentsWrapper" container justifyContent={"center"} alignItems={"center"}>
        <form className="" onSubmit={handleSubmit}>
          <Grid container rowSpacing={2} direction={"column"} textAlign={"center"}>
            <Grid item>
              <Typography className="loginTypographyLight" variant="GothamBlack18">
                Create new password
              </Typography>
            </Grid>
            <Grid item>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  className="loginTextInput"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton className="password-icon" aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={password}
                  error={passwordError}
                  placeholder="Enter new password"
                  required={true}
                  fullWidth
                  onChange={handlePassword}
                  onBlur={handlePasswordBlur}
                />
              </FormControl>
            </Grid>
            {(isPasswordTouched || passwordError) &&
              (isEqual(password, "") ? (
                <Grid container item columnSpacing={2} alignItems={"start"}>
                  <Grid item xs={1}>
                    <ListingCardIcon shape="exclamationError" />
                  </Grid>
                  <Grid item xs={10}>
                    <FormHelperText className="customHelperText">Password should not be empty </FormHelperText>
                  </Grid>
                </Grid>
              ) : (
                <Grid item>
                  {passwordValidationErrors.map((error, index) => (
                    <Grid key={index} container columnSpacing={2} alignItems={"start"}>
                      <Grid item xs={1}>
                        <ListingCardIcon shape="exclamationError" />
                      </Grid>
                      <Grid item xs={10}>
                        <FormHelperText className="customHelperText">{error}</FormHelperText>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              ))}
            <Grid item>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  className="loginTextInput"
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton className="password-icon" aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={confirmPassword}
                  error={confirmPasswordError}
                  placeholder="Confirm password"
                  required={true}
                  fullWidth
                  onChange={handleConfirmPassword}
                  onBlur={handleConfirmPasswordBlur}
                />
              </FormControl>
            </Grid>
            {(isConfirmPasswordTouched || confirmPasswordError) &&
              (isEqual(confirmPassword, "") ? (
                <Grid container item columnSpacing={2} alignItems={"start"}>
                  <Grid item xs={1}>
                    <ListingCardIcon shape="exclamationError" />
                  </Grid>
                  <Grid item xs={10}>
                    <FormHelperText className="customHelperText">Password should not be empty</FormHelperText>
                  </Grid>
                </Grid>
              ) : (
                <>
                  {!isEqual(confirmPassword, password) ? (
                    <Grid container item columnSpacing={2} alignItems={"start"}>
                      <Grid item xs={1}>
                        <ListingCardIcon shape="exclamationError" />
                      </Grid>
                      <Grid item xs={10}>
                        <FormHelperText className="customHelperText">Passwords do not match</FormHelperText>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container item columnSpacing={2} alignItems={"start"}>
                      <Grid item xs={1}>
                        <ListingCardIcon shape="positiveTickGreen" />
                      </Grid>
                      <Grid item xs={10}>
                        <FormHelperText className="customHelperTextSuccess">Passwords match</FormHelperText>
                      </Grid>
                    </Grid>
                  )}
                </>
              ))}
            {updateFailedMsg && (
              <Grid container item columnSpacing={2} alignItems={"start"}>
                <Grid item xs={1}>
                  <ListingCardIcon shape="exclamationError" />
                </Grid>
                <Grid item xs={10}>
                  <FormHelperText className="customHelperText">{updateFailedMsg}</FormHelperText>
                </Grid>
              </Grid>
            )}
            <Grid item>
              <CustomButton
                customClassName="loginBtn"
                dark={false}
                type="submit"
                text={"Submit "}
                rightIcon={<ListingCardIcon shape={"arrowRight"} />}
                fullWidth={true}
                isDisabled={isSubmitDisabled}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
export default CreateNewPassword;
