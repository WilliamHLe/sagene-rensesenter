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
  height: 100vh;
  padding: 0 1rem;
  position: relative;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 70%;
  -o-object-fit: cover;
  object-fit: cover;
`;
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  padding: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.1;
  font-weight: bold;
`;
const HeroH1 = styled.h1``;
const HeroP = styled.div``;
