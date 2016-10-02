import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { decamelizeKeys } from 'humps';
import Joi from 'joi';

const schema = Joi.object({
  username: Joi.string().trim().max(50).label('Username'),
  password: Joi.string().trim().max(255).label('Password'),
  firstName: Joi.string().trim().max(30).label('First Name'),
  lastName: Joi.string().trim().max(30).label('Last Name'),
  avatarUrl: Joi.string().trim().max(30).label('Avatar URL'),
  confirmPassword: Joi.any().valid(Joi.ref('password')).options({ language: { any: { allowOnly: 'must match password' }}}).label('Confirm Password')
});

const WelcomeRegister = React.createClass({
  getInitialState() {
    return {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
      errors: {}
    };
  },

  handleBlur(event) {
    const { name, value } = event.target;
    const nextErrors = Object.assign({}, this.state.errors);
    const inputs = { [name]: value };

    if (name === "confirmPassword") {
      inputs.password = this.state.password;
    }

    if (name === "password") {
      inputs.confirmPassword = this.state.confirmPassword;
    }

    const result = Joi.validate(inputs, schema);

    if (result.error) {
      // invalid
      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    delete nextErrors[name];

    this.setState({ errors: nextErrors });
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

  handleConfirmPassword(event) {
    const confirmPassword = event.target.value;

    this.setState({
      confirmPassword
    });
  },

  handleFirstName(event) {
    const firstName = event.target.value;

    this.setState({
      firstName
    })
  },

  handleLastName(event) {
    const lastName = event.target.value;

    this.setState({
      lastName
    })
  },

  handleAvatarUrl(event) {
    const avatarUrl = event.target.value;

    this.setState({
      avatarUrl
    })
  },

  handleRegister() {
    axios.post('/api/users',
    decamelizeKeys({
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      avatarUrl: this.state.avatarUrl
    }))
    .then(() => {
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
  },

  render() {
    const { errors } = this.state;

    return <div className="container-cols">
      <h3>Create an account to get started!</h3>
      <div className="container-rows">
        <TextField
          floatingLabelText="First Name"
          onChange={this.handleFirstName}
          errorText={errors.firstName}
          onBlur={this.handleBlur}
          name="firstName"
          value={this.state.firstName}
        />
        <TextField
          floatingLabelText="Last Name"
          onChange={this.handleLastName}
          errorText={errors.lastName}
          onBlur={this.handleBlur}
          name="lastName"
          value={this.state.lastName}
        />
      </div>
      <div className="container-rows">
        <TextField
          floatingLabelText="Choose a Username"
          onChange={this.handleUsername}
          errorText={errors.username}
          onBlur={this.handleBlur}
          name="username"
          value={this.state.username}
        />
        <TextField
          floatingLabelText="Avatar Image URL"
          id="avatar-url"
          onChange={this.handleAvatarUrl}
          errorText={errors.avatarUrl}
          onBlur={this.handleBlur}
          name="avatarUrl"
          value={this.state.avatarUrl}
        />
      </div>
      <div className="container-rows">
        <TextField
          floatingLabelText="Choose a Password"
          type="password"
          id="password1"
          onChange={this.handlePassword}
          errorText={errors.password}
          onBlur={this.handleBlur}
          name="password"
          value={this.state.password}
        />
        <TextField
          floatingLabelText="Confirm Password"
          type="password"
          id="password2"
          onChange={this.handleConfirmPassword}
          errorText={errors.confirmPassword}
          onBlur={this.handleBlur}
          name="confirmPassword"
          value={this.state.confirmPassword}
        />
      </div>
      <RaisedButton
        label="Register"
        secondary={true}
        onClick={this.handleRegister}
        className="margin"
      />
    </div>;
  }
});

export default WelcomeRegister;
