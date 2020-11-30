import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";
import { RowHead } from "../styles/GlobalStyle";
import { H2, Para } from "../Typography";
import { Button } from "../Button";

function index() {
  return (
    <Contact>
      <Container>
        <RowHead>
          <H2>If you need, Just drop us a line</H2>
          <Para>Who are in extremely love with eco friendly system.</Para>
        </RowHead>

        <form action="#">
          <RowForm>
            <Side>
              <FormInput
                type="text"
                name="name"
                placeholder="Enter your name"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter your name")}
              ></FormInput>

              <FormInput
                type="email"
                name="email"
                placeholder="Enter email address"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter email address")}
              ></FormInput>
              <FormInput
                type="text"
                name="subject"
                placeholder="Enter your subject"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter your subject")}
              ></FormInput>
            </Side>
            <Side>
              <TextArea
                placeholder="Messege"
                name="message"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Messege")}
              ></TextArea>
              <ButtonSubmit primary="true" round="true">
                Send Message
                <SpanArrow className="lnr lnr-arrow-right"></SpanArrow>
              </ButtonSubmit>
            </Side>
          </RowForm>
        </form>
      </Container>
    </Contact>
  );
}
const Contact = styled.div`
  padding: 120px 0;
  overflow: hidden;
`;

const Side = styled.div`
  flex: 50%;
  max-width: 50%;
  margin-bottom: 1rem;
  position: relative;
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  height: 5rem;
  @media (max-width: 990px) {
    flex: 100%;
    max-width: 100%;
    margin-bottom: 7rem;
  }
`;
const FormInput = styled.input`
  border-radius: 0;
  font-size: 10px;
  padding: 15px;
  margin-bottom: 20px;
  display: block;
  width: 100%;
  line-height: 1.25;
  color: #495057;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);

  &:focus {
    color: #495057;
    border-color: #ff5722;
    outline: none;
  }
`;
const RowForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 50px;
`;
const TextArea = styled.textarea`
  height: 173px;
  font-size: 12px;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 0rem;
  color: #495057;
  &:focus {
    color: #495057;
    border-color: #ff5722;
    outline: none;
  }
`;
const ButtonSubmit = styled(Button)`
  position: relative;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 1rem;
  font-size: 11px;
  &:hover span {
    right: 10px;
  }
`;
const SpanArrow = styled.span`
  color: #fff;
  position: absolute;
  top: 53%;
  transform: translateY(-60%);
  right: 20px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
`;

export default index;
