import React, { useState } from "react";
import { Grid, TextField, Link } from "@mui/material";
import ListingCardIc from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { isEmail, isMobilePhone } from "validator";
import CustomButton from "../../../../Components/Button/CustomButton";

function ContactAgent({ propertyDetails }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(`I would like more information about the ${propertyDetails.propertyType} in ${propertyDetails.building} Reference Number ${propertyDetails.referenceNo}`);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  let message_placeholder = `I would like more information about the ${propertyDetails.propertyType} in ${propertyDetails.building} Reference Number ${propertyDetails.referenceNo}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError || phoneError) {
      //alert user
    } else {
      // Perform any additional actions here, such as submitting the form
      let data = {
        name,
        email,
        phone,
        message,
      };
      console.log("data: ", data);
      setEmail("");
      setPhone("");
      setMessage(message_placeholder);
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

  const handlePhone = (event) => {
    setPhone(event.target.value);
    if (!isMobilePhone(event.target.value)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  return (
    <Grid item xs={12}>
      <Grid container item xs={12} bgcolor={"black"} p={2} borderRadius={2} textAlign={"center"}>
        <form onSubmit={handleSubmit}>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <TextField
                id="name"
                className="agentTextInput"
                type="text"
                hiddenLabel
                placeholder="John Doe"
                value={name}
                required={true}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                className="agentTextInput"
                placeholder="example@abc.com"
                hiddenLabel
                type="email"
                value={email}
                error={emailError}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                required={true}
                helperText={emailError ? "Invalid email" : ""}
                FormHelperTextProps={{ disabled: true }}
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phone"
                className="agentTextInput"
                placeholder="+971-234-567-89"
                hiddenLabel
                type="tel"
                value={phone}
                error={phoneError}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                required={true}
                helperText={phoneError ? "Invalid phone number" : ""}
                onChange={handlePhone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="textbox"
                className="agentTextArea"
                hiddenLabel
                type="text"
                value={message}
                placeholder={message_placeholder}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                multiline
                maxRows={5}
                minRows={4}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} mt={1}>
              <CustomButton customClassName="contactAgentSendMessage" dark={false} type="submit" text={"Send Message "} rightIcon={<ListingCardIc shape={"arrowRight"} />} fullWidth={false} />
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} p={2} textAlign={"center"}>
        <Link href="#all-listing-agents">
          <CustomButton
            dark={false}
            onClick={() => {
              console.log("view all agents");
            }}
            text={"View all agents "}
            typographyVariant="DubaiRegular18"
            rightIcon={<ListingCardIc shape={"arrowRight"} />}
            fullWidth={false}
          />
        </Link>
      </Grid>
    </Grid>
  );
}
export default ContactAgent;
