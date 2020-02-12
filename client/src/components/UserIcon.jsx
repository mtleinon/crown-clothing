import React from 'react';
import { ReactComponent as User1Icon } from '../assets/user1.svg';
import { useSelector } from 'react-redux';
import './UserIcon.scss';

export default function UserIcon() {
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <div className='user-icon'>
      <User1Icon className='icon' />
      <span className='name'>{currentUser.displayName}</span>
    </div>
  );
}
