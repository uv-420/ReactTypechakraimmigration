import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  Heading,
  Text,
  Image,
  Flex,
  Box,
  AccordionPanel,
  IconButton,
  AccordionButton,
  Accordion,
  AccordionItem,
  Container,
} from "@chakra-ui/react";
import React from "react";

export default function VisadetailsPage() {
  return (
    <>
      <Helmet>
        <title>DhiWise web app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box pt={{ base: "20px", sm: "30px" }} bg="white.A700" w="100%">
        <Flex gap={{ md: "115px", base: "57px", sm: "86px" }} flexDirection="column" alignItems="center">
          <Flex gap="30px" w={{ md: "94%", base: "100%" }} flexDirection="column" p={{ md: "", base: "20px" }}>
            <Header flexDirection={{ md: "row", base: "column" }} />
            <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "148px", base: "20px" }} borderRadius="50px">
              <Container mb="39px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                <Flex flexDirection="column" alignItems="start">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Visa Details
                  </Heading>
                  <Flex gap="15px" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" />
                    <Heading size="md" as="h3" color="white.A700">
                      Visa Details
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Box>
              <Flex gap="30px" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
                <Flex gap="32px" flex={1} flexDirection="column" alignSelf="stretch">
                  <Flex flexDirection="column" alignItems="start">
                    <Flex gap="20px" alignSelf="stretch" flexDirection="column">
                      <Heading size="3xl" color="black.900_01" lineHeight="60px">
                        Wonders of Ancient Civilizations: A Journey Through Egypt
                      </Heading>
                      <Text color="gray.600" lineHeight="30px">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                        eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                        eros justo, posu
                      </Text>
                    </Flex>
                    <Heading size="xl" as="h3" color="black.900_01" mt="32px" textTransform="capitalize">
                      Why to choose Egypt?
                    </Heading>
                    <Text color="gray.600" mt="15px" w="100%" lineHeight="30px">
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posu
                    </Text>
                    <Flex mt="20px" gap="21px" alignItems="end" flexWrap="wrap">
                      <Heading size="md" as="h4">
                        Flight Booking:
                      </Heading>
                      <Text color="gray.600">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                      </Text>
                    </Flex>
                    <Flex mt="20px" gap="20px" alignItems="center" flexWrap="wrap">
                      <Heading size="md" as="h5">
                        Car Rental Services:
                      </Heading>
                      <Text color="gray.600" alignSelf="end">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                      </Text>
                    </Flex>
                    <Flex mt="20px" gap="21px" alignItems="end" flexWrap="wrap">
                      <Heading size="md" as="h6">
                        Travel Planning:
                      </Heading>
                      <Text color="gray.600">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex gap={{ base: "27px", sm: "55px" }} flexDirection="column" alignItems="start">
                    <Heading size="xl" as="h3" color="black.900_01" textTransform="capitalize">
                      frequently asked questions
                    </Heading>
                    <Accordion defaultIndex={[0]} gap="20px" display="flex" alignSelf="stretch" flexDirection="column">
                      {[...Array(4)].map(() => (
                        <AccordionItem>
                          {(props) => (
                            <>
                              <Flex
                                pb={{ base: "20px", sm: "28px" }}
                                gap="20px"
                                bg="white.A700"
                                boxShadow="xs"
                                flex={1}
                                flexDirection="column"
                                alignItems="start"
                                borderRadius="20px"
                              >
                                <AccordionButton
                                  borderColor="gray.300"
                                  borderWidth="1px"
                                  borderStyle="solid"
                                  alignSelf="stretch"
                                  display="flex"
                                  justifyContent="space-between"
                                  alignItems="center"
                                  gap="20px"
                                  p={{ base: "20px", sm: "30px" }}
                                  borderRadius="20px"
                                >
                                  <Heading size="md" as="h6" alignSelf="end">
                                    Where Wanderlust Meets Reality?
                                  </Heading>
                                  {props?.isExpanded ? (
                                    <IconButton
                                      size="xs"
                                      icon={<Image src="images/img_save.svg" />}
                                      aria-label="3832:55489-save_three"
                                      mr={{ md: "10px", base: "0px" }}
                                      w="30px"
                                      borderRadius="15px"
                                    />
                                  ) : (
                                    <IconButton
                                      size="xs"
                                      colorScheme="light_green_50_01"
                                      icon={<Image src="images/img_arrow_left.svg" />}
                                      aria-label="3832:55470-arrowleft"
                                      w="30px"
                                      borderRadius="15px"
                                    />
                                  )}
                                </AccordionButton>
                                <AccordionPanel
                                  ml={{ md: "30px", base: "0px" }}
                                  w={{ md: "70%", base: "100%" }}
                                  display="flex"
                                  p={{ md: "0px", base: "20px" }}
                                >
                                  <Text color="gray.600" w="100%" lineHeight="30px">
                                    It is a long established fact that a reader will be distr acted bioiiy the rea
                                    dablea content of a page when looking at its layout Thoiie point of using.It is a
                                    long this established fact that a reader
                                  </Text>
                                </AccordionPanel>
                              </Flex>
                            </>
                          )}
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Flex>
                </Flex>
                <Flex gap="30px" w={{ md: "33%", base: "100%" }} flexDirection="column">
                  <Flex
                    gap="20px"
                    bg="light_green.50_01"
                    flexDirection="column"
                    p={{ base: "20px", sm: "40px" }}
                    borderRadius="20px"
                  >
                    <Flex justifyContent="space-between" alignItems="start" gap="20px">
                      <Heading as="h5" color="black.900_01">
                        Asia
                      </Heading>
                      <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                    </Flex>
                    <Flex gap="20px" flexDirection="column">
                      <Box h="1px" bg="gray.300" />
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="black.900_01">
                          Europe
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" />
                      </Flex>
                      <Box h="1px" bg="gray.300" />
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="start" gap="20px">
                      <Heading as="h5" color="light_green.A700">
                        North America
                      </Heading>
                      <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                    </Flex>
                    <Flex gap="20px" flexDirection="column">
                      <Box h="1px" bg="gray.300" />
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="black.900_01">
                          Australia
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                      </Flex>
                      <Box h="1px" bg="gray.300" />
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="start" gap="20px">
                      <Heading as="h5" color="black.900_01">
                        Latine America
                      </Heading>
                      <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                    </Flex>
                    <Flex gap="20px" flexDirection="column">
                      <Box h="1px" bg="gray.300" />
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="black.900_01">
                          Africa
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    bg="light_green.50_01"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p={{ base: "20px", sm: "38px" }}
                    borderRadius="20px"
                  >
                    <Heading as="h5">GET TOUCH</Heading>
                    <Image src="images/img_call.svg" h="96px" mt="30px" w="96px" />
                    <Text mt="35px">For fast service</Text>
                    <Heading as="h5" mt="17px">
                      (+888) 123 456 765
                    </Heading>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
