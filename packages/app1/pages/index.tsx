import {
  Box,
  chakra,
  Flex,
  useColorModeValue,
  useToken,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerHeader,
  IconButtonProps,
} from "@chakra-ui/react";
import { NavLink } from "../components/NavLink";
import Link from "next/link";
import * as React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Logo = () => {
  const brandColor = useToken("colors", "brand.400");
  return (
    <chakra.svg
      h="10"
      w="auto"
      viewBox="0 0 484 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M483.414 77.4142C484.195 76.6332 484.195 75.3668 483.414 74.5858L470.686 61.8579C469.905 61.0768 468.639 61.0768 467.858 61.8579C467.077 62.6389 467.077 63.9052 467.858 64.6863L479.172 76L467.858 87.3137C467.077 88.0948 467.077 89.3611 467.858 90.1421C468.639 90.9232 469.905 90.9232 470.686 90.1421L483.414 77.4142ZM50 78L482 78L482 74L50 74L50 78Z"
        fill={brandColor}
      />
      <path
        d="M16.6094 56.3438H45.25V69H0.15625V0.75H16.6094V56.3438Z"
        fill={brandColor}
      />
      <path
        d="M50.4688 69V23.5H65.125C69.1458 23.5 72.7604 24.4167 75.9688 26.25C79.1771 28.0625 81.6771 30.6354 83.4688 33.9688C85.2812 37.2812 86.1979 41 86.2188 45.125V47.2188C86.2188 51.3854 85.3333 55.125 83.5625 58.4375C81.8125 61.7292 79.3333 64.3125 76.125 66.1875C72.9375 68.0417 69.375 68.9792 65.4375 69H50.4688ZM61.4375 31.9688V60.5625H65.25C68.3958 60.5625 70.8125 59.4479 72.5 57.2188C74.1875 54.9688 75.0312 51.6354 75.0312 47.2188V45.25C75.0312 40.8542 74.1875 37.5417 72.5 35.3125C70.8125 33.0833 68.3542 31.9688 65.125 31.9688H61.4375ZM107.719 69.625C102.531 69.625 98.3333 68.0833 95.125 65C91.9167 61.8958 90.3125 57.8646 90.3125 52.9062V52.0312C90.3125 48.5729 90.9479 45.5208 92.2188 42.875C93.5104 40.2292 95.3854 38.1875 97.8438 36.75C100.302 35.2917 103.219 34.5625 106.594 34.5625C111.344 34.5625 115.094 36.0417 117.844 39C120.594 41.9375 121.969 46.0417 121.969 51.3125V55.4062H101.031C101.406 57.3021 102.229 58.7917 103.5 59.875C104.771 60.9583 106.417 61.5 108.438 61.5C111.771 61.5 114.375 60.3333 116.25 58L121.062 63.6875C119.75 65.5 117.885 66.9479 115.469 68.0312C113.073 69.0938 110.49 69.625 107.719 69.625ZM106.531 42.6875C103.448 42.6875 101.615 44.7292 101.031 48.8125H111.656V48C111.698 46.3125 111.271 45.0104 110.375 44.0938C109.479 43.1562 108.198 42.6875 106.531 42.6875ZM157.625 52.3438C157.625 57.5938 156.438 61.7917 154.062 64.9375C151.708 68.0625 148.521 69.625 144.5 69.625C141.396 69.625 138.844 68.4896 136.844 66.2188V82H126.312V35.1875H136.156L136.469 38.3125C138.49 35.8125 141.146 34.5625 144.438 34.5625C148.604 34.5625 151.844 36.1042 154.156 39.1875C156.469 42.25 157.625 46.4688 157.625 51.8438V52.3438ZM147.094 51.6875C147.094 45.6875 145.344 42.6875 141.844 42.6875C139.344 42.6875 137.677 43.5833 136.844 45.375V58.6875C137.76 60.5625 139.448 61.5 141.906 61.5C145.26 61.5 146.99 58.6042 147.094 52.8125V51.6875ZM173.406 69H162.844V21H173.406V69ZM178.594 51.7812C178.594 48.4062 179.25 45.4062 180.562 42.7812C181.875 40.1354 183.76 38.1042 186.219 36.6875C188.677 35.2708 191.562 34.5625 194.875 34.5625C199.938 34.5625 203.927 36.1354 206.844 39.2812C209.76 42.4062 211.219 46.6667 211.219 52.0625V52.4375C211.219 57.7083 209.75 61.8958 206.812 65C203.896 68.0833 199.938 69.625 194.938 69.625C190.125 69.625 186.26 68.1875 183.344 65.3125C180.427 62.4167 178.854 58.5 178.625 53.5625L178.594 51.7812ZM189.125 52.4375C189.125 55.5625 189.615 57.8542 190.594 59.3125C191.573 60.7708 193.021 61.5 194.938 61.5C198.688 61.5 200.604 58.6146 200.688 52.8438V51.7812C200.688 45.7188 198.75 42.6875 194.875 42.6875C191.354 42.6875 189.448 45.3021 189.156 50.5312L189.125 52.4375ZM228.875 54.25L234.5 35.1875H245.781L232 74.6562L231.406 76.0938C229.448 80.4688 225.99 82.6562 221.031 82.6562C219.656 82.6562 218.208 82.4479 216.688 82.0312V74.5H218.062C219.542 74.5 220.667 74.2812 221.438 73.8438C222.229 73.4271 222.812 72.6667 223.188 71.5625L224.031 69.3125L212.281 35.1875H223.531L228.875 54.25ZM258.5 35.1875L258.844 39.1562C261.24 36.0938 264.458 34.5625 268.5 34.5625C272.771 34.5625 275.656 36.2604 277.156 39.6562C279.448 36.2604 282.76 34.5625 287.094 34.5625C293.948 34.5625 297.469 38.7083 297.656 47V69H287.094V47.6562C287.094 45.9271 286.802 44.6667 286.219 43.875C285.635 43.0833 284.573 42.6875 283.031 42.6875C280.948 42.6875 279.396 43.6146 278.375 45.4688L278.406 45.9062V69H267.844V47.7188C267.844 45.9479 267.562 44.6667 267 43.875C266.438 43.0833 265.365 42.6875 263.781 42.6875C261.76 42.6875 260.219 43.6146 259.156 45.4688V69H248.625V35.1875H258.5ZM320.031 69.625C314.844 69.625 310.646 68.0833 307.438 65C304.229 61.8958 302.625 57.8646 302.625 52.9062V52.0312C302.625 48.5729 303.26 45.5208 304.531 42.875C305.823 40.2292 307.698 38.1875 310.156 36.75C312.615 35.2917 315.531 34.5625 318.906 34.5625C323.656 34.5625 327.406 36.0417 330.156 39C332.906 41.9375 334.281 46.0417 334.281 51.3125V55.4062H313.344C313.719 57.3021 314.542 58.7917 315.812 59.875C317.083 60.9583 318.729 61.5 320.75 61.5C324.083 61.5 326.688 60.3333 328.562 58L333.375 63.6875C332.062 65.5 330.198 66.9479 327.781 68.0312C325.385 69.0938 322.802 69.625 320.031 69.625ZM318.844 42.6875C315.76 42.6875 313.927 44.7292 313.344 48.8125H323.969V48C324.01 46.3125 323.583 45.0104 322.688 44.0938C321.792 43.1562 320.51 42.6875 318.844 42.6875ZM348.219 35.1875L348.562 39.1562C350.896 36.0938 354.115 34.5625 358.219 34.5625C361.74 34.5625 364.365 35.6146 366.094 37.7188C367.844 39.8229 368.75 42.9896 368.812 47.2188V69H358.25V47.6562C358.25 45.9479 357.906 44.6979 357.219 43.9062C356.531 43.0938 355.281 42.6875 353.469 42.6875C351.406 42.6875 349.875 43.5 348.875 45.125V69H338.344V35.1875H348.219ZM386.938 26.7812V35.1875H392.5V42.5H386.938V57.9688C386.938 59.2396 387.167 60.125 387.625 60.625C388.083 61.125 388.99 61.375 390.344 61.375C391.385 61.375 392.26 61.3125 392.969 61.1875V68.7188C391.073 69.3229 389.094 69.625 387.031 69.625C383.406 69.625 380.729 68.7708 379 67.0625C377.271 65.3542 376.406 62.7604 376.406 59.2812V42.5H372.094V35.1875H376.406V26.7812H386.938Z"
        fill="black"
      />
    </chakra.svg>
  );
};

const MobileNavTrigger = (props: Partial<IconButtonProps>) => (
  <IconButton
    variant="ghost"
    rounded="full"
    zIndex={"20"}
    aria-label="Меню"
    {...props}
  />
);

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
];

const headerHeight = "70px";

export default function Home() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [navUnderlineStyles, setNavUnderlineStyles] =
    React.useState<React.CSSProperties>({});
  const navRef = React.useRef<any>(null);
  const mobileNavDisclosure = useDisclosure();

  React.useEffect(() => {
    function getAndSetNavUnderlineStyles() {
      if (navRef.current) {
        if (activeIndex === null) {
          setNavUnderlineStyles({});
        } else {
          const activeNavItem = Array.from(navRef.current.children).filter(
            (x: any) => x.tagName === "LI"
          )[activeIndex] as HTMLLIElement;
          const activeNavLink = activeNavItem.querySelector(
            "a"
          ) as HTMLAnchorElement;

          let left = activeNavLink.getBoundingClientRect().left;
          let width = activeNavLink.clientWidth;

          setNavUnderlineStyles({
            left: `${left}px`,
            width: `${width}px`,
          });
        }
      }
    }

    getAndSetNavUnderlineStyles();

    window.addEventListener("resize", getAndSetNavUnderlineStyles);
    window.addEventListener("load", getAndSetNavUnderlineStyles);

    return () => {
      window.removeEventListener("resize", getAndSetNavUnderlineStyles);
      window.removeEventListener("load", getAndSetNavUnderlineStyles);
    };
  }, [activeIndex]);

  return (
    <chakra.header h={headerHeight}>
      <Box display="fixed" h="full" w="full" bg="white" px="4">
        <Box maxW="90rem" w="full" mx="auto">
          <Flex alignItems="center" h="full" justifyContent="space-between">
            <Link href="/">
              <a
                style={{
                  display: "block",
                  flex: "0 0 auto",
                }}
              >
                <Logo />
              </a>
            </Link>

            <Flex flex="0 0 auto" as="nav">
              <Flex
                ref={navRef}
                flexWrap="nowrap"
                as="ul"
                alignItems="center"
                sx={{
                  "& > :not(:first-child)": {
                    ml: "2",
                  },
                }}
                listStyleType="none"
                m={0}
                p={0}
                display={{ base: "none", sm: "flex" }}
              >
                {navItems.map((x, i) => (
                  <li key={x.title}>
                    <NavLink
                      href={x.href}
                      onMouseEnter={() => {
                        setActiveIndex(i);
                      }}
                      onMouseLeave={() => {
                        setActiveIndex(null);
                      }}
                      hasSubmenu={false}
                    >
                      {x.title}
                    </NavLink>
                  </li>
                ))}
              </Flex>
              <chakra.span
                display={{ base: "none", sm: "block" }}
                zIndex="10"
                transition="all"
                transitionDuration="200ms"
                transitionTimingFunction="ease"
                position="absolute"
                bg={useColorModeValue("brand.500", "brand.500")}
                sx={{
                  opacity: activeIndex !== null ? 1 : 0,
                  ...navUnderlineStyles,
                  h: "2px",
                  bottom: "-1px",
                  transitionDelay: "200ms",
                }}
              />
              <Box display={{ base: "block", sm: "none" }}>
                <MobileNavTrigger
                  onClick={() => {
                    mobileNavDisclosure.onOpen();
                  }}
                  icon={<HamburgerIcon />}
                />
                <Drawer
                  isOpen={mobileNavDisclosure.isOpen}
                  onClose={mobileNavDisclosure.onClose}
                >
                  <DrawerOverlay />
                  <DrawerContent border={0} rounded={0} w={"full"}>
                    <DrawerHeader
                      h={headerHeight}
                      display="flex"
                      alignItems={"center"}
                      justifyContent={"flex-end"}
                    >
                      <MobileNavTrigger
                        onClick={() => {
                          mobileNavDisclosure.onClose();
                        }}
                        icon={<CloseIcon />}
                      />
                    </DrawerHeader>
                    <DrawerBody>
                      <chakra.ul listStyleType={"none"} m={0} p={0}>
                        {navItems.map((x, i) => (
                          <li key={x.title}>
                            <NavLink href={x.href} hasSubmenu={false}>
                              {x.title}
                            </NavLink>
                          </li>
                        ))}
                      </chakra.ul>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </chakra.header>
  );
}
