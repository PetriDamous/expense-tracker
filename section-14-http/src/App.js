import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  // Sets movie data array for MovieList component
  const [movieData, setMovieData] = useState([]);

  // Sets the state for loading in our app
  const [isLoading, setIsLoading] = useState(false);

  // Sets error status
  const [error, setError] = useState(null);

  const handleMovieSearch = async () => {
    setIsLoading(true);

    try {
      // Fetches data from API
      const response = await fetch("https://swapi.dev/api/films/");

      // If reponse status is not ok throw an error
      // before we parse the json and try to run other code
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      // Turns reponse JSON into JS object
      const data = await response.json();

      // Formats the returned data to match our object
      // data structure
      const formattedData = data.results.map((result) => {
        const {
          episode_id: id,
          title,
          opening_crawl: openingText,
          release_date: releaseDate,
        } = result;

        const formatResult = {
          id,
          title,
          openingText,
          releaseDate,
        };

        return formatResult;
      });

      // Sets the state of our movies array to be used in
      // the MovieLists component
      setMovieData(formattedData);
    } catch (e) {
      // Setting the error.
      // This will cover bad responses from the api
      // and other errors that get triggered from out
      // code after the api calls
      setError(e.message);
    }

    // When the try catch block is finished remove the loading
    setIsLoading(false);
  };

  // Default status to be rendered
  let content = <p>Waiting for search</p>;

  // If we fill up our movies array
  // render our MovieList component
  if (movieData.length > 0) {
    content = <MoviesList movies={movieData} />;
  }

  // If we are loading display loading
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  // If we have an error display error
  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={handleMovieSearch}>Fetch Movies</button>
      </section>
      {/* Our content variable will be rendered according to our logic */}
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
