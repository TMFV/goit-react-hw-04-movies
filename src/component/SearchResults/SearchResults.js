import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class SearchResult extends Component {
  state = {
    searchWords: "",
    arrayResult: [],
  };
  async componentDidMount() {
    console.log(this.props.words);
    const apiKey = "140aa2a61156d040b45d8a45da490f38";
    await this.setState({ searchWords: this.props.words });

    let arr = await axios
      .get(
        `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${this.state.searchWords}&page=1`
      )
      .then((response) => console.log(response.data.results))
      .catch((error) => console.log(error));
    console.log(arr);

    //this.setState({ arrayResult: [...arr] });
  }
  componentWillUnmount() {
    this.setState({ searchWords: "" });
  }

  render() {
    return (
      <>
        <h3>SearchResult{this.state.searchWords}</h3>
        {/* {searchResutsArray.map((movie) => (
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
        ; */}
      </>
    );
  }
}

export default withRouter(SearchResult);

//<Trending apiKey="140aa2a61156d040b45d8a45da490f38" />;
