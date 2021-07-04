import * as React from "react";
import { useColorModeValue, HTMLChakraProps, chakra } from "@chakra-ui/react";
import NextLink from "next/link";

const useLinkHoverColor = () => useColorModeValue("brand.500", "brand.500");

const Link = React.forwardRef<HTMLAnchorElement, HTMLChakraProps<"a">>(
  (props, ref) => {
    return (
      <chakra.a
        ref={ref}
        color={useColorModeValue("black", "whiteAlpha.900")}
        sx={{
          _hover: { color: useLinkHoverColor() },
        }}
        display={"block"}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

export interface NavLinkProps extends Omit<HTMLChakraProps<"a">, "href"> {
  hasSubmenu: boolean;
  href: string;
}
export const NavLink = ({
  hasSubmenu,
  children,
  href,
  ...linkProps
}: NavLinkProps) => (
  <NextLink href={href} passHref>
    <Link
      p={{ base: 2, md: 3 }}
      position="relative"
      fontSize="sm"
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
  </NextLink>
);
