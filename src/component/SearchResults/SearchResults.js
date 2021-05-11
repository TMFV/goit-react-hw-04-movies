import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class SearchResult extends Component {
  state = {
    searchWords: "",
    arrayResult: [],
  };
  componentDidMount() {
    this.setState({ searchWords: this.props.words });
    this.search();
  }
  componentDidUpdate() {
    if (this.state.searchWords !== this.props.words) {
      this.search();
    }
    this.setState((prevState) => {
      if (prevState.searchWords !== this.props.words)
        return { searchWords: this.props.words };
    });
  }

  search() {
    const apiKey = "140aa2a61156d040b45d8a45da490f38";
    console.log(
      "search:",
      `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${this.state.searchWords}&page=1`
    );
    let arr = axios
      .get(
        `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${this.props.words}&page=1`
      )
      .then((response) => {
        if (this.state.arrayResult !== response.data.results)
          this.setState({ arrayResult: response.data.results });
      })
      .catch((error) => console.log(error));
    return arr;
  }

  render() {
    console.log(this.state.searchWords);

    console.log(this.state.arrayResult);
    return (
      <>
        <h3>SearchResult{this.state.searchWords}</h3>

        {this.state.arrayResult.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `${this.props.match.url}movies/${movie.id}`,
                state: { from: "/movies/" },
              }}
            >
              {movie.name}
            </Link>
          </li>
        ))}
      </>
    );
  }
}

export default withRouter(SearchResult);
