import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../assets/crown.svg';
import './Header.scss';
import CartIcon from './CartIcon';
import UserIcon from './UserIcon';
import CartDropdown from './CartDropdown';
import {
  HeaderFill,
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionIcon
} from './Header.styles';
import { signOutStart } from '../reducer/userActions';

export default function Header() {
  const currentUser = useSelector(state => state.user.currentUser);
  const cartVisible = useSelector(state => state.cart.cartVisible);
  const dispatch = useDispatch();

  return (
    <>
      <HeaderFill />
      <HeaderContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to='/shop'>SHOP</OptionLink>
          <OptionLink to='/contact'>CONTACT</OptionLink>
          {currentUser ? (
            <>
              <OptionLink to='/signin' onClick={() => dispatch(signOutStart())}>
                SIGN OUT
              </OptionLink>
              <OptionIcon to='/user'>
                {/* user */}
                <UserIcon />
              </OptionIcon>
            </>
          ) : (
            <OptionLink to='/signin'>SIGN IN</OptionLink>
          )}
          <OptionIcon to='#'>
            <CartIcon />
          </OptionIcon>
        </OptionsContainer>
        {cartVisible && <CartDropdown />}
      </HeaderContainer>
    </>
  );
}
