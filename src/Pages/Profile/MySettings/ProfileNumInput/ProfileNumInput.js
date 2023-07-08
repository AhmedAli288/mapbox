import React, { useState } from "react";
import { Grid } from "@mui/material";
import CountryCallingCode from "../../../AuthPages/Register/CountryCallingCode/CountryCallingCode";
import InputWithChangeBtn from "../../../../Components/InputWithChangeBtn/InputWithChangeBtn";

const ProfileNumInput = () => {
  const [callingCode, setCallingCode] = useState("971");
  const [validMobileNumber, setValidMobileNumber] = useState("555555555");
  const [enabled, setEnabled] = useState(true);
  const handlePhoneNumber = (value) => {
    console.log("handlePhoneNumber value:", value);
  };

  return (
    <Grid container>
      <Grid item xs={3.5}>
        <CountryCallingCode
          setCallingCode={setCallingCode}
          callingCode={callingCode}
          setValidMobileNumber={setValidMobileNumber}
          minWidth={120}
          height={40}
          customCLass="profileCountryCode"
          enable={enabled}
        />
      </Grid>
      <Grid item xs={8.3}>
        <InputWithChangeBtn
          initialValue="501108893"
          onValueChange={handlePhoneNumber}
          type={"number"}
          setEnabled={setEnabled}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileNumInput;
