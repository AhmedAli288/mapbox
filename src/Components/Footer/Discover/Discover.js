import React from "react";
import { Typography, Box, Link } from "@mui/material";

const items = [
  "Exclusives",
  "Commercial",
  "New Developments",
  "Find an agent",
  "Area Guides",
  "VALCOM Institute",
  "Mortgage Calculator",
  "Market Research",
  "Signature",
  "Building Classification",
];

function Discover() {
  return (
    <Box mt={3}>
      {items.map((item, id) => (
        <Link className="footerLinks" key={id} href="/">
          <Typography
            key={item}
            variant="DubaiRegular20"
            className="company-item"
          >
            {item}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}

export default Discover;
