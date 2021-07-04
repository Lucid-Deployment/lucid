import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

const baseStyle = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
};

function underlined(props: Dict) {
  return {
    _hover: {
      textDecoration: "underline",
    },
  };
}

function twoColors(props: Dict) {
  const { colorScheme: c } = props;

  if (c === "blackBrand") {
    return {
      color: mode("black", "whiteAlpha.900")(props),
      _hover: {
        color: mode("brand.500", "brand.300")(props),
      },
    };
  }

  throw new Error(`Color scheme ${c} isn't defined.`);
}

const variants = {
  underlined,
  twoColors,
};

const defaultProps = {
  variant: "underlined",
};

export default {
  baseStyle,
  variants,
};
