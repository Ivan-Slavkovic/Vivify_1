import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, rateMovie }) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  const starsRating = event => {
    let singleRating = event.target.dataset.rating_data;
    rateMovie(parseInt(singleRating));
  };
  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle} onClick={e => starsRating(e)}>
          <div style={styles.starsEmptyInner}>
            <i className="fa fa-star-o fa-lg" style={styles.star} data-rating_data="1"></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} data-rating_data="2"></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} data-rating_data="3"></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} data-rating_data="4"></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} data-rating_data="5"></i>
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg" style={styles.star} data-rating_data="1"></i>
            <i className="fa fa-star fa-lg" style={styles.star} data-rating_data="2"></i>
            <i className="fa fa-star fa-lg" style={styles.star} data-rating_data="3"></i>
            <i className="fa fa-star fa-lg" style={styles.star} data-rating_data="4"></i>
            <i className="fa fa-star fa-lg" style={styles.star} data-rating_data="5"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
