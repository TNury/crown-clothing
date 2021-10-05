// REACT
import { useEffect, Suspense, lazy } from 'react';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { currentUserSelector } from './Redux/reducers/user/selectors/userSelectors.js';
import { checkUserSession } from './Redux/reducers/user/actions/userActions.js';
// REACT-ROUTER
import { Switch, Route, Redirect } from 'react-router-dom';
// COMPONENTS
import { Header } from './Components/reusable-components/header/header.jsx';
import { Spinner } from './Components/reusable-components/spinner/spinner.jsx';
// STYLES
import { appStyles } from './App.styles.js';
import './Assets/font/font.scss';
// COMPONENTS
import { ErrorBoundary } from './Components/reusable-components/error-boundary/error-boundary.jsx';
// PAGE COMPONENTS WITH LAZY
const HomePage = lazy(() => import('./Components/page-components/home/home'));
const ShopPage = lazy(() => import('./Components/page-components/shop/shop.jsx'));
const CheckoutPage = lazy(() => import('./Components/page-components/checkout/checkout-page.jsx'));
const AuthPage = lazy(() => import('./Components/page-components/auth/auth.jsx'));

export const App = () => {

  // HOOKS
  const userProps = useSelector(currentUserSelector);
  
  const dispatch = useDispatch();

  const { app } = appStyles();

  // EFFECTS
  useEffect(() => {

    dispatch(checkUserSession());

  }, [dispatch]);

  return (
    <div className={app}>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/auth"
              render={() => (userProps ? <Redirect to="/" /> : <AuthPage />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};
