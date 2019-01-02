import cred from "./cred";
import Axios from "axios";

export const imageFetch = (keyword, page, setImages) => {
  return Axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=12&client_id=${cred}`
  )
    .then(response => {
      const totalPages = response.data.total_pages;
      const images = response.data.results.map(result => {
        return result.urls.small;
      });
      setImages(images, totalPages);
    })
    .catch(error => {
      return error;
    });
};
