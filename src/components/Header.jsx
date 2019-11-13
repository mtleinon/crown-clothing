import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {ReactComponent as Logo} from '../assets/crown.svg';
import './Header.scss';
import { auth } from '../firebase/firebaseUtils';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';

export default function Header() {
  const currentUser = useSelector(state => state.user.currentUser);
  const cartVisible = useSelector(state => state.cart.cartVisible);

  console.debug('auth =', auth);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
        </Link>
        <div className="options">
          <Link className="option" to='/shop'>SHOP</Link>
          <Link className="option" to='/contact'>CONTACT</Link>
          {
            currentUser ? 
            (<div className="option" onClick={()=>auth.signOut()} >
              SIGN OUT
            </div>)
            : 
            (<Link className='option' to='/signin'>
              SIGN IN
            </Link>)
          }
          <CartIcon/>
        </div>
        {cartVisible && <CartDropdown/>}
    </div>
  )
}
