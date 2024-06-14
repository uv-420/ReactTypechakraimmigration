import { Helmet } from "react-helmet";
import CoachingRowview from "../../components/CoachingRowview";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Image, Flex, Box, SimpleGrid, Container, Heading } from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  {},
  {
    oetcoaching: "IELTS Coaching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  {
    oetcoaching: "TOFEL Coaching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  {
    oetcoaching: "OET Coaching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  {
    oetcoaching: "OET Coaching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  {
    oetcoaching: "OET Coaching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  { oetcoaching: "Skills Exam", therearemany: "There are many variati of passages of engineer", readmore: "Read More" },
  {
    oetcoaching: "PTE Couching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  {
    oetcoaching: "SAT Couching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
];

export default function CoachingPage() {
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
            <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "156px", base: "20px" }} borderRadius="50px">
              <Container mb="31px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                <Flex flexDirection="column" alignItems="start">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Coaching
                  </Heading>
                  <Flex mt="-9px" gap="15px" position="relative" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" alignSelf="start" />
                    <Heading size="md" as="h3" color="white.A700">
                      Coaching
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Flex gap={{ md: "120px", base: "60px", sm: "90px" }} flexDirection="column">
              <SimpleGrid gap="30px" columns={{ md: 3, base: 1, sm: 2 }} justifyContent="center">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <CoachingRowview {...d} key={"coaching" + index} />
                  ))}
                </Suspense>
              </SimpleGrid>
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
            </Flex>
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
