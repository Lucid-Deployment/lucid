import breakpoints from "./breakpoints";
import colors from "./colors";
import shadows from "./shadows";
import sizes from "./sizes";
import { spacing } from "./spacing";
import transition from "./transition";
import typography from "./typography";
import zIndices from "./z-index";

const foundations = {
  breakpoints,
  zIndices,
  colors,
  ...typography,
  sizes,
  shadows,
  space: spacing,
  transition,
};

export default foundations;
