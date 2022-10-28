import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { IMovie } from "../../components/MovieList/MovieList";
import Movie from '../../components/MovieList/Movie/Movie';

interface TProps {
  movie: IMovie;
}

const MovieDetailPage: NextPage<TProps> = ({ movie }) => {
  return (
    <ApplicationWrapper title={movie.Title}>
      <Movie movie={movie}/>
    </ApplicationWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/movies/" + context.params?.id
  );
  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
};

export default MovieDetailPage;
