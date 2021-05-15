import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { lazy, Suspense } from "react";

const FilmInfo = lazy(() => import("../component/FilmInfo/FilmInfo"));
//import FilmInfo from "../component/FilmInfo/FilmInfo";

class MoviePageView extends Component {
  state = {
    filmId: "",
    filmGenres: [],
    filmTitle: "",
    filmPoster: "",
  };

  async componentDidMount() {
    const apiKey = "140aa2a61156d040b45d8a45da490f38";
    const movieId = this.props.match.params.movieId;

    const data = await axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then((response) => response.data)
      .then((data) => data);

    await this.setState({
      filmId: data.id,
      filmGenres: data.genres,
      filmTitle: data.title,
      filmUserScore: data.vote_average,
      filmOverview: data.overview,
      filmPoster: data.poster_path,
    });
  }
  handleGoBack = (props) => {
    const { state } = this.props.location;
    if (this.props.location.state.query !== undefined) {
      this.props.history.push({
        pathname: "/movies",
        state: { query: props.location.state.query },
      });
    } else if (state) {
      this.props.history.push({
        pathname: "/",
      });
    }
  };
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <FilmInfo
            dataFilm={this.state}
            fn={this.handleGoBack}
            {...this.props}
          />
        </Suspense>
      </>
    );
  }
}

export default withRouter(MoviePageView);

//<Trending apiKey="140aa2a61156d040b45d8a45da490f38" />;
