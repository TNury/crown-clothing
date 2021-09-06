// REACT HOOKS
import { useState } from 'react';
// REDUX 
import { useDispatch } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../../../Redux/reducers/user/actions/userActions.js';
// REUSABLE COMPONENTS
import { FormInput } from '../../../reusable-components/form-input/form-input.jsx';
import { Button } from '../../../reusable-components/button/button';
// STYLES
import { signInPageStyles } from './sign-in.styles.js';

export const SignIn = () => {

  // HOOKS
  const [userCredentials, setCredentials] = useState({ 
    email: '', 
    password: '' 
  });
  const { email, password } = userCredentials;

  const dispatch = useDispatch();

  // METHODS
  const handleSubmit = async (event) => {

    event.preventDefault();

    dispatch(emailSignInStart({ email, password }));

  };

  const handleChange = (event) => {

    const { name, value } = event.target;
    
    setCredentials({ ...userCredentials, [name]: value });

  };

  // STYLES
  const { signIn, title, buttons } = signInPageStyles();

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
            handler={() => dispatch(googleSignInStart())}
            styles="_brand-g"
            type="button"
            text="Sign In With Google"
          />
        </div>
      </form>
    </div>
  );
};