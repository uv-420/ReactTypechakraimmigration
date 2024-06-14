import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VisaoffersSix from "../../components/VisaoffersSix";
import { Box, SimpleGrid, Container, Heading, Image, Flex } from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  {},
  {
    countrytext: "South Korea",
    descriptiontext: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
    applybutton: "Apply Now",
    thirtythousandbutton: "$380.00",
  },
  {
    countrytext: "Turkey",
    descriptiontext: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
    applybutton: "Apply Now",
    thirtythousandbutton: "$200.00",
  },
  {
    countrytext: "South Africa",
    descriptiontext: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
    applybutton: "Apply Now",
    thirtythousandbutton: "$290.00",
  },
  {
    countrytext: "Germany",
    descriptiontext: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
    applybutton: "Apply Now",
    thirtythousandbutton: "$350.00",
  },
  {
    countrytext: "Japan",
    descriptiontext: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
    applybutton: "Apply Now",
    thirtythousandbutton: "$310.00",
  },
];

export default function VisaoffersPage() {
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
            <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "148px", base: "20px" }} borderRadius="50px">
              <Container mb="39px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                <Flex flexDirection="column" alignItems="start">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Visa Offers
                  </Heading>
                  <Flex gap="15px" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" />
                    <Heading size="md" as="h3" color="white.A700">
                      Visa Offers
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <SimpleGrid gap="30px" columns={{ md: 2, base: 1 }} justifyContent="center">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <VisaoffersSix {...d} key={"post" + index} />
                ))}
              </Suspense>
            </SimpleGrid>
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
