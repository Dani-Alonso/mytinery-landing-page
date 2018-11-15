import React, { Component } from "react";
import "./App.css";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

class Header extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <NavLink id="login" className="menu-item" to="/Login">
          Login
        </NavLink>
        <NavLink id="account" className="menu-item" to="/Account">
          Create Account
        </NavLink>
        <NavLink id="cities" className="menu-item" to="/Cities">
          Cities
        </NavLink>
      </Menu>
    );
  }
}
export default Header;
