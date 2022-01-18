import React from 'react';
import styled from 'styled-components';
import { colors } from '../consts/style';

export const Wrapper = styled.div`
  display: flex;
  height: 4rem;
  color: white;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  a {
    margin-left: 0.5em;
    color: white;
    font-weight: 700;
    &:hover {
      color: white;
    }
  }
`;

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <Wrapper>
      &copy; {year} All Rights Reserved -{' '}
      <a href="https://www.slind.us">SLIND</a>
    </Wrapper>
  );
};

export default Footer;
