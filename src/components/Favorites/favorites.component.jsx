import React from 'react'
import { withRouter } from 'react-router-dom';
import imdb from "../../assets/img/IMDB-icon.png"
import { MovieContext } from '../../context/MovieContext'

import "./favorites.scss"

class Favorites extends React.Component {
  static contextType = MovieContext;

  render() {
    // const { favorites } = this.context;
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    const { deleteFavorite } = this.context;
    const { history } = this.props;

    return (
      <main className="favorite__results">
        <h1 className="favorite__results--heading">Favorites</h1>
        <div className="moviescontainer">

          {favorites.length > 0 ?
            favorites.map((favorite, index) => (
              <div key={index} className="moviescontainer__movie moviescontainer__movie--1">
                <div 
                  className="image__container"
                  style={{ backgroundImage: `url(${favorite.movie.Poster})` }}  
                >
                  <div className="image__container--type">Action</div>
                  <div
                    onClick={() => deleteFavorite(favorite.movie)} 
                    className="image__container--favbtn">
                    <i                    
                      className="fas fa-heart added"
                    ></i>
                    {/* <i className="far fa-heart add"></i> */}
                  </div>
                </div>
                <div className="moviescontainer__movie__imdb">
                  <div className="moviescontainer__movie__imdb--img">
                    <img src={imdb} alt="imdb_icon" />
                  </div>
                  <span className="moviescontainer__movie__imdb--rate">8.8</span>
                </div>
                <div className="moviescontainer__movie__paragraph">
                  <span className="moviescontainer__movie__paragraph--year">{favorite.movie.Year}</span>
                  <h2 
                    onClick={() => history.push(`/results/${favorite.movie.imdbID}`)}
                    className="moviescontainer__movie__paragraph--heading">
                      {favorite.movie.Title}
                  </h2>
                  <p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his
                    reluctant son.
                  </p>
                </div>
              </div>
          ))
          : <div>No Favorites</div>
          }
        </div>
      </main>
    )
  }
}

export default withRouter(Favorites);