import React, { Component } from "react";
import axios from "axios";
import FilmInfo from "../component/FilmInfo/FilmInfo";

class MoviePageView extends Component {
  state = {
    filmId: "",
    filmGenres: [],
    filmTitle: "",
    filmPoster: "",
    filmActors: [],
    filmReviews: [],
  };

  async componentDidMount() {
    const apiKey = "140aa2a61156d040b45d8a45da490f38";
    const movieId = this.props.match.params.movieId;

    const data = await axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then((response) => response.data)
      .then((data) => data);
    console.log(data);
    const actors = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
      )
      .then((response) => response.data.cast);

    const reviews = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((response) => response.data.results);

    await this.setState({
      filmId: data.id,
      filmGenres: data.genres,
      filmTitle: data.title,
      filmUserScore: data.vote_average,
      filmOverview: data.overview,
      filmPoster: data.poster_path,
      filmActors: [...actors],
      filmReviews: [...reviews],
    });
  }
  handleGoBack = () => {
    this.props.history.push(this.props.location.state.from);
  };
  render() {
    console.log(this.props.match);
    return (
      <>
        <FilmInfo
          dataFilm={this.state}
          fn={this.handleGoBack}
          {...this.props}
        />
      </>
    );
  }
}

export default MoviePageView;

//<Trending apiKey="140aa2a61156d040b45d8a45da490f38" />;
