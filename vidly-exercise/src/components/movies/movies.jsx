import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {};
  render() {
    return (
      <div className="movies_holder">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <td>
                <Link to="/movies/1212">Airplane</Link>{" "}
              </td>
              <td>Comedy</td>
              <td>7</td>
              <td>3.5</td>
              <td>
                <button className="btn btn-primary">Delete</button>
              </td>
            </tr>
            <tr className="table-primary">
              <td>
                <Link to="/movies/1313">Die Hard</Link>
              </td>
              <td>Action</td>
              <td>5</td>
              <td>2.5</td>
              <td>
                <button className="btn btn-primary">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
