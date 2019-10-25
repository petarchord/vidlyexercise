import React, { Component } from "react";

class MovieDetails extends Component {
  state = {};

  handleSave = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div className="movie_details_holder">
        <h2>Movie Form</h2>
        <div>{this.props.match.params.id}</div>
        <form>
          <button onClick={this.handleSave}>Save</button>
        </form>
      </div>
    );
  }
}

export default MovieDetails;
