import { ChakraProps } from "@chakra-ui/react";
import {
  Image,
  InputRightElement,
  InputGroup,
  Center,
  Input,
  Text,
  Heading,
  Flex,
  Link,
  UnorderedList,
  ListItem,
  Container,
  Box,
} from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <Box {...props} as="footer" pt={{ base: "20px", sm: "30px" }} bg="teal.900">
      <Flex gap="30px" w="100%" flexDirection="column" alignItems="center">
        <Container px="0px" p={{ md: "", base: "20px" }}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex
              gap="30px"
              w={{ md: "35%", base: "100%" }}
              justifyContent="center"
              alignItems="center"
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Flex bg="light_green.A700" flexDirection="column" alignItems="center" p="20px" borderRadius="40px">
                <Image src="images/img_010_currency.svg" h="40px" w="40px" />
              </Flex>
              <Heading
                size="xl"
                as="h3"
                color="white.A700"
                textTransform="capitalize"
                w={{ base: "100%", sm: "80%" }}
                lineHeight="36px"
              >
                Need any support for tour and visa?
              </Heading>
            </Flex>
            <Box h={{ md: "100%", base: "1px" }} bg="white.A700_4c" w={{ md: "1px", base: "100%" }} />
            <Flex
              gap="27px"
              w={{ md: "39%", base: "100%" }}
              justifyContent="center"
              alignItems="center"
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Flex bg="light_green.A700" flexDirection="column" alignItems="center" p="20px" borderRadius="40px">
                <Image src="images/img_globe.svg" h="40px" w="40px" />
              </Flex>
              <Heading
                size="xl"
                as="h3"
                color="white.A700"
                textTransform="capitalize"
                w={{ base: "100%", sm: "83%" }}
                lineHeight="36px"
              >
                are you ready for get started travelling?
              </Heading>
            </Flex>
          </Flex>
        </Container>
        <Flex gap="12px" alignSelf="stretch" flexDirection="column">
          <Box h="1px" bg="gray.300_66" />
          <Box h={{ md: "479px", base: "auto" }} position="relative">
            <Image src="images/img_.svg" h="479px" w="100%" maxW="1712px" p={{ md: "", base: "20px" }} />
            <Container
              display="flex"
              position="absolute"
              bottom="7%"
              right="0px"
              left="0px"
              px="0px"
              my="auto"
              p={{ md: "", base: "20px" }}
            >
              <Flex
                pr="5px"
                w="100%"
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Text color="white.A700_cc">© Yoursitename 2024 | All Rights Reserved</Text>
                <UnorderedList
                  styleType="none"
                  w={{ md: "31%", base: "100%" }}
                  display="flex"
                  justifyContent="space-between"
                  flexWrap="wrap"
                  gap="20px"
                >
                  <ListItem>
                    <Link href="#">
                      <Text color="white.A700_cc">Trams & Condition</Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <Text color="white.A700_cc">Privacy Policy</Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <Text color="white.A700_cc">Contact Us</Text>
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Container>
            <Container
              display="flex"
              position="absolute"
              top="14%"
              right="0px"
              left="0px"
              px="0px"
              my="auto"
              p={{ md: "", base: "20px" }}
            >
              <Flex
                w="100%"
                justifyContent="space-between"
                alignItems="end"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex gap="24px" w={{ md: "23%", base: "100%" }} flexDirection="column">
                  <Image src="images/img_footer_logo.png" h="41px" w="157px" fit="contain" />
                  <Text color="white.A700" lineHeight="30px">
                    Corporate business typically refers to large-scale mansola it enterprises or organizat
                  </Text>
                  <Flex w={{ md: "43%", base: "100%" }} justifyContent="space-between" alignItems="center" gap="20px">
                    <Image src="images/img_save.svg" h="21px" />
                    <Image src="images/img_save.svg" h="15px" w="14px" />
                    <Image src="images/img_close.svg" h="16px" w="15px" />
                    <Image src="images/img_save.svg" h="15px" w="14px" />
                  </Flex>
                </Flex>
                <Flex
                  mt="6px"
                  w={{ md: "34%", base: "100%" }}
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Flex gap="30px" flexDirection="column">
                    <Heading as="h5" color="white.A700">
                      Services
                    </Heading>
                    <UnorderedList styleType="none" gap="10px" display="flex" flexDirection="column">
                      <ListItem>
                        <Link href="#">
                          <Flex gap="15px" alignSelf="start" alignItems="center">
                            <Image src="images/img_checkmark.svg" h="16px" />
                            <Text color="white.A700">Mistakes To Avoid</Text>
                          </Flex>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Flex gap="15px" alignSelf="start" alignItems="center">
                            <Image src="images/img_checkmark.svg" h="16px" />
                            <Text color="white.A700" alignSelf="end">
                              Your Startup
                            </Text>
                          </Flex>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Flex gap="15px" alignSelf="start" alignItems="center">
                            <Image src="images/img_checkmark.svg" h="16px" />
                            <Text color="white.A700">Knew About Fonts</Text>
                          </Flex>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Flex gap="15px" alignSelf="start" alignItems="center">
                            <Image src="images/img_checkmark.svg" h="16px" />
                            <Text color="white.A700">Knew About Fonts</Text>
                          </Flex>
                        </Link>
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                  <Flex gap="30px" flexDirection="column" alignItems="start">
                    <Heading as="h5" color="white.A700">
                      Useful Link
                    </Heading>
                    <UnorderedList styleType="none" gap="10px" display="flex" flexDirection="column" alignItems="start">
                      <ListItem>
                        <Link href="#">
                          <Flex gap="14px" alignItems="center">
                            <Image src="images/img_checkmark.svg" h="14px" />
                            <Text color="white.A700">Latest News</Text>
                          </Flex>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Flex gap="14px" alignItems="center">
                            <Image src="images/img_checkmark.svg" h="14px" />
                            <Text color="white.A700">Careers</Text>
                          </Flex>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Flex gap="14px" alignItems="center">
                            <Image src="images/img_checkmark.svg" h="14px" />
                            <Text color="white.A700" alignSelf="end">
                              General Inquiries
                            </Text>
                          </Flex>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Flex gap="14px" alignItems="center">
                            <Image src="images/img_checkmark.svg" h="14px" />
                            <Text color="white.A700">Case Studies</Text>
                          </Flex>
                        </Link>
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                </Flex>
                <Flex gap="32px" w={{ md: "23%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Heading as="h5" color="white.A700">
                    Subscribe Our Newsletter
                  </Heading>
                  <Text color="white.A700" w="100%" lineHeight="30px">
                    Corporate business typically refers to large-scale mansola it.
                  </Text>
                  <InputGroup>
                    <Input
                      placeholder={`Enter Email`}
                      gap="35px"
                      borderColor="white.A700_33"
                      borderWidth="1px"
                      alignSelf="stretch"
                      borderRadius="29px"
                      pl={{ base: "20px", sm: 0 }}
                    />
                    <InputRightElement>
                      <Center w="58px" h="58px" bg="light_green.A700" borderRadius="50%">
                        <Image src="images/img_save.svg" w="14px" h="19px" />
                      </Center>
                    </InputRightElement>
                  </InputGroup>
                </Flex>
              </Flex>
            </Container>
            <Image
              src="images/img_copy_right.svg"
              h="1px"
              w="100%"
              position="absolute"
              bottom="19%"
              right="0px"
              left="0px"
              m="auto"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
