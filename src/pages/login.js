import React from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'
import { authenticate } from '../actions/index'



class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
      password: "",
    };
  }

  Handlesubmit = (e) => {
    e.preventDefault();
    if (this.state.nickname.length > 0 && this.state.password.length > 0) {
        this.props.authenticate(this.state.nickname, this.state.password)
    } else {
      console.log("pass password and nickname");
    }
  };


  render() {

    if (this.props.userID) {
      return <Redirect to="/things/music" />;
    }     

    return (
      <div className="login">
        <FontAwesomeIcon className="login__finger-icon" icon={faFingerprint} />
        <h1 className="login__header">Login to your Finger</h1>
        <div className="login__box">
          <form
            className="login__box--form"
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
            <button type="submit">Sign in</button>
          </form>
          <Link className="redirect-register" to="/register">
            Create Finger account
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({userID = null}) => ({userID}) 

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) =>
    dispatch(authenticate(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
