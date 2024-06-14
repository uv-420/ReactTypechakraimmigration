import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CloseIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Image,
  Button,
  Flex,
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  InputRightElement,
  InputGroup,
  Center,
  Input,
  Container,
} from "@chakra-ui/react";
import React from "react";

export default function BlogPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>DhiWise web app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box bg="white.A700" w="100%">
        <Flex gap={{ md: "125px", base: "62px", sm: "93px" }} flexDirection="column" alignItems="center">
          <Flex gap="30px" w={{ md: "94%", base: "100%" }} flexDirection="column" p={{ md: "", base: "20px" }}>
            <Header flexDirection={{ md: "row", base: "column" }} />
            <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "156px", base: "20px" }} borderRadius="50px">
              <Container mb="31px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                <Flex w={{ md: "14%", base: "100%" }} flexDirection="column">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Blog
                  </Heading>
                  <Flex mt="-9px" gap="15px" position="relative" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" alignSelf="start" />
                    <Heading size="md" as="h3" color="white.A700">
                      Blog
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Box>
              <Flex gap={{ md: "80px", base: "40px", sm: "60px" }} flexDirection="column">
                <Flex gap="30px" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
                  <Flex gap="80px" flex={1} flexDirection="column" alignSelf="stretch">
                    <Flex flex={1}>
                      <Flex gap="21px" w="100%" flexDirection="column">
                        <Flex gap="26px" flexDirection="column" alignItems="start">
                          <Box h="416px" bg="blue_gray.100" alignSelf="stretch" borderRadius="20px" />
                          <Flex
                            w={{ md: "51%", base: "100%" }}
                            justifyContent="space-between"
                            gap="20px"
                            flexDirection={{ base: "column", sm: "row" }}
                          >
                            <Flex flex={1} justifyContent="space-between" gap="20px" alignSelf="stretch">
                              <Flex gap="5px" alignItems="center">
                                <Image src="images/img_lock.svg" h="16px" />
                                <Text color="gray.900_03">By admin</Text>
                              </Flex>
                              <Flex gap="5px" flex={1} alignItems="center">
                                <Image src="images/img_lock.svg" h="16px" />
                                <Text color="gray.900_03">October 19, 2022</Text>
                              </Flex>
                            </Flex>
                            <Flex gap="4px" alignItems="center">
                              <Image src="images/img_lock.svg" h="16px" w="15px" />
                              <Text color="gray.900_03">Comments (05)</Text>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex flexDirection="column" alignItems="start">
                          <Heading size="3xl" color="black.900_01" w="100%" lineHeight="60px">
                            Wonders of Ancient Civilizations A Journey Through Egypt
                          </Heading>
                          <Text color="gray.600" mt="20px" w="100%" lineHeight="30px">
                            Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra
                            .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper
                            viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
                            posuere viverra .Aliquam eros justo, posu Aliquam eros{" "}
                          </Text>
                          <Button
                            rightIcon={<Image src="images/img_save.svg" w="14px" h="14px" />}
                            mt="40px"
                            fontWeight={600}
                            gap="10px"
                            minW="159px"
                            borderRadius="30px"
                            px={{ base: "20px", sm: "" }}
                          >
                            Learn More
                          </Button>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex flex={1} flexDirection="column" alignItems="start">
                      <Box h="416px" bg="blue_gray.100" alignSelf="stretch" borderRadius="20px" />
                      <Flex
                        mt="26px"
                        gap="30px"
                        w={{ md: "51%", base: "100%" }}
                        flexDirection={{ base: "column", sm: "row" }}
                      >
                        <Flex gap="5px" alignItems="center">
                          <Image src="images/img_lock.svg" h="16px" />
                          <Text color="gray.900_03">By admin</Text>
                        </Flex>
                        <Flex gap="5px" flex={1} alignItems="center" alignSelf="stretch">
                          <Image src="images/img_lock.svg" h="16px" />
                          <Text color="gray.900_03">October 19, 2022</Text>
                        </Flex>
                        <Flex gap="4px" flex={1} alignItems="center" alignSelf="stretch">
                          <Image src="images/img_lock.svg" h="16px" w="15px" />
                          <Text color="gray.900_03">Comments (05)</Text>
                        </Flex>
                      </Flex>
                      <Heading size="3xl" as="h3" color="black.900_01" mt="21px" w="100%" lineHeight="60px">
                        The Road to Adventure Embarking on New Horizons
                      </Heading>
                      <Text color="gray.600" mt="20px" w="100%" lineHeight="30px">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                        eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                        eros justo, posu Aliquam eros{" "}
                      </Text>
                      <Button
                        rightIcon={<Image src="images/img_save.svg" w="14px" h="14px" />}
                        mt="40px"
                        fontWeight={600}
                        gap="10px"
                        minW="159px"
                        borderRadius="30px"
                        px={{ base: "20px", sm: "" }}
                      >
                        Learn More
                      </Button>
                    </Flex>
                    <Flex flex={1}>
                      <Flex w="100%" flexDirection="column" alignItems="start">
                        <Box h="416px" bg="blue_gray.100" alignSelf="stretch" borderRadius="20px" />
                        <Flex
                          mt="26px"
                          w={{ md: "51%", base: "100%" }}
                          justifyContent="space-between"
                          gap="20px"
                          flexDirection={{ base: "column", sm: "row" }}
                        >
                          <Flex flex={1} justifyContent="space-between" gap="20px" alignSelf="stretch">
                            <Flex gap="5px" alignItems="center">
                              <Image src="images/img_lock.svg" h="16px" />
                              <Text color="gray.900_03">By admin</Text>
                            </Flex>
                            <Flex gap="5px" flex={1} alignItems="center">
                              <Image src="images/img_lock.svg" h="16px" />
                              <Text color="gray.900_03">October 19, 2022</Text>
                            </Flex>
                          </Flex>
                          <Flex gap="4px" alignItems="center">
                            <Image src="images/img_lock.svg" h="16px" w="15px" />
                            <Text color="gray.900_03">Comments (05)</Text>
                          </Flex>
                        </Flex>
                        <Heading size="3xl" as="h4" color="black.900_01" mt="21px" w="100%" lineHeight="60px">
                          Journeys of Discovery Uncovering Hidden Treasures
                        </Heading>
                        <Text color="gray.600" mt="20px" w="100%" lineHeight="30px">
                          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                          eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                          eros justo, posu Aliquam eros{" "}
                        </Text>
                        <Button
                          rightIcon={<Image src="images/img_save.svg" w="14px" h="14px" />}
                          mt="40px"
                          fontWeight={600}
                          gap="10px"
                          minW="159px"
                          borderRadius="30px"
                          px={{ base: "20px", sm: "" }}
                        >
                          Learn More
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Box w={{ md: "33%", base: "100%" }}>
                    <Flex
                      bg="white.A700"
                      boxShadow="xs"
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                      p={{ base: "20px", sm: "30px" }}
                      borderRadius="20px"
                    >
                      <Heading as="h5">Search Here </Heading>
                      <Box h="1px" mt="15px" bg="gray.300" alignSelf="stretch" borderRadius="1px" />
                      <InputGroup mt="30px">
                        <Input
                          colorScheme="gray_300"
                          placeholder={`Search..`}
                          value={searchBarValue1}
                          onChange={(e) => setSearchBarValue1(e.target.value)}
                          color="gray.600"
                          pr="20px"
                          gap="35px"
                          borderColor="gray.300"
                          borderWidth="1px"
                          alignSelf="stretch"
                          borderRadius="29px"
                        />
                        <InputRightElement>
                          <Center w="25px" h="25px" borderRadius="12px">
                            {searchBarValue1?.length > 0 ? (
                              <CloseIcon onClick={() => setSearchBarValue1("")} />
                            ) : (
                              <Image src="images/img_search_teal_900.svg" w="25px" h="25px" />
                            )}
                          </Center>
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                    <Flex
                      mt="31px"
                      gap="34px"
                      bg="white.A700"
                      boxShadow="xs"
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                      p={{ base: "20px", sm: "30px" }}
                      borderRadius="20px"
                    >
                      <Heading as="h6">Popular Post</Heading>
                      <VStack
                        divider={<Divider bg="gray.300" w="350px" h="1px" borderRadius="1px" />}
                        spacing={5}
                        display="flex"
                        alignSelf="stretch"
                        flexDirection="column"
                        alignItems="stretch"
                      >
                        <Flex flex={1}>
                          <Flex gap="15px" w="100%" alignItems="center">
                            <Box h="85px" bg="blue_gray.100" w="24%" borderRadius="20px" />
                            <Flex flex={1} flexDirection="column">
                              <Flex gap="10px" alignItems="center">
                                <Image src="images/img_checkmark.svg" h="16px" />
                                <Text color="gray.600" alignSelf="end">
                                  October 19, 2022
                                </Text>
                              </Flex>
                              <Heading size="md" as="h6" mt="-3px" position="relative" lineHeight="28px">
                                Find Your Adventure Live Your Passion
                              </Heading>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Box
                          h="85px"
                          flex={{ md: 1, base: "unset" }}
                          position="relative"
                          w={{ md: "auto", base: "100%" }}
                        >
                          <Flex
                            gap="15px"
                            w="71%"
                            alignItems="start"
                            position="absolute"
                            left="0.00px"
                            bottom="0px"
                            top="0px"
                            h="max-content"
                            my="auto"
                          >
                            <Box h="85px" bg="blue_gray.100" w="34%" borderRadius="20px" />
                            <Flex gap="10px" flex={1} alignItems="center">
                              <Image src="images/img_checkmark.svg" h="16px" />
                              <Text color="gray.600" alignSelf="end">
                                October 19, 2022
                              </Text>
                            </Flex>
                          </Flex>
                          <Heading
                            size="md"
                            as="h6"
                            w="73%"
                            lineHeight="28px"
                            position="absolute"
                            bottom="1.00px"
                            right="0.00px"
                            m="auto"
                          >
                            Ravel Beyond Your Imagination
                          </Heading>
                        </Box>
                        <Box
                          h="85px"
                          flex={{ md: 1, base: "unset" }}
                          position="relative"
                          w={{ md: "auto", base: "100%" }}
                        >
                          <Flex
                            gap="15px"
                            w="71%"
                            alignItems="start"
                            position="absolute"
                            left="0.00px"
                            bottom="0px"
                            top="0px"
                            h="max-content"
                            my="auto"
                          >
                            <Box h="85px" bg="blue_gray.100" w="34%" borderRadius="20px" />
                            <Flex gap="10px" flex={1} alignItems="center">
                              <Image src="images/img_checkmark.svg" h="16px" />
                              <Text color="gray.600" alignSelf="end">
                                October 19, 2022
                              </Text>
                            </Flex>
                          </Flex>
                          <Heading
                            size="md"
                            as="h6"
                            w="73%"
                            lineHeight="28px"
                            position="absolute"
                            bottom="1.00px"
                            right="0.00px"
                            m="auto"
                          >
                            Adventure Awaits Around Every Corner
                          </Heading>
                        </Box>
                      </VStack>
                    </Flex>
                    <Flex
                      mt="29px"
                      gap="23px"
                      bg="white.A700"
                      boxShadow="xs"
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                      p={{ base: "20px", sm: "30px" }}
                      borderRadius="20px"
                    >
                      <Heading as="h5">Category</Heading>
                      <Box h="1px" bg="gray.300" alignSelf="stretch" borderRadius="1px" />
                      <Text>Flight Booking</Text>
                      <Text>Vacation Packages</Text>
                      <Text>Car Rental Services</Text>
                      <Text>Adventure Travel Planning</Text>
                      <Text>Group Travel Organization</Text>
                      <Text>Insurance Services</Text>
                    </Flex>
                    <Flex
                      mt="45px"
                      gap="18px"
                      bg="white.A700"
                      boxShadow="xs"
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                      p={{ base: "20px", sm: "30px" }}
                      borderRadius="20px"
                    >
                      <Heading as="h5">Popular Tags</Heading>
                      <Box h="1px" bg="gray.300" alignSelf="stretch" borderRadius="1px" />
                      <Box alignSelf="stretch">
                        <Flex gap="10px" flexDirection="column">
                          <Flex gap="5px">
                            <Button size="md" variant="outline" colorScheme="gray_300" minW="131px" borderRadius="20px">
                              Travel Planning
                            </Button>
                            <Button size="md" variant="outline" colorScheme="gray_300" minW="127px" borderRadius="20px">
                              Safety Guides
                            </Button>
                          </Flex>
                          <Flex gap="5px">
                            <Button
                              size="md"
                              variant="outline"
                              colorScheme="gray_300"
                              flex={1}
                              w="100%"
                              borderRadius="20px"
                            >
                              Spa Retreats
                            </Button>
                            <Button size="md" variant="outline" colorScheme="gray_300" minW="102px" borderRadius="20px">
                              Wine Tours
                            </Button>
                            <Button size="md" variant="outline" colorScheme="gray_300" minW="104px" borderRadius="20px">
                              Travel Pack
                            </Button>
                          </Flex>
                          <Flex gap="5px" alignItems="center">
                            <Button
                              size="lg"
                              variant="outline"
                              colorScheme="gray_300"
                              minW="127px"
                              borderRadius="20px"
                              px={{ base: "20px", sm: "" }}
                            >
                              Solo Travel
                            </Button>
                            <Button size="md" variant="outline" colorScheme="gray_300" minW="140px" borderRadius="20px">
                              Travel Programs
                            </Button>
                          </Flex>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
                <Flex ml={{ md: "283px", base: "0px" }} gap="15px" flexDirection={{ base: "column", sm: "row" }}>
                  <Button
                    size="5xl"
                    variant="outline"
                    fontWeight={700}
                    minW="60px"
                    borderRadius="5px"
                    px={{ base: "20px", sm: "" }}
                  >
                    1
                  </Button>
                  <Button
                    size="5xl"
                    variant="outline"
                    colorScheme="gray_300"
                    color="teal.900"
                    fontWeight={700}
                    minW="60px"
                    borderRadius="5px"
                    px={{ base: "20px", sm: "" }}
                  >
                    2
                  </Button>
                  <Button
                    size="5xl"
                    variant="outline"
                    colorScheme="gray_300"
                    color="teal.900"
                    fontWeight={700}
                    minW="60px"
                    borderRadius="5px"
                    px={{ base: "20px", sm: "" }}
                  >
                    3
                  </Button>
                  <IconButton
                    size="4xl"
                    variant="outline"
                    colorScheme="gray_300"
                    icon={<Image src="images/img_arrow_left.svg" />}
                    aria-label="3435_301_823_3370_60_60-arrowleft"
                    w="60px"
                    borderRadius="5px"
                  />
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
