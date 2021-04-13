import React from 'react';
import './MovieGenre.style.css';
import play from '../../assets/play.png';

const MovieGenre = ({genre}) => (
    <div className="movie-genre">
        <p>{genre}</p>
        <div className="book">
            <button className="club book-now"><a href="#">BOOK NOW</a></button>
            <a href="#"><img className="icon" src={play} alt=""/></a>
        </div>
    </div>
)
export default MovieGenre;