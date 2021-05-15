import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../styles/HomeView.module.css";

class HomeView extends Component {
  state = { trendingMovies: [] };
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=140aa2a61156d040b45d8a45da490f38"
      )
      .then((response) =>
        this.setState({ trendingMovies: response.data.results })
      );
  }
  render() {
    return (
      <>
        <h1 className={style.mainTitle}> Trending today</h1>
        <hr />
        <ul>
          {this.state.trendingMovies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;
