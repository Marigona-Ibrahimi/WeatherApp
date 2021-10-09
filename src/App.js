import './App.scss';
import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import { getWeather } from './apis/OpenWeather.api';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          location: '',
          temp: ""
      };
      // getWeather('New York').then((res) => {
      //     console.log('res', res);
      // })
  }


  onInputChange(e){
      this.setState({
          location: e.target.value
      });
  }

  onFormSubmit(e){
      e.preventDefault();

      getWeather(this.state.location)
      .then((res) => {
          this.setState({
              temp: Math.floor((res.data.main.temp-32)*(5/9))
          });
      });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <Weather />
        </header>
      </div>
    );
  }
}

export default App;
