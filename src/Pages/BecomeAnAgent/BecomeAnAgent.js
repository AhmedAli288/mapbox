import React from "react";
import { Grid, Typography,Stack,Box } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../../Components/ErrorBoundaries/ErrorBoundaries";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import { becomeAnAgentStepsSectionData } from "../../Constants/StaticPagesConstants";
import { isEqual } from "lodash";
import BackgroundImageAndTextWithGradientBackground from "../../Components/BackgroundImageAndTextWithGradientBackground/BackgroundImageAndTextWithGradientBackground";
import { LogoHeadingComponent } from "../../Components/LogoHeadingComponent/LogoHeadingComponent";
import { RenderMultiParagraph } from "../../Components/RenderStaticPages/RenderMultiParagraph/RenderMultiParagraph";
import { RenderBulletPoints } from "../../Components/RenderStaticPages/RenderBulletPoints/RenderBulletPoints";
import { cdnPath } from "../../Constants/StaticPagesConstants";

function BecomeAnAgent() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <Grid container rowGap={10} direction={"column"} className="landingPageSearch">
        <BackgroundImageAndTextWithGradientBackground
          customHeroClass={"baa-hero"}
         
          backgroundImage={`${cdnPath}/assets/BecomeAnAgent.png`}
          altText="7 Steps to become a real estate agent"
          heroText={
            <Stack>
              <Box className="baa-hero-step-span">
              <span >7</span> 

              </Box>
              <Box className="baa-hero-step-spanText">

              <span>
              Steps <br /> to become a <br /> Real Estate Agent
                </span>
              </Box>
            </Stack>
          }
        />
        {becomeAnAgentStepsSectionData.map((section, index) => {
          return (
            <Grid key={index} className={isEqual(section.colorVariant, "light") ? "baaStepSectionLight" : "baaStepSectionDark"} container rowSpacing={5} justifyContent={"center"}>
              <Grid item xs={8}>
                <Grid container justifyContent={"space-between"}>
                  <Grid item xs>
                    <LogoHeadingComponent icon={section.headingIcon} heading={section.heading} headingTypoVariant={"GothamBlack40"} />
                  </Grid>
                  {section.stepHeading && (
                    <Grid item xs>
                      <Typography variant="GothamBlack40" className={`stepCountHeading ${isEqual(section.colorVariant, "light") ? "stepCountHeadingDark" : "stepCountHeadingLight"}`}>
                        {section.stepHeading}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Grid>

              {/* section.bodyContent exists? map through  */}
              {section.bodyContent && (
                <Grid item xs={8}>
                  <Grid container rowSpacing={3}>
                    {section.bodyContent.map((content, index) => {
                      if (isEqual(content.type, "paragraph")) {
                        return <RenderMultiParagraph key={index} paragraphs={content.paragraphContent} />;
                      }
                      if (isEqual(content.type, "bullet")) {
                        return (
                          <RenderBulletPoints
                            key={index}
                            columnCount={content.columns}
                            bulletHeading={content.bulletHeading}
                            headingTypoVariant={content.bulletHeadingType}
                            bulletPoints={content.bulletContent}
                            pointTypographyVariant={"GothamBlack22"}
                          />
                        );
                      }
                    })}
                  </Grid>
                </Grid>
              )}
            </Grid>
          );
        })}
      </Grid>

      <Grid>
        <LandingPageSubscribeSection />
      </Grid>
    </ErrorBoundary>
  );
}

export default BecomeAnAgent;
