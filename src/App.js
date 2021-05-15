import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import routes from "./routes";
import style from "./styles/app.module.css";

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
    <div className={style.app}>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <li className={style.navItems}>
            <NavLink
              to={routes.home}
              className="navlink"
              activeClassName="navlink--axtive"
            >
              Home
            </NavLink>
          </li>
          <li className={style.navItems}>
            <NavLink
              to={routes.movies}
              className="navlink"
              activeClassName="navlink--active"
            >
              Movies
            </NavLink>
          </li>
        </nav>
        <hr />
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route exact path={routes.movies} component={MoviesView} />
          <Route path={routes.film} render={() => <MoviePageView />} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
