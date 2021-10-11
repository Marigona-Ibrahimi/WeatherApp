import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
    render(){
        const url = `http://openweathermap.org/img/wn/${this.weather?.[0].icon}@4x.png`
        return(
            <div className="current-weather">
                <div className="weather-content">
                    <p className="weather_temp">{this.props.currentTemperature}</p>
                    <p className="weather_description">{this.props.description}</p>
                    <img className="weatherIcon" src={url} alt={this.props.description}/>
                </div>
                <div>
                    Feels Like
                    <p className="weather_feels">{this.props.feelsLike}</p>
                </div>
            </div>   
        );
    }
}

export default Weather;