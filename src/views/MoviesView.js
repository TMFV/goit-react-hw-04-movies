import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchResults from "../component/SearchResults/SearchResults";

class MoviesView extends Component {
  state = {
    searchWords: "",
  };

  searchTextToState = (e) => {
    e.preventDefault();
    this.setState({ searchWords: e.target[0].value });
    e.target.reset();
  };
  postToSearch = (word) => {
    return <SearchResults words={word} />;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.searchTextToState} type="submit">
          <input type="text" placeholder="words for searching"></input>
          <button type="submit">Search</button>
        </form>
        <hr />
        <div>
          <h2>{this.state.searchWords}</h2>
          <ul>
            {this.state.searchWords !== "" &&
              this.postToSearch(this.state.searchWords)}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(MoviesView);

//<Trending apiKey="140aa2a61156d040b45d8a45da490f38" />;
