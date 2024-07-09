import { ChakraProps } from "@chakra-ui/react";
import { Text, Heading, Flex, Box, Image } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  description?: string;
  name?: string;
  jobtitle?: string;
}

export default function SuccessstoryCard({
  description = "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
  name = "Albert Flores",
  jobtitle = "Medical Assistant",
  ...props
}: Props) {
  return (
    <Flex
      {...props}
      bg="light_green.50_01"
      w="100%"
      cursor="pointer"
      alignItems="start"
      p={{ base: "20px", sm: "40px" }}
      borderRadius="20px"
      _hover={{ boxShadow: "xs" }}
    >
      <Flex mb="40px" w="100%" flexDirection="column">
        <Image src="images/img_frame_light_green_a700.svg" h="55px" w="13%" />
        <Text size="lg" color="gray.600" mt="20px" lineHeight="50px">
          {description}
        </Text>
        <Flex mt="40px" gap="20px" w={{ md: "41%", base: "100%" }} alignItems="center">
          <Box h="70px" bg="blue_gray.100" w="34%" borderRadius="35px" />
          <Flex gap="10px" flex={1} flexDirection="column">
            <Heading as="h5">{name}</Heading>
            <Text color="teal.900_b2">{jobtitle}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
