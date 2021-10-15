import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <h3 className="weatherapp">Weather App</h3>
            <ul className="list">
                <li>
                <NavLink to="/" className="list-element1">Home</NavLink>
                </li>
                <li>
                <NavLink to="/dailyforecast" className="list-element2">Daily Forecast</NavLink>
                </li>
                <li>
                <NavLink to="/hourlyforecast" className="list-element2">Hourly Forecast</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;