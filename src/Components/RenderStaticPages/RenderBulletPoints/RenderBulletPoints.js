import React from "react";
import { Grid, Typography } from "@mui/material";
import { RenderMultiParagraph } from "../RenderMultiParagraph/RenderMultiParagraph";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { LogoHeadingComponent } from "../../LogoHeadingComponent/LogoHeadingComponent";

export const RenderBulletPoints = ({ columnCount, bulletHeading, headingTypoVariant, bulletPoints, pointTypographyVariant, pointIcon }) => {
  return (
    <>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <LogoHeadingComponent heading={bulletHeading} headingTypoVariant={headingTypoVariant} />
        </Grid>

        {bulletPoints.map((point, index) => {
          return (
            <Grid key={index} container item xs={12} md={6}lg={12 / columnCount} >
  <Grid item xs={12}>
    {point.pointHeading &&
      (pointIcon ? (
        <Grid container alignItems={"center"} spacing={1}>
          <Grid item xs={1}>
            <ListingCardIcon shape={pointIcon} />
          </Grid>
          <Grid item xs={11}>
            <Typography variant={pointTypographyVariant ? pointTypographyVariant : "GothamBlack22"}>{point.pointHeading}</Typography>
          </Grid>
        </Grid>
      ) : (
        <li>
          <Typography variant={pointTypographyVariant ? pointTypographyVariant : "GothamBlack22"}>{point.pointHeading}</Typography>
        </li>
      ))}
  </Grid>
  <Grid item xs={12}>
    {point.pointParagraph && point.pointParagraph.length > 0 && <RenderMultiParagraph paragraphs={point.pointParagraph} />}
  </Grid>
</Grid>

            // <Grid key={index} container item xs={12 / columnCount} rowSpacing={2}>
            //   <Grid item xs={12}>
            //     {point.pointHeading &&
            //       (pointIcon ? (
            //         <Grid container alignItems={"baseline"} spacing={2}>
            //           <Grid item>
            //             <ListingCardIcon shape={pointIcon} />
            //           </Grid>
            //           <Grid item>
            //             <Typography variant={pointTypographyVariant ? pointTypographyVariant : "GothamBlack22"}>{point.pointHeading}</Typography>
            //           </Grid>
            //         </Grid>
            //       ) : (
            //         <li>
            //           <Typography variant={pointTypographyVariant ? pointTypographyVariant : "GothamBlack22"}>{point.pointHeading}</Typography>
            //         </li>
            //       ))}
            //   </Grid>
            //   <Grid item xs={12}>
            //     {point.pointParagraph && point.pointParagraph.length > 0 && <RenderMultiParagraph paragraphs={point.pointParagraph} />}
            //   </Grid>
            // </Grid>
          );
        })}
      </Grid>
    </>
  );
};
