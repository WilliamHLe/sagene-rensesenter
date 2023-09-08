import React, { CSSProperties } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const PriceSection = () => {
  return (
    <PriceContainer>
      <PriceTitle>Rimelige priser</PriceTitle>
      <PriceWrapper>
        <PriceCard>
          <StaticImage
            src="../images/suit.svg"
            style={PriceImage}
            alt="sewing machine"
          />
          <PriceInfo>
            <PriceHeader>470,-</PriceHeader>
            <PriceP>Dressrens</PriceP>
          </PriceInfo>
        </PriceCard>
        <PriceCard>
          <StaticImage
            src="../images/w-mach.svg"
            style={PriceImage}
            alt="suit"
          />
          <PriceInfo>
            <PriceHeader>Fra 130,- per kg</PriceHeader>
            <PriceP>Vask av klær</PriceP>
          </PriceInfo>
        </PriceCard>
        <PriceCard>
          <StaticImage
            src="../images/s-mach.svg"
            style={PriceImage}
            alt="washing"
          />
          <PriceInfo>
            <PriceHeader>Fra 220,-</PriceHeader>
            <PriceP>Opplegg av bukser</PriceP>
          </PriceInfo>
        </PriceCard>
        <PriceCard>
          <StaticImage
              src="../images/carpet-2.png"
              style={PriceImage}
              alt="carpet"
          />
          <PriceInfo>
            <PriceHeader>250,- per m<sup>2</sup></PriceHeader>
            <PriceP>Tepperens</PriceP>
          </PriceInfo>
        </PriceCard>
      </PriceWrapper>
      <PriceText>Kom innom eller ring oss for å få et pristilbud</PriceText>
    </PriceContainer>
  );
};

export default PriceSection;

const PriceContainer = styled.div`
  min-height: 70vh;
  background-color: #ffffff;
  padding: 3rem calc((100vw - 1300px) / 2);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    padding: 1rem calc((100vw - 1300px) / 2);
  }
`;

const PriceTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  border-bottom: 3px solid #3f92d1;
  display: inline-block;
  padding-bottom: 8px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`;

const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  line-height: 2;
  width: 100%;
  max-width: 340px;
  height: auto;
  position: relative;
  border-radius: 10px;
  border-color: #161c26;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    margin-bottom: 0;
  }
`;

const PriceImage: CSSProperties = {
  width: "40%",
  borderRadius: "10px 10px 0 0",
};

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border-color: #161c26;
  padding: 20px;
  line-height: 20px;

  align-items: center;

  @media screen and (min-width: 576px) {
    margin-bottom: 50px;
  }
`;

const PriceHeader = styled.h1`
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 10px;
  padding: 5px 0;
`;
const PriceP = styled.div``;

const PriceText = styled.div`
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`;
