import { ChakraProps } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  powerdesign?: string;
  sixty?: string;
}

export default function TeamdetailsRow({ powerdesign = "Power Design", sixty = "60%", ...props }: Props) {
  return (
    <Flex {...props} flex={1} alignItems="center">
      <Flex gap="6px" w="100%" flexDirection="column">
        <Flex justifyContent="space-between" flexWrap="wrap" gap="20px">
          <Text color="gray.600">{powerdesign}</Text>
          <Text color="gray.600">{sixty}</Text>
        </Flex>
        <Flex bg="gray.300" borderRadius="4px">
          <Box h="8px" bg="light_green.A700" w="68%" borderRadius="4px" />
        </Flex>
      </Flex>
    </Flex>
  );
}
