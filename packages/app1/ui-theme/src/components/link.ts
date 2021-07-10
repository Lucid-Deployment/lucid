import { mode } from "@chakra-ui/theme-tools";
import { secondary } from "../colors";

type Dict = Record<string, any>;

const baseStyle = (props: Dict) => ({
  transitionProperty:
    "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _focus: {
    outline: 0,
    boxShadow: "none",
  },
  _focusVisible: {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: secondary(props),
    boxShadow: "none",
  },
});

function plain() {
  return {
    _hover: {
      textDecoration: "none",
    },
  };
}

function twoColors(props: Dict) {
  const { colorScheme: c } = props;

  let color: string, hoverColor: string;
  if (c === "blackBrand") {
    color = mode("black", "whiteAlpha.900")(props);
    hoverColor = mode("brand.500", "brand.200")(props);
  } else {
    throw new Error(`Color scheme ${c} isn't defined.`);
  }

  return {
    color,
    _hover: {
      textDecoration: "none",
      color: hoverColor,
    },
  };
}

const variants = {
  plain,
  twoColors,
};

const defaultProps = {
  variant: "plain",
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
