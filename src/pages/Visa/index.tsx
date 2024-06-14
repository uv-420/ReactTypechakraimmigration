import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Image, IconButton, Flex, Text, Heading, Box, SimpleGrid, Container, Center } from "@chakra-ui/react";
import React from "react";

export default function VisaPage() {
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
            <Center bg="teal.900_cc" flexDirection="column" py={{ md: "149px", base: "20px" }} borderRadius="50px">
              <Container
                mb="38px"
                display="flex"
                flexDirection="column"
                alignItems="start"
                px="0px"
                p={{ md: "", base: "20px" }}
              >
                <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                  Visa
                </Heading>
                <Flex mt="-1px" gap="15px" position="relative" alignItems="center" flexWrap="wrap">
                  <Heading size="md" color="white.A700">
                    Home
                  </Heading>
                  <Image src="images/img_save.svg" h="16px" />
                  <Heading size="md" as="h3" color="white.A700">
                    Visa
                  </Heading>
                </Flex>
              </Container>
            </Center>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Box>
              <SimpleGrid gap="30px" rowGap="33px" columns={{ md: 2, base: 1 }}>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  p="20px"
                  borderRadius="20px"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Box h="251px" bg="blue_gray.100" w="45%" borderRadius="20px" p={{ base: "20px", sm: "" }} />
                  <Flex
                    mr={{ md: "20px", base: "0px" }}
                    gap="26px"
                    w={{ base: "100%", sm: "46%" }}
                    flexDirection="column"
                  >
                    <Flex gap="10px" flexDirection="column" alignItems="start">
                      <Heading>Business Visa</Heading>
                      <Text color="gray.600" w="100%" lineHeight="30px">
                        Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                      </Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="start" gap="20px">
                      <IconButton
                        size="4xl"
                        variant="outline"
                        icon={<Image src="images/img_arrow_left_light_green_a700.svg" />}
                        aria-label="3832:55293-arrowleft_one"
                        w="60px"
                        borderRadius="20px"
                      />
                      <Image src="images/img_group_1000009657.svg" h="55px" w="55px" />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  p="20px"
                  borderRadius="20px"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Box h="251px" bg="blue_gray.100" w="45%" borderRadius="20px" p={{ base: "20px", sm: "" }} />
                  <Flex
                    mb="11px"
                    mr={{ md: "20px", base: "0px" }}
                    alignSelf="end"
                    w={{ base: "100%", sm: "46%" }}
                    justifyContent="center"
                  >
                    <Flex gap="26px" w="100%" flexDirection="column">
                      <Flex gap="7px" flexDirection="column" alignItems="start">
                        <Heading as="h3">Working Visa</Heading>
                        <Text color="gray.600" w="100%" lineHeight="30px">
                          Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                        </Text>
                      </Flex>
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <IconButton
                          size="4xl"
                          icon={<Image src="images/img_arrow_left_teal_900.svg" />}
                          aria-label="3832:55241-arrowleft_one"
                          w="60px"
                          borderRadius="20px"
                        />
                        <Image src="images/img_group_1000009657_light_green_50_01.svg" h="55px" w="55px" />
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  p="20px"
                  borderRadius="20px"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Box h="251px" bg="blue_gray.100" w="45%" borderRadius="20px" p={{ base: "20px", sm: "" }} />
                  <Flex
                    mr={{ md: "20px", base: "0px" }}
                    gap="26px"
                    w={{ base: "100%", sm: "46%" }}
                    flexDirection="column"
                  >
                    <Flex gap="10px" flexDirection="column" alignItems="start">
                      <Heading as="h4">Student Visa</Heading>
                      <Text color="gray.600" w="100%" lineHeight="30px">
                        Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                      </Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="start" gap="20px">
                      <IconButton
                        size="4xl"
                        variant="outline"
                        icon={<Image src="images/img_arrow_left_light_green_a700.svg" />}
                        aria-label="3832:55309-arrowleft_one"
                        w="60px"
                        borderRadius="20px"
                      />
                      <Image src="images/img_group_1000009657_teal_900.svg" h="55px" w="55px" />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  p="20px"
                  borderRadius="20px"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Box h="251px" bg="blue_gray.100" w="45%" borderRadius="20px" p={{ base: "20px", sm: "" }} />
                  <Flex
                    mr={{ md: "20px", base: "0px" }}
                    w={{ base: "100%", sm: "46%" }}
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Heading as="h5">Tourist Visa</Heading>
                    <Text color="gray.600" mt="10px" w="100%" lineHeight="30px">
                      Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                    </Text>
                    <Flex mt="26px" alignSelf="stretch" justifyContent="space-between" alignItems="start" gap="20px">
                      <IconButton
                        size="4xl"
                        variant="outline"
                        icon={<Image src="images/img_arrow_left_light_green_a700.svg" />}
                        aria-label="3832:55260-arrowleft_one"
                        w="60px"
                        borderRadius="20px"
                      />
                      <Image src="images/img_music.svg" h="55px" w="55px" />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  p="20px"
                  borderRadius="20px"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Box h="251px" bg="blue_gray.100" w="45%" borderRadius="20px" p={{ base: "20px", sm: "" }} />
                  <Flex
                    mr={{ md: "20px", base: "0px" }}
                    w={{ base: "100%", sm: "46%" }}
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Heading as="h6">Guide Visa</Heading>
                    <Text color="gray.600" mt="10px" w="100%" lineHeight="30px">
                      Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                    </Text>
                    <Flex mt="26px" alignSelf="stretch" justifyContent="space-between" alignItems="start" gap="20px">
                      <IconButton
                        size="4xl"
                        variant="outline"
                        icon={<Image src="images/img_arrow_left_light_green_a700.svg" />}
                        aria-label="3832:55323-arrowleft_one"
                        w="60px"
                        borderRadius="20px"
                      />
                      <Image src="images/img_music.svg" h="55px" w="55px" />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  p="20px"
                  borderRadius="20px"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Box h="251px" bg="blue_gray.100" w="45%" borderRadius="20px" p={{ base: "20px", sm: "" }} />
                  <Flex
                    mr={{ md: "20px", base: "0px" }}
                    w={{ base: "100%", sm: "46%" }}
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Heading as="h5">Poor Visa</Heading>
                    <Text color="gray.600" mt="10px" w="100%" lineHeight="30px">
                      Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                    </Text>
                    <Flex mt="26px" alignSelf="stretch" justifyContent="space-between" alignItems="start" gap="20px">
                      <IconButton
                        size="4xl"
                        variant="outline"
                        icon={<Image src="images/img_arrow_left_light_green_a700.svg" />}
                        aria-label="3832:55274-arrowleft_one"
                        w="60px"
                        borderRadius="20px"
                      />
                      <Image src="images/img_menu.svg" h="55px" w="55px" />
                    </Flex>
                  </Flex>
                </Flex>
              </SimpleGrid>
            </Box>
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
