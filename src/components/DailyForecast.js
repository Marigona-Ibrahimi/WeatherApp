import React, { Component } from 'react';
import { isFunction } from 'util';
import './DailyForecast.scss';
import moment from 'moment';


class Forecast extends Component {
    constructor(props){
        super(props);
    }

    
    render(){
        console.log(this.props)
        const dailyforecastItems = this.props.dailyForecast.map((f, i) => {
            console.log('aaaaaaaaa', f)
            const key = `forecast-item_${i}`
            const url = `http://openweathermap.org/img/wn/${f.weather?.[0].icon}@4x.png`
            // let ampm = 'AM';
            const date = new Date();
            console.log('f', new Date(f.dt));
            console.log('i');

            console.log('adasdasdsadasd', moment(f.dt).toDate("DD"))

            return(
                <div className="forecast__item" key={key}>
                    <p className="forecast__day">{moment.unix(f.dt).format("dddd")} </p> 
                    <p className="forecast__temp">{Math.floor(f.temp.day)} °C</p>
                    <p className="forecast__min">Min: {Math.floor(f.temp.min)} °C</p>
                    <p className="forecast__max">Max: {Math.floor(f.temp.max)} °C</p>
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
            </div>
        );
    }
}

export default Forecast;