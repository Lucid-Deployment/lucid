import {
  Box,
  chakra,
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
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
  useColorModeValue,
  LinkProps,
  useTheme,
} from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import NavLink from "../components/NavLink";
import NextLink from "next/link";
import * as React from "react";
import { ChatIcon } from "@chakra-ui/icons";
import Head from "next/head";
import { Formik, Field, Form } from "formik";
import Image from "next/image";
import { colors } from "@lucid/app1-ui-theme";
import { useToast } from "@lucid/ui-toast";
import { keyframes } from "@emotion/react";
import { validationSchema } from "@lucid/request-application";
import {
  CreateRequestData,
  CreateRequestError,
} from "@lucid/request-api-interfaces";
import * as messages from "../lib/messages";

const mobileBreakpoint = "md";

const ContactUsButton = (props: ButtonProps) => {
  return (
    <Button
      as={"a"}
      href="mailto: vs101ff@gmail.com"
      colorScheme="brand"
      variant="solid"
      fontSize="md"
      rounded={"0"}
      fontWeight="normal"
      {...props}
    >
      Contact us
    </Button>
  );
};

const Container = (props: HTMLChakraProps<"div">) => (
  <Box maxW="90rem" w="full" mx="auto" {...props} />
);

const servicesSpaceX = { base: "2.5", md: "5" };

interface Service {
  id: number;
  title: string;
  slug: string;
}

const services: Service[] = [
  {
    id: 0,
    title: "Frontend",
    slug: "frontend",
  },
];

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
      display={{ md: "inline-block", lg: "block" }}
      w={{ base: "none", md: "50%", lg: "auto" }}
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

const EmailMeLink = (props: Omit<LinkProps, "children">) => (
  <NextLink passHref href="mailto:vs101ff@gmail.com">
    <BrandLink {...props}>Email me</BrandLink>
  </NextLink>
);

const menuOpenTop = keyframes`
0% {
  opacity: 1;
  top: 0;
  left: 0;
  -webkit-transform: rotate(0) scaleX(1);
  -moz-transform: rotate(0) scaleX(1);
  -o-transform: rotate(0) scaleX(1);
  transform: rotate(0) scaleX(1);
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center
}

30% {
  opacity: 1;
  top: 0;
  left: 0;
  -webkit-transform: rotate(0) scaleX(0);
  -moz-transform: rotate(0) scaleX(0);
  -o-transform: rotate(0) scaleX(0);
  transform: rotate(0) scaleX(0)
}

30.1% {
  opacity: 0;
  top: 0;
  left: 0;
  -webkit-transform: rotate(0) scaleX(0);
  -moz-transform: rotate(0) scaleX(0);
  -o-transform: rotate(0) scaleX(0);
  transform: rotate(0) scaleX(0)
}

31% {
  opacity: 1;
  top: -5px;
  left: 4px;
  -webkit-transform: rotate(45deg) scaleX(0);
  -moz-transform: rotate(45deg) scaleX(0);
  -o-transform: rotate(45deg) scaleX(0);
  transform: rotate(45deg) scaleX(0)
}

99%,80% {
  opacity: 1;
  top: -5px;
  left: 4px;
  -webkit-transform: rotate(45deg) scaleX(1);
  -moz-transform: rotate(45deg) scaleX(1);
  -o-transform: rotate(45deg) scaleX(1);
  transform: rotate(45deg) scaleX(1);
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center
}
`;

const menuOpenBottom = keyframes`
0% {
  opacity: 1;
  top: 0;
  left: 0;
  -webkit-transform: rotate(0) scaleX(1);
  -moz-transform: rotate(0) scaleX(1);
  -o-transform: rotate(0) scaleX(1);
  transform: rotate(0) scaleX(1);
  -webkit-transform-origin: right center;
  -moz-transform-origin: right center;
  -o-transform-origin: right center;
  transform-origin: right center
}

50% {
  opacity: 1;
  top: 0;
  left: 0;
  -webkit-transform: rotate(0) scaleX(0);
  -moz-transform: rotate(0) scaleX(0);
  -o-transform: rotate(0) scaleX(0);
  transform: rotate(0) scaleX(0)
}

50.1% {
  opacity: 0;
  top: 0;
  left: 0;
  -webkit-transform: rotate(0) scaleX(0);
  -moz-transform: rotate(0) scaleX(0);
  -o-transform: rotate(0) scaleX(0);
  transform: rotate(0) scaleX(0)
}

51%,55% {
  opacity: 1;
  top: -13px;
  left: -4px;
  -webkit-transform: rotate(-45deg) scaleX(0);
  -moz-transform: rotate(-45deg) scaleX(0);
  -o-transform: rotate(-45deg) scaleX(0);
  transform: rotate(-45deg) scaleX(0)
}

100% {
  opacity: 1;
  top: -13px;
  left: -4px;
  -webkit-transform: rotate(-45deg) scaleX(1);
  -moz-transform: rotate(-45deg) scaleX(1);
  -o-transform: rotate(-45deg) scaleX(1);
  transform: rotate(-45deg) scaleX(1);
  -webkit-transform-origin: right center;
  -moz-transform-origin: right center;
  -o-transform-origin: right center;
  transform-origin: right center
}`;

const rippleIn = keyframes`
    0% {
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        -webkit-transform: translateY(-100%) translateZ(0);
        -moz-transform: translateY(-100%) translateZ(0);
        transform: translateY(-100%) translateZ(0)
    }

    100% {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        -webkit-transform: translateY(0) translateZ(0);
        -moz-transform: translateY(0) translateZ(0);
        transform: translateY(0) translateZ(0)
    }`;

type MenuItem = {
  href: string;
  title: string;
};

const menuItems: MenuItem[] = [
  {
    href: "#projects",
    title: "Projects",
  },
];

const MenuIconLine = () => (
  <chakra.span
    display="block"
    w="full"
    h="2px"
    my="1.5"
    position="relative"
    top="0"
    bg={colors.useTextPrimary()}
    transition="top .2s .3s,transform .3s 0s,opacity .3s .1s,background .4s"
  />
);

const H5 = ({ as, ...props }: HeadingProps) => (
  <Heading
    size="xs"
    as={as ?? "h5"}
    color={colors.useAccents7()}
    fontWeight="normal"
    {...props}
  />
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

  const socialSvgProps: HTMLChakraProps<"svg"> = {
    w: "auto",
    h: { base: "4", md: "5", lg: "6" },
    verticalAlign: "middle",
    display: "inline-block",
  };

  const serviceLinkWebkitTextStroke = useBreakpointValue({
    lg: `1px ${colors.useTextPrimary()}`,
  })!;

  const btnMenuRef = React.useRef<HTMLButtonElement>(null);

  const headerTop = "2.125rem";
  const headerX = "1.875rem";
  const headerH = "5.75rem";

  return (
    <>
      <Head>
        <title></title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
        </style>
      </Head>
      <chakra.header h={headerH}>
        <Portal>
          <NextLink passHref href="/">
            <chakra.a
              display="block"
              color={colors.useTextPrimary()}
              position="fixed"
              top={headerTop}
              left={headerX}
              zIndex="skipLink"
            >
              <svg
                width="134"
                height="14"
                viewBox="0 0 134 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.7168 9.625C7.7168 9.33789 7.65527 9.08887 7.53223 8.87793C7.40918 8.66699 7.17188 8.46777 6.82031 8.28027C6.47461 8.08691 5.96191 7.88184 5.28223 7.66504C4.50879 7.41895 3.79688 7.12598 3.14648 6.78613C2.49609 6.44043 1.97168 6.0127 1.57324 5.50293C1.18066 4.99316 0.984375 4.36328 0.984375 3.61328C0.984375 2.89258 1.18945 2.26562 1.59961 1.73242C2.00977 1.19336 2.57227 0.774414 3.28711 0.475586C4.00781 0.176758 4.83105 0.0273438 5.75684 0.0273438C6.70605 0.0273438 7.53516 0.194336 8.24414 0.52832C8.95312 0.862305 9.50098 1.32812 9.8877 1.92578C10.2803 2.51758 10.4766 3.20312 10.4766 3.98242H7.72559C7.72559 3.4668 7.56152 3.04492 7.2334 2.7168C6.90527 2.38281 6.39844 2.21582 5.71289 2.21582C5.05078 2.21582 4.55566 2.35352 4.22754 2.62891C3.90527 2.9043 3.74414 3.23828 3.74414 3.63086C3.74414 4.04102 3.95801 4.38086 4.38574 4.65039C4.81934 4.91992 5.43164 5.17773 6.22266 5.42383C7.61719 5.85156 8.6748 6.39062 9.39551 7.04102C10.1162 7.69141 10.4766 8.54688 10.4766 9.60742C10.4766 10.7383 10.0547 11.6172 9.21094 12.2441C8.36719 12.8652 7.23633 13.1758 5.81836 13.1758C5.17383 13.1758 4.54102 13.0938 3.91992 12.9297C3.30469 12.7598 2.74512 12.502 2.24121 12.1562C1.74316 11.8047 1.34473 11.3623 1.0459 10.8291C0.74707 10.2959 0.597656 9.66309 0.597656 8.93066H3.36621C3.36621 9.68652 3.58594 10.2197 4.02539 10.5303C4.4707 10.8408 5.06836 10.9961 5.81836 10.9961C6.46875 10.9961 6.94629 10.8643 7.25098 10.6006C7.56152 10.3369 7.7168 10.0117 7.7168 9.625ZM13.6477 13H10.7033L15.4582 0.203125H18.0158L22.7971 13H19.8527L19.0178 10.4512H14.4826L13.6477 13ZM15.2121 8.21875H18.2795L16.7414 3.56934L15.2121 8.21875ZM29.9408 0.203125H33.0082L28.5873 13H25.6869L21.2748 0.203125H24.3422L27.1283 9.68652L29.9408 0.203125ZM43.8258 8.71094C43.773 9.58398 43.5357 10.3574 43.1139 11.0312C42.692 11.6992 42.1031 12.2236 41.3473 12.6045C40.5973 12.9854 39.6949 13.1758 38.6402 13.1758C37.5328 13.1758 36.5807 12.9268 35.7838 12.4287C34.9928 11.9248 34.3834 11.2129 33.9557 10.293C33.5279 9.36719 33.3141 8.26855 33.3141 6.99707V6.21484C33.3141 4.94336 33.5338 3.84473 33.9732 2.91895C34.4186 1.99316 35.0396 1.27832 35.8365 0.774414C36.6393 0.270508 37.5797 0.0185547 38.6578 0.0185547C39.7359 0.0185547 40.6441 0.217773 41.3824 0.616211C42.1266 1.00879 42.7008 1.54785 43.1051 2.2334C43.5152 2.91895 43.7613 3.70117 43.8434 4.58008H41.0836C41.0309 3.83008 40.8258 3.26172 40.4684 2.875C40.1168 2.48242 39.5133 2.28613 38.6578 2.28613C37.8023 2.28613 37.1637 2.59961 36.7418 3.22656C36.3258 3.85352 36.1178 4.84375 36.1178 6.19727V6.99707C36.1178 8.32129 36.3082 9.30566 36.6891 9.9502C37.0758 10.5947 37.7262 10.917 38.6402 10.917C39.443 10.917 40.0348 10.7354 40.4156 10.3721C40.7965 10.0029 41.0162 9.44922 41.0748 8.71094H43.8258ZM47.8055 13H45.0369V0.203125H47.8055V5.34473H52.7801V0.203125H55.5398V13H52.7801V7.56836H47.8055V13ZM65.9355 13H57.2959V0.203125H65.9268V2.43555H60.0645V5.34473H65.0566V7.49805H60.0645V10.7764H65.9355V13ZM77.4563 13H74.6965L69.7307 4.76465V13H66.9709V0.203125H69.7307L74.7053 8.44727V0.203125H77.4563V13ZM81.9984 13H79.2299V0.203125H81.9984V5.91602L83.1146 4.33398L86.2523 0.203125H89.6449L85.1713 5.88086L89.7504 13H86.4721L83.3432 7.97266L81.9984 9.42285V13ZM100.278 6.86523C100.278 8.17188 100.046 9.29688 99.5836 10.2402C99.1207 11.1836 98.4762 11.9102 97.65 12.4199C96.8297 12.9238 95.8834 13.1758 94.8111 13.1758C93.733 13.1758 92.7779 12.9238 91.9459 12.4199C91.1197 11.9102 90.4723 11.1836 90.0035 10.2402C89.5348 9.29688 89.3004 8.17188 89.3004 6.86523V6.34668C89.3004 5.04004 89.5318 3.91504 89.9947 2.97168C90.4635 2.02246 91.1109 1.2959 91.9371 0.791992C92.7633 0.282227 93.7154 0.0273438 94.7936 0.0273438C95.8658 0.0273438 96.815 0.282227 97.6412 0.791992C98.4674 1.2959 99.1119 2.02246 99.5748 2.97168C100.044 3.91504 100.278 5.04004 100.278 6.34668V6.86523ZM97.4918 6.3291C97.4918 5.01074 97.2545 4.01172 96.7799 3.33203C96.3111 2.64648 95.649 2.30371 94.7936 2.30371C93.9264 2.30371 93.2613 2.64648 92.7984 3.33203C92.3355 4.01172 92.1041 5.01074 92.1041 6.3291V6.86523C92.1041 8.17188 92.3385 9.17383 92.8072 9.87109C93.276 10.5625 93.9439 10.9082 94.8111 10.9082C95.6666 10.9082 96.3258 10.5625 96.7887 9.87109C97.2574 9.17383 97.4918 8.17188 97.4918 6.86523V6.3291ZM113.317 0.203125H116.385L111.964 13H109.063L104.651 0.203125H107.719L110.505 9.68652L113.317 0.203125ZM115.161 11.6904C115.161 11.292 115.296 10.958 115.566 10.6885C115.841 10.4189 116.204 10.2842 116.655 10.2842C117.107 10.2842 117.467 10.4189 117.737 10.6885C118.006 10.958 118.141 11.292 118.141 11.6904C118.141 12.0889 118.006 12.4229 117.737 12.6924C117.467 12.9619 117.107 13.0967 116.655 13.0967C116.204 13.0967 115.841 12.9619 115.566 12.6924C115.296 12.4229 115.161 12.0889 115.161 11.6904ZM126.647 9.625C126.647 9.33789 126.585 9.08887 126.462 8.87793C126.339 8.66699 126.102 8.46777 125.75 8.28027C125.405 8.08691 124.892 7.88184 124.212 7.66504C123.439 7.41895 122.727 7.12598 122.077 6.78613C121.426 6.44043 120.902 6.0127 120.503 5.50293C120.111 4.99316 119.914 4.36328 119.914 3.61328C119.914 2.89258 120.12 2.26562 120.53 1.73242C120.94 1.19336 121.502 0.774414 122.217 0.475586C122.938 0.176758 123.761 0.0273438 124.687 0.0273438C125.636 0.0273438 126.465 0.194336 127.174 0.52832C127.883 0.862305 128.431 1.32812 128.818 1.92578C129.21 2.51758 129.407 3.20312 129.407 3.98242H126.656C126.656 3.4668 126.492 3.04492 126.163 2.7168C125.835 2.38281 125.329 2.21582 124.643 2.21582C123.981 2.21582 123.486 2.35352 123.158 2.62891C122.835 2.9043 122.674 3.23828 122.674 3.63086C122.674 4.04102 122.888 4.38086 123.316 4.65039C123.749 4.91992 124.362 5.17773 125.153 5.42383C126.547 5.85156 127.605 6.39062 128.326 7.04102C129.046 7.69141 129.407 8.54688 129.407 9.60742C129.407 10.7383 128.985 11.6172 128.141 12.2441C127.297 12.8652 126.166 13.1758 124.748 13.1758C124.104 13.1758 123.471 13.0938 122.85 12.9297C122.235 12.7598 121.675 12.502 121.171 12.1562C120.673 11.8047 120.275 11.3623 119.976 10.8291C119.677 10.2959 119.528 9.66309 119.528 8.93066H122.296C122.296 9.68652 122.516 10.2197 122.955 10.5303C123.401 10.8408 123.998 10.9961 124.748 10.9961C125.399 10.9961 125.876 10.8643 126.181 10.6006C126.492 10.3369 126.647 10.0117 126.647 9.625ZM130.679 11.6904C130.679 11.292 130.814 10.958 131.084 10.6885C131.359 10.4189 131.722 10.2842 132.173 10.2842C132.625 10.2842 132.985 10.4189 133.254 10.6885C133.524 10.958 133.659 11.292 133.659 11.6904C133.659 12.0889 133.524 12.4229 133.254 12.6924C132.985 12.9619 132.625 13.0967 132.173 13.0967C131.722 13.0967 131.359 12.9619 131.084 12.6924C130.814 12.4229 130.679 12.0889 130.679 11.6904Z"
                  fill="currentcolor"
                />
              </svg>
            </chakra.a>
          </NextLink>
        </Portal>
        {/* TODO: h, mr */}
        <Flex
          as="nav"
          alignItems="center"
          h={headerH}
          mr="calc(4.375rem + 1.5rem)" // 4.275rem - до кнопки Меню
          position="fixed"
          top="0"
          right="0"
        >
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
            {menuItems.map((x, i) => (
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
          <EmailMeLink
            display={{ base: "none", [mobileBreakpoint]: "flex" }}
            fontSize={{ base: "sm", lg: "lg" }}
          />
        </Flex>
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
        <Portal>
          <Button
            ref={btnMenuRef}
            onClick={
              mobileNavDisclosure.isOpen
                ? mobileNavDisclosure.onClose
                : mobileNavDisclosure.onOpen
            }
            variant="ghost"
            colorScheme="gray"
            position="fixed"
            top={headerTop}
            right={headerX}
            zIndex="skipLink"
            borderRadius="full"
            w="6"
            h="6"
            p="0"
            minW="auto"
            display="block"
            color={
              mobileNavDisclosure.isOpen ? colors.useTextPrimary() : undefined
            }
            sx={{
              willChange: "transform",
              ...(mobileNavDisclosure.isOpen
                ? {
                    "&>span>span:first-child": {
                      transitionDuration: "0s, 0s",
                      transform: "rotate(45deg) scaleX(1)",
                      top: "4px",
                      animation: `${menuOpenTop} 0.75s`,
                    },
                    "&>span>span:last-child": {
                      transitionDuration: "0s, 0s",
                      transform: "rotate(-45deg) scaleX(1)",
                      top: "-4px",
                      animation: `${menuOpenBottom} 0.75s`,
                    },
                  }
                : undefined),
              "&::before": {
                // TODO: for large screens
                // top: '-1.875rem',
                // left: '-1.875rem',
                // right: '-1.875rem',
                // bottom: '-1.875rem',
                top: "-4",
                bottom: "-4",
                right: "-4",
                left: "-4",
                position: "absolute",
                content: `''`,
                borderRadius: "full",
                transform: "scale(0.5)",
                transition:
                  "transform .45s cubic-bezier(.34,2,.64,1),background-color .6s cubic-bezier(.33,1,.68,1)",
              },
              "&:hover::before": {
                transform: "scale(1)",
                bg: useColorModeValue(`gray.100`, `whiteAlpha.200`),
              },
            }}
          >
            <chakra.span
              sx={{
                position: "relative",
                top: "-1px",
                display: "inline-block",
                width: "25px",
                lineHeight: "25px",
                verticalAlign: "middle",
                transition: "color .2s",
              }}
            >
              <MenuIconLine />
              <MenuIconLine />
            </chakra.span>
          </Button>
        </Portal>
        <Drawer
          isOpen={mobileNavDisclosure.isOpen}
          onClose={mobileNavDisclosure.onClose}
          finalFocusRef={btnMenuRef}
        >
          <DrawerOverlay bg="rgba(238,238,238,.7)" />
          <DrawerContent
            border={0}
            rounded={0}
            w={{ sm: "20rem !important", md: "30rem !important" }}
            maxW="none"
          >
            <DrawerBody>
              <Flex
                h="full"
                justifyContent="center"
                alignItems="flex-start"
                flexDirection="column"
              >
                <H5 mb="1.875rem">Menu</H5>
                <nav>
                  <chakra.ul m="0" p="0" listStyleType="none">
                    {menuItems.map((x) => (
                      <li key={x.title}>
                        <NextLink href={x.href} passHref>
                          <Link
                            fontSize={{ base: "2xl", md: "3.5rem" }}
                            letterSpacing="tighter"
                            color={colors.useTextPrimary()}
                            lineHeight="base"
                            display="inline-block"
                            _hover={{
                              "& > span > span": {
                                transform: "translateY(-105%)",
                                "&::before": {
                                  transform: "skewY(7deg)",
                                },
                                "&::after": {
                                  transform: "skewY(0deg)",
                                },
                              },
                            }}
                          >
                            <chakra.span
                              display="block"
                              overflow="hidden"
                              position="relative"
                              padding="0 .01em 0 0"
                            >
                              <chakra.span
                                data-text={x.title}
                                display="inline-block"
                                color="transparent"
                                transition="transform 1.2s cubic-bezier(.19,1,.22,1)"
                                sx={{
                                  "&::before, &::after": {
                                    content: "attr(data-text)",
                                    display: "block",
                                    position: "absolute",
                                    color: colors.useTextPrimary(),
                                  },
                                  "&::before": {
                                    top: 0,
                                    transform: "skewY(0)",
                                    transformOrigin: "right bottom",
                                    transition:
                                      "transform 2s cubic-bezier(.19,1,.22,1)",
                                  },
                                  "&::after": {
                                    top: "105%",
                                    transform: "skewY(7deg)",
                                    transformOrigin: "left top",
                                    transition:
                                      "transform 2s cubic-bezier(.19,1,.22,1)",
                                  },
                                }}
                              >
                                {x.title}
                              </chakra.span>
                            </chakra.span>
                          </Link>
                        </NextLink>
                      </li>
                    ))}
                  </chakra.ul>
                </nav>
                <EmailMeLink mt="6" />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </chakra.header>
      <Section>
        <Flex>
          <Box flex="0 0 auto">
            <Heading
              as="h1"
              fontSize={{ base: "1.0625rem", md: "1.125rem", xl: "xl" }}
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
              {services.map((x) => (
                <Box display={{ xl: "inline-block" }} key={x.id}>
                  {/*<NextLink href={`/services/${x.slug}`} passHref>*/}
                  <Text
                    display="inline-block"
                    py={{ base: "1.5", md: "3" }}
                    px={servicesSpaceX}
                    fontSize={{
                      base: "2.375rem",
                      md: "3.75rem",
                      xl: "6.66667vw",
                    }}
                    sx={{
                      WebkitTextStroke: serviceLinkWebkitTextStroke,
                    }}
                    transition={{ xl: "color .3s,-webkit-text-stroke .3s" }}
                    lineHeight={{ base: "shorter", md: "4.0625rem", xl: 1.1 }}
                    color={{
                      base: colors.useTextPrimary(),
                      xl: "transparent",
                    }}
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
                      {x.title}
                    </chakra.span>
                  </Text>
                  {/*</NextLink>*/}
                </Box>
              ))}
            </Box>
          </Box>
        </Flex>
        <Box mt="12" maxW={{ base: "40.3125rem", lg: "52.1875rem" }} w="full">
          <Box
            fontSize={{ base: "xl", xl: "1.875rem" }}
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
      <Section
        id="projects"
        pt={{ base: "8.125rem", md: "11.25rem", xl: "16.875rem" }}
        pb={{
          base: "3.75rem",
          md: "10.9375rem",
          lg: "6.25rem",
          xl: "9.375rem",
        }}
      >
        <SectionHeading>
          Featured
          <span>projects</span>
        </SectionHeading>
        <Box>
          <Project
            project={{
              id: 0,
              title: "CarpTime shop",
              description: "Online store for carp fishing and tackle",
              href: "https://carptimeshop.ru/",
              role: "Active participationg as a fullstack developer at Difocus",
            }}
          />
          <Project
            project={{
              id: 1,
              title: "Click and Grow",
              description:
                "Official distributor Click and Grow in Russian Federation",
              href: "https://clickandgrow.ru/",
              role: "Active participationg as a frontend developer at Difocus",
            }}
          />
          <Project
            project={{
              id: 2,
              title: "Thermal underwear Lopoma",
              description: "Official Lopoma online store",
              href: "https://lopoma-shop.ru/",
              role: "Active participationg as a frontend developer at Difocus",
            }}
          />
          {/* <Box mt="20">
            <NextLink passHref href="#">
              <BrandLink>View all projects</BrandLink>
            </NextLink>
          </Box> */}
        </Box>
      </Section>
      <Request />
      <Section
        as={"footer"}
        bg={colors.useAccents2()}
        pt={{
          base: "3.75rem",
          md: "10.9375rem",
          lg: "6.25rem",
          xl: "9.375rem",
        }}
        pb={{
          base: "3.75rem",
          md: "7rem",
          lg: "4.75rem",
          xl: "6rem",
        }}
      >
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
                color={colors.useAccents7()}
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
                />
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
                />
              </chakra.svg>
            </SocialLink>
          </Box>
        </Flex>
      </Section>
    </>
  );
}

const BrandLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, "children"> & {
    children: string;
  }
>(({ children: title, fontSize, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      h={"3.5625rem"}
      px="8"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent="center"
      sx={{
        borderRadius: "full",
        position: "relative",
        "&::after": {
          content: `""`,
          position: "absolute",
          top: "1px",
          left: "1px",
          right: "1px",
          bottom: "1px",
          border: `1px ${transparentize(
            colors.useBrand5(),
            0.1
          )(useTheme())} solid`,
          borderRadius: "full",
          transition: "border-color .2s",
        },
        _hover: {
          "& > span:first-child > span": {
            "@media (pointer: fine)": {
              color: colors.useTextSecondary(),
              transform: "translateY(-150%) skewY(-7deg)",
            },
            "&::after": {
              transform: "skewY(7deg)",
            },
          },
          "& > span:last-child > span": {
            "@media (pointer: fine)": {
              borderRadius: 0,
              transform: "translateY(0)",
              transitionDuration: "0s,0s",
              animation: `${rippleIn} .5s cubic-bezier(.4,0,0,1)`,
            },
          },
        },
      }}
      {...props}
    >
      <chakra.span
        position="relative"
        top="-1px"
        display="block"
        overflow="hidden"
        zIndex={2}
      >
        <chakra.span
          sx={{
            display: "block",
            fontWeight: "bold",
            textAlign: "center",
            transformOrigin: "left top",
            transition: "color .2s,transform .4s",
            "&::after": {
              content: "attr(data-text)",
              display: "block",
              position: "absolute",
              top: "150%",
              left: 0,
              transform: "skewY(5deg)",
              transformOrigin: "left top",
              transition: "transform .4s",
            },
          }}
          fontSize={fontSize ?? { base: "sm", md: "lg" }}
          data-text={title}
        >
          {title}
        </chakra.span>
      </chakra.span>
      <chakra.span
        sx={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          overflow: "hidden",
          transform: "translateZ(0)",
          borderRadius: "inherit",
        }}
      >
        <chakra.span
          display={"block"}
          w={"full"}
          h={"full"}
          transform={"translateY(100%)"}
          bg={colors.useBrand5()}
          borderRadius={"50%"}
          transition={
            "transform .5s cubic-bezier(.4,0,0,1), border-radius .5s cubic-bezier(.4,0,0,1)"
          }
        />
      </chakra.span>
    </Link>
  );
});

BrandLink.displayName = "BrandLink";

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
      sx={{
        "&> span": {
          color: "transparent",
          textShadow: "none",
          WebkitTextStroke: `.8px ${colors.useTextPrimary()}`,
          display: "block",
        },
      }}
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
