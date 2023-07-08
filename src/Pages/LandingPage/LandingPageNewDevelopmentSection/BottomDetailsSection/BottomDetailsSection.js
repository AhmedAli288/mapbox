import React from "react";
import { Paper, Box, Grid, Typography } from "@mui/material";
import { DollarSign, BedIcon } from "../../../../Assets/SVG/Common/CommonSvgs";

function BottomDetailsSection({ community, price, sizes }) {
  return (
    <Grid container>
      <Grid item xs={12} sm={7} md={7}>
        <Paper square elevation={0} className="carouselTypography">
          <Box>
            <Typography variant="GothamBlack24">{community}</Typography>
          </Box>
          <Box className="carouselStartingPrice">
            <DollarSign width={15.5} height={15.5} />
            <Typography variant="AlwynNewRoundedRegular18">
              Starting from {price}
            </Typography>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={5} md={5} className="carouselSizesGrid">
        <Paper square elevation={0} className="carouselTypography">
          <Box className="carouselSizes">
            <BedIcon width={18.5} height={12.5} />
            <Typography variant="AlwynNewRoundedRegular18">{sizes}</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default BottomDetailsSection;
