import React, { useState } from "react";
import { TextField, Stack, FormHelperText, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import CountryCallingCode from "../CountryCallingCode/CountryCallingCode";
import { CallingCountryCodes } from "../../../../Assets/SVG/Flags/CallingCountryCodes/CallingCountryCodes";

function EmailPhoneNumberInput({
  email,
  mobileNumber,
  formErrors,
  handleInputChange,
  handleSubmitPhoneAndEmail,
  exclusivesButtonHovered,
  ButtonRightArrow,
  callingCode,
  setCallingCode,
  loading,
}) {
  const [validMobileNumber, setValidMobileNumber] = useState("555555555");

  return (
    <form onSubmit={handleSubmitPhoneAndEmail} width="25%" className="authForm">
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
          {loading ? (
            <Skeleton
              variant="rectangular"
              width={106}
              height={42}
              sx={{ bgcolor: "grey.900" }}
            />
          ) : (
            <CountryCallingCode
              setCallingCode={setCallingCode}
              callingCode={callingCode}
              setValidMobileNumber={setValidMobileNumber}
            />
          )}

          {loading ? (
            <Skeleton
              variant="rectangular"
              width={250}
              height={42}
              sx={{ bgcolor: "grey.900" }}
            />
          ) : (
            <TextField
              placeholder="Mobile Number"
              id="mobileNumber"
              name="mobileNumber"
              fullWidth
              size="small"
              onChange={handleInputChange}
              type="tel"
              InputProps={{
                inputMode: "numeric",
              }}
            />
          )}
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="flex-start"
          className=" mobileFormError"
        >
          {formErrors.mobileNumberError && (
            <>
              <ListingCardIcon shape="exclamationError" />
              <FormHelperText error>
                Please Input a valid mobile Number. eg {validMobileNumber}
                {/* {()=>validNumber(CallingCountryCodes, callingCode)} */}
              </FormHelperText>
            </>
          )}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center">
          {loading ? (
            <Skeleton
              variant="rectangular"
              width={250}
              height={42}
              sx={{ bgcolor: "grey.900" }}
            />
          ) : (
            <TextField
              placeholder="Email"
              id="email"
              name="email"
              fullWidth
              size="small"
              onChange={handleInputChange}
            />
          )}
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="flex-start"
          className=" EmailFormError"
        >
          {formErrors.emailError && (
            <>
              <ListingCardIcon shape="exclamationError" />
              <FormHelperText error>Please input a valid email</FormHelperText>
            </>
          )}
          {formErrors.existingEmailError && !formErrors.emailError && (
            <>
              <ListingCardIcon shape="exclamationError" />
              <FormHelperText error>Email is already registered</FormHelperText>
            </>
          )}
        </Stack>
        <Stack
          direction="column"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {loading ? (
            <Skeleton
              variant="rectangular"
              width={250}
              height={42}
              sx={{ bgcolor: "grey.900" }}
            />
          ) : (
            <CustomButton
              text="Sign up"
              type="submit"
              rightIcon={<ButtonRightArrow />}
              dark={exclusivesButtonHovered[0]}
              variant="outlined"
              customClassName="signInButton"
            />
          )}
          <div className="registerAndloginDivMargin">
            Already have an account?{" "}
            <Link className="authLinks" to="/login">
              {" "}
              Login
            </Link>
          </div>
        </Stack>
      </Stack>
    </form>
  );
}

export default EmailPhoneNumberInput;
