import {
  Box,
  chakra,
  Flex,
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
  HeadingProps,
  Link,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  BoxProps,
  useBreakpointValue,
  TextProps,
} from "@chakra-ui/react";
import NavLink from "../components/NavLink";
import NextLink from "next/link";
import * as React from "react";
import { HamburgerIcon, CloseIcon, ChatIcon } from "@chakra-ui/icons";
import Head from "next/head";
import { Formik, Field, Form } from "formik";
import Image from "next/image";
import { colors } from "@lucid/app1-ui-theme";
import { useToast } from "@lucid/ui-toast";
import { validationSchema } from "@lucid/request-application";
import {
  CreateRequestData,
  CreateRequestError,
} from "@lucid/request-api-interfaces";
import * as messages from "../lib/messages";

const mobileBreakpoint = "sm";

const Logo = (props: HTMLChakraProps<"svg">) => {
  return (
    <chakra.svg
      viewBox="0 0 372 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.96875 61.6406H42.3125V69H0.921875V0.75H9.96875V61.6406Z"
        fill={useToken("colors", colors.useBrand6())}
      />
      <path
        d="M52.5781 69V0.75H71.8438C77.7812 0.75 83.0312 2.0625 87.5938 4.6875C92.1562 7.3125 95.6719 11.0469 98.1406 15.8906C100.641 20.7344 101.906 26.2969 101.938 32.5781V36.9375C101.938 43.375 100.688 49.0156 98.1875 53.8594C95.7188 58.7031 92.1719 62.4219 87.5469 65.0156C82.9531 67.6094 77.5938 68.9375 71.4688 69H52.5781ZM61.5781 8.15625V61.6406H71.0469C77.9844 61.6406 83.375 59.4844 87.2188 55.1719C91.0938 50.8594 93.0312 44.7188 93.0312 36.75V32.7656C93.0312 25.0156 91.2031 19 87.5469 14.7188C83.9219 10.4062 78.7656 8.21875 72.0781 8.15625H61.5781ZM124.309 69.5469C119.97 69.5469 116.434 68.2161 113.699 65.5547C110.983 62.8932 109.625 59.3477 109.625 54.918V54.1523C109.625 51.181 110.199 48.5286 111.348 46.1953C112.496 43.8438 114.118 42.0391 116.215 40.7812C118.329 39.5052 120.736 38.8672 123.434 38.8672C127.48 38.8672 130.661 40.1432 132.977 42.6953C135.31 45.2474 136.477 48.8659 136.477 53.5508V56.7773H117.637C117.892 58.7096 118.658 60.2591 119.934 61.4258C121.228 62.5924 122.859 63.1758 124.828 63.1758C127.872 63.1758 130.251 62.0729 131.965 59.8672L135.848 64.2148C134.663 65.8919 133.059 67.2044 131.035 68.1523C129.012 69.082 126.77 69.5469 124.309 69.5469ZM123.406 45.2656C121.839 45.2656 120.562 45.7943 119.578 46.8516C118.612 47.9089 117.992 49.4219 117.719 51.3906H128.711V50.7617C128.674 49.0117 128.201 47.6628 127.289 46.7148C126.378 45.7487 125.083 45.2656 123.406 45.2656ZM167.621 54.4805C167.621 59.0378 166.582 62.6927 164.504 65.4453C162.444 68.1797 159.655 69.5469 156.137 69.5469C153.147 69.5469 150.732 68.5078 148.891 66.4297V80.375H140.988V39.4141H148.316L148.59 42.3125C150.504 40.0156 153.001 38.8672 156.082 38.8672C159.728 38.8672 162.562 40.2161 164.586 42.9141C166.609 45.612 167.621 49.3307 167.621 54.0703V54.4805ZM159.719 53.9062C159.719 51.1536 159.227 49.0299 158.242 47.5352C157.276 46.0404 155.863 45.293 154.004 45.293C151.525 45.293 149.82 46.2409 148.891 48.1367V60.25C149.857 62.2005 151.579 63.1758 154.059 63.1758C157.832 63.1758 159.719 60.0859 159.719 53.9062ZM180.883 69H172.953V27H180.883V69ZM186.188 53.9336C186.188 50.9987 186.753 48.3828 187.883 46.0859C189.013 43.7891 190.635 42.0117 192.75 40.7539C194.883 39.4961 197.353 38.8672 200.16 38.8672C204.152 38.8672 207.406 40.0885 209.922 42.5312C212.456 44.974 213.868 48.2917 214.16 52.4844L214.215 54.5078C214.215 59.0469 212.948 62.6927 210.414 65.4453C207.88 68.1797 204.48 69.5469 200.215 69.5469C195.949 69.5469 192.54 68.1797 189.988 65.4453C187.454 62.7109 186.188 58.9922 186.188 54.2891V53.9336ZM194.09 54.5078C194.09 57.3151 194.618 59.4661 195.676 60.9609C196.733 62.4375 198.246 63.1758 200.215 63.1758C202.129 63.1758 203.624 62.4466 204.699 60.9883C205.775 59.5117 206.312 57.1602 206.312 53.9336C206.312 51.181 205.775 49.0482 204.699 47.5352C203.624 46.0221 202.111 45.2656 200.16 45.2656C198.228 45.2656 196.733 46.0221 195.676 47.5352C194.618 49.0299 194.09 51.3542 194.09 54.5078ZM229.691 57.8164L235.16 39.4141H243.637L231.742 73.5938L231.086 75.1523C229.318 79.0169 226.401 80.9492 222.336 80.9492C221.188 80.9492 220.021 80.776 218.836 80.4297V74.4414L220.039 74.4688C221.534 74.4688 222.646 74.2409 223.375 73.7852C224.122 73.3294 224.706 72.5729 225.125 71.5156L226.055 69.082L215.691 39.4141H224.195L229.691 57.8164ZM254.164 39.4141L254.41 42.7227C256.507 40.1523 259.341 38.8672 262.914 38.8672C266.724 38.8672 269.34 40.3711 270.762 43.3789C272.84 40.3711 275.802 38.8672 279.648 38.8672C282.857 38.8672 285.245 39.806 286.812 41.6836C288.38 43.543 289.164 46.3503 289.164 50.1055V69H281.234V50.1328C281.234 48.4557 280.906 47.2344 280.25 46.4688C279.594 45.6849 278.436 45.293 276.777 45.293C274.408 45.293 272.767 46.4232 271.855 48.6836L271.883 69H263.98V50.1602C263.98 48.4466 263.643 47.207 262.969 46.4414C262.294 45.6758 261.146 45.293 259.523 45.293C257.281 45.293 255.659 46.2227 254.656 48.082V69H246.754V39.4141H254.164ZM308.879 69.5469C304.54 69.5469 301.004 68.2161 298.27 65.5547C295.553 62.8932 294.195 59.3477 294.195 54.918V54.1523C294.195 51.181 294.77 48.5286 295.918 46.1953C297.066 43.8438 298.689 42.0391 300.785 40.7812C302.9 39.5052 305.306 38.8672 308.004 38.8672C312.051 38.8672 315.232 40.1432 317.547 42.6953C319.88 45.2474 321.047 48.8659 321.047 53.5508V56.7773H302.207C302.462 58.7096 303.228 60.2591 304.504 61.4258C305.798 62.5924 307.43 63.1758 309.398 63.1758C312.443 63.1758 314.822 62.0729 316.535 59.8672L320.418 64.2148C319.233 65.8919 317.629 67.2044 315.605 68.1523C313.582 69.082 311.34 69.5469 308.879 69.5469ZM307.977 45.2656C306.409 45.2656 305.133 45.7943 304.148 46.8516C303.182 47.9089 302.562 49.4219 302.289 51.3906H313.281V50.7617C313.245 49.0117 312.771 47.6628 311.859 46.7148C310.948 45.7487 309.654 45.2656 307.977 45.2656ZM332.832 39.4141L333.078 42.832C335.193 40.1888 338.027 38.8672 341.582 38.8672C344.717 38.8672 347.051 39.7878 348.582 41.6289C350.113 43.4701 350.897 46.2227 350.934 49.8867V69H343.031V50.0781C343.031 48.401 342.667 47.1888 341.938 46.4414C341.208 45.6758 339.996 45.293 338.301 45.293C336.077 45.293 334.409 46.2409 333.297 48.1367V69H325.395V39.4141H332.832ZM366.41 32.1406V39.4141H371.469V45.2109H366.41V59.9766C366.41 61.0703 366.62 61.8542 367.039 62.3281C367.458 62.8021 368.26 63.0391 369.445 63.0391C370.32 63.0391 371.095 62.9753 371.77 62.8477V68.8359C370.22 69.3099 368.625 69.5469 366.984 69.5469C361.443 69.5469 358.617 66.7487 358.508 61.1523V45.2109H354.188V39.4141H358.508V32.1406H366.41Z"
        fill={useToken("colors", useHeadingColor())}
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

const navItems: NavItem[] = [{ title: "Projects", href: "#projects" }];

const ContactUsButton = (props: ButtonProps) => {
  return (
    <Button
      as={"a"}
      href="mailto: vs101ff@gmail.com"
      colorScheme="brand"
      variant="solid"
      fontSize="sm"
      rounded={"2"}
      fontWeight="normal"
      {...props}
    >
      Contact us
    </Button>
  );
};

const headerHeight = "4.375rem";

const Container = (props: HTMLChakraProps<"div">) => (
  <Box maxW="90rem" w="full" mx="auto" {...props} />
);

const servicesSpaceX = { base: "2.5", md: "5" };
const ServiceTitle = ({ children, ...rest }: TextProps) => (
  <Text
    display="inline-block"
    py={{ base: "1.5", md: "3" }}
    px={servicesSpaceX}
    fontSize={{ base: "2.125rem", md: "6xl", lg: "5.83333vw" }}
    sx={{
      WebkitTextStroke: useBreakpointValue({
        lg: `1px ${colors.useTextPrimary()}`,
      })!,
    }}
    transition={{ lg: "color .3s,-webkit-text-stroke .3s" }}
    lineHeight={{ lg: 1.1 }}
    color={{ base: colors.useTextPrimary(), lg: "transparent" }}
    {...rest}
  >
    <chakra.span
      sx={{
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: `""`,
          display: "block",
          position: "absolute",
          left: "2px",
          right: "2px",
          bottom: 0,
          height: "1px",
          background: "currentColor",
        },
      }}
    >
      {children}
    </chakra.span>
  </Text>
);

interface Project {
  id: number;
  title: string;
  description: string;
  src?: StaticImageData;
  href: string;
  role: string;
}

const ChakraNextImage = chakra(Image);

interface ProjectProps extends BoxProps {
  project: Project;
}
const Project = ({ project, ...boxProps }: ProjectProps) => {
  return (
    <Box
      py={{ base: "10" }}
      px={{ base: "0", md: "5", lg: "0" }}
      verticalAlign={{ base: "none", md: "top" }}
      {...boxProps}
    >
      <Box
        display={{ base: "block", lg: "flex" }}
        flexDirection="row-reverse"
        justifyContent="space-between"
        alignItems="center"
      >
        {project.src ? (
          <Box w={{ base: "none", lg: "50%" }} ml={{ lg: 4 }}>
            <chakra.a
              href={project.href}
              target="_blank"
              w="auto"
              h="auto"
              position="relative"
              display="block"
              my="0"
              mx="auto"
              textAlign={{ base: "center", lg: "left" }}
              textDecoration="none"
              _focus={{
                textDecoration: "none",
                color: "inherit",
              }}
              _hover={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ChakraNextImage
                src={project.src}
                sx={{
                  w: "full",
                  h: "full",
                  objectFit: "contain",
                }}
                borderRadius={{ base: "10", lg: "0" }}
                loading="eager"
                alt=""
              />
            </chakra.a>
          </Box>
        ) : null}
        <Box
          flex="1 1 auto"
          textAlign={{ base: "center", lg: "left" }}
          mt={{ base: "9", lg: "0" }}
          mx={{ base: "auto", lg: "0" }}
          maxW={{ base: "16.875rem", lg: "none" }}
          w={{ lg: "50%" }}
          sx={{
            "& > * + *": {
              mt: useBreakpointValue({ lg: "8" }),
            },
          }}
        >
          <Box display={{ base: "inline", lg: "block" }}>
            <Link
              target="_blank"
              href={project.href}
              variant="twoColors"
              colorScheme="blackBrand"
              display={{ base: "inline", lg: "block" }}
              fontWeight={{ base: "bold", lg: "normal" }}
              lineHeight={{ lg: "1" }}
              fontSize={{ base: "lg", lg: "1.5vw" }}
            >
              {project.title}
            </Link>
          </Box>
          <Box
            display={{ base: "inline", lg: "block" }}
            lineHeight={{ lg: "short" }}
            fontSize={{ base: "lg", lg: "2.58333vw" }}
            letterSpacing={{ lg: "wide" }}
          >
            <chakra.p
              display={{ base: "inline", lg: "block" }}
              sx={{
                "&::before": {
                  content: `" - "`,
                  display: useBreakpointValue({ lg: "none" }),
                },
              }}
            >
              {project.description}
            </chakra.p>
          </Box>
          <Box
            mt={{ lg: "0", base: "4" }}
            color={colors.useAccents7()}
            fontSize={{ lg: "1.16667vw", base: "sm" }}
            letterSpacing="wider"
          >
            <p>{project.role}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const footerLayoutBreakpoint = "md";

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

  const socialSvgProps: HTMLChakraProps<"svg"> = {
    w: "auto",
    h: { base: "4", md: "5", lg: "6" },
    verticalAlign: "middle",
    display: "inline-block",
  };

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
        <Box position="relative" h="full" w="full" px="4">
          <Container h="full">
            <Flex alignItems="center" h="full" justifyContent="space-between">
              <NextLink href="/">
                <a
                  style={{
                    display: "block",
                    flex: "0 0 auto",
                  }}
                >
                  <Logo h={{ base: "1.75rem", md: "2.25rem" }} w="auto" />
                </a>
              </NextLink>

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
                  display={{ [mobileBreakpoint]: "inline-flex", base: "none" }}
                  ml={{ base: 3, md: 4 }}
                />
                <chakra.span
                  display={{ base: "none", [mobileBreakpoint]: "block" }}
                  zIndex="10"
                  transition="all"
                  transitionDuration="200ms"
                  transitionTimingFunction="ease"
                  position="absolute"
                  bg={colors.useBrand5()}
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
      <Section>
        <Flex>
          <Box flex="0 0 auto">
            <Heading
              as="h1"
              fontSize={{ base: "1.0625rem", md: "1.125rem", lg: "xl" }}
              fontWeight="normal"
              letterSpacing="-.03em"
            >
              I make it happen
            </Heading>
            <Box
              mx={Object.entries(servicesSpaceX).reduce(
                (current, [key, value]) => ({
                  ...current,
                  [key]: `-${value}`,
                }),
                {}
              )}
              whiteSpace={{ lg: "nowrap" }}
            >
              <Box display={{ lg: "inline-block" }}>
                <ServiceTitle>Web-sites</ServiceTitle>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Box mt="12" maxW={{ base: "40.3125rem", lg: "52.1875rem" }} w="full">
          <Box
            fontSize={{ base: "xl", lg: "2xl" }}
            letterSpacing="wide"
            lineHeight={{ lg: "short" }}
          >
            Vladislav Savchenko, freelancer with more than two years of
            experience in backend and frontend.
          </Box>
        </Box>
      </Section>
      <Section id="projects">
        <SectionHeading>
          Featured
          <br />
          projects
        </SectionHeading>
        <Box>
          <Project
            display={{ md: "inline-block", lg: "block" }}
            w={{ base: "none", md: "50%", lg: "auto" }}
            project={{
              id: 0,
              title: "CarpTime Shop",
              description: "Online store for carp fishing and fishing tackle.",
              href: "https://carptimeshop.ru/",
              role: "Active participationg as a fullstack developer at Difocus",
            }}
          />
        </Box>
      </Section>
      <Request />
      <Section as={"footer"} bg={colors.useAccents2()}>
        <Flex
          flexWrap="nowrap"
          alignItems="flex-end"
          w="full"
          display={{ base: "block", [footerLayoutBreakpoint]: "flex" }}
        >
          <Box
            flex="0 1 100%"
            textAlign={{ base: "center", [footerLayoutBreakpoint]: "left" }}
          >
            <Link
              position="relative"
              display="inline-block"
              mb="2.5"
              href="mailto: vs101ff@gmail.com"
              fontSize="xl"
              lineHeight="short"
              letterSpacing="wide"
              sx={{
                "&::after": {
                  content: `""`,
                  display: "block",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "1px",
                  background: colors.useAccents7(),
                  transform: "scaleX(0)",
                  transition: "transform .8s cubic-bezier(.19,1,.22,1)",
                },
                _hover: {
                  "&::after": {
                    transform: "scaleX(1)",
                  },
                },
              }}
            >
              vs101ff@gmail.com
            </Link>
            <Box mt="7">
              <Text
                color={colors.useAccents6()}
                fontSize="md"
                fontStyle="normal"
                as="address"
              >
                <p>Kransodar, Russian Federation</p>
                {/*<p>
                  <Link
                    href="tel:+79999999999"
                    display="inline-block"
                    position="relative"
                    sx={{
                      "&::before": {
                        content: `""`,
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: "-3px",
                        height: "1px",
                        transform: "scaleX(0)",
                        transformOrigin: "right center",
                        background: "currentColor",
                        transition: "transform .4s,transform-origin 0s",
                      },
                      _hover: {
                        "&::before": {
                          transform: "scaleX(1)",
                          transformOrigin: "left center",
                        },
                      },
                    }}
                  >
                    +79999999999
                  </Link>
                  </p>*/}
              </Text>
            </Box>
          </Box>
          <Box
            flex="0 1 100%"
            textAlign={{ base: "center", [footerLayoutBreakpoint]: "left" }}
          >
            <SocialLink title="Telegram" href="https://t.me/vladislav4000">
              <chakra.svg
                {...socialSvgProps}
                viewBox="0 0 16 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.953 3.27424L13.5387 13.8594C13.3566 14.6065 12.8816 14.7924 12.2066 14.4404L8.52799 11.9203L6.75299 13.5074C6.55656 13.6901 6.39227 13.8428 6.0137 13.8428L6.27799 10.3598L13.0958 4.63225C13.3923 4.38654 13.0316 4.25041 12.6351 4.49611L4.20656 9.4301L0.577988 8.37424C-0.211298 8.14514 -0.225583 7.64045 0.742274 7.2885L14.9351 2.2051C15.5923 1.976 16.1673 2.34123 15.953 3.27424V3.27424Z"
                  fill="currentcolor"
                ></path>
              </chakra.svg>
            </SocialLink>
            <SocialLink
              title="Facebook"
              href="https://www.facebook.com/simply.developer"
            >
              <chakra.svg
                {...socialSvgProps}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16.76 32"
              >
                <path
                  d="M13.71 5.33h3.05V.15C16.3.15 14.48 0 12.34 0 7.92 0 5 2.59 5 7.47v4.26H0v5.64h5V32h6V17.37h4.88l.76-5.64h-5.82V8.08c0-1.68.46-2.75 2.89-2.75z"
                  fill="currentcolor"
                ></path>
              </chakra.svg>
            </SocialLink>
          </Box>
        </Flex>
      </Section>
    </>
  );
}

interface SocialLinkProps {
  title: string;
  href: string;
  children?: React.ReactNode;
}
function SocialLink({ title, href, children }: SocialLinkProps) {
  return (
    <Link
      href={href}
      color={colors.useAccents7()}
      _hover={{
        color: colors.useBrand5(),
      }}
      target="_blank"
      w="24"
      h="16"
      lineHeight="calc(4rem - 1px)"
      display="inline-block"
      textAlign="center"
      fontSize="xl"
    >
      <VisuallyHidden>{title}</VisuallyHidden>
      {children}
    </Link>
  );
}

const useHeadingColor = () => colors.useTextPrimary();

function SectionHeading(props: HeadingProps) {
  return (
    <Heading
      as="h2"
      color={useHeadingColor()}
      fontWeight="normal"
      fontSize={{ base: "4xl", lg: "6xl" }}
      lineHeight="100%"
      textTransform="lowercase"
      {...props}
    />
  );
}

interface RequestFormValues {
  name: string;
  subject: string;
  email: string;
}

const initialChatFormValues: RequestFormValues = {
  name: "",
  subject: "",
  email: "",
};

interface RequestProps {}
function Request(props: RequestProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((x) => !x);
  const close = () => setIsOpen(false);

  const inputFocusBorderColor = colors.useBrand5();
  const popoverBodyPx = "3";
  const bottomAbsoluteFieldH = "11.25rem";

  const [status, setStatus] = React.useState<"idle" | "pending">("idle");

  const { setToast } = useToast();

  return (
    <Popover isOpen={isOpen} onClose={close} placement="top">
      <PopoverTrigger>
        <IconButton
          position="fixed"
          rounded="full"
          colorScheme="brand"
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
        <PopoverContent border="none">
          <PopoverBody px="0" pt="6" pb="0" position="relative" rounded="lg">
            <Formik
              initialValues={initialChatFormValues}
              onSubmit={async (values, actions) => {
                setStatus("pending");
                try {
                  const res = await fetch(`/api/request`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                  });

                  if (res.ok) {
                    const data: CreateRequestData = await res.json();
                    setToast({ message: data.message, type: "success" });
                  } else {
                    const error: CreateRequestError = await res.json();
                    setToast({ message: error.message, type: "error" });
                  }
                } catch (err: unknown) {
                  setToast({
                    message: messages.api.unexpectedError,
                    type: "error",
                  });
                } finally {
                  setStatus("idle");
                  actions.setSubmitting(false);
                  close();
                }
              }}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  <Field name="name">
                    {({ field, form }: any) => (
                      <FormControl
                        px={popoverBodyPx}
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <Input
                          {...field}
                          id="name"
                          placeholder="Your name"
                          aria-label="Your name"
                          variant="flushed"
                          focusBorderColor={inputFocusBorderColor}
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }: any) => (
                      <FormControl
                        px={popoverBodyPx}
                        mb={`calc(${bottomAbsoluteFieldH} + 0.5rem)`}
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <Input
                          {...field}
                          id="email"
                          placeholder="Your Email"
                          aria-label="Your Email"
                          variant="flushed"
                          focusBorderColor={inputFocusBorderColor}
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="subject">
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.subject && form.touched.subject}
                      >
                        <Box
                          position="absolute"
                          bottom="0"
                          left="0"
                          right="0"
                          height={bottomAbsoluteFieldH}
                        >
                          <Textarea
                            {...field}
                            roundedTop="0"
                            roundedBottom="lg"
                            placeholder="Tell me about your project"
                            aria-label="Tell me about your project"
                            w="full"
                            lineHeight="short"
                            whiteSpace="pre-wrap"
                            overflowWrap="break-word"
                            pb="2.75rem"
                            pt="2"
                            px={popoverBodyPx}
                            id="subject"
                            resize={"none"}
                            position="absolute"
                            bottom="0"
                            left="0"
                            color={colors.useTextPrimary()}
                            border="none"
                            outlineOffset="-5px"
                            h="100% !important"
                            focusBorderColor={inputFocusBorderColor}
                          />
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                  <Box position="absolute" right="4" bottom="2" zIndex="1">
                    <ChatIconButton
                      aria-label="Send"
                      icon={<ChatIcon />}
                      type="submit"
                      isLoading={props.isSubmitting}
                    />
                  </Box>
                </Form>
              )}
            </Formik>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

function ChatIconButton(props: IconButtonProps) {
  return <IconButton variant="link" p="2" display="inline-flex" {...props} />;
}

function Section({ children, as, ...rest }: BoxProps) {
  return (
    <Box
      as={as ?? "section"}
      pt={{ base: "14", sm: "20", md: "40", lg: "40", xl: "64" }}
      pb={{ base: "10", sm: "14", md: "20", lg: "28", xl: "40" }}
      px={{ base: "5", sm: "7", md: "10", lg: "20", xl: "28" }}
      {...rest}
    >
      <Container>{children}</Container>
    </Box>
  );
}
