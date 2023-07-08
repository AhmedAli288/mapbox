import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import InputWithChangeBtn from "../../../Components/InputWithChangeBtn/InputWithChangeBtn";
import DOBInput from "./DOBInput/DOBInput";
import NationalitySelect from "./NationalitySelect/NationalitySelect";
import CustomButton from "../../../Components/Button/CustomButton";
import "../../../Styles/profile.css";
import ProfileNumInput from "./ProfileNumInput/ProfileNumInput";

const MySettings = () => {
  const [selectedNationality, setSelectedNationality] = useState("Pakistani");
  const [selectedDate, setSelectedDate] = useState("19/02/1997");

  const handleFirstName = (value) => {
    console.log("handleFirstName value:", value);
  };
  const handleLastName = (value) => {
    console.log("handleLastName value:", value);
  };

  return (
    <div>
      <Typography variant="GothamBlack24Bold">Settings</Typography>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={12} sm={5}>
          <InputWithChangeBtn
            initialValue="Ahmed"
            onValueChange={handleFirstName}
            type={"text"}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <InputWithChangeBtn
            initialValue="Ali"
            onValueChange={handleLastName}
            type={"text"}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <input
            type="text"
            value="ahmedali@valcom.ae"
            className="disableEmailInput"
          />
        </Grid>
        <Grid item xs={12} sm={5} className="mt10px">
          <ProfileNumInput />
        </Grid>
        <Grid item xs={12} sm={5} className="datePickerContainer">
          <DOBInput
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </Grid>
        <Grid item xs={12} sm={5} className="mt10px">
          <NationalitySelect
            selectedNationality={selectedNationality}
            setSelectedNationality={setSelectedNationality}
          />
        </Grid>
      </Grid>

      <CustomButton text="Save" customClassName="profileSaveBtn" />
    </div>
  );
};

export default MySettings;
