import React, { Profiler } from 'react';
import './ContactPage.scss';

export default function Homepage() {
  return (
    <div className='contact-page'>
      <Profiler
        id='Directory'
        onRender={(id, phase, actualDuration) => {
          console.debug({ id, phase, actualDuration });
        }}
      >
        <h3>Address: Crown Shop, Shop Street 13 A. London</h3>
      </Profiler>
    </div>
  );
}
