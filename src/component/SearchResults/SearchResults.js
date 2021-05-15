import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

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
          <li key={`${movie.id}${movie.title}`}>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: {
                  query: this.props.words,
                  from: this.props.location,
                },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </div>
    );
  }
}
SearchResult.propTypes = {
  results: PropTypes.array,
  words: PropTypes.string,
};
SearchResult.defaultProps = {
  results: [],
};

export default withRouter(SearchResult);
