import React from 'react';
import MovieGenre from '../movie-genre/MovieGenre.component';
import './MoviePreview.style.css';
// import play from '../../assets/play.png';

const MoviePreview = ({title, language, imageUrl, genre}) => (
    <div className="movie-preview">
        <div className="img-showing">
            <img src={process.env.PUBLIC_URL + `/img/${imageUrl}`} />
            <MovieGenre genre={genre} />
            {/* <div className="movie-genre">
                <p>{genre}</p>
                <div className="book">
                    <button className="club book-now"><a href="#">BOOK NOW</a></button>
                    <a href="#"><img className="icon" src={play} alt=""/></a>
                </div>
            </div> */}
        </div>
        <h3>{title}</h3>
        <p>{language}</p>
    </div>
)

export default MoviePreview;

