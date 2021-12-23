import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterLinksWrapper>
          <FooterDescription>
            <h1>Sagene Rensesenter</h1>
            <DescItems>
              <p>Maridalsveien 174A</p>
              <p>0469 Oslo</p>
            </DescItems>
            <DescItems>
              <p>post@sagenerensesenter.no</p>
              <p>96 69 22 73</p>
            </DescItems>
          </FooterDescription>
        </FooterLinksWrapper>
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
      <Copyright>
        <CopyrightWrapper>
          © 2022 Sagene Rensesenter || Utviklet av William H. Le
        </CopyrightWrapper>
      </Copyright>
    </div>
  );
};

export default Footer;

const FooterContainer = styled.div`
  padding: 3rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #ffffff;
  background: #1c2330;
`;

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;
const DescItems = styled.div`
  margin-bottom: 1rem;
`;

const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 16px;
  }

  p {
    margin-bottom: 0.5rem;
    margin-right: 2rem;
    width: 100%;
    font-size: 16px;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

const FooterLink = styled.div`
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #ffffff;

  &:hover {
    color: #4f98f9;
    transition: 0.3s ease-out;
  }
`;
const FooterLinkTitle = styled.h2`
  font-size: 15px;
  margin-bottom: 16px;
`;

const Copyright = styled.div`
  max-width: 100%;
  width: 100%;
  background: #161c26;
  display: flex;
  padding: 1rem 0;
`;

const CopyrightWrapper = styled.div`
  display: flex;
  margin: auto;
  color: white;
  font-size: 12px;
`;
