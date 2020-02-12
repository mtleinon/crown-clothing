import React from 'react';
import './UserData.scss';

export default function UserData({ user }) {
  return (
    <div className='user-data-container'>
      <h2 className='title'>User:</h2>
      <div className='user-data'>
        <span className='heading'>Name:</span>
        <span className='value'>{user.displayName}</span>
      </div>
      <div className='user-data'>
        <span className='heading'>Email:</span>
        <span className='value'>{user.email}</span>
      </div>
    </div>
  );
}
