import { ChakraProps } from "@chakra-ui/react";
import { Heading, Text, Image, Flex, Box } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  datetext?: string;
  findyourtext?: string;
}

export default function BlogdetailsStackview({
  datetext = "October 19, 2022",
  findyourtext = "Find Your Adventure Live  Your Passion",
  ...props
}: Props) {
  return (
    <Box {...props} h="85px" flex={{ md: 1, base: "unset" }} position="relative" w={{ md: "auto", base: "100%" }}>
      <Flex
        gap="15px"
        w="71%"
        alignItems="start"
        position="absolute"
        left="0.00px"
        bottom="0px"
        top="0px"
        h="max-content"
        my="auto"
      >
        <Box h="85px" bg="blue_gray.100" w="34%" borderRadius="20px" />
        <Flex gap="10px" flex={1} alignItems="center">
          <Image src="images/img_checkmark.svg" h="16px" />
          <Text color="gray.600" alignSelf="end">
            {datetext}
          </Text>
        </Flex>
      </Flex>
      <Heading size="md" as="h6" w="73%" lineHeight="28px" position="absolute" bottom="1.00px" right="0.00px" m="auto">
        {findyourtext}
      </Heading>
    </Box>
  );
}
