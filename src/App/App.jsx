// REACT
import { useEffect } from 'react';
// REDUX
import { connect } from 'react-redux';
import { currentUserSelector } from './Redux/reducers/user/selectors/userSelectors.js';
import { checkUserSession } from './Redux/reducers/user/actions/userActions.js';
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

const App = ({ reduxProps: { userProps }, dispatch }) => {


  useEffect(() => {

    dispatch(checkUserSession());

  }, [checkUserSession]); 


  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/auth"
          render={() => (userProps ? <Redirect to="/" /> : <AuthPage />)}
        />
      </Switch>
    </div>
  );
}

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    userProps: currentUserSelector(currentStore)
  }
});

export default connect(mapStoreToProps)(App);
