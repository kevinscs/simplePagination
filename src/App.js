import { useEffect } from "react";
import usePhotos from "./hooks/usePhotos";
import usePagination from "./hooks/usePagination";

function App() {
  const { photos, fetchPhotos } = usePhotos(3);
  const { actualPage, setActualPage } = usePagination();

  useEffect(() => {
    fetchPhotos(actualPage);
  }, [actualPage]);

  return (
    <div className="App">
      <div>
        <h1>Praticando com uma simples paginação!</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {photos?.map((photo) => (
          <div key={photo?.id}>
            <img
              style={{ maxWidth: "100%" }}
              src={photo?.url}
              alt={photo?.title}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {Array(5)
          .fill("")
          ?.map((_, index) => {
            return (
              <button 
                key={index} 
                onClick={() => setActualPage(index + 1)}
                disabled={index === actualPage - 1}
              >
                {index + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default App;
