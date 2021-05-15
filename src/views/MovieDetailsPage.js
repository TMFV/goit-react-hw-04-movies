import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Cast = lazy(() => import("../component/Cast/Cast"));
const Reviews = lazy(() => import("../component/Reviews/Reviews"));

//import Cast from "../component/Cast/Cast";
//import Reviews from "../component/Reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    page: "",
  };

  toggle() {
    if (this.props.detail === "cast") {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Cast movieId={this.props.match.params.movieId} {...this.props} />
        </Suspense>
      );
    } else if (this.props.detail === "reviews") {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Reviews movieId={this.props.match.params.movieId} {...this.props} />
        </Suspense>
      );
    }
  }

  render() {
    return this.toggle();
  }
}
export default withRouter(MovieDetailsPage);
