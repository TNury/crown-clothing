// REACT
import React from 'react';
// REDUX 
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../../../Redux/reducers/user/actions/userActions.js';
// REUSABLE COMPONENTS
import { FormInput } from '../../../reusable-components/form-input/form-input.jsx';
import { Button } from '../../../reusable-components/button/button';

class SignIn extends React.Component {

  state = {
    email: '',
    password: ''
  };

  handleSubmit = async (event) => {

    event.preventDefault();

    const { email, password } = this.state;
    const { reduxActions: { emailSignInStart } } = this.props;

    emailSignInStart(email, password);

  };

  handleChange(event) {

    const { name, value } = event.target;
    this.setState({ [name]: value });

  };

  render() {

    const { email, password } = this.state;
    const { reduxActions: { googleSignInStart } } = this.props;

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
            <Button handler={null} styles="_default" type="submit" text="Sign In" />

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
  }
}

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
  }
});

export default connect(null, mapDispatchToProps)(SignIn);