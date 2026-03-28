import React from "react";
import ImageCard from "./ImageCard";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
};

export default ImageGrid;