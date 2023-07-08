import React, { useState } from "react";
import { FormControl, IconButton, OutlinedInput, InputAdornment, Typography, Grid, FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomButton from "../../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { validatePassword } from "../../../../utils/utility";
import { ButtonRightArrow } from "../../../../Assets/SVG/Common/CommonSvgs";
import { passwordValidationCriteria } from "../../../../Constants/ConstantValues";
import { isEqual } from "lodash";
import { signUp } from "../../../../network/apiServices";
// import SignIn from "../../SignIn/SignIn";
import { useNavigate } from 'react-router-dom';

function CreatePassword({password, setPassword,signUpObject, setCurrentStep, maxStep,currentStep}) {
 
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] = useState(false);
  const [passwordValidationErrors, setPasswordValidationErrors] = useState([]);
  // const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    if (!isEqual(event.target.value, password)) {
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
  const isSubmitDisabled = passwordError || confirmPasswordError || !isEqual(password, confirmPassword) || isEqual(password, "") || isEqual(confirmPassword, "");

  let isStepIncremented =false
  const handleSubmit = async (event) => {
    event.preventDefault();
    // handlePassword(event)
    // handleConfirmPassword(event)
  
    if (!passwordError && !confirmPasswordError) {
      console.log("button was clicked",currentStep, maxStep );
      
      const signUpResponse = await signUp(signUpObject);
      console.log(signUpResponse)
      // navigate('/signin');
      if(!isStepIncremented){
        switch(signUpResponse.data.status){
          case "SUCCESS":
            isStepIncremented=true
            setCurrentStep((prevStep) =>
            prevStep < maxStep ? prevStep + 1 : prevStep
          );
      }
  
      //  return <SignIn/>
      // Perform any additional actions here, such as submitting the form
    }
  };
}
  
  return (
    <Grid item>
      <Grid className="loginFormContainer" container maxWidth={"100%"}justifyContent={"center"} alignItems={"center"}>
        <form onSubmit={handleSubmit}>
          <Grid container rowSpacing={2} direction={"column"} textAlign={"center"}>
           
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
                  
                  fullWidth
                  onChange={handlePassword}
                  onBlur={handlePasswordBlur}
                />

                {(isPasswordTouched || passwordError) && (
                  <FormHelperText className="customHelperText">
                    {isEqual(password, "") ? (
                      <Grid container spacing={1} alignItems={"center"}>
                        <Grid item>
                          <ListingCardIcon shape="exclamationError" />
                        </Grid>
                        <Grid item> Password should not be empty</Grid>
                      </Grid>
                    ) : (
                      passwordValidationErrors.map((error, index) => (
                        <Grid key={index} container spacing={1} alignItems={"center"}>
                          <Grid item>
                            <ListingCardIcon shape="exclamationError" />
                          </Grid>
                          <Grid item>{error}</Grid>
                        </Grid>
                      ))
                    )}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
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
            
                  fullWidth
                  onChange={handleConfirmPassword}
                  onBlur={handleConfirmPasswordBlur}
                />
                {(isConfirmPasswordTouched || confirmPasswordError) && (
                  <FormHelperText className="customHelperText">
                    {isEqual(confirmPassword, "") ? (
                      <Grid container spacing={1} alignItems={"center"}>
                        <Grid item>
                          <ListingCardIcon shape="exclamationError" />
                        </Grid>
                        <Grid item> Password should not be empty</Grid>
                      </Grid>
                    ) : (
                      <>
                        {isEqual(confirmPassword, password) ? (
                          <Grid container spacing={1} alignItems={"center"}>
                            <Grid item>
                              <ListingCardIcon shape="exclamationError" />
                            </Grid>
                            <Grid item>Passwords match</Grid>
                          </Grid>
                        ) : (
                          <Grid container spacing={1} alignItems={"center"}>
                            <Grid item>
                              <ListingCardIcon shape="exclamationError" />
                            </Grid>
                            <Grid item>Passwords do not match</Grid>
                          </Grid>
                        )}
                      </>
                    )}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

         
            <Grid item>
            <CustomButton
              text="Sign up"
              type="submit"
              rightIcon={<ButtonRightArrow />}
              dark={false}
              variant="outlined"
              customClassName="signInButton"
              isDisabled={isSubmitDisabled}
              onClick={handleSubmit}
            />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
export default CreatePassword;
