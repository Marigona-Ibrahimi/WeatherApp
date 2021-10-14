import React from 'react';
import './Nav.scss';

function Nav(){
    return(
        <nav>
            <h3>Weather App</h3>
            <ul className="list">
                <li className="list-element1">Home</li>
                <li className="list-element2">Forecast</li>
            </ul>
        </nav>
    );
}

export default Nav;