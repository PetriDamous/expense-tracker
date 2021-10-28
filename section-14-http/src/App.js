import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMovieSearch = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

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

      setMovieData(formattedData);
    } catch (e) {
      setError(e.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleMovieSearch();
  }, [handleMovieSearch]);

  let content = <p>Waiting for search</p>;

  if (movieData.length > 0) {
    content = <MoviesList movies={movieData} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={handleMovieSearch}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
