import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "components/LandingPage";

class HomeRouteContainer extends Component {
  render() {
    return <LandingPage />;
  }
}

export const HomeRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <HomeRouteContainer {...props} />} />
);
