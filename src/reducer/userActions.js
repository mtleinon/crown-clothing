export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const CHECK_USER_SESSION = 'CHECK_USER_SESSION';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';


export const googleSignInStart = () => (
  { type: GOOGLE_SIGN_IN_START }
);

export const emailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  emailAndPassword
});

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  user
});

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  error
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: SIGN_OUT_FAILURE,
  error
});

// userInfo is {email, password, displayName}
export const singUpStart = userInfo => ({
  type: SIGN_UP_START,
  userInfo
});
export const signUpSuccess = user => ({
  type: SIGN_UP_SUCCESS,
  user
});

export const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  error
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});
