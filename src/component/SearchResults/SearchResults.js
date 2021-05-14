import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SearchResult extends Component {
  state = {
    searchWords: "",
  };
  componentDidMount() {
    this.setState({
      searchWords: this.props.words,
    });
  }

  render() {
    return (
      <div>
        {this.props.results.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: {
                  query: this.props.words,
                  from: this.props.location,
                },
              }}
            >
              {movie.name}
            </Link>
          </li>
        ))}
      </div>
    );
  }
}

export default withRouter(SearchResult);
