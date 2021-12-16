import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const LogoSection = () => {
  return (
    <Background>
      <Logo src={logo} />
    </Background>
  );
};

export default LogoSection;

const Logo = styled.img`
  height: 50%;
  margin: auto;
`;

const Background = styled.div`
  display: flex;
  background-color: #3f92d1;
  height: 100px;
  align-items: center;
`;
