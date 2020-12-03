import * as yup from "yup";
const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export default schema;
