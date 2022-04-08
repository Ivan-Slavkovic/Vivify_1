import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ movies, deleteMovie }) => (
  <div>
    <div className="card-deck">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </div>
  </div>
);

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
