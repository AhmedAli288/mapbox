import React from "react";
import {

  
  TextField,
  Stack,
 
  FormHelperText,
} from "@mui/material";
import CustomButton from "../../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { Link } from "react-router-dom";

const NameForm = ({
  fname,
  lname,
  formErrors,
  handleInputChange,
  handleSubmitRegisterNames,
  ButtonRightArrow,
  exclusivesButtonHovered
}) => {
  return (
    <form onSubmit={handleSubmitRegisterNames} width="25%"className="authForm">
  
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} justifyContent="center" >
          <TextField
            placeholder="First name"
            id="firstName"
            name="fname"
            fullWidth
            size="small"
            value={fname}
            onChange={handleInputChange}
            
          />
          <TextField
            placeholder="Last name"
            id="lastName"
            name="lname"
            fullWidth
            size="small"
            value={lname}
            onChange={handleInputChange}
            
          />
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="flex-start" className="signUpFormErrorsWrapper">
          {formErrors.fnameError && (
            <>
              <ListingCardIcon shape="exclamationError" />
              <FormHelperText error>
                First name should not be empty.
              </FormHelperText>
            </>
          )}
          {formErrors.lnameError && !formErrors.fnameError && (
            <>
              <ListingCardIcon shape="exclamationError" />
              <FormHelperText error>
                Last name should not be empty.
              </FormHelperText>
            </>
          )}
        </Stack>
        <Stack
          direction="column"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          // mt={1}
        >

          <CustomButton
            text="Sign up"
            type="submit"
            rightIcon={<ButtonRightArrow />}
            dark={exclusivesButtonHovered[0]}
            variant="outlined"
            customClassName="signInButton"
          />
          <div className="registerAndloginDivMargin">
            Already have an account?{" "}
            <Link className="authLinks" to="/login">
              Login
            </Link>
          </div>
        </Stack>
        </Stack>
  
    </form>
  );
};

export default NameForm;
