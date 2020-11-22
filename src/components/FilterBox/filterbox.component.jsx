import React, { Component } from 'react';
import { MovieContext } from '../../context/MovieContext';

import "./filterbox.scss";

export default class FilterBox extends Component {
  static contextType = MovieContext;

  render() {
    const { onChange, onSubmit, inputValue } = this.context;

    return (
      <section className="filterbox">
        <select className="filterbox__select" name="years" required>
          <option value="year" disabled defaultValue>Year</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
        </select>
  
        <select className="filterbox__select" name="types" required>
          <option value="type" disabled defaultValue>Type</option>
          <option value="horror">Horror</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="biography">Biography</option>
        </select>
  
        <div className="filterbox__searchbox">
          <form action="/results" className="search" onSubmit={onSubmit}>
            <input 
              value={inputValue}
              onChange={onChange}
              className="search__input" 
              type="text" 
              placeholder="Enter movie name here"
              name="movieName" />
            <button className="search__button" type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
  
        <div className="filterbox__button">
          <button onClick={onSubmit}>Search <span className="filterbox__button--arrow">&#8594;</span></button>
        </div>
      </section>
    )
  }
}
