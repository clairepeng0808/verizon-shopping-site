import styled, { css } from 'styled-components';
import palette from '../styles/palette';

export const FullWidthButton = styled.button<{ empty?: boolean }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  padding: 20px 12px;
  background-image: linear-gradient(
    to right,
    #667eea,
    #764ba2,
    #6b8dd6,
    #8e37d7
  );
  box-shadow: 0 4px 12px 2px rgba(116, 79, 168, 0.75);
  color: ${palette.white};
  font-weight: bold;
  border: none;
  transition: all ease-in-out 0.3s;
  background-size: 200% 100%;

  &:hover {
    background-position: 100% 0;
    opacity: 0.9;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }

  ${(props) =>
    props.empty &&
    css`
      color: black;
      transition: background ease-in-out 0.3s;
      background-image: none;
      box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    `}
`;
