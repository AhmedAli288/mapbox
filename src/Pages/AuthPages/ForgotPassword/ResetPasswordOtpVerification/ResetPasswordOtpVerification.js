import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../../../Components/Button/CustomButton";
import EmailOTPValidation from "../OTPAuth/OTPAuthForm/EmailOTPValidation/EmailOTPValidation";
import { validateEmailOtp, getEmailOtp } from "../../../../network/apiServices";
import { ButtonRightArrow } from "../../../../Assets/SVG/Common/CommonSvgs";
import { isEqual } from "lodash";

function ResetPasswordOtpVerification({ email, advanceCurrentStep }) {
  const [emailOTPValue, setEmailOTPValue] = useState(Array(6).fill(null));
  const [formErrors, setFormErrors] = useState({
    emailOTPValueError: null,
    emailOTPExpiryError: null,
    emailOTPInvalidError: null,
  });
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isOTPFilled, setIsOTPFilled] = useState(false); // Add the isOTPFilled state

  const emailOTPstring = emailOTPValue.join("");

  const validateOTP = (otp) => {
    // Check if any field is empty
    if (otp.some((value) => !value)) {
      return false;
    }

    // Check if any field contains a character that is not from 0-9
    const regex = /^[0-9]*$/;
    if (otp.some((value) => !regex.test(value))) {
      return false;
    }

    // All checks passed, OTP is valid
    return true;
  };

  const verificationOfOTP = async () => {
    if (!isEmailVerified) {
      try {
        const emailOtpValidationData = await validateEmailOtp({
          email: email,
          otp: emailOTPstring,
        });

        switch (emailOtpValidationData.data.status) {
          case "VERIFIED":
            setIsEmailVerified(true);
            setFormErrors((prevState) => ({
              ...prevState,
              emailOTPValueError: null,
              emailOTPExpiryError: null,
              emailOTPInvalidError: null,
            }));
            break;
          case "EXPIRED":
            setFormErrors((prevState) => ({
              ...prevState,
              emailOTPExpiryError: true,
            }));
            // console.log("Email expired");
            break;
          case "INVALID":
            setFormErrors((prevState) => ({
              ...prevState,
              emailOTPInvalidError: true,
            }));
            // console.log("Email invalid");
            break;
          default:
            // Handle default case if necessary
            break;
        }
      } catch (error) {
        console.error("Error occurred during email OTP validation:", error); //toast
      }
    }

    if (isEmailVerified) {
      setFormErrors((prevState) => ({
        ...prevState,
        emailOTPValueError: null,
        emailOTPExpiryError: null,
        emailOTPInvalidError: null,
      }));
      //toast
      advanceCurrentStep();
      // setCurrentStep((prevStep) =>
      //   prevStep < maxStep ? prevStep + 1 : (prevStep = 1)
      // );

      // console.log("Either SMS or Email verified");
    }
  };

  const handleOTPSubmit = async () => {
    const isEmailOTPValid = validateOTP(emailOTPValue);
    console.log("handleOTPSubmit was clicked. isEmailOTPValid:", isEmailOTPValid);
    setFormErrors((prevState) => ({
      ...prevState,
      emailOTPValueError: !isEmailOTPValid,
    }));

    if (isEmailOTPValid) {
      setFormErrors((prevState) => ({
        ...prevState,
        emailOTPValueError: null,
      }));
      verificationOfOTP();
    }
  };
  // Update isOTPFilled state based on OTP inputs
  // useEffect(() => {
  //   const isFilled = emailOTPValue.every((value) => !isEqual(value, ""));
  //   setIsOTPFilled(isFilled);
  // }, [emailOTPValue]);

  return (
    <Grid item>
      <Grid className="authComponentsWrapper " container justifyContent={"center"} alignItems={"center"}>
        <div className="">
          <Grid container rowSpacing={2} direction={"column"} textAlign={"center"}>
            <Grid item>
              <Typography className="loginTypographyLight" variant="GothamBlack18">
                Reset password
              </Typography>
            </Grid>

            <Grid item>
              <EmailOTPValidation
                handleEmailOTPSubmit={handleOTPSubmit}
                emailOTPValue={emailOTPValue}
                setEmailOTPValue={setEmailOTPValue}
                formErrors={formErrors}
                handleResend={() => {
                  getEmailOtp({ email: email });
                }}
                isEmailVerified={isEmailVerified}
                email={email}
                customHeading={`We have sent an email to ${email} with instructions to reset your password. Kindly check your inbox and input the OTP below:`}
              />
            </Grid>
            <Grid item>
              <CustomButton
                customClassName="loginBtn"
                dark={false}
                type="submit"
                text={"Continue "}
                rightIcon={<ButtonRightArrow />}
                fullWidth={true}
                onClick={handleOTPSubmit}
                // isDisabled={!isOTPFilled}
              />
            </Grid>
            <Grid item>
              <Typography className="loginTypographyLight" variant="DubaiRegular18">
                Already have an account?{" "}
                <Link className="loginLinkLight" to="/login">
                  <Typography className="loginTypographyLight" variant="DubaiRegular18">
                    Login
                  </Typography>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
export default ResetPasswordOtpVerification;
