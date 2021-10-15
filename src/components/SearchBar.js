import React, { Component } from 'react';
import { getWeather } from './../apis/OpenWeather.api';
import './SearchBar.scss';

//this is a class component
class SearchBar extends Component{
    constructor(props){
        super(props);
    }

    onInputChange(e){
        this.props.inputChange(e);
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.formSubmitted();
    }

    render(){
        const location = this.props.location;

        return(
            <div className="search-bar">
                <form className="search-bar__form" onSubmit={(e) => this.onFormSubmit(e) }>
                    <input 
                        id="search" 
                        name="search" 
                        value={location} 
                        className="search-bar__input"
                        onChange={e => this.onInputChange(e)}>                  
                    </input>
                    <button className="search-bar__button" type="submit">
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;