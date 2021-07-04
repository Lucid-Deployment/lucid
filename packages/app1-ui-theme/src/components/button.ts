import { getColor, mode, transparentize } from "@chakra-ui/theme-tools";
import { accents6, accents8, textSecondary } from "../colors";
import { ringShadow } from "../foundations/shadows";

type Dict = Record<string, any>;

const baseStyle = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "medium",
  "--chakra-ring-offset-width": "0px",
  "--chakra-ring-offset-color": "white",
  _focus: {
    boxShadow: ringShadow,
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

  const base = {
    "--chakra-ring-offset": "2px",
  };

  if (c === "gray") {
    return {
      ...base,
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      "--chakra-ring-color": getColor(
        theme,
        mode(`gray.100`, `whiteAlpha.200`)(props)
      ),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    };
  }

  if (c === "white") {
    return {
      ...base,
      color: mode(`gray.700`, `whiteAlpha.800`)(props),
      _hover: {
        bg: mode(`gray.50`, `whiteAlpha.100`)(props),
      },
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  const fg = mode(`${c}.600`, `${c}.200`)(props);

  return {
    ...base,
    color: fg,
    bg: "transparent",
    "--chakra-ring-color": getColor(theme, fg),
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

  if (c === "white") {
    borderColor = mode(`gray.300`, `whiteAlpha.400`)(props);
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

  if (c === "blue") {
    const bg = mode(`blue.500`, "blue.500")(props);
    const hoverActiveBg = mode(`purple1.500`, "purple1.500")(props);

    return {
      "--chakra-ring-color": getColor(props.theme, "black"),
      bg,
      _hover: {
        bg: hoverActiveBg,
        _disabled: {
          bg,
        },
      },
      _active: {
        bg: hoverActiveBg,
      },
    };
  }

  if (c === "darkGray") {
    const bg = accents8(props);
    const hoverActiveBg = accents6(props);

    return {
      "--chakra-ring-color": getColor(props.theme, bg),
      color: textSecondary(props),
      bg,
      _hover: {
        bg: hoverActiveBg,
        _disabled: {
          bg,
        },
      },
      _active: {
        bg: hoverActiveBg,
      },
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
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none",
      },
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props),
    },
  };
}

const variantUnstyled = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0,
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
