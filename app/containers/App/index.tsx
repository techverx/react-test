import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard";

export interface AppProps {}

export const App = (props: AppProps) => (
  <Router>
    <Switch>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  </Router>
);
