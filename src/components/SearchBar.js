import React, { Component } from 'react';
import { getWeather } from './../apis/OpenWeather.api'

//this is a class component
class SearchBar extends Component{
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
        // this.setState({
        //     location: e.target.value
        // });
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
        const location = this.state.location;
        const temp = this.state.temp;
        //e5b5fd213629b5d7a8f781438b81a9d9
        //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        return(
            <div>
                <form onSubmit={(e) => this.onFormSubmit(e) }>
                    <button type="submit">
                        Search
                    </button>
                    <input 
                        id="search" 
                        name="search" 
                        value={location} 
                        onChange={e => this.onInputChange(e)}>
                    
                    </input>
                </form>
                <p>{temp}</p>
            </div>
        )
    }
}

export default SearchBar;