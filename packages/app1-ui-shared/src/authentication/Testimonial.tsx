import * as React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { QuoteIcon } from './QuoteIcon';
import { Avatar } from './Avatar';
import { useColorModeValue } from '@chakra-ui/system';

interface TestimonialEntity {
  text: string;
  userId: string;
}

interface TestimonialProps {
  testimonial: TestimonialEntity;
  className?: string;
}

export const Testimonial = ({ testimonial, className }: TestimonialProps) => {
  return (
    <Flex as={'blockquote'} className={className}>
      <Box
        flex={'0 0 auto'}
        mr={'4'}
        fontSize={'32px'}
        color={useColorModeValue('gray.300', 'whiteAlpha.400')}>
        <QuoteIcon />
      </Box>
      <Box flex={'1 1 auto'}>
        <Text fontSize="2xl" mt={'4'} mb={'12'}>
          {testimonial.text}
        </Text>
        <Avatar
          user={{
            id: '1',
            name: 'Kunle Panther',
            bio: 'VP, Product and Engineering @ Wakanda',
            imageUrl:
              'https://images.unsplash.com/photo-1547037579-f0fc020ac3be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhJTIwbWFuJTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            profileUrl: '#',
          }}
        />
      </Box>
    </Flex>
  );
};
