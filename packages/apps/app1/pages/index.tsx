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
                <Link
                  colorScheme={"blackBrand"}
                  variant="twoColors"
                  style={{
                    display: "block",
                    flex: "0 0 auto",
                  }}
                >
                  <Text fontSize="lg" color={colors.useTextPrimary()}>
                    Vladislav Savchenko
                  </Text>
                  <Text fontSize="sm" lineHeight="none">
                    Web developer
                  </Text>
                </Link>
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
            I studied computer science in Kuban State University, then worked at
            Difocus as well as with small businesses for 2 years as
            frontend/backend developer. My main assets include sense of
            observation and analytical mind.
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
      px={{ base: "5", sm: "7", md: "24", lg: "32", xl: "40" }}
      {...rest}
    >
      <Container>{children}</Container>
    </Box>
  );
}
