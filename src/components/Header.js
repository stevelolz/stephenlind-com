import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import { colors } from '../consts/style';
import { headerTypes } from '../types/propTypes';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Wrapper = styled.div`
  background: ${colors.primary};
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 10px 0;
  }
`;

const Nav = styled.div`
  width: 33.333%;
  margin: auto;
  text-align: left;
  padding-left: 30px;
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    button {
      color: white;
      font-size: 13px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      background: transparent;
      border: 0;

      &:focus {
        outline: none;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  width: 33.333%;
  margin: auto;
  text-align: center;
  h1 {
    a {
      color: white;
      text-transform: uppercase;
      &:hover {
        text-decoration: none;
        opacity: .5;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    text-align: left;
    padding-left: 10px;
    h1 {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 767px) {
    h1 {
      font-size: 18px;
    }
  }
`;

const Socials = styled.div`
  width: 33.333%;
  margin: auto;
  text-align: right;
  padding-right: 30px;
  .socials {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      width: 10%;
      a {
        cursor: pointer;
        width: 20px;
        height: 20px;
        display: block;
        &.facebook {
          background: url('https://www.datocms-assets.com/54318/1629863500-icon-facebook.svg');
          background-size: 100%;
        }
        &.instagram {
          background: url('https://www.datocms-assets.com/54318/1629863503-icon-instagram.svg');
          background-size: 100%;
        }
        &.twitter {
          background: url('https://www.datocms-assets.com/54318/1629863506-icon-twitter.svg');
          background-size: 100%;
        }
        &.youtube {
          background: url('https://www.datocms-assets.com/54318/1629863508-icon-youtube.svg');
          background-size: 100%;
        }
        &.tiktok {
          background: url('https://www.datocms-assets.com/54318/1629863886-icon-tiktok.svg');
          background-size: 100% 100%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    padding-right: 10px;
    .socials {
      li {
        a {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;

export default function Header({ location }) {
  /**
   * Oftentimes we'll have different UI state
   * based on the router location.  Do it here.
   */
  useEffect(() => console.log(location), [location]);

  return (
    <Wrapper>
      <Nav>
        <nav>
          <button onClick={() => scrollTo('#music')} title="Music">Music</button>
          <button onClick={() => scrollTo('#bio')} title="Bio">Bio</button>
          <button onClick={() => scrollTo('#contact')} title="Contact">Contact</button>
        </nav>
      </Nav>
      <Logo>
        <h1><a href="/" title="Stephen Lind">Stephen Lind</a></h1>
      </Logo>
      <Socials>
        <ul class="socials">
          <li><a class="facebook" role="link" href="https://www.facebook.com/stephenlindmusic" target="_blank"></a></li>
          <li><a class="instagram" role="link" href="https://www.instagram.com/stephenlind" target="_blank"></a></li>
          <li><a class="twitter"a role="link" href="https://www.twitter.com/_stephenlind" target="_blank"></a></li>
          <li><a class="tiktok"a role="link" href="https://www.tiktok.com/_stephenlind" target="_blank"></a></li>
          <li><a class="youtube" role="link" href="https://www.youtube.com/channel/UC_-B-d4nR3JEIIydBXFlTNQ" target="_blank"></a></li>
        </ul>
      </Socials>
    </Wrapper>
  );
}

Header.propTypes = headerTypes;
