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
  return (
    <chakra.svg
      viewBox="0 0 346 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.24 65.472H6.288V6.528H0.24V-5.72205e-06H20.4V6.528H14.16V65.472H34.32V54.24H40.848V72H0.24V65.472Z"
        fill={useToken("colors", "brand.500")}
      />
      <path
        d="M48.2734 72V32.1875H60.5234C64.0234 32.1875 67.1497 32.9805 69.9023 34.5664C72.6732 36.1341 74.8333 38.3763 76.3828 41.293C77.9323 44.1914 78.707 47.4909 78.707 51.1914V53.0234C78.707 56.724 77.9414 60.0143 76.4102 62.8945C74.8971 65.7747 72.7552 68.0078 69.9844 69.5938C67.2135 71.1797 64.0872 71.9818 60.6055 72H48.2734ZM56.4766 38.832V65.4102H60.4414C63.6497 65.4102 66.1016 64.362 67.7969 62.2656C69.4922 60.1693 70.3581 57.1706 70.3945 53.2695V51.1641C70.3945 47.1172 69.556 44.0547 67.8789 41.9766C66.2018 39.8802 63.75 38.832 60.5234 38.832H56.4766ZM97.793 72.5469C93.4544 72.5469 89.918 71.2161 87.1836 68.5547C84.4674 65.8932 83.1094 62.3477 83.1094 57.918V57.1523C83.1094 54.181 83.6836 51.5286 84.832 49.1953C85.9805 46.8438 87.6029 45.0391 89.6992 43.7812C91.8138 42.5052 94.2201 41.8672 96.918 41.8672C100.965 41.8672 104.146 43.1432 106.461 45.6953C108.794 48.2474 109.961 51.8659 109.961 56.5508V59.7773H91.1211C91.3763 61.7096 92.1419 63.2591 93.418 64.4258C94.7122 65.5924 96.3438 66.1758 98.3125 66.1758C101.357 66.1758 103.736 65.0729 105.449 62.8672L109.332 67.2148C108.147 68.8919 106.543 70.2044 104.52 71.1523C102.496 72.082 100.254 72.5469 97.793 72.5469ZM96.8906 48.2656C95.3229 48.2656 94.0469 48.7943 93.0625 49.8516C92.0964 50.9089 91.4766 52.4219 91.2031 54.3906H102.195V53.7617C102.159 52.0117 101.685 50.6628 100.773 49.7148C99.862 48.7487 98.5677 48.2656 96.8906 48.2656ZM141.105 57.4805C141.105 62.0378 140.066 65.6927 137.988 68.4453C135.928 71.1797 133.139 72.5469 129.621 72.5469C126.632 72.5469 124.216 71.5078 122.375 69.4297V83.375H114.473V42.4141H121.801L122.074 45.3125C123.988 43.0156 126.486 41.8672 129.566 41.8672C133.212 41.8672 136.047 43.2161 138.07 45.9141C140.094 48.612 141.105 52.3307 141.105 57.0703V57.4805ZM133.203 56.9062C133.203 54.1536 132.711 52.0299 131.727 50.5352C130.76 49.0404 129.348 48.293 127.488 48.293C125.009 48.293 123.305 49.2409 122.375 51.1367V63.25C123.341 65.2005 125.064 66.1758 127.543 66.1758C131.316 66.1758 133.203 63.0859 133.203 56.9062ZM154.367 72H146.438V30H154.367V72ZM159.672 56.9336C159.672 53.9987 160.237 51.3828 161.367 49.0859C162.497 46.7891 164.12 45.0117 166.234 43.7539C168.367 42.4961 170.837 41.8672 173.645 41.8672C177.637 41.8672 180.891 43.0885 183.406 45.5312C185.94 47.974 187.353 51.2917 187.645 55.4844L187.699 57.5078C187.699 62.0469 186.432 65.6927 183.898 68.4453C181.365 71.1797 177.965 72.5469 173.699 72.5469C169.434 72.5469 166.025 71.1797 163.473 68.4453C160.939 65.7109 159.672 61.9922 159.672 57.2891V56.9336ZM167.574 57.5078C167.574 60.3151 168.103 62.4661 169.16 63.9609C170.217 65.4375 171.73 66.1758 173.699 66.1758C175.613 66.1758 177.108 65.4466 178.184 63.9883C179.259 62.5117 179.797 60.1602 179.797 56.9336C179.797 54.181 179.259 52.0482 178.184 50.5352C177.108 49.0221 175.595 48.2656 173.645 48.2656C171.712 48.2656 170.217 49.0221 169.16 50.5352C168.103 52.0299 167.574 54.3542 167.574 57.5078ZM203.176 60.8164L208.645 42.4141H217.121L205.227 76.5938L204.57 78.1523C202.802 82.0169 199.885 83.9492 195.82 83.9492C194.672 83.9492 193.505 83.776 192.32 83.4297V77.4414L193.523 77.4688C195.018 77.4688 196.13 77.2409 196.859 76.7852C197.607 76.3294 198.19 75.5729 198.609 74.5156L199.539 72.082L189.176 42.4141H197.68L203.176 60.8164ZM227.648 42.4141L227.895 45.7227C229.991 43.1523 232.826 41.8672 236.398 41.8672C240.208 41.8672 242.824 43.3711 244.246 46.3789C246.324 43.3711 249.286 41.8672 253.133 41.8672C256.341 41.8672 258.729 42.806 260.297 44.6836C261.865 46.543 262.648 49.3503 262.648 53.1055V72H254.719V53.1328C254.719 51.4557 254.391 50.2344 253.734 49.4688C253.078 48.6849 251.921 48.293 250.262 48.293C247.892 48.293 246.251 49.4232 245.34 51.6836L245.367 72H237.465V53.1602C237.465 51.4466 237.128 50.207 236.453 49.4414C235.779 48.6758 234.63 48.293 233.008 48.293C230.766 48.293 229.143 49.2227 228.141 51.082V72H220.238V42.4141H227.648ZM282.363 72.5469C278.025 72.5469 274.488 71.2161 271.754 68.5547C269.038 65.8932 267.68 62.3477 267.68 57.918V57.1523C267.68 54.181 268.254 51.5286 269.402 49.1953C270.551 46.8438 272.173 45.0391 274.27 43.7812C276.384 42.5052 278.79 41.8672 281.488 41.8672C285.535 41.8672 288.716 43.1432 291.031 45.6953C293.365 48.2474 294.531 51.8659 294.531 56.5508V59.7773H275.691C275.947 61.7096 276.712 63.2591 277.988 64.4258C279.283 65.5924 280.914 66.1758 282.883 66.1758C285.927 66.1758 288.306 65.0729 290.02 62.8672L293.902 67.2148C292.717 68.8919 291.113 70.2044 289.09 71.1523C287.066 72.082 284.824 72.5469 282.363 72.5469ZM281.461 48.2656C279.893 48.2656 278.617 48.7943 277.633 49.8516C276.667 50.9089 276.047 52.4219 275.773 54.3906H286.766V53.7617C286.729 52.0117 286.255 50.6628 285.344 49.7148C284.432 48.7487 283.138 48.2656 281.461 48.2656ZM306.316 42.4141L306.562 45.832C308.677 43.1888 311.512 41.8672 315.066 41.8672C318.202 41.8672 320.535 42.7878 322.066 44.6289C323.598 46.4701 324.382 49.2227 324.418 52.8867V72H316.516V53.0781C316.516 51.401 316.151 50.1888 315.422 49.4414C314.693 48.6758 313.48 48.293 311.785 48.293C309.561 48.293 307.893 49.2409 306.781 51.1367V72H298.879V42.4141H306.316ZM339.895 35.1406V42.4141H344.953V48.2109H339.895V62.9766C339.895 64.0703 340.104 64.8542 340.523 65.3281C340.943 65.8021 341.745 66.0391 342.93 66.0391C343.805 66.0391 344.579 65.9753 345.254 65.8477V71.8359C343.704 72.3099 342.109 72.5469 340.469 72.5469C334.927 72.5469 332.102 69.7487 331.992 64.1523V48.2109H327.672V42.4141H331.992V35.1406H339.895Z"
        fill={useTextPrimary()}
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
                  <Logo h={{ base: "28px", md: "36px" }} w="auto" />
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
                  ml={{ base: 3, md: 4 }}
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
