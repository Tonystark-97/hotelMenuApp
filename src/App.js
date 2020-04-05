import React, { Component } from "react";

import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/menuComponent";
import { DISHES } from "./resources/dishes";

class App extends Component {
  state = {
    dishes: DISHES,
  };
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Flechezo</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
