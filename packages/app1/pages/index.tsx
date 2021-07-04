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
  Button,
  ButtonProps,
  HTMLChakraProps,
  Heading,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
  VisuallyHidden,
} from "@chakra-ui/react";
import { NavLink } from "../components/NavLink";
import Link from "next/link";
import * as React from "react";
import { HamburgerIcon, CloseIcon, ChatIcon } from "@chakra-ui/icons";
import Head from "next/head";
import {
  useTextPrimary,
  useAccents5,
  useTextSecondary,
} from "../../app1-ui-theme/dist/colors";

const mobileBreakpoint = "sm";

const Logo = (props: HTMLChakraProps<"svg">) => {
  const brandColor = useToken("colors", "brand.500");
  return (
    <chakra.svg
      viewBox="0 0 394 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.909091 70H40.5568L41.5114 64.2727H8.23864L18.875 0.181816H12.5L0.909091 70Z"
        fill={brandColor}
      />
      <path
        d="M54.0625 70V24.5H68.0625C72.0625 24.5 75.6354 25.4062 78.7812 27.2188C81.9479 29.0104 84.4167 31.5729 86.1875 34.9062C87.9583 38.2188 88.8438 41.9896 88.8438 46.2188V48.3125C88.8438 52.5417 87.9688 56.3021 86.2188 59.5938C84.4896 62.8854 82.0417 65.4375 78.875 67.25C75.7083 69.0625 72.1354 69.9792 68.1562 70H54.0625ZM63.4375 32.0938V62.4688H67.9688C71.6354 62.4688 74.4375 61.2708 76.375 58.875C78.3125 56.4792 79.3021 53.0521 79.3438 48.5938V46.1875C79.3438 41.5625 78.3854 38.0625 76.4688 35.6875C74.5521 33.2917 71.75 32.0938 68.0625 32.0938H63.4375ZM110.656 70.625C105.698 70.625 101.656 69.1042 98.5312 66.0625C95.4271 63.0208 93.875 58.9688 93.875 53.9062V53.0312C93.875 49.6354 94.5312 46.6042 95.8438 43.9375C97.1562 41.25 99.0104 39.1875 101.406 37.75C103.823 36.2917 106.573 35.5625 109.656 35.5625C114.281 35.5625 117.917 37.0208 120.562 39.9375C123.229 42.8542 124.562 46.9896 124.562 52.3438V56.0312H103.031C103.323 58.2396 104.198 60.0104 105.656 61.3438C107.135 62.6771 109 63.3438 111.25 63.3438C114.729 63.3438 117.448 62.0833 119.406 59.5625L123.844 64.5312C122.49 66.4479 120.656 67.9479 118.344 69.0312C116.031 70.0938 113.469 70.625 110.656 70.625ZM109.625 42.875C107.833 42.875 106.375 43.4792 105.25 44.6875C104.146 45.8958 103.438 47.625 103.125 49.875H115.688V49.1562C115.646 47.1562 115.104 45.6146 114.062 44.5312C113.021 43.4271 111.542 42.875 109.625 42.875ZM160.156 53.4062C160.156 58.6146 158.969 62.7917 156.594 65.9375C154.24 69.0625 151.052 70.625 147.031 70.625C143.615 70.625 140.854 69.4375 138.75 67.0625V83H129.719V36.1875H138.094L138.406 39.5C140.594 36.875 143.448 35.5625 146.969 35.5625C151.135 35.5625 154.375 37.1042 156.688 40.1875C159 43.2708 160.156 47.5208 160.156 52.9375V53.4062ZM151.125 52.75C151.125 49.6042 150.562 47.1771 149.438 45.4688C148.333 43.7604 146.719 42.9062 144.594 42.9062C141.76 42.9062 139.812 43.9896 138.75 46.1562V60C139.854 62.2292 141.823 63.3438 144.656 63.3438C148.969 63.3438 151.125 59.8125 151.125 52.75ZM175.312 70H166.25V22H175.312V70ZM181.375 52.7812C181.375 49.4271 182.021 46.4375 183.312 43.8125C184.604 41.1875 186.458 39.1562 188.875 37.7188C191.312 36.2812 194.135 35.5625 197.344 35.5625C201.906 35.5625 205.625 36.9583 208.5 39.75C211.396 42.5417 213.01 46.3333 213.344 51.125L213.406 53.4375C213.406 58.625 211.958 62.7917 209.062 65.9375C206.167 69.0625 202.281 70.625 197.406 70.625C192.531 70.625 188.635 69.0625 185.719 65.9375C182.823 62.8125 181.375 58.5625 181.375 53.1875V52.7812ZM190.406 53.4375C190.406 56.6458 191.01 59.1042 192.219 60.8125C193.427 62.5 195.156 63.3438 197.406 63.3438C199.594 63.3438 201.302 62.5104 202.531 60.8438C203.76 59.1562 204.375 56.4688 204.375 52.7812C204.375 49.6354 203.76 47.1979 202.531 45.4688C201.302 43.7396 199.573 42.875 197.344 42.875C195.135 42.875 193.427 43.7396 192.219 45.4688C191.01 47.1771 190.406 49.8333 190.406 53.4375ZM231.094 57.2188L237.344 36.1875H247.031L233.438 75.25L232.688 77.0312C230.667 81.4479 227.333 83.6562 222.688 83.6562C221.375 83.6562 220.042 83.4583 218.688 83.0625V76.2188L220.062 76.25C221.771 76.25 223.042 75.9896 223.875 75.4688C224.729 74.9479 225.396 74.0833 225.875 72.875L226.938 70.0938L215.094 36.1875H224.812L231.094 57.2188ZM259.062 36.1875L259.344 39.9688C261.74 37.0312 264.979 35.5625 269.062 35.5625C273.417 35.5625 276.406 37.2812 278.031 40.7188C280.406 37.2812 283.792 35.5625 288.188 35.5625C291.854 35.5625 294.583 36.6354 296.375 38.7812C298.167 40.9062 299.062 44.1146 299.062 48.4062V70H290V48.4375C290 46.5208 289.625 45.125 288.875 44.25C288.125 43.3542 286.802 42.9062 284.906 42.9062C282.198 42.9062 280.323 44.1979 279.281 46.7812L279.312 70H270.281V48.4688C270.281 46.5104 269.896 45.0938 269.125 44.2188C268.354 43.3438 267.042 42.9062 265.188 42.9062C262.625 42.9062 260.771 43.9688 259.625 46.0938V70H250.594V36.1875H259.062ZM321.594 70.625C316.635 70.625 312.594 69.1042 309.469 66.0625C306.365 63.0208 304.812 58.9688 304.812 53.9062V53.0312C304.812 49.6354 305.469 46.6042 306.781 43.9375C308.094 41.25 309.948 39.1875 312.344 37.75C314.76 36.2917 317.51 35.5625 320.594 35.5625C325.219 35.5625 328.854 37.0208 331.5 39.9375C334.167 42.8542 335.5 46.9896 335.5 52.3438V56.0312H313.969C314.26 58.2396 315.135 60.0104 316.594 61.3438C318.073 62.6771 319.938 63.3438 322.188 63.3438C325.667 63.3438 328.385 62.0833 330.344 59.5625L334.781 64.5312C333.427 66.4479 331.594 67.9479 329.281 69.0312C326.969 70.0938 324.406 70.625 321.594 70.625ZM320.562 42.875C318.771 42.875 317.312 43.4792 316.188 44.6875C315.083 45.8958 314.375 47.625 314.062 49.875H326.625V49.1562C326.583 47.1562 326.042 45.6146 325 44.5312C323.958 43.4271 322.479 42.875 320.562 42.875ZM348.969 36.1875L349.25 40.0938C351.667 37.0729 354.906 35.5625 358.969 35.5625C362.552 35.5625 365.219 36.6146 366.969 38.7188C368.719 40.8229 369.615 43.9688 369.656 48.1562V70H360.625V48.375C360.625 46.4583 360.208 45.0729 359.375 44.2188C358.542 43.3438 357.156 42.9062 355.219 42.9062C352.677 42.9062 350.771 43.9896 349.5 46.1562V70H340.469V36.1875H348.969ZM387.344 27.875V36.1875H393.125V42.8125H387.344V59.6875C387.344 60.9375 387.583 61.8333 388.062 62.375C388.542 62.9167 389.458 63.1875 390.812 63.1875C391.812 63.1875 392.698 63.1146 393.469 62.9688V69.8125C391.698 70.3542 389.875 70.625 388 70.625C381.667 70.625 378.438 67.4271 378.312 61.0312V42.8125H373.375V36.1875H378.312V27.875H387.344Z"
        fill="black"
      />
    </chakra.svg>
  );
};

const sectionPt = "16";

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
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Newsletter", href: "#newsletter" },
];

const ContactUsButton = (props: ButtonProps) => {
  return (
    <Button
      colorScheme="blue"
      variant="solid"
      fontSize="sm"
      rounded={"2"}
      {...props}
    >
      Contact Us
    </Button>
  );
};

const headerHeight = "70px";

const Container = (props: HTMLChakraProps<"div">) => (
  <Box maxW="90rem" w="full" mx="auto" {...props} />
);

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
    <>
      <Head>
        <title></title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap');
        </style>
      </Head>
      <chakra.header h={headerHeight}>
        <Box position="relative" h="full" w="full" bg="white" px="4">
          <Container h="full">
            <Flex alignItems="center" h="full" justifyContent="space-between">
              <Link href="/">
                <a
                  style={{
                    display: "block",
                    flex: "0 0 auto",
                  }}
                >
                  <Logo h="36px" w="auto" />
                </a>
              </Link>

              <Flex flex="0 0 auto" as="nav" alignItems="center">
                <Flex
                  ref={navRef}
                  flexWrap="nowrap"
                  as="ul"
                  alignItems="center"
                  listStyleType="none"
                  m={0}
                  p={0}
                  display={{ base: "none", [mobileBreakpoint]: "flex" }}
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
                <ContactUsButton
                  display={{ [mobileBreakpoint]: "block", base: "none" }}
                  ml="4"
                />
                <chakra.span
                  display={{ base: "none", [mobileBreakpoint]: "block" }}
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
                <Box display={{ base: "block", [mobileBreakpoint]: "none" }}>
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
                      <DrawerBody textAlign="center">
                        <chakra.ul listStyleType={"none"} m={0} p={0} mb="4">
                          {navItems.map((x, i) => (
                            <li key={x.title}>
                              <NavLink href={x.href} hasSubmenu={false}>
                                {x.title}
                              </NavLink>
                            </li>
                          ))}
                        </chakra.ul>
                        <ContactUsButton />
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </Box>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </chakra.header>
      <Section textAlign={"center"}>
        <Heading as="h1" size="3xl" color={useTextPrimary()} mb="6">
          Lucid Deployment
        </Heading>
        <Text color={useAccents5()}>
          👨🏻‍💻 Serial Entrepreneurs + Producers + Developers ⚡🚀🛠️
        </Text>
      </Section>
      <Chat />
      <chakra.footer bg="#182538" color={footerColor} py={sectionPt}>
        <Container
          sx={{
            "& > * + *": {
              mt: "6",
            },
          }}
        >
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            as="ul"
            m={0}
            p={0}
            listStyleType="none"
            sx={{
              "& > * + *": {
                ml: "3",
              },
            }}
          >
            {navItems.map((x, i) => (
              <li key={i}>
                <chakra.a
                  color={footerColor}
                  textDecoration="none"
                  _hover={{
                    color: footerColor,
                    textDecoration: "underline",
                  }}
                  href={x.href}
                >
                  {x.title}
                </chakra.a>
              </li>
            ))}
          </Flex>
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            sx={{
              "& > * + *": {
                ml: "3",
              },
            }}
          >
            <chakra.a href="/" color={useTextSecondary()}>
              <VisuallyHidden>Telegram</VisuallyHidden>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.953 3.27424L13.5387 13.8594C13.3566 14.6065 12.8816 14.7924 12.2066 14.4404L8.52799 11.9203L6.75299 13.5074C6.55656 13.6901 6.39227 13.8428 6.0137 13.8428L6.27799 10.3598L13.0958 4.63225C13.3923 4.38654 13.0316 4.25041 12.6351 4.49611L4.20656 9.4301L0.577988 8.37424C-0.211298 8.14514 -0.225583 7.64045 0.742274 7.2885L14.9351 2.2051C15.5923 1.976 16.1673 2.34123 15.953 3.27424V3.27424Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </chakra.a>
          </Flex>
          <Box
            textAlign="center"
            maxW="50%"
            as="p"
            my="0"
            mx="auto"
            fontSize="sm"
            lineHeight="shorter"
          >
            Made in Krasnodar, Russian Federation
            <br />
            Lucid Deployment &copy; 2021
          </Box>
        </Container>
      </chakra.footer>
    </>
  );
}

const footerColor = "#6b7a90";

interface ChatProps {}
function Chat(props: ChatProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((x) => !x);
  const close = () => setIsOpen(false);

  return (
    <Popover isOpen={isOpen} onClose={close} placement="top">
      <PopoverTrigger>
        <IconButton
          position="fixed"
          rounded="full"
          colorScheme="darkGray"
          variant="solid"
          aria-label="Chat"
          icon={<ChatIcon />}
          bottom="10"
          right="10"
          size="lg"
          onClick={() => {
            toggle();
          }}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverBody></PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

interface SectionProps extends HTMLChakraProps<"section"> {
  children?: React.ReactNode;
}
function Section({ children, ...rest }: SectionProps) {
  return (
    <chakra.section pt={sectionPt} pb="24" {...rest}>
      <Container>{children}</Container>
    </chakra.section>
  );
}
