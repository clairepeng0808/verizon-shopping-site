import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

const Badge: React.FC<{ text: string }> = (props) => {
  return <BadgeWrapper {...props}>{props.text}</BadgeWrapper>;
};

const BadgeWrapper = styled.div`
  font-size: 12px;
  padding: 5px;
  border-radius: 4px;
  font-weight: bold;
  color: ${palette.white};
  background-color: ${palette.secondary};
  display: inline;
`;

export default React.memo(Badge);
