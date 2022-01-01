import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { SendMail } from "../components/contactForm/SendMail";

const Kontakt = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState("none");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await SendMail(form.current);
      setMessage(
        "Takk for at du tar kontakt med oss, du vil høre fra oss igjen snart!"
      );
      setDisplay("block");
    } catch (error) {
      setMessage("Meldingen ble ikke sendt, prøv på nytt!");
    }
  };

  return (
    <Layout>
      <PageTitle>Kontakt oss</PageTitle>
      <Container>
        <Wrapper>
          <Alert display={display}>{message}</Alert>
          <Form ref={form} onSubmit={handleSubmit}>
            <FormWrapper>
              <Label>Navn: *</Label>
              <Input type="text" name="from_name" />
            </FormWrapper>
            <FormWrapper>
              <Label>E-post: *</Label>
              <Input type="email" name="from_email" />
            </FormWrapper>
            <FormWrapper>
              <Label>Melding: *</Label>
              <Field name="message" />
            </FormWrapper>
            <FormWrapper>
              <FormButton type="submit" value="Submit" />
            </FormWrapper>
          </Form>
        </Wrapper>
      </Container>
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

const Alert = styled.div`
  display: ${(props) => props.display};
  text-align: center;
  color: #155724;
  border: 1px solid #c3e6cb;
  background-color: #d4edda;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 10px;

  @media screen and (min-width: 576px) {
    margin: 20px 20vw;
  }
`;

const Container = styled.div`
  margin: 50px 0;
`;

const Wrapper = styled.div``;

const Form = styled.form`
  @media screen and (min-width: 576px) {
    margin: 20px 20vw;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2.5rem 1.2rem 2rem;
`;

const Label = styled.label``;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 2rem;
  padding: 0.3rem 0.4rem;
  margin-top: 0.4rem;
`;
const Field = styled.textarea`
  width: 100%;
  min-height: 6rem;
  padding: 0.5rem 0 0 0.5rem;
`;
const FormButton = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: rgb(7, 173, 7);
  color: white;
  border-radius: 0.2rem;
  cursor: pointer;
  border: none;
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
