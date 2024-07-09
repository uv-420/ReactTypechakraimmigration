import { ChakraProps } from "@chakra-ui/react";
import { Text, Image, Flex, Heading, Box } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  country?: string;
  mistakestoavoidtext?: string;
  yourstartuptext?: string;
  knewaboutfontstext?: string;
}

export default function HomeOne({
  country = "Canada",
  mistakestoavoidtext = "Mistakes To Avoid",
  yourstartuptext = "Your Startup",
  knewaboutfontstext = "Knew About Fonts",
  ...props
}: Props) {
  return (
    <Flex
      {...props}
      gap="21px"
      borderColor="gray.300"
      borderWidth="1px"
      borderStyle="solid"
      boxShadow="xs"
      w="100%"
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      p={{ base: "20px", sm: "29px" }}
      borderRadius="20px"
    >
      <Box
        h="70px"
        mt="10px"
        borderColor="light_green.A700"
        borderWidth="1px"
        borderStyle="solid"
        bg="blue_gray.100"
        w="29%"
        borderRadius="35px"
      />
      <Heading as="h5">{country}</Heading>
      <Flex mb="10px" gap="10px" w="70%" flexDirection="column">
        <Flex gap="14px" alignItems="center">
          <Image src="images/img_arrow_left.svg" h="16px" />
          <Text color="gray.600">{mistakestoavoidtext}</Text>
        </Flex>
        <Flex gap="14px" alignItems="center">
          <Image src="images/img_arrow_left.svg" h="16px" />
          <Text color="gray.600" alignSelf="end">
            {yourstartuptext}
          </Text>
        </Flex>
        <Flex gap="14px" alignItems="center">
          <Image src="images/img_arrow_left.svg" h="16px" />
          <Text color="gray.600">{knewaboutfontstext}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
