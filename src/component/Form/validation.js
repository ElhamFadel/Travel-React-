import * as yup from "yup";
const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
  message: yup.string().required(),
});

export default schema;
