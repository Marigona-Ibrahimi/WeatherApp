import React, { Component } from 'react';
import { getWeather } from './../apis/OpenWeather.api'

//this is a class component
class SearchBar extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     location: '',
        //     temp: ""
        // };
    }


    onInputChange(e){
        // this.setState({
        //     location: e.target.value
        // });
        this.props.inputChange(e);
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.formSubmitted();
    }

    render(){
        const location = this.props.location;
        // const temp = 'this.state.temp';
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
            </div>
        )
    }
}

export default SearchBar;