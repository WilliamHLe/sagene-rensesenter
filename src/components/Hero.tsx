import React from "react";
import styled from "styled-components";
import bg from "../images/genser.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroImg src={bg} alt="sweater" />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Vask, rens og skreddersøm</HeroH1>
          <HeroP>La oss gjøre jobben så du kan bruke tiden på noe annet!</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 0 1rem;
  position: relative;
`;
const HeroBg = styled.div`
  background-color: #161c26;
  height: 70vh;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
const HeroImg = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
`;
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  height: 50vh;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.3;
  font-weight: bold;

  @media screen and (min-width: 576px) {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 40px 0 0;
  }
`;
const HeroH1 = styled.h1`
  font-size: 25px;
  @media screen and (min-width: 576px) {
  }
`;
const HeroP = styled.div`
  font-size: 15px;
`;
