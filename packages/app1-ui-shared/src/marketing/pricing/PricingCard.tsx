import {
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import * as React from "react"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardProps, usePopularColor } from "./Card"
import { Link } from "./Link"
import { ActionButton } from "./ActionButton"

export interface PricingCardData {
  features: string[]
  name: string
  price: string
  description: string
}

interface PricingCardProps extends CardProps {
  data: PricingCardData
}

const CheckIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faCheck} {...props} />
)

export const PricingCard = (props: PricingCardProps) => {
  const { data, ...rest } = props
  const isPopular = props.isPopular
  const { features, price, name, description } = data

  const accentColor = usePopularColor()

  return (
    <Card rounded={{ sm: "xl" }} {...rest}>
      <Flex direction="column" justifyContent="center">
        <Text fontSize="2xl" textAlign="center" fontWeight="bold">
          {name}
        </Text>
        <Text
          mx="auto"
          maxW="64"
          textAlign="center"
          mt="2"
          color={useColorModeValue("gray.600", "whiteAlpha.700")}
        >
          {description}
        </Text>
        <Flex
          align="center"
          justify="center"
          fontWeight="extrabold"
          my="5"
          w="full"
        >
          <Text fontSize="3xl" mr="2">
            $
          </Text>
          <Text fontSize="72px" fontWeight="inherit" lineHeight="1">
            {price}
          </Text>
        </Flex>
        <Link mx="auto" href="/">
          Switch to yearly billing
        </Link>
      </Flex>
      <List spacing="4" my="8" maxW="28ch" mx="auto">
        {features.map((feature, index) => (
          <ListItem fontWeight="medium" key={index}>
            <ListIcon
              fontSize="xl"
              as={CheckIcon}
              marginEnd={2}
              color={accentColor}
            />
            {feature}
          </ListItem>
        ))}
      </List>
      <ActionButton variant="solid" colorScheme={isPopular ? "blue" : "gray"}>
        Buy now
      </ActionButton>
    </Card>
  )
}
