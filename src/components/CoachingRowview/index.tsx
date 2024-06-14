import { ChakraProps } from "@chakra-ui/react";
import { Image, Link, Heading, Flex, Text, Box } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  oetcoaching?: string;
  therearemany?: string;
  readmore?: string;
}

export default function CoachingRowview({
  oetcoaching = "OET Coaching",
  therearemany = "There are many variati of passages of engineer",
  readmore = "Read More",
  ...props
}: Props) {
  return (
    <Flex
      {...props}
      pr="20px"
      gap="20px"
      bg="white.A700"
      w="100%"
      alignItems="center"
      borderRadius="20px"
      flexDirection={{ base: "column", sm: "row" }}
    >
      <Box h="248px" borderBottomLeftRadius="20px" borderTopLeftRadius="20px" bg="blue_gray.100" w="100%" />
      <Flex gap="25px" w="100%" flexDirection="column" alignItems="start">
        <Heading size="md" as="h6">
          {oetcoaching}
        </Heading>
        <Text color="gray.600" w="100%" lineHeight="30px">
          {therearemany}
        </Text>
        <Flex gap="10px" alignItems="center">
          <Link href="#" alignSelf="end">
            <Heading size="xs" as="h6" color="light_green.A700">
              {readmore}
            </Heading>
          </Link>
          <Image src="images/img_arrow_left_light_green_a700.svg" h="24px" />
        </Flex>
      </Flex>
    </Flex>
  );
}
