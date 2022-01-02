import React, { CSSProperties } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";

const Tjenester = () => {
  return (
    <Layout>
      <SEO title="Våre tjenester - Sagene Rensesenter" />
      <Container>
        <Title>Våre tjenester</Title>
        <Wrapper>
          <ContentHeader>Vaskeri</ContentHeader>
          <ContentWrapper>
            <StaticImage
              src="../images/service/washing.png"
              alt="washing machine"
              style={ImageStyles}
            />

            <WrapperText>
              Vi vasker dine klær slik at du kan bruke tiden på andre ting.
              Dersom du velger et komplett vask hos oss vil vi vaske, stryke og
              brette klærne dine. Vi vasker minst 4 kg klær.
            </WrapperText>
          </ContentWrapper>
        </Wrapper>
        <Wrapper>
          <ContentHeader>Renseri</ContentHeader>
          <ContentWrapper>
            <StaticImage
              src="../images/service/dry-cleaning.jpg"
              alt="suits"
              style={ImageStyles}
            />
            <WrapperText>
              Hos oss kan du rense klærne dine med god samvittighet. Vi bruker
              maskiner som renser klær raskere enn før. I tillegg bryr vi oss om
              miljøet, derfor har vi akkurat fått inn en ny renserimaskin som er
              klorinfri og bruker hydrokarbon som rensemiddel. Dette betyr at at
              det ikke vil ligge igjen noen rester av forurensede stoffer i
              klærne dine etter rens.
            </WrapperText>
            <StaticImage
              src="../images/service/cc.jpg"
              alt="carpet"
              style={ImageStyles}
            />
            <WrapperText>
              Forskjellig produksjonsmetode og materialvalg gjør at alle tepper
              krever individuell behandling. Vi renser og behandler alle typer
              tepper og vi har spesialisert oss på persiske,- orientalske,- og
              silketepper. Rensemetoden som benyttes er skånsom, effektiv og
              miljø- og allergivennlig. Flekkfjerning på tepper er ofte en
              utfordring hvis flekkene er gamle. Så kom med flekker så fort som
              mulig. Ofte er den første umiddelbare behandling avgjørende for om
              vi får til et godt resultat. Prisen avhenger kun av størrelsen.
            </WrapperText>
          </ContentWrapper>
        </Wrapper>
        <Wrapper>
          <ContentWrapper>
            <ContentHeader>Skredder</ContentHeader>
            <StaticImage
              src="../images/service/scissor.png"
              alt="scissor"
              style={ImageStyles}
            />
            <WrapperText>Vi fikser og gjør endringer av all tøy.</WrapperText>
          </ContentWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Tjenester;

const ImageStyles: CSSProperties = {
  width: "100%",
  objectFit: "cover",
  marginBottom: "10px",
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Title = styled.h1`
  font-size: 20px;
  padding-left: 2rem;
  background-color: #4f98f9;
  height: 8vh;
  width: 100%;
  display: flex;
  align-items: center;
`;
const ContentHeader = styled.h2`
  margin-bottom: 10px;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Wrapper = styled.div`
  margin: 10px 10px;
`;
const WrapperImage = styled.div`
  margin-bottom: 20px;
`;
const WrapperText = styled.div`
  margin-bottom: 20px;
`;
