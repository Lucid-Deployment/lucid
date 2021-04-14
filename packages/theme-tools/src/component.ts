import { Dict } from '@chakra-ui/utils';
import { CSSObject } from '@emotion/react';

export interface GlobalStyleProps {
  colorScheme: string;
  colorMode: 'light' | 'dark';
  theme: Dict;
}

export type GlobalStyles = {
  global?: CSSObject | ((props: GlobalStyleProps) => CSSObject);
};

export type JSXElementStyles = {
  [K in keyof JSX.IntrinsicElements]?: CSSObject;
};

export function mode(light: any, dark: any) {
  return (props: Dict) => (props.colorMode === 'dark' ? dark : light);
}

export type Styles = GlobalStyles & JSXElementStyles;
