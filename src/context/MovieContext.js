import React, { createContext } from 'react';
import axios from 'axios';
import queryString from 'query-string';

export const MovieContext = createContext();

export class MovieProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      inputValue: '',
      favorites: []
    }
  }

  onSubmit = (e) => {
    const values = queryString.parse(this.props.location.search);
    const movieParams = values.movieName;

    if (movieParams) {
      axios.get(
        `http://www.omdbapi.com/?apikey=8e70dc5&s=${movieParams}`
      ).then(res => {
        const items = res.data.Search;
        this.setState({ movies: items });
      }).catch(e => this.setState({ movies: [] }));
    }
  }

  changeMovies = (val) => {
    this.setState({ movies: val })
  }

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  addFavorite = (movie) => {
    const favorites = this.state.favorites;
    const movieId = movie.imdbID;

    const stored = favorites.find(o => o.movie.imdbID === movieId);

    if (stored) { return }
    else {
      favorites.push({ movie: movie });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      console.log(JSON.parse(localStorage.getItem('favorites')));
      this.setState({ favorites: favorites });
      
      
      console.log("Favori filmlerim:", favorites);
    }
  }

  deleteFavorite = (movie) => {
    const favorites = this.state.favorites;
    const movieId = movie.imdbID;

    const newFavorites = favorites.filter(item => {
      return item.movie.imdbID !== movieId
    });
    this.setState({ favorites: newFavorites });
    localStorage.removeItem('favorites');
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  render() {
    return(
      <MovieContext.Provider
        value={{
          ...this.state,
          onSubmit: this.onSubmit,
          onChange: this.onChange,
          addFavorite: this.addFavorite,
          deleteFavorite: this.deleteFavorite,
          changeMovies: this.changeMovies
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    )
  }
}