import { Link, withRouter } from 'react-router';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const WelcomeLogin = React.createClass({
  getInitialState() {
    return {
      username: '',
      password: ''
    };
  },

  handleUsername(event) {
    const username = event.target.value;

    this.setState({
      username
    });
  },

  handlePassword(event) {
    const password = event.target.value;

    this.setState({
      password
    });
  },

  handleLogin() {
    axios.post('/api/token', {
      username: this.state.username,
      password: this.state.password
    })
    .then(() => {
      this.props.router.push('/app');
    })
    .catch((err) => {
      console.error(err);
    });
  },

  render() {
    return <div className="container-cols">
      <h3>Log in with your username and password</h3>
      <TextField
        floatingLabelText="Username"
        value={this.state.username}
        onChange={this.handleUsername}
      />
      <TextField
        floatingLabelText="Password"
        type="password"
        value={this.state.password}
        onChange={this.handlePassword}
      />
      <RaisedButton
        label="Log In"
        secondary={true}
        className="margin"
        onClick={this.handleLogin}
      />
    </div>;
  }
});

export default withRouter(WelcomeLogin);
