import React, { Component } from "react";
import DishDetail from "./DishdetailComponent";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";

import { DISHES } from "../resources/dishes";

class Main extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
  };

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const homepage = () => {
      return (
        <div>
          <Home />
        </div>
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={homepage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
