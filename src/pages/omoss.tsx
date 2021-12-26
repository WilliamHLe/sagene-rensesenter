import React, { CSSProperties } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Omoss = () => {
  return (
    <div>
      <main>
        <title>Sagene Rensesenter - Rens, vask og skredder på Sagene</title>
        <Layout>
          <Container>
            <Title>Om oss</Title>
            <ContentWrapper>
              <StaticImage
                src="../images/fasade.png"
                alt="store"
                style={StoreImage}
              />
              <ContentText>
                Sagene Rensesenter er en familiebedrift som ble etablert på
                Sagene i 2013. Bedriften var først kun en liten del av en
                tekstilbutikk i Maridalsveien 160A før vi flyttet 200m mot
                Maridalsveien 174A.
              </ContentText>
            </ContentWrapper>
          </Container>
        </Layout>
      </main>
    </div>
  );
};

export default Omoss;

const Container = styled.div`
  padding: 1rem 2rem;
  background-color: #4f98f9;

  @media screen and (min-width: 576px) {
    padding: 3rem 8rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    flex-direction: row;
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
