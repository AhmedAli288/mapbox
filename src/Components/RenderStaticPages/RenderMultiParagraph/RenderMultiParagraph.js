import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";

//takes array of strings, each string is a paragraph block

export const RenderMultiParagraph = ({ paragraphs, paragraphTypoVariant, defaultParagraphs, hasViewMore = false, expandText, collapsedText, dropDownTypoVariant }) => {
  const [expanded, setExpanded] = useState(false);

  const visibleData = expanded ? paragraphs : paragraphs.slice(0, defaultParagraphs);
  const onMore = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Grid container rowSpacing={3}>
        {visibleData.map((paragraph, index) => (
          <Grid key={index} item>
            <Typography variant={paragraphTypoVariant ? paragraphTypoVariant : "AlwynNewRoundedRegular20"}>{paragraph} </Typography>
          </Grid>
        ))}
        {hasViewMore && paragraphs.length > defaultParagraphs && (
          <Grid container alignItems="center" spacing={1} onClick={onMore}>
            <Grid item>
              <Typography variant={dropDownTypoVariant} ml={0}>
                {expanded ? collapsedText : expandText}
              </Typography>
            </Grid>
            <Grid item mt={expanded ? 0 : 1}>
              <ListingCardIcon shape={expanded ? "arrowDown" : "arrowRight"} color={"black"} width={"15"} height={"12"} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};
