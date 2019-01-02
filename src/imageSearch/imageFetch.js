import cred from "./cred";
import Axios from 'axios';



export const imageFetch = (keyword, setImages) => {

   return Axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${
            keyword
        }&per_page=12&client_id=${cred}`
      )
        .then(response => {
         const images = response.data.results.map(result =>{
            return result.urls.small
          })
          setImages(images);

        })
        .catch(error => {
          return error
        });

  };