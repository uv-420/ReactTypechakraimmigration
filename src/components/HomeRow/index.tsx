import { ChakraProps } from "@chakra-ui/react";
import { IconButton, Image, Text, Heading, Flex } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  username?: string;
  userrole?: string;
}

export default function HomeRow({ username = "Courtney Henry", userrole = "Medical Assistant", ...props }: Props) {
  return (
    <Flex
      {...props}
      borderColor="gray.300"
      borderWidth="1px"
      borderStyle="solid"
      bg="white.A700"
      boxShadow="xs"
      flex={1}
      alignItems="center"
      borderRadius="20px"
      p={{ base: "20px", sm: "" }}
    >
      <Flex w="100%" justifyContent="space-between" alignItems="center" gap="20px">
        <Flex gap="13px" flexDirection="column" alignItems="start">
          <Heading as="h5">{username}</Heading>
          <Text color="gray.600">{userrole}</Text>
        </Flex>
        <IconButton
          size="4xl"
          icon={<Image src="images/img_save.svg" />}
          aria-label="3756:278-save_one"
          w="60px"
          borderRadius="30px"
          px={{ base: "20px", sm: "" }}
        />
      </Flex>
    </Flex>
  );
}
