import React, { useEffect, useState } from "react";
import Movie from "./Movie/Movie";

export interface IMovie {
  Title: string;
  us_gross: number | null;
  world: number | null;
  "US DVD Sales": number | null;
  "Production Budget": number | null;
  "Release Date": string;
  "MPAA Rating": string;
  "Running Time min": number | null;
  Distributor: string;
  Source: number | null;
  "Major Genre": string | null;
  "Creative Type": string | null;
  Director: string | null;
  "Rotten Tomatoes Rating": number | null;
  "IMDB Rating": number | null;
  "IMDB Votes": number;
  id: number;
  Poster: string;
}

const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    // HTTP request -> Rest API -> Real Database
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`)
      .then((res) => res.json())
      .then((data: IMovie[]) => setMovies(data.slice(0, 20)))
      .catch((error) => console.error(error));
  }, []);

  return movies;
};

export const MovieList = () => {
  const movies = useMovies();
  return (
    <div className="flex flex-col justify-center text-white items-center p-6">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};
