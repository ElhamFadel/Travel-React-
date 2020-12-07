import { useState } from "react";
import schema from "./validation";
import axios from "axios";

const useForm = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState("");
  const values = { email, message, password, name };
  const functions = { setEmail, setMessage, setPassword, setName };
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
      });

    console.log("Hello world");
    axios
      .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
        email,
        password,
      })
      .then((res) => {
        console.log("Greete job hello world");
      })
      .catch((err) => {
        console.log("kkkkkkk");
        let error = err.response.data.error;
        setError({ error });
      });
  };

  return { values, handleSubmit, errors, functions };
};
export default useForm;
