import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SuccessstoryCard from "../../components/SuccessstoryCard";
import { IconButton, Image, Button, Flex, Box, SimpleGrid, Container, Heading } from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  {},
  {
    description:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    name: "Eleanor Pena",
    jobtitle: "Dog Trainer",
  },
  {
    description:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    name: "Ronald Richards",
    jobtitle: "President of Sales",
  },
  {
    description:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    name: "Savannah Nguyen",
    jobtitle: "Marketing Coordinator",
  },
  {
    description:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    name: "Jerome Bell",
    jobtitle: "Web Designer",
  },
  {
    description:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    name: "Annette Black",
    jobtitle: "Nursing Assistant",
  },
];

export default function SuccessstoryPage() {
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
            <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "157px", base: "20px" }} borderRadius="50px">
              <Container mb="31px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                <Flex flexDirection="column" alignItems="start">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Success Story
                  </Heading>
                  <Flex mt="-9px" gap="15px" position="relative" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" alignSelf="start" />
                    <Heading size="md" as="h3" color="white.A700">
                      Success Story
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Flex gap={{ md: "80px", base: "40px", sm: "60px" }} flexDirection="column" alignItems="center">
              <SimpleGrid alignSelf="stretch" gap="30px" columns={{ md: 2, base: 1 }} justifyContent="center">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <SuccessstoryCard {...d} key={"post" + index} boxShadow="xs" _hover={{ boxShadow: "xs" }} />
                  ))}
                </Suspense>
              </SimpleGrid>
              <Flex gap="15px">
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
                  aria-label="3830_53024_1042_2487_60_60-arrowleft"
                  w="60px"
                  borderRadius="5px"
                />
              </Flex>
            </Flex>
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
