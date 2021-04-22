import * as React from "react"
import { Box, Flex, FlexProps, Text } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/system"
import { QuoteIcon } from "./QuoteIcon"
import { Avatar } from "./Avatar"

interface TestimonialData {
  text: string
}

interface TestimonialProps extends FlexProps {
  data: TestimonialData
}

export const Testimonial = ({ data, ...rest }: TestimonialProps) => {
  return (
    <Flex as="blockquote" {...rest}>
      <Box
        flex="0 0 auto"
        mr="4"
        fontSize="32px"
        color={useColorModeValue("gray.300", "whiteAlpha.400")}
      >
        <QuoteIcon />
      </Box>
      <Box flex="1 1 auto">
        <Text fontSize="2xl" mt="4" mb="12">
          {data.text}
        </Text>
        <Avatar
          user={{
            name: "Kunle Panther",
            bio: "VP, Product and Engineering @ Wakanda",
            imageUrl:
              "https://images.unsplash.com/photo-1547037579-f0fc020ac3be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhJTIwbWFuJTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
            profileUrl: "#",
          }}
        />
      </Box>
    </Flex>
  )
}
