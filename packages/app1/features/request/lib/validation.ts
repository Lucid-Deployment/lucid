import * as yup from "yup";

export const validationSchema = yup.object({
  subject: yup.string().required().label("Subject"),
  email: yup.string().required().email().label("Email"),
  name: yup.string().required().label("Name"),
});
