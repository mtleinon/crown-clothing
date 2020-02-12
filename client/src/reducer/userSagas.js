import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  GOOGLE_SIGN_IN_START,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  EMAIL_SIGN_IN_START,
  SIGN_OUT_START,
  CHECK_USER_SESSION,
  SIGN_UP_START,
} from './userActions';

import { clearCart } from './cartActions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../firebase/firebaseUtils';

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
    // console.debug('signup succeeded userSnapshot.data() =', userSnapshot.data());
  } catch (error) {
    yield put(signInFailure(error));
    // console.debug('signup failed error   =', error);
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    // console.debug('user =', user);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ emailAndPassword: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
    // console.debug('Email authentication succeeded =');
  } catch (error) {
    yield put(signInFailure(error));
    // console.debug('Email authentication failed =');
  }
}

export function* checkUserSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      return;
    }
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield put(clearCart());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ userInfo: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileDocument(user, { displayName });
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignOut() {
  yield takeLatest(SIGN_OUT_START, signOutUser);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, checkUserSession);
}
export function* onSignUp() {
  yield takeLatest(SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUp),
  ]);
}