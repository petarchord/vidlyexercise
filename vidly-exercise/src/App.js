import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Customers from "./components/customers/customers";
import Rentals from "./components/rentals/rentals";
import Movies from "./components/movies/movies";
import NotFound from "./components/not-found/not-found";
import Home from "./components/home/home";
import MovieDetails from "./components/movies/moviedetails";
import Login from "./components/login/loginForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={Login} />
          <Route path="/movies" component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" component={Home} />

          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
