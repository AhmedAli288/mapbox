import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  FloorPlanIcon,
  VirtualTourIcon,
  MapViewIcon,
} from "../../Assets/SVG/Common/CommonSvgs";
import Thumbnails from "./Thumbnails";

const FLOOR_PLAN = "floorPlan";
const MAP_VIEW = "map";
const VIDEO = "video";

const ThumbnailCarouselBottom = ({
  images,
  Ref,
  setActiveStep,
  onViewChange,
  floorPlan = false,
  videoTour = false,
  mapView = false,
}) => {
  const handleFloorPlanClick = () => {
    onViewChange(FLOOR_PLAN);
  };

  const handleVirtualTourClick = () => {
    onViewChange(VIDEO);
  };

  const handleMapClick = () => {
    onViewChange(MAP_VIEW);
  };

  const gridItemCount = [floorPlan, videoTour, mapView].filter(Boolean).length;

  const firstGridItemSize = 12 - gridItemCount * 2;
  const additionalGridItemsSize = 2;

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={12} sm={12} md={firstGridItemSize}>
        <Thumbnails
          images={images}
          Ref={Ref}
          setActiveStep={setActiveStep}
          onViewChange={onViewChange}
        />
      </Grid>

      {floorPlan && (
        <Grid item xs={4} sm={4} md={additionalGridItemsSize}>
          <Box className="floorPlanButton" onClick={handleFloorPlanClick}>
            <FloorPlanIcon />
            <Typography
              variant="DubaiRegular14"
              className="floorPlanButtonText"
            >
              Floor Plan
            </Typography>
          </Box>
        </Grid>
      )}

      {videoTour && (
        <Grid item xs={4} sm={4} md={additionalGridItemsSize}>
          <Box className="floorPlanButton" onClick={handleVirtualTourClick}>
            <VirtualTourIcon />
            <Typography
              variant="DubaiRegular14"
              className="floorPlanButtonText"
            >
              Virtual Tour
            </Typography>
          </Box>
        </Grid>
      )}

      {mapView && (
        <Grid item xs={4} sm={4} md={additionalGridItemsSize}>
          <Box className="floorPlanButton" onClick={handleMapClick}>
            <MapViewIcon />
            <Typography
              variant="DubaiRegular14"
              className="floorPlanButtonText"
            >
              Map View
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default ThumbnailCarouselBottom;
