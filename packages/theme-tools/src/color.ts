import Color from 'tinycolor2';
import { memoizedGet as get, Dict } from '@chakra-ui/utils';

// Taken from awesome library https://github.com/chakra-ui/chakra-ui

/**
 * Get the color raw value from theme
 * @param theme - the theme object
 * @param color - the color path ("green.200")
 * @param fallback - the fallback color
 */
export const getColor = (theme: Dict, color: string, fallback?: string) => {
  const hex = get(theme, `colors.${color}`, color);
  const isValid = Color(hex).isValid();
  return isValid ? hex : fallback;
};

/**
 * Make a color transparent
 * @param color - the color in hex, rgb, or hsl
 * @param opacity - the amount white to add
 */
export const transparentize = (color: string, opacity: number) => (
  theme: Dict,
) => {
  const raw = getColor(theme, color);
  return Color(raw).setAlpha(opacity).toRgbString();
};
