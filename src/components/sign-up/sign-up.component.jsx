import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "./../form-input/form-input.component";
import { signUpStart } from "./../../redux/user/user.actions";
import CustomButton from "./../custom-button/custom-button.component";

// SCSS
import "./sign-up.styles.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={displayName}
            required
            handleChange={this.handleChange}
            label="Name"
            type="text"
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            required
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
