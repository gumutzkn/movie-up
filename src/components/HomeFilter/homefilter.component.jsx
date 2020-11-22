import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext';

import "./homefilter.scss"

class HomeFilter extends Component {
  static contextType = MovieContext;

  render() {
    const { onChange, inputValue } = this.context;

    return (
      <section className="filter">
        <select className="filter__select" name="years" required>
          <option value="year" disabled defaultValue>Year</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
        </select>
  
        <select className="filter__select" name="types" required>
          <option value="type" disabled defaultValue>Type</option>
          <option value="horror">Horror</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="biography">Biography</option>
        </select>
  
        <div className="filter__searchbox">
          <form 
            action="/results"
            className="search">
            <input
              onChange={onChange}
              value={inputValue}
              className="search__input" 
              type="text" 
              placeholder="Enter movie name here"
              name="movieName" />
            <button className="search__button" type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
  
        <div className="filter__button">
          <button         
            type="submit"
          >
            Search <span className="filter__button--arrow">&#8594;</span>
          </button>
        </div>
      </section>
    )
  }  
}

export default withRouter(HomeFilter);