import React from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'
import { register } from '../actions/index'

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
      password: "",
      repeatPassword: "",
    };
  }

  Handlesubmit = (e) => {
    e.preventDefault();
    if (
      this.state.nickname.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.repeatPassword
    ) {
      this.props.register(this.state.nickname, this.state.password)
    } else {
      console.log("pass password and nickname");
    }
  };

  render() {

    if (this.props.userID) {
      return <Redirect to="/things/music" />;
    }

    return (
      <div className="register">
        <FontAwesomeIcon
          className="register__finger-icon"
          icon={faFingerprint}
        />
        <h1 className="register__header">Create your Finger account</h1>
        <div className="register__box">
          <form
            className="register__box--form"
            onSubmit={(e) => this.Handlesubmit(e)}
          >
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              id="nickname"
              value={this.state.nickname}
              onChange={(e) => this.setState({ nickname: e.target.value })}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <label htmlFor="repeatPassword">Repeat the password</label>
            <input
              type="password"
              id="repeatPassword"
              value={this.state.repeatPassword}
              onChange={(e) =>
                this.setState({ repeatPassword: e.target.value })
              }
            />
            <button type="submit">Register</button>
          </form>
          <Link className="redirect-login" to="/login">
            Login to your Finger
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userID = null }) => ({ userID }) 

const mapDispatchToProps = dispatch => ({
  register: (username, password) =>
    dispatch(register(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
