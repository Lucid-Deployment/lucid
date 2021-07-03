import * as React from "react";
import { Box, chakra, Flex, Text, useToken } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";

interface UserData {
  profileUrl: string;
  imageUrl: string;
  name: string;
  bio: string;
}

interface AvatarProps {
  className?: string;
  user: UserData;
}

export const Avatar = ({ className, user }: AvatarProps) => {
  const [gray900, whiteAlpha900] = useToken("colors", [
    "gray.900",
    "whiteAlpha.900",
  ]);
  const [gray600, whiteAlpha700] = useToken("colors", [
    "gray.700",
    "whiteAlpha.800",
  ]);

  return (
    <chakra.a
      href="#"
      className={className}
      sx={{
        "&:hover .avatar__name": {
          color: useColorModeValue(gray900, whiteAlpha900),
        },
        "&:hover .avatar__cta": {
          color: useColorModeValue(gray600, whiteAlpha700),
        },
      }}
      display="block"
    >
      <Flex alignItems="center">
        <Box>
          <chakra.img
            display="inline-block"
            w="12"
            h="12"
            objectFit="cover"
            rounded="full"
            src={user.imageUrl}
            alt={user.name}
          />
        </Box>
        <Box ml="4">
          <Text
            as="cite"
            fontWeight="medium"
            fontStyle="normal"
            color="gray.700"
            className="avatar__name"
          >
            {user.name}
          </Text>
          <Text fontWeight="medium" color="gray.500" className="avatar__cta">
            {user.bio}
          </Text>
        </Box>
      </Flex>
    </chakra.a>
  );
};
