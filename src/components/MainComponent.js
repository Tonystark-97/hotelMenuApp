import React, { Component } from "react";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import { Navbar, NavbarBrand } from "reactstrap";
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
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />
          <DishDetail
            selectedDish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
      </div>
    );
  }
}

export default Main;
