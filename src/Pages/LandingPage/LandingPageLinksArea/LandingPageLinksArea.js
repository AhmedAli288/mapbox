import React from "react";
import { Container } from "@mui/material";
import {
  popularAreasLinks,
  popularCitiesLinks,
} from "../../../Constants/ConstantValues";
import LinksAreaChildContainer from "./LinksAreaChildContainer/LinksAreaChildContainer";

const LandingPageLinksArea = () => {
  return (
    <Container disableGutters={true} className="linksAreaContainer">
      <LinksAreaChildContainer
        heading={"Real Estate in Popular Areas"}
        subHeading={`Browse listings, view photos, and connect with an agent to schedule a
          viewing in some of our most popular areas.`}
        links={popularAreasLinks}
        colSize={7}
      />

      <LinksAreaChildContainer
        heading={"Real Estate in Popular Cities"}
        subHeading={`Find your next dream home in one of these cities.`}
        links={popularCitiesLinks}
        colSize={3}
      />
    </Container>
  );
};

export default LandingPageLinksArea;
