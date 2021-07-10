import * as React from "react";
import { Toast as IToast } from "../types";
import {
  FlexProps,
  Flex,
  Center,
  Icon,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { WarningIcon, CheckIcon } from "@chakra-ui/icons";

interface ToastProps extends FlexProps {
  toast: IToast;
  setToast: React.Dispatch<React.SetStateAction<IToast | null>>;
}
export const Toast = ({ toast, setToast, ...flexProps }: ToastProps) => {
  const errorColor = useColorModeValue("red.500", "red.300");
  const successColor = useColorModeValue("green.500", "green.300");

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setToast(null);
    }, 15000);

    return () => {
      clearTimeout(timerId);
    };
  }, [toast, setToast]);

  return (
    <Flex
      position="fixed"
      left="10"
      bottom="10"
      direction={{ base: "column", sm: "row" }}
      width="md"
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.700")}
      borderRadius={{ base: "none", sm: "base" }}
      overflow="hidden"
      borderTopWidth={{ base: "4px", sm: "0" }}
      borderColor={toast.type === "error" ? errorColor : successColor}
      {...flexProps}
    >
      <Center
        display={{ base: "none", sm: "flex" }}
        bg={toast.type === "error" ? errorColor : successColor}
        px="4"
      >
        <Icon
          as={toast.type === "error" ? WarningIcon : CheckIcon}
          boxSize="9"
          color={useColorModeValue("white", "gray.900")}
        />
      </Center>
      <Box px="4" py="3">
        <Heading as="h3" fontSize="md">
          {toast.message}
        </Heading>
      </Box>
    </Flex>
  );
};
