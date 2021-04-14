import React from 'react';
import MovieGenre from '../movie-genre/MovieGenre.component';
import './MoviePreview.style.css';
// import play from '../../assets/play.png';

const MoviePreview = ({title, language, release, imageUrl, genre}) => (
    <div className={`movie-preview`}>
        <div className="img-showing">
            <img src={process.env.PUBLIC_URL + `/img/${imageUrl}`} />
            <MovieGenre genre={genre} />
        </div>
        <h3>{title}</h3>
        {
            release 
            ? <p>{release}</p>
            :<p>{language}</p>
        }
    </div>
)

export default MoviePreview;

