import React, { Component } from "react";
import axios from "axios";
import Actors from "../Actors/Actors";

class FilmInfo extends Component {
  state = {
    showActors: false,
  };
  createGenresList = () => {
    const genresArray = this.props.dataFilm.filmGenres;
    return genresArray.map((genre) => (
      <li className="film_details__genre">{genre.name}</li>
    ));
  };
  togleShowActors() {
    this.setState({ showActors: !this.state.showActors });
  }
  render() {
    const allProps = this.props.dataFilm;

    return (
      <div className="film">
        <button onClick={() => this.props.fn()}>← Go back</button>
        <div className="film_info">
          <div className="film_poster">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${allProps.filmPoster}`}
              alt="1"
            />
          </div>
          <div className="film_details">
            <h1 className="film_details__title">{allProps.filmTitle}</h1>
            <p className="film_details__info">{`User Score: ${
              allProps.filmUserScore * 10
            }%`}</p>
            <h2 className="film_details__info_title">Overview</h2>
            <p className="film_details__info">{allProps.filmOverview}</p>
            <h2 className="film_details__info_title">Genres</h2>
            <ul>{this.createGenresList()}</ul>
            <p className="film_details__info"></p>
          </div>
        </div>
        <div>
          <h2 className="film_details__info_title">Additonal information</h2>
          <ul>
            <li key="cast" onClick={() => this.togleShowActors()}>
              Cast
            </li>
            {this.state.showActors && <Actors movieId={allProps.filmId} />}
            <li key="revs">Reviews</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FilmInfo;

//<Trending apiKey="140aa2a61156d040b45d8a45da490f38" />;
