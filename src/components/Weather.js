import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
    render(){
        let img; 

        if(this.props.icon){
            const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`
            img = (
                <img 
                    className="current-weather__icon"
                    src={url}
                    alt={this.props.description}
                />
            );
        }
        return(
            <div className="current-weather">
                <div className="current-weather__content">
                    <div className="current-weather__text">
                        <p className="current-weather__temp">{this.props.currentTemperature} °C</p>
                        <div className="current-weather__minmax">
                            <p className="current-weather__mintemp">Min: {this.props.minTemperature} °C</p>
                            <p className="current-weather__maxtemp">Max: {this.props.maxTemperature} °C</p>
                        </div>
                        <p className="current-weather__description">{this.props.description}</p>
                    </div>
                    {img}
                </div>
                <div>
                    Feels Like
                    <p className="current-weather__feels">{this.props.feelsLike} °C</p>
                </div>
                <div>
                    <p>Humidity: {this.props.humidity}</p>
                    <p>Wind Speed: {this.props.windSpeed}</p>
                    <p>Pressure: {this.props.pressure}</p>
                </div>
            </div>   
        );
    }
}

export default Weather;