import { ChakraProps } from "@chakra-ui/react";
import { Text, Heading, Image, Flex } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  image?: string;
  text?: string;
  text1?: string;
}

export default function HomeTwo({
  image = "images/img_050_worldwide.svg",
  text = "Food and Wine Tours",
  text1 = "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
  ...props
}: Props) {
  return (
    <Flex
      {...props}
      borderColor="black.900_19"
      borderWidth="1px"
      borderStyle="solid"
      w="100%"
      flexDirection="column"
      alignItems="start"
      p={{ base: "20px", sm: "40px" }}
      borderRadius="20px"
    >
      <Flex
        mt="10px"
        bg="light_green.A700"
        flexDirection="column"
        alignItems="center"
        p={{ base: "20px", sm: "27px" }}
        borderRadius="50px"
      >
        <Image src={image} h="45px" w="45px" />
      </Flex>
      <Heading as="h5" mt="41px">
        {text}
      </Heading>
      <Text color="gray.600" mt="20px" mb="29px" w="100%" lineHeight="30px">
        {text1}
      </Text>
    </Flex>
  );
}
