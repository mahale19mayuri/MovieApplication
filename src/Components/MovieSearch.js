import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieSearch = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const handleSearchClick = () => {
     if (searchTerm === "") {
       alert("Please enter a movie title to search");
       return;
     }
    setIsLoading(true);
    const apiKey = "1efa376d";
  
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
   
      if (data.Response === "False") {
      
        alert("please enter valid Movie Title")
      } else {
        setSearchResults(data.Search);
        setIsLoading(false);
  }
})
      .catch((error) => {
        console.error(error);
        setSearchResults([]);
        setIsLoading(false);
      });
  };


  return (
    <div className="moviesearch">
      <a href="/">
        <h1 className="head">Movie App</h1>
      </a>
      <div className="search">
        <p className="title">Search For Movies By Their Title</p>
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn" onClick={handleSearchClick}>
        Search
      </button>
      <p className="movie-title">Movie Results For `{searchTerm}`</p>
      {isLoading ? (
        <p className="load">Loading...</p>
      ) : (
        <div className="App">
          {searchResults.map((movie) => (
            <div key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <p>Titile : {movie.Title}</p>
              <p>Year : {movie.Year}</p>
              <p>Type : {movie.Type}</p>
              <Link to={`/moviedetails/${movie.imdbID}`}>
                <button className="btn1">More details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;