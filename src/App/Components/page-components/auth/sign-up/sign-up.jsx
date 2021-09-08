// REACT HOOKS
import { useState } from 'react';
// REDUX
import { connect } from 'react-redux';
import { signUpStart } from '../../../../Redux/reducers/user/actions/userActions.js';
// REUSABLE COMPONENTS
import { FormInput } from '../../../reusable-components/form-input/form-input.jsx';
import { Button } from '../../../reusable-components/button/button.jsx';
// STYLES
import { signUpPageStyles } from './sign-up.styles.js';

const SignUp = ({ dispatch }) => {

  // HOOKS
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const { signUp, title } = signUpPageStyles(); 

  // METHODS
  const handleSubmit = (event) => {

    event.preventDefault();

    const userCredentials = {
      displayName,
      email,
      password
    };

    if (password !== confirmPassword) {
      alert('Passwords do not match!');

      return;
    }

    dispatch(signUpStart(userCredentials));

  };

  const handleChange = (event) => {

    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });

  };

  return (
    <div className={signUp}>
      <h2 className={title}>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={(event) => handleSubmit(event)} className="sign-up-form">
        <FormInput
          handler={(event) => handleChange(event)}
          value={displayName}
          required={true}
          labelText="Display Name"
          name="displayName"
          type="text"
        />

        <FormInput
          handler={(event) => handleChange(event)}
          value={email}
          required={true}
          labelText="Email"
          name="email"
          type="email"
        />

        <FormInput
          handler={(event) => handleChange(event)}
          value={password}
          required={true}
          labelText="Password"
          name="password"
          type="password"
        />

        <FormInput
          handler={(event) => handleChange(event)}
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
};

export default connect(null)(SignUp);
