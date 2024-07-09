import { ChakraProps } from "@chakra-ui/react";
import { Image, IconButton, Flex, Text, Heading, Box } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  businessvisa?: string;
  etpurusduis?: string;
  image?: string;
}

export default function HomeTwo2({
  businessvisa = "Business Visa",
  etpurusduis = "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
  image = "images/img_group_1000009657.svg",
  ...props
}: Props) {
  return (
    <Flex
      {...props}
      borderColor="gray.300"
      borderWidth="1px"
      borderStyle="solid"
      w="100%"
      alignItems="center"
      p="20px"
      borderRadius="20px"
    >
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Box h="251px" bg="blue_gray.100" w="45%" borderRadius="20px" />
        <Flex w={{ base: "100%", sm: "46%" }} flexDirection="column" alignItems="start">
          <Heading as="h5">{businessvisa}</Heading>
          <Text color="gray.600" mt="10px" w="100%" lineHeight="30px">
            {etpurusduis}
          </Text>
          <Flex mt="26px" alignSelf="stretch" justifyContent="space-between" alignItems="start" gap="20px">
            <IconButton
              size="4xl"
              variant="outline"
              icon={<Image src="images/img_arrow_left_light_green_a700.svg" />}
              aria-label="3755:122-arrowleft_one"
              w="60px"
              borderRadius="20px"
            />
            <Image src={image} h="55px" w="55px" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
