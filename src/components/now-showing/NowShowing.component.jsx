import React from 'react';
import MOVIE_DATA from './movie.data.js';
import MoviePreview from '../movie-preview/MoviePreview.component';

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
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <MoviePreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default NowShowing;