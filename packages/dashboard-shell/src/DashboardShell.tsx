import React from "react"
import { Box, Flex } from "@chakra-ui/react"

interface DashboardShellProps {
  children?: React.ReactNode
}
const DashboardShell = ({ children }: DashboardShellProps) => {
  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex as={"nav"} direction={"column"}></Flex>
      {children}
    </Box>
  )
}
