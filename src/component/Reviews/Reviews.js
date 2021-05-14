import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Reviews extends Component {
  state = {
    movieId: "",
    filmReviews: [],
  };

  async componentDidMount() {
    const apiKey = "140aa2a61156d040b45d8a45da490f38";

    this.setState({ movieId: this.props.match.params.movieId });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: "",
    });

    const reviews = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((response) => response.data.results);

    await this.setState({
      filmReviews: [...reviews],
    });
  }

  createReviewsList = () => {
    const reviewsArray = this.state.filmReviews;
    return reviewsArray.map((review) => (
      <li>
        <p>{`Author: ${review.author}`}</p>
        <p>{review.content}</p>
      </li>
    ));
  };

  emptyReviews() {
    if (this.state.filmReviews.length === 0) {
      return <p>Sorry ... No reviews !!!</p>;
    } else {
      return (
        <div>
          <ul>{this.createReviewsList()}</ul>
        </div>
      );
    }
  }

  componentWillUnmount() {
    this.setState({ movieId: "", filmReviews: [] });
  }

  render() {
    console.log(this.state.filmReviews);
    return this.emptyReviews();
  }
}

export default withRouter(Reviews);
