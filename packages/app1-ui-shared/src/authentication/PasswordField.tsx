import * as React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  useColorModeValue as mode,
  FormControlProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import type { FieldProps } from "formik";

interface PasswordFieldProps
  extends Pick<FormControlProps, "isInvalid">,
    InputProps,
    Pick<FieldProps, "field"> {
  errorMessage?: string | null;
}

const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ isInvalid, field, errorMessage, ...inputProps }, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    const onClickReveal = () => {
      onToggle();

      const input = inputRef.current;
      if (input) {
        input.focus({ preventScroll: true });
        const length = input.value.length * 2;
        requestAnimationFrame(() => {
          input.setSelectionRange(length, length);
        });
      }
    };

    return (
      <FormControl id="password" isInvalid={isInvalid}>
        <Flex justify="space-between">
          <FormLabel>Password</FormLabel>
          <Box
            as="a"
            color={mode("blue.600", "blue.200")}
            fontWeight="semibold"
            fontSize="sm"
          >
            Forgot Password?
          </Box>
        </Flex>
        <InputGroup>
          <InputRightElement>
            <IconButton
              bg="transparent !important"
              variant="ghost"
              aria-label={isOpen ? "Mask password" : "Reveal password"}
              icon={<FontAwesomeIcon icon={isOpen ? faEye : faEyeSlash} />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            ref={mergeRef}
            type={isOpen ? "text" : "password"}
            autoComplete="current-password"
            required
            {...inputProps}
            {...field}
          />
        </InputGroup>
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    );
  }
);

PasswordField.displayName = "PasswordField";

export { PasswordField };
