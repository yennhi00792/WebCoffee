import React, { Component } from 'react';
import {
  Link, NavLink,
} from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div><nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div className="container">
        <NavLink className="navbar-brand text-uppercase fw-bold d-lg-none" to="/Home">Start Bootstrap</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/Home">Home</NavLink></li>
            <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/About">About</NavLink></li>
            <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/Products">Products</NavLink></li>
            <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/Store">Store</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    )
  }
}
