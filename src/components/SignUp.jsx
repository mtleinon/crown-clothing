import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from './FormInput';
import './SignUp.scss';

import CustomButton from './CustomButton';
import { auth, createUserProfileDocument } from '../firebase/firebaseUtils';
import { singUpStart } from '../reducer/userActions';

export default function() {
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    dispatch(singUpStart({ email, password, displayName }));
    // try {
    //   const { user} = await auth.createUserWithEmailAndPassword( email, password);
    //   await createUserProfileDocument(user, {displayName});

    //   setDisplayName('');
    //   setEmail('');
    //   setPassword('');
    //   setConfirmPassword('');

    // } catch (error) {
    //   console.error('handleSubmit error =', error);
    // }
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <FormInput
          type='text'
          label='Display name'
          name='displayName'
          value={displayName}
          onChange={event => setDisplayName(event.target.value)}
          required
        />
        <FormInput
          type='email'
          label='Email'
          name='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <FormInput
          type='password'
          label='Password'
          name='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <FormInput
          type='password'
          label='Confirm password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}
