import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  :hover {
    background-color: #eee;
    font-weight: bold;
  }
  &[aria-current] {
    /* background-color: #eee; */
    font-weight: bold;
  }
  @media screen and (max-width: 450px) {
    padding: 10px 5px 10px 5px;
  }
`;

const OptionIconStyles = css`
  cursor: pointer;
  :hover {
    background-color: #eee;
    font-weight: bold;
  }
  &[aria-current] {
    font-weight: bold;
  }
`;

export const HeaderFill = styled.div`
  padding-bottom: 90px;

  @media screen and (max-width: 800px) {
    padding-bottom: 80px;
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 450px) {
    justify-content: space-between;
    padding: 10px 0;
  }
`;

export const LogoContainer = styled(NavLink)`
  width: 58px;
  margin: 15px;
  padding: 3px;

  :hover {
    background-color: #eee;
    font-weight: bold;
  }
  &[aria-current] {
    /* background-color: #eee; */
    font-weight: bold;
  }
  @media screen and (max-width: 800px) {
    width: 55px;
    margin: 0 0 0 10px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 450px) {
    justify-content: space-between;
    padding-left: 10px;
  }
`;

export const OptionLink = styled(NavLink)`
  ${OptionContainerStyles}
`;
// export const OptionLink = styled(Link)`
//   ${OptionContainerStyles}
// `;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const OptionIcon = styled(NavLink)`
  ${OptionIconStyles}
`;
