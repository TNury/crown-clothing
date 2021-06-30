// COMPONENTS
import { SignIn } from './sign-in/sign-in.jsx';
import { SignUp } from './sign-up/sign-up.jsx';

export const AuthPage = () => {

  return (
    <div className="auth-page">
      <SignIn />
      <SignUp />
    </div>
  );
};
