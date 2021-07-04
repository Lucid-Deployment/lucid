import { useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

export const accents8 = (props: Dict) => mode("gray1.800", "gray1.100")(props);
export const accents6 = (props: Dict) => mode("gray1.600", "gray1.300")(props);
export const textSecondary = (props: Dict) => mode("white", "black")(props);

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

export const useAccents0 = () => useColorModeValue("gray1.50", "gray1.900");
export const useAccents1 = () => useColorModeValue("gray1.100", "gray1.800");
export const useAccents2 = () => useColorModeValue("gray1.200", "gray1.700");
export const useAccents3 = () => useColorModeValue("gray1.300", "gray1.600");
export const useAccents4 = () => useColorModeValue("gray1.400", "gray1.500");
export const useAccents5 = () => useColorModeValue("gray1.500", "gray1.400");
export const useAccents6 = () => useColorModeValue("gray1.600", "gray1.300");
export const useAccents7 = () => useColorModeValue("gray1.700", "gray1.200");
export const useAccents8 = () => useColorModeValue("gray1.800", "gray1.100");
export const useAccents9 = () => useColorModeValue("gray1.900", "gray1.50");
