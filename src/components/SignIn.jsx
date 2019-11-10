import React, {useState} from 'react'
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import './SignIn.scss';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  }
  return (
    <div className="sign-in">
      <h2>I have already an account</h2>      
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={email} 
          onChange={(event)=>setEmail(event.target.value)}
          label='Email'
          required />
        <FormInput name="password" type="password" value={password}
          onChange={(event)=>setPassword(event.target.value)}
          label='Password'
          required />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  )
}
