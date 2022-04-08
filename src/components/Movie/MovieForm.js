import React, { useEffect, useState } from 'react';
const MovieForm = ({ addMovie }) => {
  const [formState, setFormState] = useState({
    id: 600,
    tittle: '',
    subtitle: '',
    description: '',
    year: 0,
    imageURL: '',
    rating: 0,
  });

  const [errors, setErrors] = useState({
    tittle: false,
    subtitle: false,
    description: false,
    year: false,
    imageURL: false,
    rating: false,
  });

  const formHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    setFormState({ ...formState, id: formState.id + 100 });
    // Validation();
    // if (Validation()) {
    addMovie(formState);
    // }
  };

  let Validation = () => {
    let errorsCopy = {
      tittle: false,
      subtitle: false,
      description: false,
      year: false,
      imageURL: false,
      rating: false,
    };
    if (!formState.tittle) {
      errorsCopy.tittle = true;
    }

    if (!formState.subtitle) {
      errorsCopy.subtitle = true;
    }

    if (!formState.description) {
      errorsCopy.description = true;
    }

    if (!formState.year) {
      errorsCopy.year = true;
    }

    if (!formState.imageURL) {
      errorsCopy.imageURL = true;
    }

    if (!formState.rating) {
      errorsCopy.rating = true;
    }
    setErrors(errorsCopy);
  };

  return (
    <form className="form">
      <input
        type="text"
        className="bg-light border"
        name="tittle"
        placeholder="Title"
        value={formState.tittle}
        onChange={e => formHandler(e)}
        required
      ></input>
      {errors.tittle ? 'Title cannot be blank' : ''}
      <input
        type="text"
        className="bg-light border"
        name="subtitle"
        placeholder="subtitle"
        value={formState.subtitle}
        onChange={e => formHandler(e)}
        required
      ></input>
      {errors.subtitle ? 'Subtitle cannot be blank' : ''}
      <input
        type="text"
        className="bg-light border"
        name="description"
        placeholder="description"
        value={formState.description}
        onChange={e => formHandler(e)}
        required
      ></input>
      {errors.description ? 'Description cannot be blank' : ''}
      <input
        type="number"
        className="bg-light border"
        name="year"
        placeholder="year"
        value={formState.year}
        onChange={e => formHandler(e)}
        required
      ></input>
      {errors.year ? 'Year cannot be blank' : ''}
      <input
        type="text"
        className="bg-light border"
        name="imageURL"
        placeholder="imageURL"
        value={formState.imageURL}
        onChange={e => formHandler(e)}
        required
      ></input>
      {errors.imageURL ? 'ImageURL cannot be blank' : ''}
      <input
        type="number"
        className="bg-light border"
        name="rating"
        placeholder="rating"
        value={formState.rating}
        onChange={e => formHandler(e)}
        required
      ></input>
      {errors.rating ? 'Rating cannot be blank' : ''}
      <button className="btn btn-success" onClick={e => submitHandler(e)}>
        ADD MOVIE
      </button>
    </form>
  );
};

export default MovieForm;
