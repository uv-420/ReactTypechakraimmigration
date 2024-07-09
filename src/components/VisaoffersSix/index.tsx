import { ChakraProps } from "@chakra-ui/react";
import { Button, Image, Text, Heading, Flex, Box } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  countrytext?: string;
  descriptiontext?: string;
  applybutton?: string;
  thirtythousandbutton?: string;
}

export default function VisaoffersSix({
  countrytext = "Bangladesh",
  descriptiontext = "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
  applybutton = "Apply Now",
  thirtythousandbutton = "$300.00",
  ...props
}: Props) {
  return (
    <Flex {...props} w="100%" flexDirection="column">
      <Flex
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        alignSelf="stretch"
        bg="blue_gray.100"
        p={{ base: "20px", sm: "30px" }}
      >
        <Box h="80px" mb="152px" bg="blue_gray.100" w="14%" borderRadius="20px" />
      </Flex>
      <Flex
        borderBottomLeftRadius="20px"
        borderBottomRightRadius="20px"
        bg="white.A700"
        boxShadow="xs"
        alignSelf="stretch"
        justifyContent="space-between"
        alignItems="start"
        gap="20px"
        p={{ base: "20px", sm: "40px" }}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Flex w={{ base: "100%", sm: "53%" }} flexDirection="column" alignItems="start">
          <Heading as="h5">{countrytext}</Heading>
          <Text color="gray.600" mt="7px" w="100%" lineHeight="30px">
            {descriptiontext}
          </Text>
          <Button
            colorScheme="white_A700"
            rightIcon={<Image src="images/img_arrow_left.svg" w="14px" h="14px" />}
            mt="30px"
            fontWeight={600}
            gap="10px"
            borderColor="light_green.A700"
            borderWidth="1px"
            borderStyle="solid"
            minW="158px"
            borderRadius="30px"
            px={{ base: "20px", sm: "" }}
          >
            {applybutton}
          </Button>
        </Flex>
        <Button
          size="7xl"
          variant="outline"
          colorScheme="gray_300"
          color="teal.900"
          fontWeight={700}
          minW="139px"
          borderRadius="20px"
        >
          {thirtythousandbutton}
        </Button>
      </Flex>
    </Flex>
  );
}
