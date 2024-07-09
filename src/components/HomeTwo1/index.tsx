import { ChakraProps } from "@chakra-ui/react";
import { Text, Image, Flex, Heading, IconButton } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  dynamicproperty2?: string;
  dynamicproperty4?: string;
  dynamicproperty6?: string;
}

export default function HomeTwo1({
  dynamicproperty2 = "Passport Plus",
  dynamicproperty4 = "Beyond Border Immigration",
  dynamicproperty6 = "Worldwide Visa Assistance",
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
      p={{ base: "20px", sm: "26px" }}
      borderRadius="20px"
    >
      <Flex gap="20px" w="100%" flexDirection="column">
        <Flex gap="20px" alignItems="center">
          <IconButton
            size="4xl"
            icon={<Image src="images/img_006_browser.svg" />}
            aria-label="3754:19-006browser_one"
            w="60px"
            borderRadius="30px"
          />
          <Heading as="h5" mb="13px" alignSelf="end">
            {dynamicproperty2}
          </Heading>
        </Flex>
        <Flex gap="10px" flexDirection="column">
          <Flex gap="14px" alignItems="center">
            <Image src="images/img_checkmark.svg" h="16px" />
            <Text color="gray.600" alignSelf="end">
              {dynamicproperty4}
            </Text>
          </Flex>
          <Flex gap="14px" alignItems="center">
            <Image src="images/img_checkmark.svg" h="16px" />
            <Text color="gray.600">{dynamicproperty6}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
