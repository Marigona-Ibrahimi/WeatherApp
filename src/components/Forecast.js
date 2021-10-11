import React, { Component } from 'react';


class Forecast extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        const forecastItems = this.props.hourlyForecast.map((f, i) => {
            const key = `forecast-item_${i}`
            const url = `http://openweathermap.org/img/wn/${f.weather?.[0].icon}@4x.png`
            let ampm = 'AM';
            let hour = new Date(f.dt*1000).getHours();

            if(hour > 12){ 
                hour = hour*12;
                ampm = 'PM';
            }
            return(
                <div className="forecast-item" key={key}>
                    <p className="forecast-item_hour">{hour}:00 {ampm}</p>
                    <p className="forecast-item_temp">{f.temp}</p>
                    <img src={url} alt={f.weather[0].description}/>
                    <p className="forecast-item_description">{f.weather[0].main}</p>
                </div>
            );
        });
        return(
            <div className="forecast">
                {forecastItems}
            </div>
        );
    }
}

export default Forecast;