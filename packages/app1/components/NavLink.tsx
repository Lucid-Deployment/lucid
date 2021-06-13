import * as React from "react"
import { useColorModeValue, HTMLChakraProps, chakra } from "@chakra-ui/react"

const useLinkHoverColor = () => useColorModeValue("purple.500", "purple.500")

const Link = (props: HTMLChakraProps<"a">) => {
  return (
    <chakra.a
      marginStart={1}
      color={useColorModeValue("black", "whiteAlpha.900")}
      _hover={{ color: useLinkHoverColor() }}
      display={{ base: "block", sm: "inline" }}
      {...props}
    />
  )
}

export interface NavLinkProps extends HTMLChakraProps<"a"> {
  hasSubmenu: boolean
}
export const NavLink = ({
  hasSubmenu,
  children,
  ...linkProps
}: NavLinkProps) => (
  <Link
    p={3}
    position="relative"
    _hover={{
      _after: {
        content: `""`,
        h: "2px",
        display: "block",
        position: "absolute",
        bottom: 0,
        left: 0,
        bg: useLinkHoverColor(),
      },
    }}
    {...linkProps}
  >
    <>
      {children}
      {hasSubmenu ? (
        <chakra.svg
          display="inline-block"
          verticalAlign="middle"
          ml={2}
          w="8px"
          h="6px"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L4 4.5L7 1.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </chakra.svg>
      ) : null}
    </>
  </Link>
)
