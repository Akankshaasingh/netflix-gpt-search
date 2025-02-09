
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Check if movies is not undefined or null and is an array
  if (!movies || !Array.isArray(movies)) {
    return <div>No movies available</div>;
  }

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

