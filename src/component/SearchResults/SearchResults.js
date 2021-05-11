import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class SearchResult extends Component {
  state = {
    searchWords: "",
    arrayResult: [],
  };

  setNewSearchWord = () => {
    if (this.state.searchWords !== this.props.words) {
      this.setState({ searchWords: this.props.words });
    }
  };

  changeStateSerachArr = () => {
    this.setState({ arrayResult: this.search });
  };

  async search() {
    const apiKey = "140aa2a61156d040b45d8a45da490f38";
    console.log(
      "search:",
      `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${this.state.searchWords}&page=1`
    );
    let arr = await axios
      .get(
        `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${this.props.words}&page=1`
      )
      .then((response) => {
        this.setState({ arrayResult: response.data.results });
      })
      .catch((error) => console.log(error));

    //this.setState({ arrayResult: [...arr] });
  }

  componentWillUnmount() {
    this.setState({ searchWords: "" });
  }

  async componentDidMount() {
    this.setNewSearchWord();
    this.search();
  }

  render() {
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

//<Trending apiKey="140aa2a61156d040b45d8a45da490f38" />;
