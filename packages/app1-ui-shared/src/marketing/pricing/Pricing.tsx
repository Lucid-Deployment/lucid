import * as React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Switch,
  FormControl,
  FormLabel,
  HStack,
  chakra,
  SimpleGrid,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import { PricingCard } from './PricingCard';

export const Pricing = () => {
  return (
    <Box px={'8'}>
      <Heading as={'h1'} fontSize={'5xl'} lineHeight={'1'} textAlign={'center'}>
        Pricing Plans
      </Heading>
      <Text
        align={{ md: 'center' }}
        mt={'4'}
        maxW={'xl'}
        mx={'auto'}
        color={useColorModeValue('gray.600', 'whiteAlpha.700')}>
        Start building for free, then add a site plan to go live. Account plans
        unlock additional features.
      </Text>
      <Flex align={'center'} direction={'column'} mt={'8'}>
        <FormControl w={'auto'}>
          <FormLabel htmlFor={'subscription-duration'} srOnly={true}>
            Switch price duration
          </FormLabel>
          <HStack alignItems={'center'} mt={'2'} spacing={'3'}>
            <Text fontWeight={'semibold'}>Monthly</Text>
            <Switch size={'md'} id={'subscription-duration'} />
            <Text fontWeight={'semibold'}>Yearly</Text>
          </HStack>
        </FormControl>
        <Flex mt={'2'} color={useColorModeValue('blue.500', 'blue.200')}>
          <Text fontWeight={'bold'} mr={'2'}>
            Save up to 30%
          </Text>
          <chakra.svg
            viewBox="0 0 18 20"
            focusable={'false'}
            w={'1em'}
            h={'1em'}
            display={'inline-block'}
            lineHeight={'1'}
            flexShrink={0}
            verticalAlign={'middle'}
            color={'currentColor'}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6917 0.931609C12.5121 0.759534 12.2684 0.653809 12 0.653809C11.7316 0.653809 11.4879 0.759534 11.3083 0.931609C11.3009 0.938735 11.2935 0.945976 11.2863 0.953328C11.2803 0.95951 11.2743 0.965771 11.2684 0.972108L6.27026 6.30662C5.89265 6.70964 5.91325 7.34247 6.31628 7.72008C6.7193 8.09769 7.35213 8.07709 7.72974 7.67406L11 4.1837V14.4615C11 15.3488 10.6691 16.1877 10.0987 16.7966C9.5303 17.4032 8.77385 17.7307 8 17.7307H1C0.447715 17.7307 0 18.1784 0 18.7307C0 19.283 0.447715 19.7307 1 19.7307H8C9.34788 19.7307 10.6263 19.1586 11.5582 18.164C12.488 17.1716 13 15.8387 13 14.4615V4.1837L16.2703 7.67406C16.6479 8.07709 17.2807 8.09769 17.6837 7.72008C18.0867 7.34247 18.1074 6.70964 17.7297 6.30662L12.7316 0.972108C12.7257 0.965771 12.7197 0.95951 12.7137 0.953328C12.7065 0.945976 12.6991 0.938735 12.6917 0.931609Z"
              fill="currentColor"
            />
          </chakra.svg>
        </Flex>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: '8', lg: '12' }}
        maxW="7xl"
        mx="auto"
        justifyItems="center"
        alignItems="center"
        mt={'24'}>
        <PricingCard
          data={{
            price: '$29',
            name: 'Application UI',
            features: [
              'All application UI components',
              'Lifetime access',
              'Use on unlimited projects',
              'Free Updates',
            ],
            description:
              'Job board for hiring designers and creative professionals.',
          }}
        />
        <PricingCard
          isPopular={true}
          data={{
            price: '$29',
            name: 'Application UI',
            features: [
              'All application UI components',
              'Lifetime access',
              'Use on unlimited projects',
              'Free Updates',
              'Free Updates',
              'Free Updates',
              'Free Updates',
              'Free Updates',
            ],
            description:
              'Job board for hiring designers and creative professionals.',
          }}
        />
        <PricingCard
          data={{
            price: '$29',
            name: 'Application UI',
            features: [
              'All application UI components',
              'Lifetime access',
              'Use on unlimited projects',
              'Free Updates',
            ],
            description:
              'Job board for hiring designers and creative professionals.',
          }}
        />
      </SimpleGrid>
    </Box>
  );
};
