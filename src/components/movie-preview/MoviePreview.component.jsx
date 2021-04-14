import React from 'react';
import MovieGenre from '../movie-genre/MovieGenre.component';
import './MoviePreview.style.css';
// import play from '../../assets/play.png';

const MoviePreview = ({title, language, release, imageUrl, genre}) => (
    
    <div className={`${release ? 'release' : ''} movie-preview`}>
        <div className="img-showing">
            <img src={process.env.PUBLIC_URL + `/img/${imageUrl}`} />
            <MovieGenre genre={genre} />
        </div>
        <h4>{title}</h4>
        {
            release 
            ? <p>{release}</p>
            :<p>{language}</p>
        }
    </div>
)

export default MoviePreview;

