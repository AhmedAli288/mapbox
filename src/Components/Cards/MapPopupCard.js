import React from "react";
import { Box, Grid, Divider } from "@mui/material";

const MapPopupCard = ({ features }) => {
  return (
    <div id="popup-container" className="popup popUpMainContainer">
      <div className="mapPopupHeader">
        <h3>{features[0].properties.building}</h3>
        <p>{features[0].properties.area}</p>
        <p>{features[0].properties.residential_units}</p>
      </div>

      <div className="mapPopupBody">
        {features.map((item, ind) => {
          const {
            sale_or_rent,
            purchase_price,
            rent_price,
            beds,
            baths,
            built_up_area_m2,
            built_up_area_sqft,
          } = item.properties;
          return (
            <a key={ind} href="/" target="_blank" className="popupItemLink">
              <Grid container className="popupItemContainer">
                <Grid className="popupItemImg" item>
                  <Box
                    component="img"
                    src="/images/HomePageHeader.jpg"
                    alt="Popup Thumbnail"
                  />
                </Grid>
                <Grid className="popupItemDetails" item>
                  <h6>
                    AED{" "}
                    {sale_or_rent === "For Rent" ? rent_price : purchase_price}
                  </h6>
                  <Grid container className="popUpDetails">
                    <Grid item>
                      <Box className="popUpDetailsValues">
                        <p>{beds ? beds : 0}</p>
                        <p>Beds</p>
                      </Box>
                    </Grid>
                    <Divider orientation="vertical" />
                    <Grid item>
                      <Box className="popUpDetailsValues">
                        <p>{baths}</p>
                        <p>Baths</p>
                      </Box>
                    </Grid>
                    <Divider orientation="vertical" />
                    <Grid item>
                      <Box className="popUpDetailsValues">
                        <p>{built_up_area_m2}</p>
                        <p>m²</p>
                      </Box>
                    </Grid>
                    <Divider orientation="vertical" />
                    <Grid item>
                      <Box className="popUpDetailsValues">
                        <p>{built_up_area_sqft}</p>
                        <p>Sq.ft</p>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MapPopupCard;
