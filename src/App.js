import React from "react";

import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/menuComponent";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Flechezo</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
