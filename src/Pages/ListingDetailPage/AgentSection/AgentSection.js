import React from "react";
import { Typography, Grid, Divider } from "@mui/material";
import ContactAgent from "./ContactAgent/ContactAgent";
import ListingAgent from "./ListingAgent/ListingAgent";
import { agentSectionTypes, listingAgents, listingProperties } from "../../../Constants/ConstantValues";

function AgentSection() {
  return (
    <Grid className="agentSectionContainer" id="agentSection" container spacing={2} justifyContent={"space-between"} px={20}>
      <Grid item xs={12} md={5}>
        <Grid item xs={12} mb={2}>
          <Typography className="contactAgentSectionHeading" variant="GothamBlack24" ml={0}>
            Listing Agent
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <ListingAgent agentDetails={listingAgents[3]} sectionType={agentSectionTypes.agentSection} />
        </Grid>
      </Grid>
      <Grid item>
        <Divider orientation="vertical" variant="middle" />
      </Grid>
      <Grid item xs={12} md={5}>
        <Grid item xs={12} mb={2}>
          <Typography className="contactAgentSectionHeading" variant="GothamBlack24" ml={0}>
            Contact Agent
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <ContactAgent propertyDetails={listingProperties[0]} />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default AgentSection;
