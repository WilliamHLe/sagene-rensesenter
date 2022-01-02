import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const LogoSection = () => {
  return (
    <Background>
      <LogoLink to="/">
        <StaticImage src="../../images/logo.png" alt="logo" style={Logo} />
      </LogoLink>
    </Background>
  );
};

export default LogoSection;

const Logo = {
  height: "50%",
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
