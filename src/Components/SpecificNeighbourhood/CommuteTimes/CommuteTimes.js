import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";

const CommuteTimes = ({
  dxbairport,
  dwcairport,
  publicbeach,
  dubaimall,
  expo2020,
  dubaimarina,
}) => {
  return (
    <div>
      <Typography variant="GothamBlack24">Commute Times</Typography>
      <Grid container mt={1}>
        <Grid item xs={4}>
          <Box className="commuteTimeHeading">
            <Typography variant="DubaiRegular18Bold">
              Dubai DXB Airport
            </Typography>
          </Box>
          <Stack direction="row">
            <Stack direction="column" mr={1}>
              <Typography variant="DubaiRegular18Bold">Distance</Typography>
              <Typography variant="DubaiRegular18Bold">By Car</Typography>
              <Typography variant="DubaiRegular18Bold">By Metro/Bus</Typography>
              <Typography variant="DubaiRegular18Bold">By Walking</Typography>
            </Stack>

            <Stack direction="column">
              <Typography variant="DubaiRegular18">
                {dxbairport.distance} km
              </Typography>
              <Typography variant="DubaiRegular18">
                {dxbairport.car} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {dxbairport.metro} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {dxbairport.walking
                  ? dxbairport.walking + " min"
                  : "don't even think about it"}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Box className="commuteTimeHeading">
            <Typography variant="DubaiRegular18Bold">
              Dubai DWC Airport
            </Typography>
          </Box>
          <Stack direction="row">
            <Stack direction="column" mr={1}>
              <Typography variant="DubaiRegular18Bold">Distance</Typography>
              <Typography variant="DubaiRegular18Bold">By Car</Typography>
              <Typography variant="DubaiRegular18Bold">By Metro/Bus</Typography>
              <Typography variant="DubaiRegular18Bold">By Walking</Typography>
            </Stack>

            <Stack direction="column">
              <Typography variant="DubaiRegular18">
                {dwcairport.distance} km
              </Typography>
              <Typography variant="DubaiRegular18">
                {dwcairport.car} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {dwcairport.metro} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {dwcairport.walking
                  ? dwcairport.walking + " min"
                  : "don't even think about it"}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Box className="commuteTimeHeading">
            <Typography variant="DubaiRegular18Bold">Public Beach</Typography>
          </Box>
          <Stack direction="row">
            <Stack direction="column" mr={1}>
              <Typography variant="DubaiRegular18Bold">Distance</Typography>
              <Typography variant="DubaiRegular18Bold">By Car</Typography>
              <Typography variant="DubaiRegular18Bold">By Metro/Bus</Typography>
              <Typography variant="DubaiRegular18Bold">By Walking</Typography>
            </Stack>

            <Stack direction="column">
              <Typography variant="DubaiRegular18">
                {publicbeach.distance} km
              </Typography>
              <Typography variant="DubaiRegular18">
                {publicbeach.car} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {publicbeach.metro} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {publicbeach.walking
                  ? publicbeach.walking + " min"
                  : "don't even think about it"}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item xs={4}>
          <Box className="commuteTimeHeading">
            <Typography variant="DubaiRegular18Bold">
              Dubai Mall/Burj Khalifa
            </Typography>
          </Box>
          <Stack direction="row">
            <Stack direction="column" mr={1}>
              <Typography variant="DubaiRegular18Bold">Distance</Typography>
              <Typography variant="DubaiRegular18Bold">By Car</Typography>
              <Typography variant="DubaiRegular18Bold">By Metro/Bus</Typography>
              <Typography variant="DubaiRegular18Bold">By Walking</Typography>
            </Stack>

            <Stack direction="column">
              <Typography variant="DubaiRegular18">
                {dubaimall.distance} km
              </Typography>
              <Typography variant="DubaiRegular18">
                {dubaimall.car} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {dubaimall.metro} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {dubaimall.walking
                  ? dubaimall.walking + " min"
                  : "don't even think about it"}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Box className="commuteTimeHeading">
            <Typography variant="DubaiRegular18Bold">Expo 2020</Typography>
          </Box>
          <Stack direction="row">
            <Stack direction="column" mr={1}>
              <Typography variant="DubaiRegular18Bold">Distance</Typography>
              <Typography variant="DubaiRegular18Bold">By Car</Typography>
              <Typography variant="DubaiRegular18Bold">By Metro/Bus</Typography>
              <Typography variant="DubaiRegular18Bold">By Walking</Typography>
            </Stack>

            <Stack direction="column">
              <Typography variant="DubaiRegular18">
                {expo2020.distance} km
              </Typography>
              <Typography variant="DubaiRegular18">
                {expo2020.car} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {expo2020.metro} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {expo2020.walking
                  ? expo2020.walking + " min"
                  : "don't even think about it"}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Box className="commuteTimeHeading">
            <Typography variant="DubaiRegular18Bold">Dubai Marina</Typography>
          </Box>
          <Stack direction="row">
            <Stack direction="column" mr={1}>
              <Typography variant="DubaiRegular18Bold">Distance</Typography>
              <Typography variant="DubaiRegular18Bold">By Car</Typography>
              <Typography variant="DubaiRegular18Bold">By Metro/Bus</Typography>
              <Typography variant="DubaiRegular18Bold">By Walking</Typography>
            </Stack>

            <Stack direction="column">
              <Typography variant="DubaiRegular18">
                {dubaimarina.distance} km
              </Typography>
              <Typography variant="DubaiRegular18">
                {dubaimarina.car} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {dubaimarina.metro} min
              </Typography>
              <Typography variant="DubaiRegular18">
                {dubaimarina.walking
                  ? dubaimarina.walking + " min"
                  : "don't even think about it"}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default CommuteTimes;
