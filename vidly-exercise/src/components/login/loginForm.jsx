import React, { Component } from "react";

class LoginForm extends Component {
  email = React.createRef();
  state = {
    account: {
      email: "",
      password: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("ref:", this.email.current);
  };

  handleChange = e => {
    console.log("e", e.currentTarget.name);
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div className="login_form_holder">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={this.handleChange}
              ref={this.email}
              type="email"
              className="form-control"
              id="emailAddress"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
