import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { IconButton, Image, Text, Heading, Flex, Box, SimpleGrid, Container } from "@chakra-ui/react";
import React from "react";

export default function TeamPage() {
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
            <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "149px", base: "20px" }} borderRadius="50px">
              <Container mb="38px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                <Flex w={{ md: "16%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Team
                  </Heading>
                  <Flex mt="-1px" gap="15px" position="relative" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" />
                    <Heading size="md" as="h3" color="white.A700">
                      Team
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Box>
              <SimpleGrid gap="30px" columns={{ md: 3, base: 1, sm: 2 }} justifyContent="center">
                <Flex
                  pb={{ base: "20px", sm: "40px" }}
                  gap="23px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="20px"
                >
                  <Image
                    src="images/img_rectangle_869.png"
                    h={{ md: "370px", base: "auto" }}
                    borderTopRightRadius="20px"
                    borderTopLeftRadius="20px"
                    w="100%"
                  />
                  <Flex
                    w={{ md: "80%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    p={{ md: "", base: "20px" }}
                  >
                    <Flex gap="8px" flexDirection="column">
                      <Heading>Jane Cooper</Heading>
                      <Text color="gray.600">President of Sales</Text>
                    </Flex>
                    <IconButton
                      size="4xl"
                      variant="outline"
                      icon={<Image src="images/img_checkmark.svg" />}
                      aria-label="3766:2471-checkmark_one"
                      w="60px"
                      borderRadius="30px"
                    />
                  </Flex>
                </Flex>
                <Flex
                  pb={{ base: "20px", sm: "40px" }}
                  gap="9px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="20px"
                >
                  <Box h="385px" alignSelf="stretch" position="relative">
                    <Box
                      h="370px"
                      borderTopRightRadius="20px"
                      borderTopLeftRadius="20px"
                      bg="blue_gray.100"
                      w="100%"
                      position="absolute"
                      left="0px"
                      bottom="0px"
                      right="0px"
                      top="0px"
                      m="auto"
                    />
                    <Box
                      bg="light_green.A700"
                      w="9%"
                      position="absolute"
                      bottom="0.00px"
                      right="13%"
                      p="10px"
                      m="auto"
                      borderRadius="18px"
                    >
                      <Flex mt="5px" mb="7px" gap="19px" flexDirection="column" alignItems="center">
                        <Image src="images/img_close.svg" h="16px" w="100%" />
                        <Image src="images/img_save.svg" h="22px" />
                        <Image src="images/img_save.svg" h="16px" />
                        <Image src="images/img_save.svg" h="16px" />
                      </Flex>
                    </Box>
                  </Box>
                  <Flex
                    w={{ md: "80%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    p={{ md: "", base: "20px" }}
                  >
                    <Flex gap="10px" flexDirection="column" alignItems="start">
                      <Heading as="h3">Savannah Nguyen</Heading>
                      <Text color="gray.600">Nursing Assistant</Text>
                    </Flex>
                    <IconButton
                      size="4xl"
                      variant="outline"
                      icon={<Image src="images/img_arrow_left.svg" />}
                      aria-label="3766:2464-arrowleft_one"
                      w="60px"
                      borderRadius="30px"
                    />
                  </Flex>
                </Flex>
                <Flex
                  pb={{ base: "20px", sm: "40px" }}
                  gap="21px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="20px"
                >
                  <Box
                    h="370px"
                    borderTopRightRadius="20px"
                    borderTopLeftRadius="20px"
                    bg="blue_gray.100"
                    alignSelf="stretch"
                  />
                  <Flex
                    w={{ md: "80%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    p={{ md: "", base: "20px" }}
                  >
                    <Flex gap="12px" flexDirection="column" alignItems="start">
                      <Heading as="h4">Ronald Richards</Heading>
                      <Text color="gray.600">Dog Trainer</Text>
                    </Flex>
                    <IconButton
                      size="4xl"
                      variant="outline"
                      icon={<Image src="images/img_checkmark.svg" />}
                      aria-label="3766:2461-checkmark_one"
                      alignSelf="end"
                      w="60px"
                      borderRadius="30px"
                    />
                  </Flex>
                </Flex>
                <Flex
                  pb={{ base: "20px", sm: "40px" }}
                  gap="21px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="20px"
                >
                  <Box
                    h="370px"
                    borderTopRightRadius="20px"
                    borderTopLeftRadius="20px"
                    bg="blue_gray.100"
                    alignSelf="stretch"
                  />
                  <Flex
                    w={{ md: "80%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    p={{ md: "", base: "20px" }}
                  >
                    <Flex gap="10px" flexDirection="column" alignItems="start">
                      <Heading as="h5">Jacob Jones</Heading>
                      <Text color="gray.600">President of Sales</Text>
                    </Flex>
                    <IconButton
                      size="4xl"
                      variant="outline"
                      icon={<Image src="images/img_checkmark.svg" />}
                      aria-label="3768:2495-checkmark_one"
                      alignSelf="end"
                      w="60px"
                      borderRadius="30px"
                    />
                  </Flex>
                </Flex>
                <Flex
                  pb={{ base: "20px", sm: "40px" }}
                  gap="21px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="20px"
                >
                  <Box
                    h="370px"
                    borderTopRightRadius="20px"
                    borderTopLeftRadius="20px"
                    bg="blue_gray.100"
                    alignSelf="stretch"
                  />
                  <Flex
                    w={{ md: "80%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    p={{ md: "", base: "20px" }}
                  >
                    <Flex gap="10px" flexDirection="column" alignItems="start">
                      <Heading as="h6">Annette Black</Heading>
                      <Text color="gray.600">Medical Assistant</Text>
                    </Flex>
                    <IconButton
                      size="4xl"
                      variant="outline"
                      icon={<Image src="images/img_checkmark.svg" />}
                      aria-label="3768:2507-checkmark_one"
                      alignSelf="end"
                      w="60px"
                      borderRadius="30px"
                    />
                  </Flex>
                </Flex>
                <Flex
                  pb={{ base: "20px", sm: "40px" }}
                  gap="21px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="20px"
                >
                  <Box
                    h="370px"
                    borderTopRightRadius="20px"
                    borderTopLeftRadius="20px"
                    bg="blue_gray.100"
                    alignSelf="stretch"
                  />
                  <Flex
                    w={{ md: "80%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    p={{ md: "", base: "20px" }}
                  >
                    <Flex gap="12px" flexDirection="column" alignItems="start">
                      <Heading as="h5">Albert Flores</Heading>
                      <Text color="gray.600">Marketing Coordinator</Text>
                    </Flex>
                    <IconButton
                      size="4xl"
                      variant="outline"
                      icon={<Image src="images/img_checkmark.svg" />}
                      aria-label="3768:2483-checkmark_one"
                      alignSelf="end"
                      w="60px"
                      borderRadius="30px"
                    />
                  </Flex>
                </Flex>
                <Flex
                  pb={{ base: "20px", sm: "40px" }}
                  gap="24px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="20px"
                >
                  <Box
                    h="370px"
                    borderTopRightRadius="20px"
                    borderTopLeftRadius="20px"
                    bg="blue_gray.100"
                    alignSelf="stretch"
                  />
                  <Flex
                    w={{ md: "80%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    p={{ md: "", base: "20px" }}
                  >
                    <Flex gap="10px" flexDirection="column" alignItems="start">
                      <Heading as="h5">Cody Fisher</Heading>
                      <Text color="gray.600">Web Designer</Text>
                    </Flex>
                    <IconButton
                      size="4xl"
                      variant="outline"
                      icon={<Image src="images/img_checkmark.svg" />}
                      aria-label="3768:2531-checkmark_one"
                      w="60px"
                      borderRadius="30px"
                    />
                  </Flex>
                </Flex>
                <Flex
                  pb={{ base: "20px", sm: "40px" }}
                  gap="24px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="20px"
                >
                  <Box
                    h="370px"
                    borderTopRightRadius="20px"
                    borderTopLeftRadius="20px"
                    bg="blue_gray.100"
                    alignSelf="stretch"
                  />
                  <Flex
                    w={{ md: "80%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    p={{ md: "", base: "20px" }}
                  >
                    <Flex gap="8px" flexDirection="column" alignItems="start">
                      <Heading as="h5">Arlene McCoy</Heading>
                      <Text color="gray.600">Medical Assistant</Text>
                    </Flex>
                    <IconButton
                      size="4xl"
                      variant="outline"
                      icon={<Image src="images/img_checkmark.svg" />}
                      aria-label="3768:2543-checkmark_one"
                      w="60px"
                      borderRadius="30px"
                    />
                  </Flex>
                </Flex>
                <Flex
                  pb={{ base: "20px", sm: "40px" }}
                  gap="21px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="20px"
                >
                  <Box
                    h="370px"
                    borderTopRightRadius="20px"
                    borderTopLeftRadius="20px"
                    bg="blue_gray.100"
                    alignSelf="stretch"
                  />
                  <Flex
                    w={{ md: "80%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    p={{ md: "", base: "20px" }}
                  >
                    <Flex gap="12px" flexDirection="column" alignItems="start">
                      <Heading as="h5">Darlene Robertson</Heading>
                      <Text color="gray.600">Dog Trainer</Text>
                    </Flex>
                    <IconButton
                      size="4xl"
                      variant="outline"
                      icon={<Image src="images/img_checkmark.svg" />}
                      aria-label="3768:2519-checkmark_one"
                      alignSelf="end"
                      w="60px"
                      borderRadius="30px"
                    />
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
