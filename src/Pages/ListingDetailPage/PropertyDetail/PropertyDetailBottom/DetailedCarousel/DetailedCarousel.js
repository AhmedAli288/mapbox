import React from "react";
import { floorPlanImages } from "../../../../../Constants/ConstantValues";
import ThumbnailCarousel from "../../../../../Components/Carousel/ThumbnailCarousel";

const DetailedCarousel = ({ listingId, property }) => {
  const [carouselStep, setCarouselStep] = React.useState(0);
  const [floorStep, setFloorStep] = React.useState(0);

  return (
    <ThumbnailCarousel
      carouselStep={carouselStep}
      setCarouselStep={setCarouselStep}
      floorStep={floorStep}
      setFloorStep={setFloorStep}
      carouselImages={property?.images}
      floorImages={property?.floor ? property?.floor : floorPlanImages}
      thumbnails={true}
      dark={true}
      dots={false}
      videoUrl={property?.video}
      width={768}
      height={420}
    />
  );
};

export default DetailedCarousel;
