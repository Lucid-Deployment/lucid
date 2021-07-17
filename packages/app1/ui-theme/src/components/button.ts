import { getColor, mode, transparentize } from "@chakra-ui/theme-tools";
import { secondary } from "../colors";

type Dict = Record<string, any>;

const ringShadow = (
  offset: string,
  offsetColor: string | undefined,
  width: string,
  color: string
) =>
  `0 0 0 ${offset} ${
    offsetColor ?? "transparent"
  }, 0 0 0 calc(${width} + ${offset}) ${color}, 0 0 transparent`;

const baseStyle = {
  lineHeight: "1.2",
  borderRadius: "0",
  fontWeight: "medium",
  _focus: {
    boxShadow: "none",
    outline: "none",
  },
  _focusVisible: {
    outline: "none",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
};

function variantGhost(props: Dict) {
  const { colorScheme: c, theme } = props;

  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
      _focusVisible: {
        boxShadow: ringShadow(
          "2px",
          undefined,
          "2px",
          getColor(theme, mode(`gray.100`, `whiteAlpha.200`)(props))
        ),
      },
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  const fg = mode(`${c}.600`, `${c}.200`)(props);

  return {
    color: fg,
    bg: "transparent",
    _focusVisible: {
      boxShadow: ringShadow("2px", undefined, "2px", getColor(theme, fg)),
    },
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  };
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;

  let borderColor = null;
  if (c === "gray") {
    borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  }

  return {
    border: "2px solid",
    ...variantGhost(props),
    borderColor: borderColor ?? "currentColor",
  };
}

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
};

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600",
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600",
  },
};

function variantSolid(props: Dict) {
  const { colorScheme: c } = props;

  if (c === "gray") {
    const bg = mode(`gray.100`, `whiteAlpha.200`)(props);

    return {
      bg,
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg,
        },
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
    };
  }

  const {
    bg = `${c}.500`,
    color = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`,
  } = accessibleColorMap[c] || {};

  const background = mode(bg, `${c}.200`)(props);

  return {
    _focusVisible: {
      boxShadow: ringShadow(
        "2px",
        undefined,
        "2px",
        transparentize(background, 0.5)(props.theme)
      ),
    },
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  };
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      color: mode(`${c}.600`, `${c}.300`)(props),
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none",
      },
    },
    _active: {
      color: mode(`${c}.700`, `${c}.400`)(props),
    },
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
  };
}

const variantUnstyled = {
  bg: "none",
  color: "inherit",
  lineHeight: "inherit",
};

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled,
};

const sizes = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 6,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4,
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3,
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2,
  },
  roundedXs: {
    p: 1,
    h: 6,
    w: 6,
  },
  roundedSm: {
    p: 1.5,
    h: 6.5,
    w: 6.5,
  },
  roundedMd: {
    p: 2,
    h: 7,
    w: 7,
  },
  roundedLg: {
    p: 2,
    h: 8,
    w: 8,
  },
  roundedXl: {
    p: 3,
    h: 8,
    w: 8,
  },
};

const defaultProps = {
  variant: "solid",
  size: "md",
  colorScheme: "gray",
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
