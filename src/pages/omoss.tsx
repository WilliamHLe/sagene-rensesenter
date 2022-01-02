import React, { CSSProperties } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";

const Omoss = () => {
  return (
    <div>
      <SEO title="Om oss - Sagene Rensesenter" />
      <Layout>
        <Container>
          <TitleWrapper>
            <Title>Om oss</Title>
          </TitleWrapper>
          <ContentWrapper>
            <StaticImage
              src="../images/fasade.png"
              alt="store"
              style={StoreImage}
            />
            <ContentText>
              Sagene Rensesenter er en familiebedrift som ble etablert på Sagene
              i 2013. Bedriften var først kun en liten del av en tekstilbutikk i
              Maridalsveien 160A før vi flyttet 200m mot Maridalsveien 174A.
            </ContentText>
          </ContentWrapper>
        </Container>
      </Layout>
    </div>
  );
};

export default Omoss;

const Container = styled.div``;
const TitleWrapper = styled.div`
  background-color: #4f98f9;
  height: 8vh;
  width: 100%;
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 20px;
  padding-left: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    padding: 2rem 6rem;
  }
`;

const StoreImage: CSSProperties = {
  width: "100%",
};

const ContentText = styled.p`
  padding: 20px 0;
  line-height: 1.5;

  @media screen and (min-width: 576px) {
    padding: 1vw;
  }
`;
