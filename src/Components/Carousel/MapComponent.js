import React from "react";

const MapComponent = ({ mapUrl }) => {
  return (
    <div>
      <iframe
        title="carouselMapComponent"
        src={mapUrl}
        width="100%"
        height="551"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default React.memo(MapComponent);
