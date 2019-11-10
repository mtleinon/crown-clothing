import React from 'react';
import {useHistory, useParams, useLocation} from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl}) => {

  // TOOD: remove these test printous
  const params = useParams ();
  console.debug('params =', params);
  const location = useLocation ();
  console.debug('location =', location);
  const history = useHistory ();
  console.debug('linkUrl =', linkUrl);

  return( <div className={`${size} menu-item`}
    onClick={()=> history.push(`${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{backgroundImage: `url(${imageUrl})`}} 
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
    </div>
  </div>);
};

export default MenuItem;