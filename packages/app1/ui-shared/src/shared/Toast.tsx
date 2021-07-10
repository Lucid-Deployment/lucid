import * as React from "react";
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
import { useToast } from "@lucid/ui-toast";

export const Toast = (flexProps: FlexProps) => {
  const errorColor = useColorModeValue("red.500", "red.300");
  const successColor = useColorModeValue("green.500", "green.300");
  const whiteGray700 = useColorModeValue("white", "gray.700");
  const whiteGray900 = useColorModeValue("white", "gray.900");

  const { toast } = useToast();

  if (toast === null) {
    return null;
  }

  return (
    <Flex
      position="fixed"
      left="10"
      bottom="10"
      direction={{ base: "column", sm: "row" }}
      width="md"
      boxShadow="lg"
      bg={whiteGray700}
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
          color={whiteGray900}
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
