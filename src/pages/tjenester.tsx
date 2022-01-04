import React, { CSSProperties } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";

const Tjenester = () => {
  return (
    <Layout>
      <SEO title="Våre tjenester - Sagene Rensesenter" />
      <Title>Våre tjenester</Title>

      <Container>
        <SectionWrapper>
          <SectionTitle>Vaskeri</SectionTitle>
          <ContentWrapper>
            <ImageWrapper>
              <StaticImage
                src="../images/service/washing.png"
                alt="washing machine"
                style={ImageStyles}
              />
            </ImageWrapper>
            <WrapperText>
              Vi vasker dine klær slik at du kan bruke tiden på andre ting.
              Dersom du velger et komplett vask hos oss vil vi vaske, stryke og
              brette klærne dine. Vi vasker minst 4 kg klær.
            </WrapperText>
          </ContentWrapper>
          <ServicesList>
            <ServiceTitle>Våre vasketjenester</ServiceTitle>
            <ListRow>
              <ListWrapper>
                <h4>Klær</h4>
                <ListUl>
                  <li>Vask m/u stryk</li>
                  <li>Skjortevask med stryk</li>
                  <li>All klær som kan vaskes i vaskemaskin</li>
                </ListUl>
              </ListWrapper>
              <ListWrapper>
                <h4>Diverse</h4>
                <ListUl>
                  <li>Sengeteppe</li>
                  <li>Overmadrass</li>
                  <li>Puter og dyner</li>
                  <li>Mopper</li>
                  <li>Duker</li>
                  <li>Servietter</li>
                </ListUl>
              </ListWrapper>
            </ListRow>
          </ServicesList>
        </SectionWrapper>
        <SectionWrapper>
          <SectionTitle>Renseri</SectionTitle>
          <ContentWrapper>
            <WrapperText style={{ marginRight: "1.5rem" }}>
              Hos oss kan du rense klærne dine med god samvittighet. Vi bruker
              maskiner som renser klær raskere enn før. I tillegg bryr vi oss om
              miljøet, derfor har vi akkurat fått inn en ny renserimaskin som er
              klorinfri og bruker hydrokarbon som rensemiddel. Dette betyr at at
              det ikke vil ligge igjen noen rester av forurensede stoffer i
              klærne dine etter rens.
              <ListUl style={{ marginTop: "1.5rem" }}>
                <li>Klorinfri</li>
                <li>Miljøvennlig</li>
                <li>Ingen rester av stoff på klærne</li>
              </ListUl>
            </WrapperText>
            <ImageWrapper>
              <StaticImage
                src="../images/service/dry-cleaning.jpg"
                alt="suits"
                style={ImageStyles}
              />
            </ImageWrapper>

            <ImageWrapper>
              <StaticImage
                src="../images/service/cc.jpg"
                alt="carpet"
                style={ImageStyles}
              />
            </ImageWrapper>

            <WrapperText>
              <h3 style={{ marginBottom: "1rem" }}>Tepperens</h3>
              <p style={{ marginBottom: "0.5rem" }}>
                Forskjellig produksjonsmetode og materialvalg gjør at alle
                tepper krever individuell behandling. Vi renser og behandler
                alle typer tepper og vi har spesialisert oss på persiske,-
                orientalske,- og silketepper. Rensemetoden som benyttes er
                skånsom, effektiv og miljø- og allergivennlig.
              </p>
              <p>
                Flekkfjerning på tepper er ofte en utfordring hvis flekkene er
                gamle. Så kom med flekker så fort som mulig. Ofte er den første
                umiddelbare behandling avgjørende for om vi får til et godt
                resultat. Prisen avhenger kun av størrelsen.
              </p>
            </WrapperText>
          </ContentWrapper>
          <ServicesList>
            <ServiceTitle>Våre renseritjenester</ServiceTitle>
            <ListRow>
              <ListWrapper>
                <h4>Dresser</h4>
                <ListUl>
                  <li>Dress/drakt</li>
                  <li>Bukse/skjørt</li>
                  <li>Blazer/dressjakke</li>
                  <li>Vest</li>
                  <li>Smoking</li>
                  <li>Slips</li>
                </ListUl>
              </ListWrapper>
              <ListWrapper>
                <h4>Kjoler</h4>
                <ListUl>
                  <li>Kjole</li>
                  <li>Skjørt</li>
                  <li>Selskapskjole</li>
                  <li>Brudekjole</li>
                  <li>Dåpskjole</li>
                  <li>Bunad</li>
                </ListUl>
              </ListWrapper>
              <ListWrapper>
                <h4>Uteklær</h4>
                <ListUl>
                  <li>Vinterjakker</li>
                  <li>Frakk</li>
                  <li>Kåpe</li>
                  <li>Kappe</li>
                  <li>Dunjakke</li>
                </ListUl>
              </ListWrapper>
              <ListWrapper>
                <h4>Diverse</h4>
                <ListUl>
                  <li>Teppe</li>
                  <li>Sengetøy</li>
                  <li>Gardiner</li>
                  <li>Håndklær</li>
                  <li>Dørmatte</li>
                  <li>Pelskåpe</li>
                </ListUl>
              </ListWrapper>
            </ListRow>
          </ServicesList>
        </SectionWrapper>

        <SectionWrapper>
          <SectionTitle>Skredder</SectionTitle>
          <ContentWrapper>
            <ImageWrapper>
              <StaticImage
                src="../images/service/scissor.png"
                alt="scissor"
                style={ImageStyles}
              />
            </ImageWrapper>
            <WrapperText>
              Vi hjelper deg med omsøm og tilpassing av all tøy. Her kan du få
              klærne dine spesialtilpasset til perfekt passform. Kontakt oss
              dersom du trenger hjelp med å sy noe.
            </WrapperText>
          </ContentWrapper>
          <ServicesList>
            <ServiceTitle>Våre skreddertjenester</ServiceTitle>
            <ListRow>
              <ListWrapper>
                <h4>Klær</h4>
                <ListUl>
                  <li>Opplegg/nedlegg av armer</li>
                  <li>Opplegg/nedlegg av armer</li>
                  <li>Livvidde inn/ut bukse</li>
                  <li>Benvidde/lårvidde inn</li>
                  <li>Skifte glidelås</li>
                  <li>Opplegg av gardinger</li>
                  <li>Lappehull</li>
                </ListUl>
              </ListWrapper>
              <ListWrapper>
                <h4>Diverse</h4>
                <ListUl>
                  <li>Sengeteppe</li>
                  <li>Overmadrass</li>
                  <li>Puter og dyner</li>
                  <li>Mopper</li>
                  <li>Duker</li>
                  <li>Servietter</li>
                </ListUl>
              </ListWrapper>
            </ListRow>
          </ServicesList>
        </SectionWrapper>
      </Container>
    </Layout>
  );
};

export default Tjenester;

const Title = styled.h1`
  font-size: 20px;
  padding-left: 2rem;
  background-color: #4f98f9;
  height: 8vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 1.5rem 1.5rem;

  @media screen and (min-width: 576px) {
    margin: 4rem 10vw;
  }
`;

const SectionWrapper = styled.div`
  margin-bottom: 2rem;

  @media screen and (min-width: 576px) {
    margin-bottom: 4rem;
  }
`;
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 576px) {
    margin-bottom: 2rem;
  }
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }
`;
const ImageStyles: CSSProperties = {
  objectFit: "cover",
  marginBottom: "1rem",
};

const ImageWrapper = styled.div`
  min-width: 30vw;
  height: auto;
`;
const WrapperText = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
  }
`;

const ServicesList = styled.div`
  margin-top: 1.5rem;
`;
const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
`;
const ListWrapper = styled.div`
  margin-bottom: 1rem;

  @media screen and (min-width: 576px) {
  }
`;
const ListUl = styled.ul`
  list-style-position: inside;
  width: auto;
`;

const ListRow = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
