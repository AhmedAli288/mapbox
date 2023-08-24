import { Grid, Typography } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ManualGallery = ({ images }) => {
  return (
    <Grid container spacing={1}>
      {images.map((item) => {
        return (
          <>
            {item?.text !== "" ? (
              <Typography
                variant="DubaiRegular18"
                className="galleryText width100"
              >
                {item.text}
              </Typography>
            ) : null}
            <Grid item xs={12} md={12 / item.grid}>
              <LazyLoadImage
                src={item.imageUrl}
                className="borderRadius10 width100 fitImage"
              />
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};

export default ManualGallery;
