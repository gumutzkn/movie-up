import React from 'react'
import { withRouter } from 'react-router-dom';
import imdb from "../../assets/img/IMDB-icon.png"
import { MovieContext } from '../../context/MovieContext';
import queryString from 'query-string';

import "./searchresults.scss";

class SearchResults extends React.Component {
  static contextType = MovieContext;

  render() {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    const { movies, addFavorite, deleteFavorite } = this.context;
    const { history } = this.props;
    const values = queryString.parse(this.props.location.search);
    const movieParams = values.movieName;

    return (
      <main className="search__results">
        <h1 className="search__results--heading">Search Results <span className="search__results--span">{movieParams}</span></h1>
        <div className="moviescontainer">
          {movies.length > 0 ?
            movies.map(movie => (
              <div key={movie.imdbID} className="moviescontainer__movie moviescontainer__movie--1">
                <div
                  style={{ backgroundImage: `url(${movie.Poster})` }}
                  className="image__container"
                >
                  <div className="image__container--type">Action</div>
                  {favorites && favorites.find( some => some.movie.imdbID === movie.imdbID ) ? (
                    <div 
                    className="image__container--favbtn"
                    onClick={() => deleteFavorite(movie)}
                  >
                    
                    <i className="fas fa-heart added"></i>
                  </div>
                  ): (
                    <div 
                    className="image__container--favbtn"
                    onClick={() => addFavorite(movie)}
                  >
                    
                    <i className="far fa-heart add"></i>
                  </div>
                  )  }
                </div>
                <div className="moviescontainer__movie__imdb">
                  <div className="moviescontainer__movie__imdb--img">
                    <img src={imdb} alt="imdb_icon" />
                  </div>
                  <span className="moviescontainer__movie__imdb--rate">8.8</span>
                </div>
                <div className="moviescontainer__movie__paragraph">
                  <span className="moviescontainer__movie__paragraph--year">{movie.Year}</span>            
                  <h2
                    onClick={() => history.push(`/results/${movie.imdbID}`)}
                    className="moviescontainer__movie__paragraph--heading">
                    {movie.Title}
                  </h2>
                  <p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his
                    reluctant son.
                  </p>
                </div>
              </div>
            ))
            :
            <div></div>
          }
        </div>
      </main>
    )
  }
}


export default withRouter(SearchResults);