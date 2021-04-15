import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { PasswordField } from './PasswordField';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

interface LoginFormProps extends HTMLChakraProps<'form'> {
  onLogin: (data: LoginFormValues) => Promise<void>;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = ({ onLogin, ...formProps }: LoginFormProps) => {
  const passwordMustContainSymbolsMessage =
    'Must contain at least 1 digit, letter in uppercase, in lowercase';

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().required('Required').email(),
        password: Yup.string()
          .required('Required')
          .max(32, 'Must be 32 characters or less')
          .min(8, 'Must be 8 characters or more')
          .matches(/\d/, { passwordMustContainSymbolsMessage })
          .matches(/[A-Z]/, { passwordMustContainSymbolsMessage })
          .matches(/[a-z]/, { passwordMustContainSymbolsMessage }),
      })}
      onSubmit={async (values, actions) => {
        await onLogin(values);

        actions.setSubmitting(false);
      }}>
      {(props) => (
        <chakra.form {...formProps}>
          <Stack spacing="6">
            <Field name="email">
              {({ field, form }: any) => (
                <FormControl
                  id="email"
                  isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    autoComplete="email"
                    id="email"
                    {...field}
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }: any) => (
                <PasswordField
                  field={field}
                  isInvalid={form.errors.password && form.touched.password}
                  errorMessage={form.errors.password}
                  id="password"
                  name="password"
                />
              )}
            </Field>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              fontSize="md"
              isLoading={props.isSubmitting}>
              Sign in
            </Button>
          </Stack>
        </chakra.form>
      )}
    </Formik>
  );
};
