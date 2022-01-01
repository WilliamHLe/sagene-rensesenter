import React, { CSSProperties } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const ServiceSection = () => {
  return (
    <ServiceContainer>
      <ServiceWrapper>
        <ServiceCard>
          <StaticImage
            src="../images/sy.jpg"
            style={ServiceImage}
            alt="sewing machine"
          />
          <ServiceInfo>
            <ServiceHeader>Endring og reparasjoner av klær</ServiceHeader>
            <ServiceP>
              Vi fikser og endrer på klærne dine slik at de passer deg perfekt.
            </ServiceP>
          </ServiceInfo>
        </ServiceCard>
        <ServiceCard>
          <StaticImage
            src="../images/dress.png"
            style={ServiceImage}
            alt="suit"
          />
          <ServiceInfo>
            <ServiceHeader>Rens av dress</ServiceHeader>
            <ServiceP>
              Det er viktig å rense dresset etter bruk for å unngå at flekker
              setter seg fast.
            </ServiceP>
          </ServiceInfo>
        </ServiceCard>
        <ServiceCard>
          <StaticImage
            src="../images/tepperens.png"
            style={ServiceImage}
            alt="carpet"
          />
          <ServiceInfo>
            <ServiceHeader>Tepperens</ServiceHeader>
            <ServiceP>
              For å øke levetiden på teppet ditt, anbefaler vi profesjonelt
              tepperens hvert 12. til 18. måned.
            </ServiceP>
          </ServiceInfo>
        </ServiceCard>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default ServiceSection;

const ServiceContainer = styled.div`
  background-color: #4f98f9;
  min-height: 80vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 2rem;
  justify-items: center;
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 0 calc((100vw - 1300px) / 2);
  }
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  line-height: 2;
  width: 100%;
  max-width: 300px;
  min-height: 400px;
  height: auto;
  position: relative;
  border-radius: 10px;
  border-color: #161c26;
`;

const ServiceImage: CSSProperties = {
  width: "100%",
  height: "30vh",
  objectFit: "cover",
  borderRadius: "10px 10px 0 0",
};

const ServiceInfo = styled.div`
  border-radius: 5px;
  border-color: #161c26;
  padding: 20px;
  line-height: 20px;
`;

const ServiceHeader = styled.h1`
  font-size: 20px;
  margin-bottom: 18px;
  padding: 5px 0;
`;
const ServiceP = styled.div``;
