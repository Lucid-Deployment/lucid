import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

interface DashboardShellProps {
  children?: React.ReactNode;
}
const DashboardShell = ({ children }: DashboardShellProps) => {
  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        as="nav"
        direction="column"
        bg={useColorModeValue("gray.300", "whiteAlpha.300")}
      ></Flex>
      {children}
    </Box>
  );
};

export { DashboardShell };
