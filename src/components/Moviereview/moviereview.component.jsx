import React from 'react'
import imdb from "../../assets/img/IMDB-icon.png"
import { MovieContext } from '../../context/MovieContext';
import "./moviereview.scss"

export default class Moviereview extends React.Component {
  static contextType = MovieContext

  render() {
    const { movieData, genres } = this.props;
    console.log(movieData)
    const { addFavorite, deleteFavorite } = this.context;
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    const stored = favorites.find(o => o.movie.imdbID === movieData.imdbID);


    return (
      <main className="overview">
        <div 
          style={{ backgroundImage: `url(${movieData.Poster})` }}
          className="overview__img"></div>
        <div className="overview__texts">
  
          <div className="overview__texts--rating">
            <div className="overview__texts--rating__img">
              <img src={imdb} alt="imdb" />
              <span className="overview__texts--rating__span">{movieData.imdbRating}</span>
            </div>
            { stored ?
              (<button 
                  onClick={() => deleteFavorite(movieData)}
                  className="overview__texts--rating__favbtn added">
                  <i className="fas fa-heart"></i>
                  <span>Added to favorites</span>            
              </button>) :
  
              (<button
                onClick={() => addFavorite(movieData)} 
                  className="overview__texts--rating__favbtn add">
                  <i className="fas fa-heart"></i>
                  <span>Add to favorites</span>
              </button>)
            }
          </div>
  
          <div className="overview__texts--paragraph">
            <span className="overview__texts--paragraph__span">{movieData.Year}</span>
            <h1>{movieData.Title}</h1>
            <p>
              {movieData.Plot}
            </p>
  
            <div className="overview__texts--paragraph__genres">
              <ul>
                { genres.map((genre, index) => <li key={index}>{genre}</li>) }
              </ul>
            </div>
  
          </div>
        </div>
      </main>
    )
  }
}