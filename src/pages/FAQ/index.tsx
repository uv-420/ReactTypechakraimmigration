import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  Text,
  Heading,
  Flex,
  Image,
  Button,
  Center,
  Box,
  AccordionPanel,
  IconButton,
  AccordionButton,
  Accordion,
  AccordionItem,
  Container,
} from "@chakra-ui/react";
import React from "react";

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>DhiWise web app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box pt={{ base: "20px", sm: "30px" }} bg="white.A700" w="100%">
        <Flex gap={{ md: "110px", base: "55px", sm: "82px" }} flexDirection="column" alignItems="center">
          <Flex gap="30px" w={{ md: "94%", base: "100%" }} flexDirection="column" p={{ md: "", base: "20px" }}>
            <Header flexDirection={{ md: "row", base: "column" }} />
            <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "151px", base: "20px" }} borderRadius="50px">
              <Container mb="36px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                <Flex w={{ md: "14%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    FAQ
                  </Heading>
                  <Flex
                    mt="-3px"
                    gap="15px"
                    position="relative"
                    alignSelf="stretch"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" alignSelf="start" />
                    <Heading size="md" as="h3" color="white.A700">
                      FAQ
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Flex gap={{ md: "120px", base: "60px", sm: "90px" }} flexDirection="column">
              <Flex gap="30px" alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                <Accordion defaultIndex={[0]} gap="29px" display="flex" w="100%" flexDirection="column">
                  {[...Array(5)].map(() => (
                    <AccordionItem>
                      {(props) => (
                        <>
                          <Flex
                            bg="light_green.50_01"
                            boxShadow="xs"
                            flex={1}
                            flexDirection="column"
                            p={{ base: "20px", sm: "30px" }}
                            borderRadius="20px"
                          >
                            <AccordionButton
                              zIndex={1}
                              position="relative"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="start"
                              gap="20px"
                              flexDirection={{ base: "column", sm: "row" }}
                            >
                              <Heading size="md">What is the purpose of a visa?</Heading>
                              {props?.isExpanded ? (
                                <IconButton
                                  size="sm"
                                  icon={<Image src="images/img_arrow_up.svg" />}
                                  aria-label="3840:530-arrowup_one"
                                  w="40px"
                                  borderRadius="20px"
                                />
                              ) : (
                                <IconButton
                                  size="sm"
                                  colorScheme="light_green_50_01"
                                  icon={<Image src="images/img_arrow_right.svg" />}
                                  aria-label="3840:536-arrowright_one"
                                  mr={{ base: "0px", sm: "6px" }}
                                  w="40px"
                                  borderRadius="20px"
                                />
                              )}
                            </AccordionButton>
                            <AccordionPanel
                              mt="-2px"
                              position="relative"
                              w={{ md: "84%", base: "100%" }}
                              display="flex"
                              p="0px"
                            >
                              <Text color="gray.600" w="100%" lineHeight="30px">
                                Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the
                                industry&#39;s standard dummy text ever
                              </Text>
                            </AccordionPanel>
                          </Flex>
                        </>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
                <Accordion gap="20px" display="flex" w="100%" flexDirection="column">
                  {[...Array(6)].map(() => (
                    <AccordionItem>
                      {(props) => (
                        <>
                          <AccordionButton
                            bg="white.A700"
                            boxShadow="xs"
                            flex={1}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            gap="20px"
                            p={{ base: "20px", sm: "24px" }}
                            borderRadius="20px"
                          >
                            <Heading size="md" as="h3" mb="6px" ml={{ md: "6px", base: "0px" }} alignSelf="end">
                              How long does it take to process a visa application?
                            </Heading>
                            <IconButton
                              size="sm"
                              colorScheme="light_green_50_01"
                              icon={<Image src="images/img_arrow_right.svg" />}
                              aria-label="3840:592-arrowright_nine"
                              mr={{ md: "6px", base: "0px" }}
                              w="40px"
                              borderRadius="20px"
                            />
                          </AccordionButton>
                          <AccordionPanel p="0px">Dummy Content</AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </Flex>
              <Flex justifyContent="space-between" gap="20px" flexDirection={{ md: "row", base: "column" }}>
                <Image src="images/img_company_logo.svg" h="48px" w={{ md: "13%", base: "100%" }} />
                <Image src="images/img_company_logo_gray_900.svg" h="48px" w={{ md: "8%", base: "100%" }} />
                <Image src="images/img_company_logo_blue_gray_800.svg" h="48px" w={{ md: "9%", base: "100%" }} />
                <Flex gap="6px" w={{ md: "10%", base: "100%" }} justifyContent="center" alignItems="end">
                  <Image src="images/img_lock_red_300.svg" h="24px" mt="12px" mb="9px" />
                  <Image src="images/img_settings.svg" h="17px" mb="12px" w="78%" />
                </Flex>
                <Image src="images/img_company_logo_cyan_700.svg" h="48px" w={{ md: "11%", base: "100%" }} />
              </Flex>
              <Box>
                <Flex gap="30px" flexDirection={{ md: "row", base: "column" }}>
                  <Box h="608px" bg="blue_gray.100" w="33%" borderRadius="20px" />
                  <Flex gap="30px" flex={1} flexDirection="column" alignSelf="stretch">
                    <Flex
                      pl={{ md: "60px", base: "20px" }}
                      bg="white.A700"
                      alignItems="center"
                      borderRadius="20px"
                      flexDirection={{ md: "row", base: "column" }}
                    >
                      <Flex gap="21px" flex={1} flexDirection="column" alignItems="start" alignSelf="stretch">
                        <Center bg="light_green.A700" flexDirection="column" p="17px" borderRadius="40px">
                          <Image src="images/img_050_worldwide.svg" h="45px" w="45px" />
                        </Center>
                        <Flex gap="23px" alignSelf="stretch" flexDirection="column" alignItems="start">
                          <Flex gap="10px" alignSelf="stretch" flexDirection="column" alignItems="start">
                            <Heading as="h4">Get our best offers quickly</Heading>
                            <Text color="gray.600" w="100%" lineHeight="30px">
                              Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the
                              industry&#39;s standard dummy
                            </Text>
                          </Flex>
                          <Button
                            variant="outline"
                            colorScheme="gray_300"
                            rightIcon={<Image src="images/img_arrow_left.svg" w="14px" h="14px" />}
                            color="teal.900"
                            fontWeight={600}
                            gap="10px"
                            minW="158px"
                            borderRadius="30px"
                            px={{ base: "20px", sm: "" }}
                          >
                            Contact us
                          </Button>
                        </Flex>
                      </Flex>
                      <Image
                        src="images/img_rectangle_5354.svg"
                        h="363px"
                        w={{ md: "40%", base: "100%" }}
                        borderRadius="20px"
                      />
                    </Flex>
                    <Flex
                      bg="light_green.A700"
                      justifyContent="space-between"
                      gap="20px"
                      p={{ md: "59px", base: "20px" }}
                      borderRadius="20px"
                      flexDirection={{ md: "row", base: "column" }}
                    >
                      <Flex gap="9px" flexDirection="column" alignItems="start">
                        <Heading size="3xl" as="h5" color="white.A700">
                          10k+
                        </Heading>
                        <Text color="white.A700">Complete project</Text>
                      </Flex>
                      <Flex
                        w={{ md: "73%", base: "100%" }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap="20px"
                        flexDirection={{ base: "column", sm: "row" }}
                      >
                        <Flex gap="7px" flexDirection="column" alignItems="start">
                          <Heading size="3xl" as="h6" color="white.A700">
                            20+
                          </Heading>
                          <Text color="white.A700">Team member</Text>
                        </Flex>
                        <Flex gap="9px" flexDirection="column" alignItems="start">
                          <Heading size="3xl" as="h1" color="white.A700">
                            5k+
                          </Heading>
                          <Text color="white.A700">Winning award</Text>
                        </Flex>
                        <Flex gap="9px" flexDirection="column" alignItems="start">
                          <Heading size="3xl" as="h1" color="white.A700">
                            100+
                          </Heading>
                          <Text color="white.A700">Complete project</Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
