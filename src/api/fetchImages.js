const API_KEY = process.env.REACT_APP_PIXABAY_KEY;

export const fetchImages = async (query) => {
  try {
    const encodedQuery = encodeURIComponent(query);

    const res = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${encodedQuery}&image_type=photo&per_page=24`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
  }
};