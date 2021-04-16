import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/system';
import * as React from 'react';

export const Link = (props: HTMLChakraProps<'a'>) => (
  <chakra.a
    marginStart="1"
    href="#"
    as={'button'}
    color={useColorModeValue('blue.500', 'blue.200')}
    _hover={{ color: useColorModeValue('blue.600', 'blue.300') }}
    fontWeight={'semibold'}
    display={'inline-flex'}
    {...props}
  />
);
