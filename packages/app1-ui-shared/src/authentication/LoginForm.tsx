import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { PasswordField } from './PasswordField';

interface LoginFormProps extends HTMLChakraProps<'form'> {
  onLogin: () => void;
}

// TODO: add Formik
export const LoginForm = ({ onLogin, ...formProps }: LoginFormProps) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault();

      onLogin();
    }}
    {...formProps}>
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign in
      </Button>
    </Stack>
  </chakra.form>
);
