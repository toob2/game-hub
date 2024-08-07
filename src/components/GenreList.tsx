import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  //   const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
