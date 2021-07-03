import { Text, TextProps, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

export const CardBadge = (props: TextProps) => {
  const { children, ...rest } = props;

  return (
    <Text
      position="absolute"
      transform="translateX(-50%)"
      left="50%"
      top="-4"
      rounded="md"
      py="1"
      px="4"
      justifyContent="center"
      fontSize="sm"
      textTransform="uppercase"
      fontWeight="bold"
      letterSpacing="wider"
      whiteSpace="nowrap"
      color={useColorModeValue("white", "gray.800")}
      {...rest}
    >
      {children}
    </Text>
  );
};
