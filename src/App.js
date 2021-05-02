import axios from "axios";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import Trending from "./component/Trending/Trending";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import NotFoundView from "./views/NotFoundView";
import MoviePageView from "./views/MoviePageView";
import Actors from "./component/Actors/Actors";

const apiKey = "140aa2a61156d040b45d8a45da490f38";

function App() {
  return (
    <div className="App">
      <nav>
        <li>
          <NavLink to="/" className="navlink" activeClassName="navlink--axtive">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="navlink"
            activeClassName="navlink--axtive"
          >
            Movies
          </NavLink>
        </li>
      </nav>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route
          path="/movies/:movieId"
          render={(props) => <MoviePageView {...props} />}
        />

        <Route exact path="/movies" component={MoviesView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
}

export default App;
