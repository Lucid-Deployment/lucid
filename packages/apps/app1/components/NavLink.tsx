import * as React from "react";
import { chakra, Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

export interface NavLinkProps extends Omit<LinkProps, "href"> {
  hasSubmenu: boolean;
  href: string;
}
const NavLink = ({
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
      display={"block"}
      variant="twoColors"
      colorScheme="blackBrand"
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

export default NavLink;
