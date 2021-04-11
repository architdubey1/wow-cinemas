import React from 'react';
import './MoviePreview.style.css';

const MoviePreview = ({title, language, imageUrl}) => (
    <div className="movie-preview">
        <h3>{title}</h3>
        <p>{language}</p>
        <img src={require(`../../assets/${imageUrl}`)} />
    </div>
)

export default MoviePreview;