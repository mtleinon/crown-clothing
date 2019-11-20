import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../assets/crown.svg';
import './Header.scss';
import { auth } from '../firebase/firebaseUtils';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from './Header.styles';
import { signOutStart } from '../reducer/userActions';

export default function Header() {
  const currentUser = useSelector(state => state.user.currentUser);
  const cartVisible = useSelector(state => state.cart.cartVisible);
  const dispatch = useDispatch();

  console.debug('auth =', auth);
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartVisible && <CartDropdown />}
    </HeaderContainer>
  );
}
