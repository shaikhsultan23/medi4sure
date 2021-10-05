import { Home } from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Counter } from "./components/Counter";
import React from "react";
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";

export const App = () => {
  return (
  <Router>
      <Link to="/">Back To Home</Link>
      <Link to="/Counter"> Counter</Link>
      

      <Switch>
        <Route path="/Counter">
        <Counter/>
        
        </Route>
      </Switch>
      <Home/>
    </Router>
  );
};
