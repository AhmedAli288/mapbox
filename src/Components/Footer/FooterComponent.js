import React, { useContext, useEffect, useState } from "react";
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
import AppContext from "../../context/AppContext";
import { getAllSearchData } from "../../network/apiServices";
import { errorToast } from "../../utils/useToast";

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
  const [pageLoaded, setPageLoaded] = useState(false);
  const { setAllSearchData, selectedCountry } = useContext(AppContext);

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setPageLoaded(true); // Set pageLoaded to true after a delay
      }, 400);
    };
  }, []);

  
  useEffect(() => {
    if (pageLoaded) {
      async function fetchAllSearchData() {
        try {
          const fetchData = await getAllSearchData({
            country: selectedCountry,
          });
          setAllSearchData(fetchData.data.resultData);
        } catch (error) {
          errorToast(`All search data: ${error} `);
        }
      }
      fetchAllSearchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageLoaded]);
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <Box>
        <footer className="footerStyles">
          <Container disableGutters={true} className="linksAreaContainer">
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
