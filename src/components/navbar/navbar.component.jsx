import { React, Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import search from '../../assets/search.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './navbar.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {value: 'Delhi-NCR'};
      }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render(){
        return(
            <div className="navbar">
            <Link className="logo-container" to = '/'>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>Home</Link>
                <Link className='option' to='/option'>Location</Link>
                <Link className='option' to='/option'>WOW Factor</Link>
                <Link className='option' to='/option'>Know More</Link>
                <img src={search} alt=""/>
                <select class="location-change" value={this.state.value} onChange={this.handleChange}>
                    <option value="Mumbai">Delhi - NCR</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                </select>
                <button class="club">WOW CLUB</button>
            </div>
        </div>
        );
    }
}

export default Navbar;
