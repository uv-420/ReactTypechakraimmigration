import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Heading, Box, Flex, SimpleGrid, Image, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  { germany: "Germany" },
  { germany: "South Korea" },
  { germany: "Japan" },
  { germany: "Indonesia" },
  { germany: "South Africa" },
  { germany: "Turkey" },
  { germany: "Egypt" },
  { germany: "Argentina" },
  { germany: "Brazil" },
  { germany: "Mexico" },
  { germany: "Indonesia" },
  { germany: "Russia" },
];

export default function CountriesPage() {
  return (
    <>
      <Helmet>
        <title>DhiWise web app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex
        pt={{ base: "20px", sm: "30px" }}
        gap={{ md: "121px", base: "60px", sm: "90px" }}
        bg="white.A700"
        w="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Flex
          gap={{ md: "100px", base: "50px", sm: "75px" }}
          w={{ md: "94%", base: "100%" }}
          flexDirection="column"
          alignItems="center"
          p={{ md: "", base: "20px" }}
        >
          <Flex gap="30px" alignSelf="stretch" flexDirection="column">
            <Header flexDirection={{ md: "row", base: "column" }} />
            <Flex
              pl="148px"
              pr="56px"
              bg="teal.900_cc"
              flexDirection="column"
              alignItems="start"
              justifyContent="center"
              py="148px"
              borderRadius="50px"
              p={{ md: "", base: "20px" }}
            >
              <Heading
                size="4xl"
                as="h1"
                color="white.A700"
                ml={{ md: "106px", base: "0px" }}
                textTransform="capitalize"
              >
                Countries
              </Heading>
              <Flex mb="39px" ml={{ md: "106px", base: "0px" }} gap="15px" alignItems="center" flexWrap="wrap">
                <Heading size="md" color="white.A700">
                  Home
                </Heading>
                <Image src="images/img_save.svg" h="16px" />
                <Heading size="md" as="h3" color="white.A700">
                  Countries
                </Heading>
              </Flex>
            </Flex>
          </Flex>
          <Container px="0px">
            <Flex gap="30px" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
              <Flex
                borderBottomLeftRadius="20px"
                borderBottomRightRadius="20px"
                gap="20px"
                bg="white.A700"
                boxShadow="xs"
                w={{ md: "33%", base: "100%" }}
                flexDirection="column"
                p={{ base: "20px", sm: "40px" }}
              >
                <Box>
                  <Flex gap="20px" flexDirection="column">
                    <Flex justifyContent="space-between" alignItems="start" gap="20px">
                      <Heading>Asia</Heading>
                      <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                    </Flex>
                    <Box h="1px" bg="gray.300" />
                  </Flex>
                </Box>
                <Flex justifyContent="space-between" alignItems="start" gap="20px">
                  <Heading as="h3">Europe</Heading>
                  <Image src="images/img_arrow_left.svg" h="14px" />
                </Flex>
                <Flex gap="20px" flexDirection="column">
                  <Box h="1px" bg="gray.300" />
                  <Flex justifyContent="space-between" alignItems="start" gap="20px">
                    <Heading as="h4" color="light_green.A700">
                      North America
                    </Heading>
                    <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                  </Flex>
                  <Box h="1px" bg="gray.300" />
                </Flex>
                <Flex justifyContent="space-between" alignItems="start" gap="20px">
                  <Heading as="h5">Australia</Heading>
                  <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                </Flex>
                <Box h="1px" bg="gray.300" />
                <Flex justifyContent="space-between" alignItems="start" gap="20px">
                  <Heading as="h6">Latine America</Heading>
                  <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                </Flex>
                <Flex gap="20px" flexDirection="column">
                  <Box h="1px" bg="gray.300" />
                  <Flex justifyContent="space-between" alignItems="start" gap="20px">
                    <Heading as="h5">Africa</Heading>
                    <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                  </Flex>
                </Flex>
              </Flex>
              <SimpleGrid flex={1} gap="30px" columns={{ md: 2, base: 1 }} alignSelf="stretch">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <Flex
                      key={"countries" + index}
                      gap="30px"
                      borderColor="gray.300"
                      borderWidth="1px"
                      borderStyle="solid"
                      bg="white.A700"
                      w="100%"
                      cursor="pointer"
                      alignItems="center"
                      p="20px"
                      borderRadius="20px"
                      _hover={{
                        borderColor: "light_green.A700",
                        borderWidth: 1,
                        borderStyle: "solid",
                        boxShadow: "xs",
                      }}
                    >
                      <Box
                        h="80px"
                        ml="10px"
                        borderColor="light_green.A700"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="blue_gray.100"
                        w="24%"
                        borderRadius="40px"
                      />
                      <Heading as="h5" mb="22px" alignSelf="end">
                        {d.germany}
                      </Heading>
                    </Flex>
                  ))}
                </Suspense>
              </SimpleGrid>
            </Flex>
          </Container>
        </Flex>
        <Footer alignSelf="stretch" />
      </Flex>
    </>
  );
}
