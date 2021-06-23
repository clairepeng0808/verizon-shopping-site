import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import palette from '../styles/palette';

interface IconProps {
  icon: any;
  size?: any;
  color?: string;
  onClick?: () => void;
}
const Icon: React.FC<IconProps> = (props) => {
  return <StyledIcon {...props} />;
};

const StyledIcon = styled(FontAwesomeIcon)`
  display: inline;
`;

export default React.memo(Icon);

export const ArrowIcon = styled(Icon)`
  color: ${palette.gray};
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  opacity: 0.7;
  z-index: 10;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
