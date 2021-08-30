// COMPONENTS
import SignIn from './sign-in/sign-in.jsx';
import SignUp from './sign-up/sign-up.jsx';
// STYLES
import { authPageStyles } from './auth.styles.js';

export const AuthPage = () => {

  const { authPage } = authPageStyles();

  return (
    <div className={authPage}>
      <SignIn />
      <SignUp />
    </div>
  );
};
