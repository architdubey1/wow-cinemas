import React from 'react';
import './UpcomingMovies.style.css';

class UpcomingMoives extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: UPCOMING_DATA
        }

        render(){
            const {Collections} = this.state; 
            return(
                <div className="upcoming-movies">
                    <h3>Upcoming Movies</h3>
                </div>
            )
        }
    }
}
export default UpcomingMoives;