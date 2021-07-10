import { useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

export const accents8 = (props: Dict) =>
  mode("gray.800", "whiteAlpha.900")(props);
export const accents7 = (props: Dict) =>
  mode("gray.700", "whiteAlpha.800")(props);
export const accents6 = (props: Dict) =>
  mode("gray.600", "whiteAlpha.700")(props);
export const accents5 = (props: Dict) =>
  mode("gray.500", "whiteAlpha.600")(props);
export const accents4 = (props: Dict) =>
  mode("gray.400", "whiteAlpha.500")(props);
export const accents3 = (props: Dict) =>
  mode("gray.300", "whiteAlpha.400")(props);
export const accents2 = (props: Dict) =>
  mode("gray.200", "whiteAlpha.300")(props);
export const accents1 = (props: Dict) =>
  mode("gray.100", "whiteAlpha.200")(props);
export const accents0 = (props: Dict) =>
  mode("gray.50", "whiteAlpha.100")(props);
export const secondary = (props: Dict) => mode("black", "white")(props);
export const primary = (props: Dict) => mode("white", "black")(props);
export const primary2 = (props: Dict) =>
  mode("#f1f3f5", "plainGray.900")(props);
export const secondary2 = (props: Dict) =>
  mode("plainGray.900", "#f1f3f5")(props);

export const textSecondary = (props: Dict) => mode("white", "black")(props);
export const textPrimary = (props: Dict) => mode("black", "white")(props);

export const selection = (props: Dict) => mode("cyan.400", "purple.400")(props);

export const usePrimary = () => useColorModeValue("white", "black");

export const usePrimary2 = () => useColorModeValue("#f1f3f5", "plainGray.900");

export const useSecondary = () => useColorModeValue("black", "white");

export const useSecondary2 = () =>
  useColorModeValue("plainGray.900", "#f1f3f5");

export const useSelection = () => useColorModeValue("cyan.400", "purple.400");

export const useHover = () => useColorModeValue("hover.1", "hover.3");
export const useHover1 = () => useColorModeValue("hover.2", "hover.2");
export const useHover2 = () => useColorModeValue("hover.3", "hover.1");

export const useTextBase = () => useColorModeValue("black", "white");
export const useTextPrimary = () => useColorModeValue("black", "white");
export const useTextSecondary = () => useColorModeValue("white", "black");

export const useAccents0 = () => useColorModeValue("gray.50", "whiteAlpha.100");
export const useAccents1 = () =>
  useColorModeValue("gray.100", "whiteAlpha.200");
export const useAccents2 = () =>
  useColorModeValue("gray.200", "whiteAlpha.300");
export const useAccents3 = () =>
  useColorModeValue("gray.300", "whiteAlpha.400");
export const useAccents4 = () =>
  useColorModeValue("gray.400", "whiteAlpha.500");
export const useAccents5 = () =>
  useColorModeValue("gray.500", "whiteAlpha.600");
export const useAccents6 = () =>
  useColorModeValue("gray.600", "whiteAlpha.700");
export const useAccents7 = () =>
  useColorModeValue("gray.700", "whiteAlpha.800");
export const useAccents8 = () =>
  useColorModeValue("gray.800", "whiteAlpha.900");

export const useBrand5 = () => useColorModeValue("brand.500", "brand.200");
export const useBrand6 = () => useColorModeValue("brand.600", "brand.300");
