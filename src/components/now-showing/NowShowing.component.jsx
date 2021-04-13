import React from 'react';
import MOVIE_DATA from './movie.data.js';
import MoviePreview from '../movie-preview/MoviePreview.component';
import {FaLongArrowAltRight} from 'react-icons/fa'

import './NowShowing.style.css';


class NowShowing extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: MOVIE_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return(
            <div className="now-showing">
                <div className="now-showing-top">
                    <h2>Now Showing</h2>
                    <select class="location-change genre" value={this.state.value} onChange={this.handleChange}>
                        <option value="action">Select Genre</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="anime">Animation</option>
                    </select>
                </div>
                {
                    <div className="movie-preview-collection">
                        {collections.map(({id, ...otherCollectionProps}) => (
                            <MoviePreview key={id} {...otherCollectionProps}/>
                        ))}
                    </div>
                }
                <div className="row view-button">
                    <button className="btn btn-ghost view-btn"><a href="#">VIEW ALL <span className='icons-arr'><FaLongArrowAltRight/></span></a></button>
                </div>
            </div>
        )
    }
}

export default NowShowing;