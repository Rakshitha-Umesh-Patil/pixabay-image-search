import React, { useState } from "react";

const ImageCard = ({ image }) => {
  const [imgSrc, setImgSrc] = useState(image.webformatURL);

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt="pic"
        onError={() => setImgSrc(image.largeImageURL)} // fallback
      />
    </div>
  );
};

export default ImageCard;