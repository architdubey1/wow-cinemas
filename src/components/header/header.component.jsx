import React from 'react';
import './header.style.css';
import img1 from '../../assets/avengers.jpg';
import img2 from '../../assets/avenger2.jpeg';
import img3 from '../../assets/JL.jpeg';
import Carousel from 'react-bootstrap/Carousel';


const Header = () => {
    return(
        <div className="header">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>AVENGERS: ENDGAME</h3>
                    <p>3h 1min <span className="seperator">|</span> Action, Adventure, Sci-Fi <span className="seperator">|</span> 3D</p>
                    <button className="btn btn-normal"><a href="#">Book now</a></button>
                    <button className="btn btn-ghost"><a href="#">Watch Trailer</a></button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>AVENGERS: INFINITY WAR</h3>
                    <p>3h 1min <span className="seperator">|</span> Action, Adventure, Sci-Fi <span className="seperator">|</span> 3D</p>
                    <button className="btn btn-normal"><a href="#">Book now</a></button>
                    <button className="btn btn-ghost"><a href="#">Watch Trailer</a></button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Justice league: zack snyder</h3>
                    <p>3h 1min <span className="seperator">|</span> Action, Adventure, Sci-Fi <span className="seperator">|</span> 3D</p>
                    <button className="btn btn-normal"><a href="#">Book now</a></button>
                    <button className="btn btn-ghost"><a href="#">Watch Trailer</a></button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Header; 