import * as React from "react"
import { LoginPage, LoginPage as LoginComponent } from "../src/authentication"
import { Container } from "@chakra-ui/react"

export default {
  title: "Pages/Login",
  component: LoginComponent,
  // eslint-disable-next-line @typescript-eslint/ban-types
  decorators: (story: Function) => <Container mt={4}>{story()}</Container>,
}

export const Login = () => <LoginPage />
