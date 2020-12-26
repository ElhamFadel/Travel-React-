import { useReducer } from "react";
import schema from "./validation";
import axios from "axios";
import { error } from "jquery";
const initialState = {
  email: "",
  password: "",
  name: "",
  message: "",
  isLodding: false,
  send: false,
  error: {
    email: "",
    password: "",
    name: "",
    message: "",
  },
  messageResponse: "",
};
function login(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
        messageResponse: "",
      };
    }
    case "login": {
      return {
        ...state,
        send: true,
        error: "",
        messageResponse: "",
      };
    }
    case "success": {
      return {
        ...state,
        isLodding: true,
        messageResponse: "Operation accomplished successfully",
      };
    }
    case "validate": {
      return {
        ...state,
        error: { ...error, ...action.error },
      };
    }
    case "failure": {
      return {
        ...state,
        isLodding: false,
        messageResponse: "Try Agin",
      };
    }
    case "deleteMess": {
      return {
        ...state,
        messageResponse: " ",
      };
    }
    default:
      break;
  }
}
const useForm = () => {
  const [state, dispatch] = useReducer(login, initialState);

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    schema
      .validate(state, { abortEarly: false })
      .then(() => {
        dispatch({ type: "login" });
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach(({ path, message }) => {
          newErrors[path] = message;
          dispatch({ type: "validate", error: newErrors });
        });
      });

    if (state.send) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
          email: state.email,
          password: state.password,
        })
        .then((res) => {
          dispatch({ type: "success" });
        })
        .catch((err) => {
          dispatch({ type: "failure" });
        });
    }
  };

  return { handleSubmit, state, dispatch };
};
export default useForm;
