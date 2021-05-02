import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Trending extends Component {
  state = {
    trendingMovies: [],
  };

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
    console.log("+++", this.location);
    return (
      <>
        <h1> Trending today</h1>
        <ul>
          {this.state.trendingMovies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${this.props.parentProps.match.url}movies/${movie.id}`,
                  state: { from: "/" },
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

export default Trending;
