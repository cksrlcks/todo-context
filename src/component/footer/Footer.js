import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterBlock>
      <a
        href="https://heavybear.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="portfolioLink"
      >
        <span role="img" aria-label="go to blog">
          🐻
        </span>
      </a>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.footer`
  position: fixed;
  bottom: 3em;
  right: 4em;
  display: block;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 40px;
    display: block;
    line-height: 1em;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: filter 0.2s, transform 0.4s cubic-bezier(0, 1.68, 1, 0.83);
  }
  &:hover span {
    -webkit-filter: none;
    filter: none;
    transform: scale(1.6);
  }
`;
