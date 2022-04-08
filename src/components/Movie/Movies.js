import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import MovieForm from './MovieForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const addMovie = movie => {
    setMovies([...movies, movie]);
  };
  const deleteMovie = id => {
    setMovies(movies.filter(obj => obj.id !== id));
  };

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieForm addMovie={addMovie} />
          <MovieList movies={movies} deleteMovie={deleteMovie} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
