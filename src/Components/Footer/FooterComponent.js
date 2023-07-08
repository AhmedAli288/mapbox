import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Company from "./Company/Company";
import Discover from "./Discover/Discover";
import SocialMedia from "./SocialMedia/SocialMedia";
import MobileApps from "./MobileApps/MobileApps";
import BottomGrid from "./BottomGrid/BottomGrid";
import DisclaimerGrid from "./DisclaimerGrid/DisclaimerGrid";
import "../../Styles/footerStyles.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../ErrorBoundaries/ErrorBoundaries";

const items = [
  {
    id: 1,
    name: "Company",
    component: Company,
  },
  {
    id: 2,
    name: "Discover",
    component: Discover,
  },
  {
    id: 3,
    name: "Mobile Apps",
    component: MobileApps,
  },
  {
    id: 4,
    name: "Social Media",
    component: SocialMedia,
  },
];

function FooterComponent() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <Box>
        <footer className="footerStyles">
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {items.map((item, id) => (
                <Grid item xs={12} md={3} key={id}>
                  <Typography variant="GothamBlack26">{item.name}</Typography>
                  <item.component />
                </Grid>
              ))}
            </Grid>
            <DisclaimerGrid />
            <BottomGrid />
          </Container>
        </footer>
      </Box>
    </ErrorBoundary>
  );
}

export default FooterComponent;
