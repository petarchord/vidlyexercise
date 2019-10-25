import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar_holder">
        <ul class="nav">
          <li class="nav-item">
            <Link class="nav-link" to="#">
              Vidly
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/movies">
              Movies
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/customers">
              Customers
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/rentals">
              Rentails
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
