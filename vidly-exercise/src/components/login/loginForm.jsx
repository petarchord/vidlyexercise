import React, { Component } from "react";
import Joi from "@hapi/joi";
import Input from "../common/input";
import Form from "../common/form";

class LoginForm extends Form {
  email = React.createRef();
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = Joi.object({
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  });

  validate = () => {
    const result = this.schema.validate(this.state.data, { abortEarly: false });
    console.log("result", result);
    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div className="login_form_holder">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput(
            "Email address",
            "email",
            "email",
            "Enter email",
            "email"
          )}
          {this.renderInput(
            "Password",
            "password",
            "password",
            "Password",
            "password"
          )}

          {this.renderButton("Log in")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
