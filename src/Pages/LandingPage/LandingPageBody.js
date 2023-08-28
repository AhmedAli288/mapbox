import React, { useState, useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import ManseelMap from "../../Components/Map/Map";
import LandingPageExclusiveSection from "./LandingPageExclusiveSection/LandingPageExclusiveSection";
import LandingPageNewDevelopmentSection from "./LandingPageNewDevelopmentSection/LandingPageNewDevelopmentSection";
import ErrorBoundaryFallBack from "../../Components/ErrorBoundaries/ErrorBoundaries";
import { ErrorBoundary } from "react-error-boundary";
import LandingPageInternationalPropertySection from "./LandingPageInternationalPropertySection/LandingPageInternationalPropertySection";
import LandingPageFindArea from "./LandingPageFindArea/LandingPageFindArea";
import LandingPageLinksArea from "./LandingPageLinksArea/LandingPageLinksArea";
import LandingPageSubscribeSection from "./LandingPageSubscribeSection/LandingPageSubscribeSection";
import PageSearchArea from "../LandingPage/LandingPageSearchSection/LandingPageSearchSection";
import AppContext from "../../context/AppContext";
import { getAllExclusives } from "../../network/apiServices";
import { toCarouselArray } from "../../utils/utility";
import { getListings } from "../../network/apiServices";
import { mapAllListingsPayload } from "../../Constants/ConstantValues";
import { useInView } from "react-intersection-observer";
import { cdnPath } from "../../Constants/StaticPagesConstants";
// import { errorToast } from "../../utils/useToast";

function LandingPageBody() {
  const {
    // listings,
    setListings,
    selectedCountry,
    exclusiveListings,
    setExclusiveListings,
  } = useContext(AppContext);
  const [exclusiveFlag, setExclusiveFlag] = useState(false); // Flag state
  const [mapFlag, setMapFlag] = useState(false); // Flag state
  const [exclusiveSectionRef, inViewExclusive] = useInView({ threshold: 0.1 }); // Create a ref and inView state
  const [mapSectionRef, inViewMap] = useInView(); // Create a ref and inView state
  const [mapList, setMapList] = useState([]);

  const fetchData = async () => {
    getListings(mapAllListingsPayload)
      .then((res) => {
        let images = toCarouselArray(
          "title",
          res.data.listings,
          "listingImages"
        );
        setListings(images);
        setMapList(images);
      })
      .catch((err) => {
        setListings([]);
        setMapList([]);
      });
  };

  async function fetchAndSetExclusives() {
    try {
      const exclusives = await getAllExclusives({
        countryName: selectedCountry,
        // portal: "Propertyfinder",
        exclusive: true,
      });
      let images = toCarouselArray(
        "title",
        exclusives.data.listings,
        "listingImages"
      );

      setExclusiveListings(images);
    } catch (error) {
      // console.error("Error fetching exclusives:", error);
    }
  }

  useEffect(() => {
    if (exclusiveFlag) return;
    if (inViewExclusive) {
      fetchAndSetExclusives();
      setExclusiveFlag(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewExclusive]);

  useEffect(() => {
    if (mapFlag) return;
    if (inViewMap) {
      fetchData();
      setMapFlag(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewMap]);

  useEffect(() => {
    setExclusiveFlag(false);
    setMapFlag(false);
  }, [selectedCountry]);

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <Box>
        <PageSearchArea
          heading={"Find your home"}
          hasBuyRent={true}
          imgUrl={`${cdnPath}/hp/HomePage.webp`}
          placeHolderUrl={`${cdnPath}/assets/HomePageHeaderPlaceholder`}
          imgAlt={"Luxurious contemporary house in Dubai"}
        />
        <LandingPageExclusiveSection
          referrer={exclusiveSectionRef}
          exclusives={exclusiveListings}
        />
        {/* Landing Page Map */}
        <Container
          ref={mapSectionRef}
          disableGutters={true}
          className="mapAreaContainer"
        >
          <Box>
            <Typography variant="GothamBlack26">Our Map</Typography>
          </Box>
          <Typography variant="DubaiRegular20">
            Explore the city's best properties
          </Typography>
          <ManseelMap listings={mapList} />
        </Container>
        {/* Landing Page Map */}
        <LandingPageNewDevelopmentSection />
        <LandingPageInternationalPropertySection />
        <LandingPageFindArea />
        <LandingPageLinksArea />
        <LandingPageSubscribeSection />
      </Box>
    </ErrorBoundary>
  );
}

export default LandingPageBody;
