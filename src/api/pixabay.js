export const searchImages = async (query) => {
  const key = process.env.REACT_APP_PIXABAY_KEY;

  const res = await fetch(
    `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&per_page=24`
  );

  const data = await res.json();
  return data.hits;
};