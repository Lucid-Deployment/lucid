import * as React from "react";
import { LoginPage as LoginComponent } from "../src";
import type { Meta } from "@storybook/react";

export default {
  title: "Pages/Login",
  component: LoginComponent,
  decorators: [],
} as Meta;

export const Login = () => <LoginComponent />;
