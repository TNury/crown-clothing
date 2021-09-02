// REACT HOOKS
import { useState } from 'react';
// REDUX 
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../../../Redux/reducers/user/actions/userActions.js';
// REUSABLE COMPONENTS
import { FormInput } from '../../../reusable-components/form-input/form-input.jsx';
import { Button } from '../../../reusable-components/button/button';
// STYLES
import { signInPageStyles } from './sign-in.styles.js';

const SignIn = ({ reduxActions }) => {

  // STATES
  const [userCredentials, setCredentials] = useState({ 
    email: '', 
    password: '' 
  });

  // STATE VARIABLES
  const { email, password } = userCredentials;

  // REDUX ACTIONS
  const { googleSignInStart, emailSignInStart } = reduxActions;

  // STYLES
  const { signIn, title, buttons } = signInPageStyles();

  // METHODS
  const handleSubmit = async (event) => {

    event.preventDefault();

    emailSignInStart(email, password);

  };

  const handleChange = (event) => {

    const { name, value } = event.target;
    
    setCredentials({ ...userCredentials, [name]: value });

  };

  return (
    <div className={signIn}>
      <h2 className={title}>I already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={(event) => handleSubmit(event)}>
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
        <div className={buttons}>
          <Button
            handler={null}
            styles="_default"
            type="submit"
            text="Sign In"
          />

          <Button
            handler={() => googleSignInStart()}
            styles="_brand-g"
            type="button"
            text="Sign In With Google"
          />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
  }
});

export default connect(null, mapDispatchToProps)(SignIn);