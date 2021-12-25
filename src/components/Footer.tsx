import React from "react";
import styled from "styled-components";
import {
  FaRegCopyright,
  MdLocationOn,
  MdMail,
  BsTelephoneFill,
} from "react-icons/all";
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterDescription>
          <h1>SAGENE RENSESENTER</h1>
          <DescItems>
            <Icon>
              <MdLocationOn />
            </Icon>
            <DescAddress>
              <DescAddressItems>Maridalsveien 174A</DescAddressItems>
              <DescAddressItems>0469 Oslo</DescAddressItems>
            </DescAddress>
          </DescItems>
          <DescItems>
            <Icon>
              <MdMail />
            </Icon>
            post@sagenerensesenter.no
          </DescItems>
          <DescItems>
            <Icon>
              <BsTelephoneFill />
            </Icon>
            96 69 22 73
          </DescItems>
        </FooterDescription>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Tjenester</FooterLinkTitle>
            <FooterLink>Rens</FooterLink>
            <FooterLink>Vask</FooterLink>
            <FooterLink>Skredder</FooterLink>
            <FooterLink>Tepperens</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Snarvei</FooterLinkTitle>
            <FooterLink>Om oss</FooterLink>
            <FooterLink>FAQ</FooterLink>
            <FooterLink>Kontakt oss</FooterLink>
            <FooterLink>Tjenestevilkår</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterContainer>
      <CopyrightContainer>
        <CopyrightText>
          <Icon>
            <FaRegCopyright />
          </Icon>
          2022 Sagene Rensesenter
        </CopyrightText>
        <Author>Utviklet av William Le</Author>
      </CopyrightContainer>
    </>
  );
};

export default Footer;

const Icon = styled.div`
  display: flex;
  margin: 0 3px;
  align-items: center;
`;

const FooterContainer = styled.div`
  padding: 2rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: 2fr 1fr;
  color: #ffffff;
  background: #1c2330;
  width: 100%;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const DescItems = styled.div`
  display: flex;
  width: 100%;
  font-size: 13px;
  margin-bottom: 10px;
`;

const DescAddress = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescAddressItems = styled.div``;

const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 15px;
    line-height: 1.3;
  }

  @media screen and (min-width: 576px) {
    padding: 1rem 2rem;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1.5rem;

  @media screen and (min-width: 576px) {
    padding: 1rem 2rem;
  }
`;

const FooterLink = styled.div`
  text-decoration: none;
  font-size: 13px;
  margin-bottom: 0.5rem;
  color: #ffffff;

  &:hover {
    color: #4f98f9;
    transition: 0.3s ease-out;
  }
`;
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`;

const CopyrightContainer = styled.div`
  width: 100%;
  background: #161c26;
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0;
`;

const CopyrightText = styled.div`
  display: flex;
  margin: auto auto 3px auto;
  color: #ffffff;
  font-size: 12px;
`;

const Author = styled.div`
  text-align: center;
  color: #ffffff;
  font-size: 12px;
`;
