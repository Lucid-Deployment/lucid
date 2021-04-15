import * as React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Card } from './Card';
import { DividerWithText } from './DividerWithText';
import { Link } from './Link';
import { LoginForm } from './LoginForm';
import { Logo } from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Testimonial } from './Testimonial';
import { chakra } from '@chakra-ui/system';

const LoginPage = () => {
  const ChakraTestimonial = chakra(Testimonial);

  return (
    <Flex
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="100vh"
      py="12"
      px={{ base: '4', lg: '8' }}
      alignItems={'center'}>
      <Flex>
        <Box flex="0 0 auto">
          <Card maxW="lg">
            <Logo mb="10" />
            <Box textAlign={'left'} mb={'8'}>
              <Heading
                as="h2"
                fontSize={'3xl'}
                fontWeight={'extrabold'}
                fontFamily={'heading'}>
                Welcome to Auth1
              </Heading>
              <Text
                color={useColorModeValue('gray.600', 'whiteAlpha.700')}
                fontSize="lg"
                fontWeight={'medium'}>
                Enter your info to get started
              </Text>
            </Box>
            <Button
              colorScheme="gray"
              variant={'outline'}
              size="md"
              leftIcon={<FontAwesomeIcon icon={faFacebook} />}
              sx={{
                w: 'full',
              }}
              mb={'2'}>
              Sign up with Facebook
            </Button>
            <Button
              colorScheme="gray"
              variant={'outline'}
              size="md"
              leftIcon={<FontAwesomeIcon icon={faGoogle} />}
              sx={{
                w: 'full',
              }}
              mb={'4'}>
              Sign up with Google
            </Button>
            <DividerWithText mb={'4'}>OR</DividerWithText>
            <LoginForm onLogin={async () => {}} />
          </Card>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            <Text as="span">Already have an account?</Text>
            <Link>Log in to Auth1</Link>
          </Text>
        </Box>
        <Box flexGrow={1} ml="14">
          <Flex direction={'column'} py={'24'}>
            <ChakraTestimonial
              flex={'1 1 0%'}
              testimonial={{
                text:
                  'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                userId: '1',
              }}
            />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export { LoginPage };
