import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from './global.styles';
import Header from './components/Header';
import { checkUserSession } from './reducer/userActions';
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
import ContactPage from './pages/ContactPage';

// import CheckoutPage from './pages/CheckoutPage';
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
// import SignInAndSignUp from './pages/SignInAndSignUp';
const SignInAndSignUp = lazy(() => import('./pages/SignInAndSignUp'));
// import ShopPage from './pages/ShopPage';
const ShopPage = lazy(() => import('./pages/ShopPage'));
// import Homepage from './pages/Homepage';
const Homepage = lazy(() => import('./pages/Homepage'));

function App() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  // onAuthStateChanged returns unsubscribe function which will be 
  // run by React when component will unmount.
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);


  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' component={ContactPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signIn' render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUp />} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
