import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import _ from "lodash";

export const arrangeRowsCols = (linksArr, colSize) => {
  let size = colSize;

  const linkColumns = [];

  if (!_.isArray(linksArr)) {
    return linkColumns;
  }
  if (!_.isNumber(colSize)) {
    size = 0;
    return size;
  }

  for (let i = 0; i < linksArr.length; i += size) {
    const columnLinks = linksArr.slice(i, i + size);

    const column = (
      <Grid item xs={12} sm={4} md={4} key={i}>
        <Box className="boxColAlign">
          {columnLinks.map((item, id) => {
            return (
              <Link key={id} href={item.link}>
                <Typography color="white" variant="DubaiRegular20">
                  {item.name}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Grid>
    );

    linkColumns.push(column);
  }
  return linkColumns;
};
