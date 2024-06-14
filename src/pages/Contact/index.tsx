import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  Image,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
  Tabs,
  Button,
  Textarea,
  InputRightElement,
  InputGroup,
  Center,
  Input,
} from "@chakra-ui/react";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>DhiWise web app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box pt={{ base: "20px", sm: "30px" }} bg="white.A700" w="100%">
        <Flex flexDirection="column" alignItems="center">
          <Flex
            gap={{ md: "98px", base: "49px", sm: "73px" }}
            w={{ md: "94%", base: "100%" }}
            flexDirection="column"
            alignItems="center"
            p={{ md: "", base: "20px" }}
          >
            <Flex gap="30px" alignSelf="stretch" flexDirection="column">
              <Header flexDirection={{ md: "row", base: "column" }} />
              <Center bg="teal.900_cc" flexDirection="column" py={{ md: "148px", base: "20px" }} borderRadius="50px">
                <Container
                  mb="39px"
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                  px="0px"
                  p={{ md: "", base: "20px" }}
                >
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Contact
                  </Heading>
                  <Flex gap="15px" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" />
                    <Heading size="md" as="h3" color="white.A700">
                      Contact
                    </Heading>
                  </Flex>
                </Container>
              </Center>
            </Flex>
            <Container px="0px">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Image src="images/img_image.svg" h="671px" w={{ md: "47%", base: "100%" }} />
                <Flex gap="40px" w={{ md: "49%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Flex gap="7px" w={{ md: "86%", base: "100%" }} flexDirection="column">
                    <Flex gap="10px" alignItems="start">
                      <Heading size="xs" as="h4" letterSpacing="1.40px" textTransform="uppercase">
                        Contact Information
                      </Heading>
                      <Image src="images/img_object.svg" h="12px" w="13px" />
                    </Flex>
                    <Heading size="3xl" as="h5" lineHeight="60px">
                      Let Your Wanderlust Guide You
                    </Heading>
                  </Flex>
                  <Box bg="light_green.50_01" alignSelf="stretch" p={{ base: "20px", sm: "40px" }} borderRadius="20px">
                    <Flex mt="5px" flexDirection="column" alignItems="start">
                      <Flex w={{ md: "68%", base: "100%" }} justifyContent="space-between" flexWrap="wrap" gap="20px">
                        <Text>Your Email</Text>
                        <Text>Your Phone</Text>
                      </Flex>
                      <Flex mt="8px" gap="30px" alignSelf="stretch" flexDirection={{ base: "column", sm: "row" }}>
                        <InputGroup w="100%">
                          <Input
                            colorScheme="white_A700"
                            placeholder={`Your Email`}
                            type="email"
                            pr="19px"
                            gap="35px"
                            borderColor="gray.300"
                            borderWidth="1px"
                            borderRadius="30px"
                          />
                          <InputRightElement>
                            <Center w="14px" h="19px">
                              <Image src="images/img_arrow_left.svg" w="14px" h="19px" />
                            </Center>
                          </InputRightElement>
                        </InputGroup>
                        <InputGroup w="100%">
                          <Input
                            colorScheme="white_A700"
                            placeholder={`Your Phone`}
                            type="number"
                            pr="19px"
                            gap="35px"
                            borderColor="gray.300"
                            borderWidth="1px"
                            borderRadius="30px"
                          />
                          <InputRightElement>
                            <Center w="14px" h="19px">
                              <Image src="images/img_arrow_left.svg" w="14px" h="19px" />
                            </Center>
                          </InputRightElement>
                        </InputGroup>
                      </Flex>
                      <Text mt="25px">Your Address</Text>
                      <InputGroup mt="8px">
                        <Input
                          colorScheme="white_A700"
                          placeholder={`Your Address`}
                          pr="19px"
                          gap="35px"
                          borderColor="gray.300"
                          borderWidth="1px"
                          alignSelf="stretch"
                          borderRadius="30px"
                        />
                        <InputRightElement>
                          <Center w="11px" h="19px">
                            <Image src="images/img_arrow_left.svg" w="11px" h="19px" />
                          </Center>
                        </InputRightElement>
                      </InputGroup>
                      <Text mt="27px">Message</Text>
                      <Textarea
                        variant="tarOutlineGray300"
                        placeholder={`Write Message..`}
                        color="teal.900_99"
                        mt="6px"
                        gap="35px"
                        display="flex"
                        borderColor="gray.300"
                        alignSelf="stretch"
                        borderRadius="30px"
                        pb={{ base: "20px", sm: 0 }}
                      />
                      <Button mt="20px" fontWeight={600} w="100%" borderRadius="30px" px={{ base: "20px", sm: "" }}>
                        Send Message
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Container>
          </Flex>
          <Container mt="118px" px="0px" p={{ md: "", base: "20px" }}>
            <Tabs
              variant="custombackground"
              as={Flex}
              gap={{ base: "30px", sm: "60px" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Flex gap="30px" w={{ md: "61%", base: "100%" }} flexDirection="column" alignItems="center">
                <Flex gap="7px" w={{ md: "66%", base: "100%" }} flexDirection="column" alignItems="center">
                  <Heading size="xs" color="light_green.A700" letterSpacing="1.40px" textTransform="uppercase">
                    Contact Information
                  </Heading>
                  <Heading size="3xl" as="h3" textAlign="center" w="100%" lineHeight="60px">
                    Let Your Wanderlust Guide You
                  </Heading>
                </Flex>
                <TabList gap="30px" display="flex" flexWrap="wrap">
                  <Tab color="teal.900" fontSize="22px" fontWeight={700} px={{ base: "20px", sm: "40px" }} py="17px">
                    Asia
                  </Tab>
                  <Tab color="teal.900" fontSize="22px" fontWeight={700} px={{ base: "20px", sm: "40px" }} py="17px">
                    Europe
                  </Tab>
                  <Tab color="teal.900" fontSize="22px" fontWeight={700} px={{ base: "20px", sm: "40px" }} py="17px">
                    North America
                  </Tab>
                  <Tab color="teal.900" fontSize="22px" fontWeight={700} px={{ base: "20px", sm: "40px" }} py="17px">
                    Australia
                  </Tab>
                </TabList>
              </Flex>
              <TabPanels display="flex">
                {[...Array(4)].map((_, index) => (
                  <TabPanel key={`tab-panel${index}`} w="100%">
                    <Box alignSelf="stretch">
                      <Flex
                        bg="white.A700"
                        boxShadow="xs"
                        justifyContent="space-between"
                        gap="20px"
                        p={{ md: "60px", base: "20px" }}
                        borderRadius="20px"
                        flexDirection={{ md: "row", base: "column" }}
                      >
                        <Flex
                          w={{ md: "48%", base: "100%" }}
                          justifyContent="space-between"
                          alignItems="center"
                          gap="20px"
                          flexDirection={{ base: "column", sm: "row" }}
                        >
                          <Flex gap="26px" alignSelf="end" w={{ base: "100%", sm: "52%" }} flexDirection="column">
                            <Flex gap="29px" w={{ md: "65%", base: "100%" }} alignItems="start">
                              <Image src="images/img_checkmark.svg" h="35px" mt="6px" />
                              <Flex gap="10px" flex={1} flexDirection="column">
                                <Text color="gray.600">Requesting A Call:</Text>
                                <Heading size="md" as="h4">
                                  (629) 555-0129
                                </Heading>
                              </Flex>
                            </Flex>
                            <Flex gap="30px" w={{ md: "77%", base: "100%" }} alignItems="start">
                              <Image src="images/img_checkmark.svg" h="25px" mt="13px" w="25px" />
                              <Flex gap="13px" flex={1} flexDirection="column" alignItems="start">
                                <Text color="gray.600">E-mail</Text>
                                <Heading size="md" as="h5">
                                  info@example.com
                                </Heading>
                              </Flex>
                            </Flex>
                            <Flex gap="30px" alignItems="start">
                              <Image src="images/img_checkmark.svg" h="35px" mt="22px" />
                              <Flex gap="8px" flex={1} flexDirection="column" alignItems="start">
                                <Text color="gray.600">Location</Text>
                                <Heading size="md" as="h6" w="100%" lineHeight="28px">
                                  6391 Elgin St. Celina, Delaware 10299
                                </Heading>
                              </Flex>
                            </Flex>
                          </Flex>
                          <Box w={{ base: "100%", sm: "40%" }}>
                            <Flex justifyContent="space-between" alignItems="center" gap="20px">
                              <Box h="100%" bg="gray.300" w="1px" />
                              <Flex gap="21px" w="63%" flexDirection="column">
                                <Flex gap="5px" flexDirection="column" alignItems="start">
                                  <Text color="gray.600">Monday</Text>
                                  <Flex gap="14px" alignSelf="stretch" alignItems="center">
                                    <Image src="images/img_checkmark.svg" h="28px" />
                                    <Heading size="md" as="h6" alignSelf="end">
                                      9 am - 8 pm
                                    </Heading>
                                  </Flex>
                                </Flex>
                                <Flex gap="7px" flexDirection="column" alignItems="start">
                                  <Text color="gray.600">Tuesday-Friday</Text>
                                  <Flex gap="14px" alignSelf="stretch" alignItems="center">
                                    <Image src="images/img_checkmark.svg" h="28px" />
                                    <Heading size="md" as="h6" alignSelf="end">
                                      12 am - 9 pm
                                    </Heading>
                                  </Flex>
                                </Flex>
                                <Flex gap="5px" flexDirection="column" alignItems="start">
                                  <Text color="gray.600">Saturday</Text>
                                  <Flex gap="14px" alignSelf="stretch" alignItems="center">
                                    <Image src="images/img_checkmark.svg" h="28px" />
                                    <Heading size="md" as="h6" alignSelf="end">
                                      8 am - 3 pm
                                    </Heading>
                                  </Flex>
                                </Flex>
                              </Flex>
                            </Flex>
                          </Box>
                        </Flex>
                        <Box h="257px" bg="blue_gray.100" w="39%" borderRadius="20px" p={{ md: "", base: "20px" }} />
                      </Flex>
                    </Box>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Container>
          <Box mt="190px" alignSelf="stretch">
            <Flex bg="blue_gray.100" justifyContent="center" py={{ md: "292px", base: "20px" }}>
              <Container
                display="flex"
                justifyContent="center"
                px={{ md: "621px", base: "20px" }}
                p={{ md: "", base: "20px" }}
              >
                <Image src="images/img_arrow_left.svg" h="89px" w="96%" />
              </Container>
            </Flex>
            <Footer />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
