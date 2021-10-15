import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { getForecast, getWeather } from './apis/OpenWeather.api';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import DailyForecast from './components/DailyForecast';
import HourlyForecast from './components/HourlyForecast';
import Nav from './components/Nav';

class App extends Component{
    constructor(props){
      super(props);
      this.state = {
          location: "",
          temp: "",
          tempMin: "",
          tempMax: "",
          feelsLike: "",
          humidity: "",
          windSpeed: "",
          pressure: "",
          description: "",
          icon: "",
          hourlyForecast: [],
          dailyForecast: [],
      };
      this.onFormSubmit();
  }

  onInputChange(e){
      this.setState({
          location: e.target.value,
      });
  }

  async onFormSubmit(e){
      const weatherRes = await getWeather(this.state.location);
      console.log(weatherRes,"asdasd")
      const lat = weatherRes.data.coord.lat;
      const lon = weatherRes.data.coord.lon;
      const forecastRes = await getForecast(lat, lon);
      console.log('weather Res', weatherRes);
      console.log('forecastRes', forecastRes)

      getWeather(this.state.location).then((res) => {
        const lat = res.data.coord.lat;
        const lon = res.data.coord.lon;
        console.log('res', res)
        this.setState({
            name: res.data.name,
            temp: Math.floor(res.data.main.temp),
            tempMin: Math.floor(res.data.main.temp_min),
            tempMax: Math.floor(res.data.main.temp_max),
            feelsLike: Math.floor(res.data.main.feels_like),
            humidity: res.data.main.humidity,
            windSpeed: res.data.wind.speed,
            pressure: res.data.main.pressure,
            description: res.data.weather[0].main,
            icon: res.data.weather[0].icon,
            hourlyForecast: forecastRes.data.hourly,
            dailyForecast: forecastRes.data.daily,
        });
      });
  }

  render(){
    return(
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="divdiv">
              <Nav/>
              <SearchBar 
                location={this.state.location}
                inputChange={(e) => this.onInputChange(e)}
                formSubmitted={() => this.onFormSubmit()}
              />
            </div>
            <Route exact path="/" 
              render={(props) => (
                <Weather 
                  name={this.state.name}
                  currentTemperature={this.state.temp}
                  minTemperature={this.state.tempMin}
                  maxTemperature={this.state.tempMax}
                  feelsLike={this.state.feelsLike}
                  humidity={this.state.humidity}
                  windSpeed={this.state.windSpeed}
                  pressure={this.state.pressure}
                  description={this.state.description}
                  icon={this.state.icon}
                />
              )}
            />
            <Route path="/dailyforecast" 
              render={(props) => (            
                <DailyForecast 
                  hourlyForecast={this.state.hourlyForecast}
                  dailyForecast={this.state.dailyForecast}
                />
              )}
            />
            <Route path="/hourlyforecast" 
              render={(props) => (            
                <HourlyForecast 
                  hourlyForecast={this.state.hourlyForecast}
                  dailyForecast={this.state.dailyForecast}
                />
              )}
            />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
