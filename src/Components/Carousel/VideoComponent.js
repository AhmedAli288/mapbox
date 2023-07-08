import React from "react";

const VideoComponent = ({ videoUrl, height=548 }) => {
  return (
    <div>
      <iframe
        title="carouselVideoComponent"
        width="100%"
        height={height}
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default React.memo(VideoComponent);
