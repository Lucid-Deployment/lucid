import foundations from './foundations';
import styles from './styles';

// Highly inspired by awesome library https://github.com/chakra-ui/chakra-ui

export const theme = {
  ...foundations,
  styles,
};

export type Theme = typeof theme;

export default theme;
