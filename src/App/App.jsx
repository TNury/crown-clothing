// REACT HOOKS
import { useEffect } from 'react';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { currentUserSelector } from './Redux/reducers/user/selectors/userSelectors.js';
import { checkUserSession } from './Redux/reducers/user/actions/userActions.js';
// REACT-ROUTER
import { Switch, Route, Redirect } from 'react-router-dom';
// PAGE COMPONENTS
import { HomePage } from './Components/page-components/home/home.jsx';
import { ShopPage } from './Components/page-components/shop/shop.jsx';
import { CheckoutPage } from './Components/page-components/checkout/checkout-page.jsx';
import { AuthPage } from './Components/page-components/auth/auth.jsx';
// REUSABLE COMPONENTS
import Header from './Components/reusable-components/header/header.jsx';
// STYLES
import { appStyles } from './App.styles.js';
import './Assets/font/font.scss';

export const App = () => {

  // HOOKS
  const userProps = useSelector(currentUserSelector);
  const dispatch = useDispatch();

  // EFFECTS
  useEffect(() => {

    dispatch(checkUserSession());

  }, [dispatch]);

  // STYLES
  const { app } = appStyles();

  return (
    <div className={app}>
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
};
