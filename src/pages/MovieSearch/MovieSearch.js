import React, { Component } from 'react'
import FilterBox from '../../components/FilterBox/filterbox.component'
import SearchResults from '../../components/SearchResults/searchresults.component'
import NavBottom from '../../components/NavBottom/navbottom.component';
import queryString from 'query-string';
import { MovieContext } from '../../context/MovieContext';
import axios from 'axios';

export default class MovieSearch extends Component {
  static contextType = MovieContext;

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    let { changeMovies } = this.context;
    const values = queryString.parse(this.props.location.search);
    const movieParams = values.movieName;

    if (movieParams) {
      axios.get(
        `http://www.omdbapi.com/?apikey=8e70dc5&s=${movieParams}`
      ).then(res => {
        const items = res.data.Search;
        changeMovies(items);
      }).catch(e => changeMovies([]));
    }
  }

  render() {
    return (
      <>
        <NavBottom />
        <FilterBox />
        <SearchResults />
      </>
    )
  }
  
}
