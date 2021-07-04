import {
  Box,
  chakra,
  Flex,
  useToken,
  useColorModeValue,
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
} from "@chakra-ui/react";
import { getColor } from "@chakra-ui/theme-tools";
import NavLink from "../components/NavLink";
import NextLink from "next/link";
import * as React from "react";
import { HamburgerIcon, CloseIcon, ChatIcon } from "@chakra-ui/icons";
import Head from "next/head";
import {
  useTextPrimary,
  useAccents5,
  useAccents3,
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
        d="M0.712001 0.799995H5.608V63.584H44.296V68H0.712001V0.799995Z"
        fill={useToken("colors", useColorModeValue("brand.500", "brand.400"))}
      />
      <path
        d="M48.7109 68V28.1875H60.9609C64.4609 28.1875 67.5872 28.9805 70.3398 30.5664C73.1107 32.1341 75.2708 34.3763 76.8203 37.293C78.3698 40.1914 79.1445 43.4909 79.1445 47.1914V49.0234C79.1445 52.724 78.3789 56.0143 76.8477 58.8945C75.3346 61.7747 73.1927 64.0078 70.4219 65.5938C67.651 67.1797 64.5247 67.9818 61.043 68H48.7109ZM56.9141 34.832V61.4102H60.8789C64.0872 61.4102 66.5391 60.362 68.2344 58.2656C69.9297 56.1693 70.7956 53.1706 70.832 49.2695V47.1641C70.832 43.1172 69.9935 40.0547 68.3164 37.9766C66.6393 35.8802 64.1875 34.832 60.9609 34.832H56.9141ZM98.2305 68.5469C93.8919 68.5469 90.3555 67.2161 87.6211 64.5547C84.9049 61.8932 83.5469 58.3477 83.5469 53.918V53.1523C83.5469 50.181 84.1211 47.5286 85.2695 45.1953C86.418 42.8438 88.0404 41.0391 90.1367 39.7812C92.2513 38.5052 94.6576 37.8672 97.3555 37.8672C101.402 37.8672 104.583 39.1432 106.898 41.6953C109.232 44.2474 110.398 47.8659 110.398 52.5508V55.7773H91.5586C91.8138 57.7096 92.5794 59.2591 93.8555 60.4258C95.1497 61.5924 96.7812 62.1758 98.75 62.1758C101.794 62.1758 104.173 61.0729 105.887 58.8672L109.77 63.2148C108.585 64.8919 106.98 66.2044 104.957 67.1523C102.934 68.082 100.691 68.5469 98.2305 68.5469ZM97.3281 44.2656C95.7604 44.2656 94.4844 44.7943 93.5 45.8516C92.5339 46.9089 91.9141 48.4219 91.6406 50.3906H102.633V49.7617C102.596 48.0117 102.122 46.6628 101.211 45.7148C100.299 44.7487 99.0052 44.2656 97.3281 44.2656ZM141.543 53.4805C141.543 58.0378 140.504 61.6927 138.426 64.4453C136.366 67.1797 133.577 68.5469 130.059 68.5469C127.069 68.5469 124.654 67.5078 122.812 65.4297V79.375H114.91V38.4141H122.238L122.512 41.3125C124.426 39.0156 126.923 37.8672 130.004 37.8672C133.65 37.8672 136.484 39.2161 138.508 41.9141C140.531 44.612 141.543 48.3307 141.543 53.0703V53.4805ZM133.641 52.9062C133.641 50.1536 133.148 48.0299 132.164 46.5352C131.198 45.0404 129.785 44.293 127.926 44.293C125.447 44.293 123.742 45.2409 122.812 47.1367V59.25C123.779 61.2005 125.501 62.1758 127.98 62.1758C131.754 62.1758 133.641 59.0859 133.641 52.9062ZM154.805 68H146.875V26H154.805V68ZM160.109 52.9336C160.109 49.9987 160.674 47.3828 161.805 45.0859C162.935 42.7891 164.557 41.0117 166.672 39.7539C168.805 38.4961 171.275 37.8672 174.082 37.8672C178.074 37.8672 181.328 39.0885 183.844 41.5312C186.378 43.974 187.79 47.2917 188.082 51.4844L188.137 53.5078C188.137 58.0469 186.87 61.6927 184.336 64.4453C181.802 67.1797 178.402 68.5469 174.137 68.5469C169.871 68.5469 166.462 67.1797 163.91 64.4453C161.376 61.7109 160.109 57.9922 160.109 53.2891V52.9336ZM168.012 53.5078C168.012 56.3151 168.54 58.4661 169.598 59.9609C170.655 61.4375 172.168 62.1758 174.137 62.1758C176.051 62.1758 177.546 61.4466 178.621 59.9883C179.697 58.5117 180.234 56.1602 180.234 52.9336C180.234 50.181 179.697 48.0482 178.621 46.5352C177.546 45.0221 176.033 44.2656 174.082 44.2656C172.15 44.2656 170.655 45.0221 169.598 46.5352C168.54 48.0299 168.012 50.3542 168.012 53.5078ZM203.613 56.8164L209.082 38.4141H217.559L205.664 72.5938L205.008 74.1523C203.24 78.0169 200.323 79.9492 196.258 79.9492C195.109 79.9492 193.943 79.776 192.758 79.4297V73.4414L193.961 73.4688C195.456 73.4688 196.568 73.2409 197.297 72.7852C198.044 72.3294 198.628 71.5729 199.047 70.5156L199.977 68.082L189.613 38.4141H198.117L203.613 56.8164ZM228.086 38.4141L228.332 41.7227C230.428 39.1523 233.263 37.8672 236.836 37.8672C240.646 37.8672 243.262 39.3711 244.684 42.3789C246.762 39.3711 249.724 37.8672 253.57 37.8672C256.779 37.8672 259.167 38.806 260.734 40.6836C262.302 42.543 263.086 45.3503 263.086 49.1055V68H255.156V49.1328C255.156 47.4557 254.828 46.2344 254.172 45.4688C253.516 44.6849 252.358 44.293 250.699 44.293C248.329 44.293 246.689 45.4232 245.777 47.6836L245.805 68H237.902V49.1602C237.902 47.4466 237.565 46.207 236.891 45.4414C236.216 44.6758 235.068 44.293 233.445 44.293C231.203 44.293 229.581 45.2227 228.578 47.082V68H220.676V38.4141H228.086ZM282.801 68.5469C278.462 68.5469 274.926 67.2161 272.191 64.5547C269.475 61.8932 268.117 58.3477 268.117 53.918V53.1523C268.117 50.181 268.691 47.5286 269.84 45.1953C270.988 42.8438 272.611 41.0391 274.707 39.7812C276.822 38.5052 279.228 37.8672 281.926 37.8672C285.973 37.8672 289.154 39.1432 291.469 41.6953C293.802 44.2474 294.969 47.8659 294.969 52.5508V55.7773H276.129C276.384 57.7096 277.15 59.2591 278.426 60.4258C279.72 61.5924 281.352 62.1758 283.32 62.1758C286.365 62.1758 288.743 61.0729 290.457 58.8672L294.34 63.2148C293.155 64.8919 291.551 66.2044 289.527 67.1523C287.504 68.082 285.262 68.5469 282.801 68.5469ZM281.898 44.2656C280.331 44.2656 279.055 44.7943 278.07 45.8516C277.104 46.9089 276.484 48.4219 276.211 50.3906H287.203V49.7617C287.167 48.0117 286.693 46.6628 285.781 45.7148C284.87 44.7487 283.576 44.2656 281.898 44.2656ZM306.754 38.4141L307 41.832C309.115 39.1888 311.949 37.8672 315.504 37.8672C318.639 37.8672 320.973 38.7878 322.504 40.6289C324.035 42.4701 324.819 45.2227 324.855 48.8867V68H316.953V49.0781C316.953 47.401 316.589 46.1888 315.859 45.4414C315.13 44.6758 313.918 44.293 312.223 44.293C309.999 44.293 308.331 45.2409 307.219 47.1367V68H299.316V38.4141H306.754ZM340.332 31.1406V38.4141H345.391V44.2109H340.332V58.9766C340.332 60.0703 340.542 60.8542 340.961 61.3281C341.38 61.8021 342.182 62.0391 343.367 62.0391C344.242 62.0391 345.017 61.9753 345.691 61.8477V67.8359C344.142 68.3099 342.547 68.5469 340.906 68.5469C335.365 68.5469 332.539 65.7487 332.43 60.1523V44.2109H328.109V38.4141H332.43V31.1406H340.332Z"
        fill={useToken("colors", useHeadingColor())}
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

const projects: Project[] = [
  {
    id: 1,
    title: "Bar",
    href: "https:://google.com/",
    image:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto corporis obcaecati ipsam eveniet, aspernatur pariatur laborum perferendis cum iste sequi non laboriosam recusandae necessitatibus sit autem itaque. Repellat sapiente fugit, excepturi accusamus repellendus in eos fuga laboriosam expedita accusantium ea magnam facere, a iusto dolore. Ipsam minus placeat ad vel.",
    role: "development",
  },
];

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
              <NextLink href="/">
                <a
                  style={{
                    display: "block",
                    flex: "0 0 auto",
                  }}
                >
                  <Logo h={{ base: "28px", md: "36px" }} w="auto" />
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
        <Heading as="h1" size="3xl" color={useHeadingColor()} mb="6">
          Lucid Deployment
        </Heading>
        <Text color={useAccents5()}>
          👨🏻‍💻 Serial Entrepreneurs + Producers + Developers ⚡🚀🛠️
        </Text>
      </Section>
      <Section textAlign="center">
        <SectionHeading>Our Projects</SectionHeading>
        {projects.map((x) => (
          <Project project={x} key={x.id} />
        ))}
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

const useHeadingColor = () => useColorModeValue("brand.900", "brand.50");

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  role: string;
  href: string;
}

interface ProjectProps {
  project: Project;
}
function Project({ project }: ProjectProps) {
  return (
    <Flex alignItems="stretch" textAlign="left">
      <Box flex="0 0 auto" mt="1" mr="6">
        <chakra.a
          display="block"
          rounded="full"
          href={project.href}
          w="14"
          h="14"
        >
          <chakra.img
            src={project.image}
            alt={project.title}
            sx={{
              objectFit: "contain",
              w: "full",
              h: "full",
            }}
          />
        </chakra.a>
      </Box>
      <Box flex="1 1 auto">
        <Heading
          as="h3"
          mb="5"
          size="lg"
          fontWeight="normal"
          color={useHeadingColor()}
          sx={{
            "&::after": {
              position: "abolsute",
              left: 0,
              bottom: "-3",
              height: "2px",
              width: "2",
              background: useAccents3(),
            },
          }}
        >
          {project.title}
        </Heading>
        <Text>{project.description}</Text>
        <Text mb="3">
          <strong>Role: </strong> {project.role}
        </Text>
        <Text>
          <Link href={project.href} color={"brand.500"}>
            {project.href}
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}

const footerColor = "#6b7a90";

function SectionHeading(props: HeadingProps) {
  return (
    <Heading as="h2" size="2xl" color={useHeadingColor()} mb="6" {...props} />
  );
}

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
    <chakra.section pt={sectionPt} pb="24" px="24" {...rest}>
      <Container>{children}</Container>
    </chakra.section>
  );
}
