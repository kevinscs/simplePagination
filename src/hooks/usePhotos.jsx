import { useState } from "react";

export default function usePhotos(pageLimit) {
  const [photos, setPhotos] = useState([]);

  function fetchPhotos(page) {
    const paginacao = (page - 1) * pageLimit;
    const virtualPage = paginacao <= 0 ? 0 : paginacao;

    fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${virtualPage}&_limit=${pageLimit}`
    )
      .then((res) => res.json())
      .then(setPhotos)
      .catch(window.alert);
  }

  return {
    fetchPhotos,
    photos,
  };
}
