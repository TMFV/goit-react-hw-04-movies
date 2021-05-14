import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Cast from "../component/Cast/Cast";
import Reviews from "../component/Reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    page: "",
  };

  toggle() {
    if (this.props.detail === "cast") {
      return <Cast movieId={this.props.match.params.movieId} />;
    } else if (this.props.detail === "reviews") {
      return <Reviews movieId={this.props.match.params.movieId} />;
    }
  }

  render() {
    console.log("MovieDetailsPage---", this.props);
    return this.toggle();
  }
}
export default withRouter(MovieDetailsPage);
