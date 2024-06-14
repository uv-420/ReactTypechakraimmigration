import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TeamdetailsRow from "../../components/TeamdetailsRow";
import {
  Button,
  Checkbox,
  Flex,
  Textarea,
  Input,
  Text,
  Heading,
  Box,
  Progress,
  Container,
  Image,
} from "@chakra-ui/react";
import React, { Suspense } from "react";

export default function TeamdetailsPage() {
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
                    Team Details
                  </Heading>
                  <Flex gap="15px" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" />
                    <Heading size="md" as="h3" color="white.A700">
                      Team Details
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Flex flexDirection="column" alignItems="start">
              <Flex
                alignSelf="stretch"
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Box h="425px" bg="blue_gray.100" w="35%" borderRadius="20px" />
                <Flex w={{ md: "56%", base: "100%" }} justifyContent="center">
                  <Flex w="100%" flexDirection="column" alignItems="start">
                    <Heading size="3xl">Ashikur Rahman</Heading>
                    <Flex mt="7px" gap="20px" w={{ md: "31%", base: "100%" }} alignItems="center">
                      <Box h="1px" bg="teal.900" w="35%" />
                      <Text color="gray.600">Medical Assistant</Text>
                    </Flex>
                    <Text color="gray.600" mt="13px" w="100%" lineHeight="30px">
                      Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                      posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
                      justo, posuere loborti viverra laoreet matti ullamcorper posuere
                    </Text>
                    <Flex mt="25px" gap="16px" alignItems="center" flexWrap="wrap">
                      <Heading size="md" as="h3" color="black.900_01">
                        Responsibility:
                      </Heading>
                      <Text color="gray.600">Visa Special</Text>
                    </Flex>
                    <Flex mt="20px" gap="16px" alignItems="center" flexWrap="wrap">
                      <Heading size="md" as="h4" color="black.900_01">
                        Experience:
                      </Heading>
                      <Text color="gray.600">10 years +</Text>
                    </Flex>
                    <Flex mt="19px" gap="15px" alignItems="center" flexWrap="wrap">
                      <Heading size="md" as="h5" color="black.900_01">
                        Email:
                      </Heading>
                      <Text color="gray.600" alignSelf="end">
                        adbs@gmail.com
                      </Text>
                    </Flex>
                    <Flex mt="18px" gap="15px" alignItems="center" flexWrap="wrap">
                      <Heading size="md" as="h6" color="black.900_01">
                        Phone:
                      </Heading>
                      <Text color="gray.600" alignSelf="end">
                        (907) 555-0101
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Heading size="xl" as="h3" mt="89px" textTransform="capitalize">
                Personal Experience
              </Heading>
              <Flex mt="15px" gap="30px" alignSelf="stretch" flexDirection="column">
                <Text color="gray.600" lineHeight="30px">
                  IELTS score is internationally recognized as an English Language proficiency requirement for higher
                  education, in almost all countries including the USA, the United Kingdom, Australia, Canada, and New
                  Zealand. The highest IELT Academic module test assesses whether you have adequate possible band score
                  is 9.0; most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate
                  admission. There are two versions of the{" "}
                </Text>
                <Text color="gray.600" lineHeight="30px">
                  IELTS score is internationally recognized as an English Language proficiency requirement for higher
                  education, in almost all countries including the USA, the United Kingdom, Australia, Canada, and New
                  Zealand. The highest IELT Academic module test assesses whether you have adequate possible band score
                  is 9.0; most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate
                  admission. There are two versions of the{" "}
                </Text>
              </Flex>
              <Box mt="29px" alignSelf="stretch">
                <Flex
                  justifyContent="space-between"
                  alignItems="start"
                  gap="20px"
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Flex w={{ md: "44%", base: "100%" }} flexDirection="column" alignItems="start">
                    <Heading size="xl" as="h3" textTransform="capitalize">
                      Professional Skill
                    </Heading>
                    <Box mt="33px" alignSelf="stretch">
                      <Flex gap="11px" flexDirection="column">
                        <Flex justifyContent="space-between" flexWrap="wrap" gap="20px">
                          <Text color="gray.600">Devoloping Process</Text>
                          <Text color="gray.600">70%</Text>
                        </Flex>
                        <Progress value={83} h="8px" bg="gray.300" borderRadius="4px" />
                      </Flex>
                    </Box>
                    <Flex mt="20px" gap="37px" alignSelf="stretch" flexDirection="column">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {[...Array(2)].map((d, index) => (
                          <TeamdetailsRow key={"teamdetails" + index} />
                        ))}
                      </Suspense>
                    </Flex>
                  </Flex>
                  <Flex
                    gap="23px"
                    bg="light_green.50_01"
                    w={{ md: "49%", base: "100%" }}
                    flexDirection="column"
                    alignItems="start"
                    p={{ base: "20px", sm: "39px" }}
                    borderRadius="20px"
                  >
                    <Heading size="xl" as="h3" textTransform="capitalize">
                      Contact Me
                    </Heading>
                    <Text>By using form u agree with the message sorage, you</Text>
                    <Flex gap="25px" alignSelf="stretch" flexDirection="column">
                      <Flex gap="30px" flexDirection={{ base: "column", sm: "row" }}>
                        <Input
                          size="xs"
                          colorScheme="white_A700"
                          placeholder={`Your Name`}
                          type="text"
                          color="gray.600"
                          w="100%"
                          borderRadius="20px"
                          pr={{ base: "20px", sm: 0 }}
                        />
                        <Input
                          size="xs"
                          colorScheme="white_A700"
                          placeholder={`Your Email`}
                          type="email"
                          color="gray.600"
                          w="100%"
                          borderRadius="20px"
                          pr={{ base: "20px", sm: 0 }}
                        />
                      </Flex>
                      <Textarea
                        size="sm"
                        placeholder={`Write your messege`}
                        color="gray.600"
                        borderRadius="20px"
                        pb={{ base: "20px", sm: 0 }}
                        pr={{ base: "20px", sm: 0 }}
                      />
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        gap="20px"
                        flexDirection={{ base: "column", sm: "row" }}
                      >
                        <Checkbox value="false" color="teal.900" mb="11px" fontSize="16px" gap="10px" alignSelf="end">
                          Save my name email
                        </Checkbox>
                        <Button
                          size="xl"
                          fontWeight={600}
                          minW="202px"
                          borderRadius="25px"
                          px={{ base: "20px", sm: "" }}
                        >
                          Post comment
                        </Button>
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
