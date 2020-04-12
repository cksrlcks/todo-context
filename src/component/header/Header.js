import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderBlock>
      Todo Practice
      <span role="img" aria-label="potato">
        🍟
      </span>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.header`
  font-size: 2em;
  font-weight: 900;
  letter-spacing: -0.01em;
  padding-top: 2em;
  @media screen and (max-width: 425px) {
    padding-top: 0;
    font-size: 1.4em;
    margin-bottom: 1em;
  }
`;
