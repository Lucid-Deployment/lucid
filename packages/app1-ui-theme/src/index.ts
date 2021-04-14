import foundations from './foundations';
import styles from './styles';
import * as palette from './palette';

// Highly inspired by awesome library https://github.com/chakra-ui/chakra-ui

export const theme = {
  ...foundations,
  styles,
  palette,
};

export type Theme = typeof theme;

export default theme;
