import React, { useState } from "react";
import { Typography, Grid, Dialog } from "@mui/material";
import { isEqual } from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomButton from "../../../../Components/Button/CustomButton";
import { agentSectionTypes } from "../../../../Constants/ConstantValues";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";

function ListingAgent({ agentDetails, sectionType }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AgentImage = ({ imgPath, imgLabel }) => {
    return <LazyLoadImage className="popUpListingAgentImage" src={imgPath} alt={imgLabel} width={"100%"} />;
  };

  const Designation = ({ name, designation }) => {
    return (
      <Grid container item xs={4} md={12}>
        <Grid item xs={12}>
          <Typography variant={isEqual(sectionType, agentSectionTypes.agentSection) ? "DubaiRegular20Bold" : "DubaiRegular16Bold"}>{name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={isEqual(sectionType, agentSectionTypes.agentSection) ? "DubaiRegular18" : "DubaiRegular14"}>{designation}</Typography>
        </Grid>
      </Grid>
    );
  };

  const AgentDetails = () => {
    return isEqual(sectionType, agentSectionTypes.agentSection) ? (
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {agentDetails.certification.map((certification, index) => {
              return <ListingCardIcon key={index} shape={certification} />;
            })}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="DubaiRegular16" className="colorBlack">
              RERA No. {agentDetails.rera}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="DubaiRegular16" className="colorBlack">
              {agentDetails.spokenLanguages.join(", ")}
            </Typography>
          </Grid>
          <Grid container item rowSpacing={{ xs: 2, lg: 4 }} xs={12}>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Typography variant="DubaiRegular16" className="colorBlack">
                  Area: {agentDetails.area}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="DubaiRegular16" className="colorBlack">
                  Specialization: {agentDetails.specialization}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Typography variant="DubaiRegular16" className="colorBlack">
                  {agentDetails.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="DubaiRegular16" className="colorBlack">
                  {agentDetails.phone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    ) : (
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Designation name={agentDetails.fullname} designation={agentDetails.designation} />
          </Grid>
          <Grid container item spacing={1} xs={12}>
            {agentDetails.certification.map((certification, index) => {
              return (
                <Grid key={index} item>
                  {" "}
                  <ListingCardIcon shape={certification} />{" "}
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="DubaiRegular14" className="colorBlack">
              {agentDetails.spokenLanguages.join(", ")}
            </Typography>
          </Grid>
          <Grid container item rowSpacing={{ xs: 2, lg: 4 }} xs={12}>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Typography variant="DubaiRegular12" className="colorBlack">
                  {agentDetails.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="DubaiRegular12" className="colorBlack">
                  {agentDetails.phone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return isEqual(sectionType, agentSectionTypes.agentSection) ? (
    <Grid container spacing={2}>
      <Grid container item xs={12} sm={6} textAlign={"center"}>
        <Grid item xs={4} md={12}>
          <AgentImage imgPath={agentDetails.imgPath} imgLabel={agentDetails.imgLabel} />
        </Grid>
        <Grid item xs={12}>
          <Designation name={agentDetails.fullname} designation={agentDetails.designation} />
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={6}>
        <AgentDetails />
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <AgentImage imgPath={agentDetails.imgPath} imgLabel={agentDetails.imgLabel} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container height={"100%"} alignContent={"space-between"}>
          <Grid item xs={12} md={8}>
            <AgentDetails />
          </Grid>
          <Grid item xs={8}>
            <CustomButton
              customClassName="viewBookingDetailsBtn"
              onClick={handleClickOpen}
              text={"Book a Viewing"}
              typographyVariant="DubaiRegular16"
              rightIcon={<ListingCardIcon shape={"arrowRight"} />}
            />
            <Dialog open={open} onClose={handleClose}>
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ListingAgent;
