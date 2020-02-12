import styled, { css } from 'styled-components';

const googleSignInStyles = css`
  box-sizing: border-box;
  background-color: #4285f4;
  color: white;
  /* border: none; */
  &:hover {
    background-color: #357ae8;
  }
`;

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &:disabled {
    background-color: #aaa;
    color: black;
    border: none;
    cursor: default;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
  &:disabled {
    color: red;
  }
`;

const getButtonStyles = props => {
  if (props.googleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  max-width: 45%;
  /* width: auto; */
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 5px 0 5px;
  font-size: 15px;
  /* background-color: black;
  color: white; */
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  /* border: none; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* @media screen and (max-width: 800px) {
    padding: 0 5px 0 5px;
    min-width: 150px;
  } */
  ${getButtonStyles}
`;
