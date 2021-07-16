import colors from "./colors";
import transition from "./transition";
import typography from "./typography";
import zIndices from "./z-index";

const foundations = {
  zIndices,
  colors,
  ...typography,
  transition,
};

export default foundations;
