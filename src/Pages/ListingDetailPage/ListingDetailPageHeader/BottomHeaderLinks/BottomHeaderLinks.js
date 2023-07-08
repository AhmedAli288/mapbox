import React from "react";
import { Typography, Box, Divider, Stack, Link } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { isEqual } from "lodash";

function BottomHeaderLinks({ page }) {
  const menuItems = [
    { path: "/gallery", text: "Gallery", sectionId: isEqual(page, "listingDetails") ? "propertyDetailSection" : "buildingDetailSection" },
    { path: "/amenities", text: "Amenities", sectionId: isEqual(page, "listingDetails") ? "listingAmenitiesSection" : "buildingAmenitiesSection" },
    { path: "/location", text: "Location", sectionId: isEqual(page, "listingDetails") ? "locationScoringSection" : "locationScoringSection" },
    { path: "/scoring", text: "Scoring", sectionId: isEqual(page, "listingDetails") ? "locationScoringSection" : "locationScoringSection" },
    { path: "/mortgage-fees", text: "Mortgage Fees", sectionId: isEqual(page, "listingDetails") ? "mortgageSection" : "" },
    { path: "/build", text: "Build", sectionId: isEqual(page, "listingDetails") ? "buildingSection" : "" },
    { path: "/listing-agents", text: "Listing Agents", sectionId: isEqual(page, "listingDetails") ? "agentSection" : "otherAgents" },
    { path: "/school", text: "School", sectionId: isEqual(page, "listingDetails") ? "nearbySchoolsSection" : "" },
    { path: "/neighborhood", text: "Neighborhood", sectionId: isEqual(page, "listingDetails") ? "neighborhoodSection" : "neighborhoodSection" },
  ];
  return (
    <Box className="bottomHeaderLinksWrapper" elevation={3}>
      <Stack
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        divider={<Divider orientation="vertical" flexItem color="black" />}
        justifyContent="flex-start"
        alignItems="flex-start"
        className="bottomHeaderLinks"
      >
        {menuItems.map((menuItem, index) => (
          <ScrollLink key={index} to={menuItem.sectionId} smooth={true} offset={-300} duration={500}>
            <Link to={menuItem.path} className="bottomHeaderLinks" key={index}>
              <Typography variant="DubaiRegular16" key={index} text={menuItem.text}>
                {menuItem.text}
              </Typography>
            </Link>
          </ScrollLink>
        ))}
      </Stack>
    </Box>
  );
}

export default BottomHeaderLinks;
