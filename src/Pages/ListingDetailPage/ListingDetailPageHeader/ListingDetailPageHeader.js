import React from "react";
import { Box } from "@mui/material";
import TopHeaderButtons from "./TopHeaderButtons/TopHeaderButtons";
import BottomHeaderLinks from "./BottomHeaderLinks/BottomHeaderLinks";

function ListingDetailPageHeader({ page }) {
  return (
    <Box id="listingHeaderSection" className="ListingHeaderWrapper">
      <TopHeaderButtons page={page} />
      <BottomHeaderLinks page={page} />
    </Box>
  );
}

export default ListingDetailPageHeader;
