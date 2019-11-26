import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from './global.styles';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import SignInAndSignUp from './pages/SignInAndSignUp';
import Header from './components/Header';
import { checkUserSession } from './reducer/userActions';

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
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signIn' render={() =>
          currentUser ? <Redirect to='/' /> : <SignInAndSignUp />} />
      </Switch>
    </div>
  );
}

export default App;
