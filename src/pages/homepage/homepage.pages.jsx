import React from 'react';
import Header from '../../components/header/header.component';
import NowShowing from '../../components/now-showing/NowShowing.component';
import './homepage.style.css';

const Homepage = () => {
    return(
        <div className='homepage'>
            <Header />
            <NowShowing />
        </div>
        );
    };
        
export default Homepage;