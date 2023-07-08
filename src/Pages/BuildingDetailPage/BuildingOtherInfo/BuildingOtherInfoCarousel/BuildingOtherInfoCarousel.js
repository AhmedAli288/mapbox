import React, {useState} from 'react'
import ThumbnailCarousel from "../../../../Components/Carousel/ThumbnailCarousel";



function BuildingOtherInfoCarousel({buildingObject}) {

    const [carouselStep, setCarouselStep] = useState(0);
    const [floorStep, setFloorStep] = useState(0);

  return (
    <ThumbnailCarousel
      carouselStep={carouselStep}
      setCarouselStep={setCarouselStep}
      floorStep={floorStep}
      setFloorStep={setFloorStep}
      carouselImages={buildingObject.buildingImages}
      floorImages={buildingObject.floorPlanImages}
      thumbnails={true}
      dark={true}
      dots={false}
      videoUrl={"https://www.youtube.com/embed/fL_l00D9Qyw"}
      mapUrl={
        "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d852.2853361431382!2d55.248541610238945!3d25.140444265647012!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1685540590277!5m2!1sen!2sae"
      }
    />
  );
};


export default BuildingOtherInfoCarousel