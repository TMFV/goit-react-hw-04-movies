import React, { Component } from "react";
import axios from "axios";

class Actors extends Component {
  state = {
    filmId: "",
    filmActors: [],
  };

  async componentDidMount() {
    const apiKey = "140aa2a61156d040b45d8a45da490f38";
    const movieId = this.props.movieId;

    const actors = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
      )
      .then((response) => response.data.cast);

    await this.setState({
      filmActors: [...actors],
    });
  }
  createActorsList = () => {
    const actorsArray = this.state.filmActors;
    console.log(actorsArray);
    return actorsArray.map((actor) => (
      <li key={actor.id} className="film_details__actors">
        <img
          src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${actor.profile_path}`}
          alt={actor.name}
        />
        <p>{actor.name}</p>
      </li>
    ));
  };

  render() {
    console.log("111", this.props);
    return (
      <div>
        <ul>{this.createActorsList()}</ul>
      </div>
    );
  }
}

export default Actors;

//<Trending apiKey="140aa2a61156d040b45d8a45da490f38" />;
