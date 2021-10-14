import './App.scss';
import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import Nav from './components/Nav';
import { getForecast, getWeather } from './apis/OpenWeather.api';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// function App(){
//   return(
//     <Router>
//       <div className="App">
//         {/* <SearchBar 
//           location={this.state.location}
//           inputChange={(e) => this.onInputChange(e)}
//           formSubmitted={() => this.onFormSubmit()}
//         /> */}
//         <Switch>
//           <Nav />
//           <Route 
//             path="/" 
//             component={Home}
//           />
//           <Route 
//             path="/forecast"
//             component={Forecast}
//           />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

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
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <SearchBar 
              location={this.state.location}
              inputChange={(e) => this.onInputChange(e)}
              formSubmitted={() => this.onFormSubmit()}/>
            <Nav/>
            {/* <Route 
              path="/" 
              component={Weather}
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
          
            /> */}
            <Route 
              path="/forecast"
              component={Forecast}
              hourlyForecast={this.state.hourlyForecast}
              dailyForecast={this.state.dailyForecast}
            />
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
            <Forecast  
              hourlyForecast={this.state.hourlyForecast}
              dailyForecast={this.state.dailyForecast}
            />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
