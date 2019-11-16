import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import SignInAndSignUp from './pages/SignInAndSignUp';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './reducer/userActions';

function App() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  // const [currentUser, setCurrentUser] = useState(null);

  // onAuthStateChanged returns unsubscribe function which will be 
  // run by React when component will unmount.
  useEffect(() => {
    return auth.onAuthStateChanged(async userAuth => {
      // setCurrentUser(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          console.debug('snapShot =', snapShot);
          console.debug('snapShot.data() =', snapShot.data());
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }));

        });
        console.debug('onAuthStateChanged user =', userRef);
      } else {
        console.debug('onAuthStateChanged user logged out');
        dispatch(setCurrentUser(null));
      }
    });
  }, [dispatch]);


  return (
    <div>
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
