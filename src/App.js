import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const HomeView = lazy(() => import("./views/HomeView"));
const MoviesView = lazy(() => import("./views/MoviesView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));
const MoviePageView = lazy(() => import("./views/MoviePageView"));

//import HomeView from "./views/HomeView";
//import MoviesView from "./views/MoviesView";
//import NotFoundView from "./views/NotFoundView";
//import MoviePageView from "./views/MoviePageView";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <li>
            <NavLink
              to="/"
              className="navlink"
              activeClassName="navlink--axtive"
            >
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
          <Route exact path="/movies" component={MoviesView} />
          <Route path="/movies/:movieId" render={() => <MoviePageView />} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
