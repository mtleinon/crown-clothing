import React, { Profiler } from 'react';
import Directory from '../components/Directory';
import './Homepage.scss';

export default function Homepage() {
  return (
    <div className='homepage'>
      <Profiler
        id='Directory'
        onRender={(id, phase, actualDuration) => {
          console.debug({ id, phase, actualDuration });
        }}
      >
        <Directory />
      </Profiler>
    </div>
  );
}
