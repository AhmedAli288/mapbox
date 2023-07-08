import React from "react";
import { Typography, Grid } from "@mui/material";
import ListingAgent from "../../Pages/ListingDetailPage/AgentSection/ListingAgent/ListingAgent";
import { listingAgents, agentSectionTypes } from "../../Constants/ConstantValues";

function OtherAgents({ title }) {
  //retrive agent details
  return (
    <Grid id="otherAgents" container justifyContent={"center"}>
      <Grid item xs={10}>
        <Grid item xs={12} my={2}>
          <Typography className="contactAgentSectionHeading" variant="DubaiRegular24Bold" ml={0}>
            {title}
          </Typography>
        </Grid>
        <Grid container rowSpacing={5}>
          {listingAgents.slice(0, 4).map((agent, index) => (
            <Grid key={index} item xs={6}>
              <ListingAgent agentDetails={agent} sectionType={agentSectionTypes.otherAgents} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default OtherAgents;
