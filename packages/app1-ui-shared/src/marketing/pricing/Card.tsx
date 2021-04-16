import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { CardBadge } from './CardBadge';
import { usePopularColor } from './PricingCard';

export interface CardProps extends BoxProps {
  isPopular?: boolean;
}

export const Card = (props: CardProps) => {
  const { children, isPopular, ...rest } = props;
  const accentColor = usePopularColor();

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      position="relative"
      px="6"
      pb="6"
      pt="16"
      shadow="lg"
      maxW="md"
      width="100%"
      borderWidth={isPopular ? '2px' : 0}
      borderColor={isPopular ? accentColor : '#0000'}
      {...rest}>
      {isPopular && <CardBadge bg={accentColor}>Most popular</CardBadge>}
      {children}
    </Box>
  );
};
