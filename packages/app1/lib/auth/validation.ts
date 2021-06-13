import * as yup from "yup"

// TODO: XSS attacks
const passwordSchema = yup
  .string()
  .min(8)
  .max(32)
  .required()
  .matches(/[a-z]/)
  .matches(/[A-Z]/)
  .matches(/\d/)
  .matches(/[.,;:_]/)
  .label("Password")

const passwordConfirmationSchema = (passwordKey: string) =>
  yup
    .string()
    .oneOf([yup.ref(passwordKey), null], "Passwords must match")
    .label("Password confirmation")

export { passwordSchema, passwordConfirmationSchema }
