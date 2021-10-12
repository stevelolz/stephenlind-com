import React, {Fragment, useContext} from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';

import ModalContext from '../store/modalContext';
import SEO from '../components/SEO';
import _map from 'lodash/map';
import styled from 'styled-components';
import {fadeInUp} from '../style/animations';

export const Hero = styled.div`
  background: white;
  position: relative;
  animation: ${fadeInUp}0.3s;
  h1 {
    position: absolute;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-size: 60px;
  }
  img {
    max-width: 100%;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    position: relative;
    margin-top: 30px;
  }
`;

const Music = styled.div`
  background: white;
  position: relative;
  padding: 50px 0;
  animation: ${fadeInUp}0.3s;
  h2 {
    text-align: center;
    text-transform: uppercase;
    padding: 0 50px;
  }
  &:nth-child(2n) {
    background: black;
    h2 {
      color: white;
    }
  }
`;

const MusicFlex = styled.div`
  position: relative;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 50px;
  max-width: 1440px;
  margin: 0 auto;
  animation: ${fadeInUp}0.3s;
  @media screen and (max-width: 767px) {
    padding-top: 25px;
  }
`;

const MusicFlexItem = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: calc(50% - 25px);
  animation: ${fadeInUp}0.3s;
  img {
    max-width: 200px !important;
    width: 100%;
    height: auto;
    @media screen and (max-width: 1024px) {
      max-width: 100% !important;
    }
  }
  p {
    font-size: 14px;
  }
  &#needy {
    background: rgb(205, 224, 222);
    background: linear-gradient(90deg, rgba(205, 224, 222, 1) 0%, rgba(144, 174, 176, 1) 100%);
  }
  &#just-another-night {
    background: rgb(237, 240, 229);
    background: linear-gradient(90deg, rgba(237, 240, 229, 1) 0%, rgba(167, 182, 143, 1) 100%);
  }
  &#anxiety {
    background: rgb(233, 230, 241);
    background: linear-gradient(90deg, rgba(233, 230, 241, 1) 0%, rgba(179, 160, 215, 1) 100%);
  }
  &#kicking-myself {
    background: rgb(251, 226, 221);
    background: linear-gradient(90deg, rgba(251, 226, 221, 1) 0%, rgba(228, 174, 164, 1) 100%);
  }
  &#some-boy-remix {
    background: rgb(223, 176, 120);
    background: linear-gradient(90deg, rgba(223, 176, 120, 1) 0%, rgba(209, 155, 85, 1) 100%);
  }
  &#some-boy {
    background: rgb(248, 215, 155);
    background: linear-gradient(90deg, rgba(248, 215, 155, 1) 0%, rgba(230, 190, 118, 1) 100%);
  }
  &#should-come-easy {
    background: rgb(255, 255, 255);
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(250, 232, 60, 1) 100%);
  }
  &#best-youll-ever-have {
    background: rgb(252, 229, 0);
    background: linear-gradient(90deg, rgba(252, 229, 0, 1) 0%, rgba(255, 135, 0, 1) 100%);
  }
  @media screen and (max-width: 1024px) {
    left: 0 !important;
    text-align: center;
    width: 100%;
  } 
`;

const MusicFlexItemCover = styled.div`
  width: 30%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const MusicFlexItemData = styled.div`
  width: 70%;
  padding: 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const MusicFlexItemDataLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  a {
    max-width: 25px !important;
    color: #000;
    margin: 0 10px 0 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 10px;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    a {
      flex: auto;
      width: 25%;
      margin: 0 3px;
    }
  }
`;

const AboutBlock = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 75px 50px;
  align-items: center;
`;

const AboutBlockItem = styled.div` 
  width: calc(50% - 50px);
  img {
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.45);
    max-width: 100%;
    border-radius: 50px;
  }
  h2 {
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  p {
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Contact = styled.div` 
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  background: black;
  h2 {
    color: white;
    text-align: center;
    margin-bottom: 50px;
  }
  form {
    max-width: 420px;
    width: 100%;
    margin: 0 auto;
    label {
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      display: block;
    }
    input {
      display: block;
      width: 100%;
      background: transparent;
      color: white;
      border: 0;
      border-bottom: 4px solid white;
      padding: 0 0 10px;
      margin-bottom: 25px;
    }
    textarea {
      width: 100%;
      background: transparent;
      color: white;
      border: 0;
      border-bottom: 4px solid white;
      padding: 0 0 10px;
      height: 100px;
      margin-bottom: 25px;
    }
    button {
      background: white;
      color: black;
      border: 0;
      width: 100%;
      padding: 8px;
    }
  }
`;

const ContactBntWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`;

const ContactBtnItem = styled.div`
  width: calc(50% - 10px);
`;

const indexQuery = graphql`
    {
        datoCmsHomePage {
            title
            seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
        },
        datoCmsHero {
            heroTitle
            background {
                url
            }
        },
        datoCmsBio {
            bioTitle
            content
            image {
                url
            }
        },
        singles: allDatoCmsMusic ( sort: { fields: [meta___createdAt], order: ASC } ) {
          edges {
              node {
                  id
                  releases
                  musicTitle
              }
          }
        },
    }
`;

export default function IndexPage() {
  const data = useStaticQuery(indexQuery);
  const {title, seoMetaTags} = data.datoCmsHomePage;
  const {heroTitle, background} = data.datoCmsHero;
  const {bioTitle, content, image} = data.datoCmsBio;
  const {edges} = data.singles;
  return (
    <Fragment>
      <SEO meta={seoMetaTags}/>
      <Hero>
        <img src={background.url} alt="Stephen Lind music"/>
      </Hero>
      {_map(edges, (post) => {
        let theMusic = JSON.parse(post.node.releases);
        return (
          <Music id="music" key={post.node.id}>
            <h2>{post.node.musicTitle}</h2>
            <MusicFlex>
              {theMusic.map((gh, i) => (
                <MusicFlexItem key={i} id={gh.background}>
                  <MusicFlexItemCover>
                    <img src={gh.cover} alt={gh.title}/>
                  </MusicFlexItemCover>
                  <MusicFlexItemData>
                    <h3>{gh.title}</h3>
                    <p>Released: {gh.releaseDate}</p>
                    <h4>Listen:</h4>
                    <MusicFlexItemDataLinks>
                      <a rel="noreferrer" tabIndex="0" href={gh.spotify} target="_blank" title="Spotify">
                        <img src="https://www.datocms-assets.com/54318/1629876294-icon-spotify.svg" />
                      </a>
                      <a rel="noreferrer" tabIndex="0" href={gh.apple} target="_blank" title="Apple Music">
                        <img src="https://www.datocms-assets.com/54318/1629876289-icon-apple-music.svg" />
                      </a>
                      <a rel="noreferrer" tabIndex="0" href={gh.itunes} target="_blank" title="iTunes">
                        <img src="https://www.datocms-assets.com/54318/1629876287-icon-apple-itunes.svg" />
                      </a>
                      <a rel="noreferrer" tabIndex="0" href={gh.deezer} target="_blank" title="Deezer">
                        <img src="https://www.datocms-assets.com/54318/1629876291-icon-deezer.svg" />
                      </a>
                      <a rel="noreferrer" tabIndex="0" href={gh.tidal} target="_blank" title="Tidal">
                        <img src="https://www.datocms-assets.com/54318/1629876295-icon-tidal.svg" />
                      </a>
                      <a rel="noreferrer" tabIndex="0" href={gh.youtube} target="_blank" title="YouTube Music">
                        <img src="https://www.datocms-assets.com/54318/1629876298-icon-yt-music.svg" />
                      </a>
                      <a rel="noreferrer" tabIndex="0" href={gh.amazon} target="_blank" title="Amazon Music">
                        <img src="https://www.datocms-assets.com/54318/1629876284-icon-amazon-music.svg" />
                      </a>
                    </MusicFlexItemDataLinks>
                  </MusicFlexItemData>
                </MusicFlexItem>
              ))}
            </MusicFlex>
          </Music>
        )
      })}
      <AboutBlock id="bio">
        <AboutBlockItem>
          <img src={image.url} alt="Stephen Lind bio"/>
        </AboutBlockItem>
        <AboutBlockItem>
          <h2>{bioTitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </AboutBlockItem>
      </AboutBlock>
      <Contact id="contact">
        <h2>Contact</h2>
        <form method="post" action="https://getform.io/f/5661ecaa-4833-4e70-90b4-d9a54bcb5a7d">
          <label htmlFor="email">Name</label>
          <input type="text" name="name" placeholder="Your name*" required/>
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="Your email*" required />
          <label htmlFor="message">What's Up?</label>
          <textarea name="message" placeholder="Your message*" required/>
          <ContactBntWrap>
            <ContactBtnItem>
              <button type="submit">Send</button>
            </ContactBtnItem>
            <ContactBtnItem>
              <input type="reset" value="Clear" />
            </ContactBtnItem>
          </ContactBntWrap>
        </form>
      </Contact>
    </Fragment>
  );
}