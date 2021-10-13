import './App.scss';
import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import { getForecast, getWeather } from './apis/OpenWeather.api';

class App extends Component {
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
          dailyForecast: [],
          hourlyForecast: []
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

      getWeather(this.state.location).then((res) => {
        const lat = res.data.coord.lat;
        const lon = res.data.coord.lon;
        const hourly = res
        this.setState({
            name: res.data.location,
            temp: Math.floor((res.data.main.temp-32)*(5/9)),
            tempMin: Math.floor((res.data.main.temp_min-32)*(5/9)),
            tempMax: Math.floor((res.data.main.temp_max-32)*(5/9)),
            feelsLike: Math.floor((res.data.main.feels_like-32)*(5/9)),
            humidity: res.data.main.humidity,
            windSpeed: res.data.wind.speed,
            pressure: res.data.main.pressure,
            description: res.data.weather[0].main,
            icon: res.data.weather[0].icon,
            dailyForecast: forecastRes.data.daily,
            hourlyForecast: forecastRes.data.hourly,
        });
      });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            location={this.state.location}
            inputChange={(e) => this.onInputChange(e)}
            formSubmitted={() => this.onFormSubmit()}/>
          <Weather 
            currentTemperature={this.state.temp}
            minTemperature={this.state.tempMin}
            maxTemperature={this.state.tempMax}
            feelsLike={this.state.feelsLike}
            humidity={this.state.humidity}
            windSpeed={this.state.windSpeed}
            pressure={this.state.pressure}
            description={this.state.description}
            icon={this.state.icon}/>
          <Forecast 
            hourlyForecast={this.state.hourlyForecast}
          />
        </header>
      </div>
    );
  }
}

export default App;
