import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import { fetchImages } from "./api/fetchImages";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const searchImages = async (query) => {
    const data = await fetchImages(query);
    setImages(data.hits);
  };

  return (
    <div className="container">
      <h1>Pixabay Image Search</h1>
      <SearchBar onSearch={searchImages} />
      <ImageGrid images={images} />
    </div>
  );
}

export default App;