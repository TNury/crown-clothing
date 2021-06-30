// REACT
import React from 'react';
// FIREBASE
import {
  auth,
  createUserProfileDocument
} from '../../../../Firebase/firebase.js';
// REUSABLE COMPONENTS
import { FormInput } from '../../../reusable-components/form-input/form-input.jsx';
import { Button } from '../../../reusable-components/button/button.jsx';

export class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // If this suceeds, it creates a user profile document.
      await createUserProfileDocument(user, { displayName });

      // Else it clears the form.
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log(error);
    }
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
}
