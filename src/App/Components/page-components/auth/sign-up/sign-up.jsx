// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { signUpStart } from '../../../../Redux/reducers/user/actions/userActions.js';
// FIREBASE
import {
  auth,
  createUserProfileDocument
} from '../../../../Firebase/firebase.js';
// REUSABLE COMPONENTS
import { FormInput } from '../../../reusable-components/form-input/form-input.jsx';
import { Button } from '../../../reusable-components/button/button.jsx';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = (event) => {

    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    const userCredentials = {
      displayName,
      email,
      password
    };

    if(password !== confirmPassword) {

      alert('Passwords do not match!');

      return;

    };

    const { dispatch } = this.props;
    
    dispatch(signUpStart(userCredentials));

  };

  handleChange(event) {

    const { name, value } = event.target;

    this.setState({ [name]: value });

  }

  render() {

    const { displayName, email, password, confirmPassword } = this.state;
    
    return (
      <div className="sign-up">
        <h2 className="">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
        
          <FormInput
            handler={(event) => this.handleChange(event)}
            value={displayName}
            required={true}
            labelText="Display Name"
            name="displayName"
            type="text"
          />

          <FormInput
            handler={(event) => this.handleChange(event)}
            value={email}
            required={true}
            labelText="Email"
            name="email"
            type="email"
          />

          <FormInput
            handler={(event) => this.handleChange(event)}
            value={password}
            required={true}
            labelText="Password"
            name="password"
            type="password"
          />

          <FormInput
            handler={(event) => this.handleChange(event)}
            value={confirmPassword}
            required={true}
            labelText="Confirm Password"
            name="confirmPassword"
            type="password"
          />

          <Button
            handler={null}
            modifier="_default "
            type="submit"
            text="SIGN UP"
          />

        </form>
      </div>
    );
  }
};

export default connect(null)(SignUp);
