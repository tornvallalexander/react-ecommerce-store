import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

// SCSS
import "./sign-in.styles.scss";

class SignIn extends Component {
  state = {
    password: "",
    email: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
