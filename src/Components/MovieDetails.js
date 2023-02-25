import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails() {
  const { imdbID } = useParams();

  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const ApiKey = "1efa376d";
    fetch(`https://www.omdbapi.com/?apikey=${ApiKey}&i=${imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data); 
        setIsLoading(false); 
      })
      .catch((error) => {
        setIsLoading(false); 
        setError(error);
      });
  }, [imdbID]); 

 
  if (isLoading) {
    return <div>Loading...</div>;
}
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movieData) {
    return null;
  }


  return (
    <div className="mdata">
      <div>
      <a href="/">
        <h1 className="">Movie App</h1>
      </a>
        <h2>Titile : {movieData.Title}</h2>
        <img src={movieData.Poster} alt={movieData.Title} />
      </div>
      <p>Year : {movieData.Year}</p>
      <p>Type : {movieData.Type}</p>
      <p>Discription :{movieData.Plot}</p>
    </div>
  );
}

export default MovieDetails;