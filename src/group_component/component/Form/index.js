import React from "react";
import Container from "../styles/Container";
import { RowHead } from "../styles/GlobalStyle";
import { H2, Para } from "../Typography";
import useForm from "./useFormHook.js";
import * as S from "./elementForm";
const Form = () => {
  const { handleSubmit, state, dispatch } = useForm();
  const { email, password, name, message, error, messageResponse } = state;

  return (
    <S.Contact>
      <Container>
        <RowHead>
          <H2>If you need, Just drop us a line</H2>
          <Para>Who are in extremely love with eco friendly system.</Para>
        </RowHead>

        <form onSubmit={handleSubmit}>
          <S.RowForm>
            <S.Side>
              <S.FormInput
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

              <S.FormInput
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
              <S.FormInput
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
            </S.Side>
            <S.Side>
              <S.TextArea
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
              <S.ButtonSubmit type="submit">
                Send Message
                <S.SpanArrow className="lnr lnr-arrow-right" />
              </S.ButtonSubmit>
              <S.Message>{messageResponse}</S.Message>
            </S.Side>
          </S.RowForm>
        </form>
      </Container>
    </S.Contact>
  );
};

export default Form;
