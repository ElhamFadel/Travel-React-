import React from "react";
import Container from "../styles/Container";
import { RowHead } from "../styles/GlobalStyle";
import { H2, Para } from "../Typography";
import useForm from "./useFormHook.js";

import {
  Contact,
  RowForm,
  Side,
  FormInput,
  TextArea,
  ButtonSubmit,
  SpanArrow,
} from "./elementForm";
const Form = () => {
  const { values, handleSubmit, errors, functions } = useForm();

  return (
    <Contact>
      <Container>
        <RowHead>
          <H2>If you need, Just drop us a line</H2>
          <Para>Who are in extremely love with eco friendly system.</Para>
        </RowHead>

        <form onClick={handleSubmit}>
          <RowForm>
            <Side>
              <FormInput
                type="text"
                name="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={(e) => functions.setName(e.target.value)}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter your name")}
              ></FormInput>

              <FormInput
                type="email"
                name="email"
                placeholder="Enter email address"
                value={values.email}
                onChange={(e) => functions.setEmail(e.target.value)}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter email address")}
              ></FormInput>
              <FormInput
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={(e) => functions.setPassword(e.target.value)}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter your password")}
              ></FormInput>
            </Side>
            <Side>
              <TextArea
                placeholder="Messege"
                name="message"
                value={values.message}
                onChange={(e) => functions.setMessage(e.target.value)}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Messege")}
              ></TextArea>
              <ButtonSubmit primary="true" round="true" onClick={handleSubmit}>
                Send Message
                <SpanArrow className="lnr lnr-arrow-right"></SpanArrow>
              </ButtonSubmit>
            </Side>
          </RowForm>
        </form>
      </Container>
    </Contact>
  );
};

export default Form;
