import React from 'react';
import styled from 'styled-components';
import device, { breakpoints } from '../../utils/mediaUtil';

interface IProps {
  children: JSX.Element[];
}

const ContentContainer: React.FC<IProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  padding: 16px 24px;
  max-width: ${breakpoints.xl}px;
  margin: 0 auto;
  margin-bottom: 60px;
  ${device.xl} {
    max-width: ${breakpoints.lg}px;
  }
`;

export default React.memo(ContentContainer);
