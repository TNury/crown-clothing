// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { currentUserSelector } from './Redux/reducers/user/selectors/userSelectors.js';
// REACT-ROUTER
import { Switch, Route, Redirect } from 'react-router-dom';
// PAGE COMPONENTS
import { HomePage } from './Components/page-components/home/home.jsx';
import ShopPage from './Components/page-components/shop/shop.jsx';
import CheckoutPage from './Components/page-components/checkout/checkout-page.jsx';
import { AuthPage } from './Components/page-components/auth/auth.jsx';
// REUSABLE COMPONENTS
import Header from './Components/reusable-components/header/header.jsx';
// STYLES MODULE
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
    //   if (user) {
    //     const userRef = await createUserProfileDocument(user);

    //     userRef.onSnapshot((userData) => {
    //       dispatch(
    //         setCurrentUser({
    //           id: userData.id,
    //           ...userData.data()
    //         })
    //       );
    //     });
    //   } else {
    //     dispatch(setCurrentUser(user));
    //   }
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { userProps } = this.props.reduxProps;

    return (
      <div className="app">
        <Header />
        <Switch>
          {/* HOME PAGE */}
          <Route exact path="/" component={HomePage} />
          {/* SHOP PAGE */}
          <Route path="/shop" component={ShopPage} />
          {/* CHECKOUT PAGE */}
          <Route path="/checkout" component={CheckoutPage} />
          {/* AUTH PAGE */}
          <Route
            exact
            path="/auth"
            render={() => (userProps ? <Redirect to="/" /> : <AuthPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    userProps: currentUserSelector(currentStore)
  }
});

export default connect(mapStoreToProps)(App);
