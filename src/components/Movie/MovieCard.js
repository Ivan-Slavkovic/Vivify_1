import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating';

const MovieCard = ({ movie, deleteMovie }) => {
  const [rating, setRating] = useState([movie.rating]);

  const rateMovie = ratedValue => {
    setRating([...rating, ratedValue]);
  };

  const averageRating = ratings => {
    let temp = 0;
    ratings.forEach(object => {
      temp += parseFloat(object);
    });
    console.log(ratings, 'Ratings', temp);
    return temp / ratings.length;
  };

  return (
    <div className="movie-card">
      <div className="movie-card card">
        <img className="card-img-top" src={movie.imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify" style={{ fontSize: '14px' }}>
            {movie.description}
          </p>
          <button className="btn btn-danger" onClick={() => deleteMovie(movie.id)}>
            DELETE
          </button>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRating rating={averageRating(rating)} rateMovie={rateMovie} />
            </div>
            <div className="card-footer-badge float-right badge badge-primary badge-pill">{averageRating(rating)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
