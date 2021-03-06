import React from "react";
import Container from "../../component/styles/Container";
import { RowHead } from "../../component/styles/GlobalStyle";
import { H2, Para } from "../../component/Typography";
import useForm from "./../../Utilites/useFormHook";

import {
  Contact,
  RowForm,
  Side,
  FormInput,
  TextArea,
  ButtonSubmit,
  SpanArrow,
  Message,
} from "./elementForm";
const Form = () => {
  const { handleSubmit, state, dispatch } = useForm();
  const { email, password, name, message, error, messageResponse } = state;

  return (
    <Contact>
      <Container>
        <RowHead>
          <H2>If you need, Just drop us a line</H2>
          <Para>Who are in extremely love with eco friendly system.</Para>
        </RowHead>

        <form onSubmit={handleSubmit}>
          <RowForm>
            <Side>
              <FormInput
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                className={error.name && "error"}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    field: "name",
                    value: e.target.value,
                  })
                }
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter your name")}
              />

              <FormInput
                type="email"
                name="email"
                placeholder="Enter email address"
                value={email}
                className={error.email && "error"}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    field: "email",
                    value: e.target.value,
                  })
                }
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter email address")}
              />
              <FormInput
                type="password"
                name="password"
                placeholder="Enter your password"
                className={error.password && "error"}
                value={password}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    field: "password",
                    value: e.target.value,
                  })
                }
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter your password")}
              />
            </Side>
            <Side>
              <TextArea
                placeholder="Messege"
                name="message"
                value={message}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    field: "message",
                    value: e.target.value,
                  })
                }
                className={error.message && "error"}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Messege")}
              />
              <ButtonSubmit type="submit">
                Send Message
                <SpanArrow className="lnr lnr-arrow-right" />
              </ButtonSubmit>
              <Message>{messageResponse}</Message>
            </Side>
          </RowForm>
        </form>
      </Container>
    </Contact>
  );
};

export default Form;
