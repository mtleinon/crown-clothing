import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp';
import Header from './components/Header';
import { auth } from './firebase/firebaseUtils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // onAuthStateChanged returns unsubscribe function which will be 
  // run by React when component will unmount.
  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.debug('onAuthStateChanged user =', user);
    });
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
