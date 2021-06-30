// REACT
import React from 'react';
// FIREBASE
import { auth, signInWithGoogle } from '../../../../Firebase/firebase.js';
// REUSABLE COMPONENTS
import { FormInput } from '../../../reusable-components/form-input/form-input.jsx';
import { Button } from '../../../reusable-components/button/button';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>

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

          <div className="buttons">
          
            <Button
              handler={null}
              modifier="_default"
              type="submit"
              text="Sign In"
            />
            
            <Button
              handler={() => signInWithGoogle()}
              modifier="_brand-g"
              type="button"
              text="Sign In With Google"
            />
            
          </div>
        </form>
      </div>
    );
  }
}
