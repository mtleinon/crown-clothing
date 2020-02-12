import React, { useState } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { googleSignInStart, emailSignInStart } from '../reducer/userActions';
import { useDispatch, useSelector } from 'react-redux';

import './SignIn.scss';
import ErrorMessage from './ErrorMessage';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
    // setEmail('');
    setPassword('');
  };

  return (
    <div className='sign-in'>
      <h2>I have already an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={() => dispatch(googleSignInStart())}
            googleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
      {user && user.signInError && (
        <ErrorMessage>Login Failed: {user.signInError.message}</ErrorMessage>
      )}
    </div>
  );
}
