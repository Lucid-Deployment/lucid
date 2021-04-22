import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react"
import * as React from "react"
import { CardBadge } from "./CardBadge"

export const usePopularColor = () => useColorModeValue("blue.600", "blue.200")

export interface CardProps extends BoxProps {
  isPopular?: boolean
}
export const Card = (props: CardProps) => {
  const { children, isPopular, ...rest } = props
  const accentColor = usePopularColor()

  const popularProps: BoxProps = {
    top: { lg: "-8" },
    zIndex: 1,
    borderWidth: "2px",
    borderColor: accentColor,
  }

  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      position="relative"
      px="6"
      pb="6"
      pt="16"
      shadow="lg"
      maxW="md"
      width="100%"
      {...(isPopular ? popularProps : undefined)}
      {...rest}
    >
      {isPopular && <CardBadge bg={accentColor}>Most popular</CardBadge>}
      {children}
    </Box>
  )
}
