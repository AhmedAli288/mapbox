import React, { useState } from "react";
import { TextField, FormControl, IconButton, OutlinedInput, InputAdornment, Typography, Grid, FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { isEmail } from "validator";
import CustomButton from "../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { validatePassword, objToBase64 } from "../../../utils/utility";
import { userLogin } from "../../../network/apiServices";
import { isEqual } from "lodash";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [invalidEmailPassword, setInvalidEmailPassword] = useState(false);
  const [passwordValidationErrors, setPasswordValidationErrors] = useState([]);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [loginFailedMsg, setLoginFailedMsg] = useState("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError || passwordError || isEqual(email, "") || isEqual(password, "")) {
      setInvalidEmailPassword(true);
    } else {
      let data = {
        username: email,
        password: password,
      };
      userLogin(data)
        .then((data) => {
          if (!isEqual(data.data.status, "SUCCESS")) {
            setLoginFailedMsg(data.data.message);
            setIsEmailTouched(false);
            setIsPasswordTouched(false);
          } else {
            //update app reference
            // localStorage.setItem("reference_key", base64Generator());
            // localStorage.setItem("app_reference", JSON.stringify(data.data.authToken));
            localStorage.setItem("user_details", objToBase64(data.data.userDetails));
            //redirect
            navigate("/");
          }
        })
        .catch((error) => {
          console.log("Login Error: ", error);
        });

      setEmail("");
      setPassword("");
      setIsEmailTouched(false);
      setIsPasswordTouched(false);
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
  const handlePassword = (event) => {
    setPassword(event.target.value);
    // const validation = validatePassword(event.target.value);
    // if (validation.isValid) {
    //   setPasswordError(false);
    //   setPasswordValidationErrors([]);
    // } else {
    //   setPasswordError(true);
    //   setPasswordValidationErrors(validation.errors);
    // }
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
  };
  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
  };

  const isLoginButtonDisabled = emailError || passwordError || isEqual(email, "") || isEqual(password, "");

  return (
    <Grid item>
      <Grid className="authComponentsWrapper" container justifyContent={"center"} alignItems={"center"}>
        <form className="" onSubmit={handleSubmit}>
          <Grid container rowSpacing={2} direction={"column"} textAlign={"center"}>
            <Grid item>
              <Typography className="loginTypographyLight" variant="GothamBlack18">
                Welcome back
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
                    <FormHelperText className="customHelperText">Email address should not be empty</FormHelperText>
                  </Grid>
                </Grid>
              ) : emailError ? (
                <Grid container item columnSpacing={2} alignItems={"start"}>
                  <Grid item xs={1}>
                    <ListingCardIcon shape="exclamationError" />
                  </Grid>
                  <Grid item xs={10}>
                    <FormHelperText className="customHelperText">Invalid email</FormHelperText>
                  </Grid>
                </Grid>
              ) : (
                ""
              ))}
            <Grid item>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  className="loginTextInput"
                  id={"password"}
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
                  placeholder="Password"
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
                    <FormHelperText className="customHelperText">Password should not be empty</FormHelperText>
                  </Grid>
                </Grid>
              ) : (
                // passwordValidationErrors.map((error, index) => (
                //   <Grid key={index} container spacing={1} alignItems={"center"}>
                //     <Grid item>
                //       <ListingCardIcon shape="exclamationError" />
                //     </Grid>
                //     <Grid item>
                //       <FormHelperText className="customHelperText">{error}</FormHelperText>
                //     </Grid>
                //   </Grid>
                // ))
                ""
              ))}
            {invalidEmailPassword && (
              <Grid container item columnSpacing={2} alignItems={"start"}>
                <Grid item xs={1}>
                  <ListingCardIcon shape="exclamationError" />
                </Grid>
                <Grid item xs={10}>
                  <FormHelperText className="customHelperText">{"Invalid email or password"}</FormHelperText>
                </Grid>
              </Grid>
            )}
            {loginFailedMsg && (
              <Grid container item columnSpacing={2} alignItems={"start"}>
                <Grid item xs={1}>
                  <ListingCardIcon shape="exclamationError" />
                </Grid>
                <Grid item xs={10}>
                  <FormHelperText className="customHelperText">{loginFailedMsg}</FormHelperText>
                </Grid>
              </Grid>
            )}

            <Grid item>
              <Link className="loginLinkLight" to="/forgot-password">
                <Typography className="loginTypographyLight" variant="DubaiRegular18">
                  Forgot password
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <CustomButton
                customClassName="loginBtn"
                dark={false}
                type="submit"
                text={"Login "}
                rightIcon={<ListingCardIcon shape={"arrowRight"} />}
                fullWidth={true}
                isDisabled={isLoginButtonDisabled}
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
export default Login;
