import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import SEO from "../components/seo";
import ContactForm from "../components/contactForm/ContactForm";
import { Link } from "gatsby";

const Kontakt = () => {
  return (
    <Layout>
      <SEO title="FAQ - Sagene Rensesenter" />
      <PageTitle>FAQ</PageTitle>
      {/*<ContactSection>
        <SectionTitle>Send oss en melding</SectionTitle>
        <SectionText>
          Fyll ut skjemaet under så vil vi svare deg innen 1-2 virkedager
        </SectionText>

        <ContactForm />
      </ContactSection>*/}
      <FAQSection>
        <SectionTitle>Ofte stilte spørsmål</SectionTitle>
        <Accordion>
          <AccordionItem>
            <AccordionButton>Det er fortsatt flekker på tøyet</AccordionButton>
            <AccordionBody>
              Vi sier i fra eller henger alltid på lapp med beskjed om at
              flekken ikke går av. Vi kan ikke trylle, og noen ganger kan vi
              ikke jobbe mer med flekkfjerning i frykt for å ødelegge stoffet.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>Renser dere på dagen?</AccordionButton>
            <AccordionBody>
              Ja, vi kan gjøre dette, men vi fraråder det som oftest. Dette
              skyldes at vi ønsker tid for best mulig resultat. Du betaler
              ekspresspriser da.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>Reparerer dere sko og nøkler?</AccordionButton>
            <AccordionBody>Nei, ikke midlertidig.</AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>Reklamasjon</AccordionButton>
            <AccordionBody>
              Les vår <Link to="/tjenestevilkaar">tjenestevilkår</Link> før du
              reklamerer.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </FAQSection>
    </Layout>
  );
};

export default Kontakt;

const PageTitle = styled.h1`
  background-color: #4f98f9;
  height: 8vh;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-left: 2rem;
`;

const ContactSection = styled.div`
  margin: 2rem;
`;
const SectionText = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;
const FAQSection = styled.div`
  margin: 4rem 3rem;
`;
const SectionTitle = styled.h2`
  margin: 20px;
  text-align: center;
`;
const Accordion = styled.div`
  margin: 20px;
  @media screen and (min-width: 576px) {
    margin: 20px 20vw;
  }
`;
const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
const AccordionButton = styled.div`
  margin-bottom: 20px;
  font-weight: bold;
`;
const AccordionBody = styled.div`
  margin-bottom: 20px;
`;
