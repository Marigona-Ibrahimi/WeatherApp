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
          feelsLike: "",
          description: "",
          icon: "",
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

      getWeather(this.state.location).then((res) => {
        const lat = res.data.coord.lat;
        const lon = res.data.coord.lon;
        this.setState({
            temp: Math.floor((res.data.main.temp-32)*(5/9)),
            feelsLike: Math.floor((res.data.main.feels_like-32)*(5/9)),
            description: res.data.weather[0].main,
            icon: res.data.weather[0].icon,
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
            feelsLike={this.state.feelsLike}
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
