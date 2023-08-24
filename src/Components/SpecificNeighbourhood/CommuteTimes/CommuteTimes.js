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
                {dxbairport.distance}
              </Typography>
              <Typography variant="DubaiRegular18">{dxbairport.car}</Typography>
              <Typography variant="DubaiRegular18">
                {dxbairport.metro}
              </Typography>
              <Typography variant="DubaiRegular18">
                {dxbairport.walking
                  ? dxbairport.walking
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
                {dwcairport.distance}
              </Typography>
              <Typography variant="DubaiRegular18">{dwcairport.car}</Typography>
              <Typography variant="DubaiRegular18">
                {dwcairport.metro}
              </Typography>
              <Typography variant="DubaiRegular18">
                {dwcairport.walking
                  ? dwcairport.walking
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
                {publicbeach.distance}
              </Typography>
              <Typography variant="DubaiRegular18">
                {publicbeach.car}
              </Typography>
              <Typography variant="DubaiRegular18">
                {publicbeach.metro}
              </Typography>
              <Typography variant="DubaiRegular18">
                {publicbeach.walking
                  ? publicbeach.walking
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
                {dubaimall.distance}
              </Typography>
              <Typography variant="DubaiRegular18">{dubaimall.car}</Typography>
              <Typography variant="DubaiRegular18">
                {dubaimall.metro}
              </Typography>
              <Typography variant="DubaiRegular18">
                {dubaimall.walking
                  ? dubaimall.walking
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
                {expo2020.distance}
              </Typography>
              <Typography variant="DubaiRegular18">{expo2020.car}</Typography>
              <Typography variant="DubaiRegular18">{expo2020.metro}</Typography>
              <Typography variant="DubaiRegular18">
                {expo2020.walking
                  ? expo2020.walking
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
                {dubaimarina.distance}
              </Typography>
              <Typography variant="DubaiRegular18">
                {dubaimarina.car}
              </Typography>
              <Typography variant="DubaiRegular18">
                {dubaimarina.metro}
              </Typography>
              <Typography variant="DubaiRegular18">
                {dubaimarina.walking
                  ? dubaimarina.walking
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
