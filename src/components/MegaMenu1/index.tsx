import { Box, Link, Text, Flex } from "@chakra-ui/react";
import React from "react";

export default function MegaMenu1() {
  return (
    <Box position="absolute" top="auto" minW="200px" pt="12px" zIndex={99}>
      <Box bg="white.A700" boxShadow="sm" w="100%" p="20px" borderRadius="8px">
        <Flex gap="30px" flexDirection="row">
          <Flex gap="16px" flexDirection="column" alignItems="start">
            <Text size="undefined" color="black.900_01" fontFamily="Open Sans" fontSize="18px" fontWeight={700}>
              Title 1
            </Text>
            <Flex gap="12px" flexDirection="column" alignItems="start">
              <Link href="#">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 1
                </Text>
              </Link>
              <Link href="#" alignSelf="center">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 2
                </Text>
              </Link>
              <Link href="#" alignSelf="center">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 3
                </Text>
              </Link>
              <Link href="#" alignSelf="center">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 4
                </Text>
              </Link>
              <Link href="#" alignSelf="center">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 5
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex gap="16px" flexDirection="column" alignItems="start">
            <Text size="undefined" color="black.900_01" fontFamily="Open Sans" fontSize="18px" fontWeight={700}>
              Title 2
            </Text>
            <Flex gap="12px" flexDirection="column" alignItems="start">
              <Link href="#">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 1
                </Text>
              </Link>
              <Text
                size="undefined"
                color="black.600"
                fontFamily="Open Sans"
                fontSize="16px"
                fontWeight={400}
                alignSelf="center"
              >
                Menu 2
              </Text>
              <Text
                size="undefined"
                color="black.600"
                fontFamily="Open Sans"
                fontSize="16px"
                fontWeight={400}
                alignSelf="center"
              >
                Menu 3
              </Text>
              <Text
                size="undefined"
                color="black.600"
                fontFamily="Open Sans"
                fontSize="16px"
                fontWeight={400}
                alignSelf="center"
              >
                Menu 4
              </Text>
              <Link href="#" alignSelf="center">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 5
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex gap="16px" flexDirection="column" alignItems="start">
            <Text size="undefined" color="black.900_01" fontFamily="Open Sans" fontSize="18px" fontWeight={700}>
              Title 3
            </Text>
            <Flex gap="12px" flexDirection="column" alignItems="start">
              <Link href="#">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 1
                </Text>
              </Link>
              <Link href="#" alignSelf="center">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 2
                </Text>
              </Link>
              <Link href="#" alignSelf="center">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 3
                </Text>
              </Link>
              <Link href="#" alignSelf="center">
                <Text size="undefined" color="black.600" fontFamily="Open Sans" fontSize="16px" fontWeight={400}>
                  Menu 4
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
