import React, { useRef, useState } from "react";
import styled from "styled-components";
import { SendMail } from "./SendMail";

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [click, setClick] = useState(false);
  const [displayAlert, setDisplayAlert] = useState("none");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setClick(true);
      await SendMail(form.current);
      setClick(false);
      setMessage(
        "Takk for at du tar kontakt med oss, du vil snart høre fra oss!"
      );
      setDisplayAlert("block");
    } catch (error) {
      setMessage("Meldingen ble ikke sendt, prøv på nytt!");
    }
  };

  return (
    <div>
      <Wrapper>
        <Form ref={form} onSubmit={handleSubmit}>
          <Alert display={displayAlert}>{message}</Alert>
          <RowWrapper>
            <FormWrapper>
              <Label>Navn *</Label>
              <Input type="text" required name="from_name" />
            </FormWrapper>
            <FormWrapper>
              <Label>E-post *</Label>
              <Input type="email" required name="from_email" />
            </FormWrapper>
          </RowWrapper>
          <FormWrapper>
            <Label>Melding *</Label>
            <Field name="message" required />
          </FormWrapper>
          <FormWrapper>
            <FormButton
              type="submit"
              displayButton={click}
              value="Send melding"
            />
            <Spinner displaySpinner={click} />
          </FormWrapper>
        </Form>
      </Wrapper>
    </div>
  );
};

export default ContactForm;

const Spinner = styled.div`
  display: ${(props) => (props.displaySpinner ? "block" : "none")};
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #007bff;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Alert = styled.div`
  display: ${({ display }) => display};
  text-align: center;
  color: #155724;
  border: 1px solid #c3e6cb;
  background-color: #d4edda;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 10px;

  @media screen and (min-width: 576px) {
    margin: 20px 0;
    width: 100%;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: 576px) {
    margin: 20px 20vw;
  }
`;

const Form = styled.form``;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 2rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;
const Field = styled.textarea`
  width: 100%;
  min-height: 6rem;
  padding: 0.5rem 0 0 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;
const FormButton = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: #007bff;
  color: white;
  border-radius: 0.2rem;
  cursor: pointer;
  border: none;
  font-size: 0.9rem;
  display: ${({ displayButton }) => (displayButton ? "none" : "block")};

  &:hover {
    background: #0168d9;
  }

  @media screen and (min-width: 576px) {
    width: 110px;
  }
`;
