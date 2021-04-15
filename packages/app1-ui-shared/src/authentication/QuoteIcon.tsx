import * as React from 'react';
import { HTMLChakraProps } from '@chakra-ui/system';
import { chakra } from '@chakra-ui/react';

export const QuoteIcon = (props: HTMLChakraProps<'svg'>) => {
  return (
    <chakra.svg
      w={'1em'}
      h={'1em'}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z" />
    </chakra.svg>
  );
};
