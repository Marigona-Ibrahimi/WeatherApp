import React, { Component } from 'react';

class Weather extends Component {
    render(){
        return(
            <div className="weatherweather">
                <div className="weather">
                    <p className="weather_temp">6</p>
                    <p className="weather_description">Clear</p>
                    <img className="weatherIcon" url="" alt=""/>
                </div>
                <div>
                    <p className="weather_feels">4</p>
                </div>
            </div>   
        );
    }
}

export default Weather;