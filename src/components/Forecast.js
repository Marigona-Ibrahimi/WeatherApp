import React, { Component } from 'react';
import './Forecast.scss';

class Forecast extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        const forecastItems = this.props.hourlyForecast.map((f, i) => {
            const key = `forecast-item_${i}`
            const url = `http://openweathermap.org/img/wn/${f.weather?.[0].icon}@4x.png`
            // let ampm = 'AM';
            let hour = new Date(f.dt*1000).getHours();

            if(hour < 24){ 
                hour = hour*1;
                // ampm = 'PM';
            }
            return(
                <div className="forecast__item" key={key}>
                    <p className="forecast__hour">{hour}:00 </p>
                    <p className="forecast__temp">{f.temp} °C</p>
                    <img src={url} alt={f.weather[0].description}/>
                    <p className="forecast__description">{f.weather[0].main}</p>
                </div>
            );
        });

        // function getDayName(dateStr, locale)
        // {
        //     var date = new Date(dateStr);
        //     return date.toLocaleDateString(locale, { weekday: 'long' });        
        // }

        // var dateStr = '05/23/2014';
        // var day = getDayName(dateStr, "nl-NL");

        const dailyforecastItems = this.props.dailyForecast.map((f, i) => {
            const key = `forecast-item_${i}`
            const url = `http://openweathermap.org/img/wn/${f.weather?.[0].icon}@4x.png`
            // let ampm = 'AM';
            console.log('f', new Date(f.dt));
            console.log('i');

            return(
                <div className="forecast__item" key={key}>
                    <p className="forecast__day">{i} </p>
                    <p className="forecast__temp">{f.temp.day} °C</p>
                    <img src={url} alt={f.weather[0].description}/>
                    <p className="forecast__description">{f.weather[0].main}</p>
                </div>
            );
        });

        return(
            <div className="forecast">
                <div className="forecast__dayforecast">
                    <h3 className="forecast__dayforecast__title">Daily Forecast</h3>
                    <div className="forecast__dayforecast__items">
                        {dailyforecastItems}
                    </div>
                </div>
                <div>
                <h3 className="forecast__title">Hourly Forecast</h3>
                <div className="forecast__items">
                {forecastItems}
                </div>
                
                </div>
            </div>
        );
    }
}

export default Forecast;