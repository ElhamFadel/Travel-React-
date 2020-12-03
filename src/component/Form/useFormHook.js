import { useState } from "react";
import schema from "./validation";
import { BrowserRouter as useHistory } from "react-router-dom";
import axios from "axios";

const useForm = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [subject, setSubject] = useState();
  const [name, setName] = useState("");
  const values = { email, message, subject, name };
  const functions = { setEmail, setMessage, setSubject, setName };
  const [errors, setError] = useState({});

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    schema
      .validate(values, { abortEarly: false })
      .then(() => {
        setError({ email: "", message: "", subject: "", name: "" });
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach(({ path, message }) => {
          newErrors[path] = message;
          setError({ errors: newErrors });
        });

        // setError({ ...newErrors });
      });

    if (true) {
      console.log("Hello world");
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
          email,
          message,
          subject,
          name,
        })
        .then((res) => {
          console.log("Greete job hello world");
        })
        .catch((err) => {
          let error = err.response.data.error;
          setError({ error });
        });
    }
  };

  return { values, handleSubmit, errors, functions };
};
export default useForm;
