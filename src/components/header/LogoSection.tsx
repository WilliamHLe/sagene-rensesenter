import React from "react";
import styled, { CSSProperties } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const LogoSection = () => {
  return (
    <Background>
      <LogoLink to="/">
        <ImageItem>
          <StaticImage src="../../images/logo.png" alt="logo" style={Logo} />
        </ImageItem>
      </LogoLink>
    </Background>
  );
};

export default LogoSection;
export const ImageItem = styled.div`
  width: 383px;
`;
const Logo: CSSProperties = {
  height: "auto",
  width: "100%",
  margin: "auto",
  display: "flex",
  justifySelf: "center",
  cursor: "pointer",
  zIndex: "999",
};

const LogoLink = styled(Link)`
  display: flex;
  height: 100px;
  align-items: center;
`;

const Background = styled.div`
  background-color: #4f98f9;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
