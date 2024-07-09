import { Helmet } from "react-helmet";
import { SelectBox } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  Button,
  Textarea,
  Text,
  Flex,
  Image,
  InputRightElement,
  InputGroup,
  Center,
  Input,
  Heading,
  Container,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { Suspense } from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function GalleryPage() {
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
                <Flex w={{ md: "22%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Gallery
                  </Heading>
                  <Flex mt="-9px" gap="15px" position="relative" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" alignSelf="start" />
                    <Heading size="md" as="h3" color="white.A700">
                      Gallery
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <SimpleGrid gap="30px" columns={{ md: 3, base: 1, sm: 2 }} justifyContent="center">
              <Suspense fallback={<div>Loading feed...</div>}>
                {[...Array(6)].map((d, index) => (
                  <Box key={"gallery" + index} h="580px" bg="blue_gray.100" w="100%" borderRadius="20px" />
                ))}
              </Suspense>
            </SimpleGrid>
          </Container>
          <Flex
            gap={{ md: "120px", base: "60px", sm: "90px" }}
            alignSelf="stretch"
            flexDirection="column"
            alignItems="center"
          >
            <Container px="0px" p={{ md: "", base: "20px" }}>
              <Flex
                bg="white.A700"
                boxShadow="xs"
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                p={{ md: "42px", base: "20px" }}
                borderRadius="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex ml={{ md: "37px", base: "0px" }} w={{ md: "46%", base: "100%" }} flexDirection="column">
                  <Flex gap="10px" alignItems="center">
                    <Image src="images/img_frame_teal_900.svg" h="20px" w="20px" />
                    <Heading size="xs" letterSpacing="1.40px" textTransform="uppercase">
                      Success story
                    </Heading>
                  </Flex>
                  <Heading size="3xl" as="h3" mt="10px" lineHeight="60px">
                    Remote Destinations Seeking Solitude{" "}
                  </Heading>
                  <Text color="gray.600" mt="20px" lineHeight="30px">
                    Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry&#39;s
                    standard dummy text ever
                  </Text>
                  <Flex mt="20px" gap="10px" w={{ md: "35%", base: "100%" }} flexDirection="column">
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Heading size="md" as="h4">
                        Mistakes To Avoid
                      </Heading>
                    </Flex>
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Heading size="md" as="h5" alignSelf="end">
                        Your Startup
                      </Heading>
                    </Flex>
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Heading size="md" as="h6">
                        Knew About Fonts
                      </Heading>
                    </Flex>
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Heading size="md" as="h6">
                        Knew About Fonts
                      </Heading>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex mt="23px" mb="18px" gap="27px" w={{ md: "49%", base: "100%" }} flexDirection="column">
                  <Flex gap="8px" flexDirection="column">
                    <Flex w={{ md: "68%", base: "100%" }} justifyContent="space-between" flexWrap="wrap" gap="20px">
                      <Text>Your Email</Text>
                      <Text>Your Phone</Text>
                    </Flex>
                    <Flex gap="30px" flexDirection={{ base: "column", sm: "row" }}>
                      <InputGroup w="100%" variant="outline">
                        <Input
                          colorScheme="teal_900_3f"
                          placeholder={`Your Email`}
                          type="email"
                          pr="19px"
                          gap="35px"
                          borderRadius="30px"
                        />
                        <InputRightElement>
                          <Center w="14px" h="19px">
                            <Image src="images/img_linkedin.svg" w="14px" h="19px" />
                          </Center>
                        </InputRightElement>
                      </InputGroup>
                      <InputGroup w="100%" variant="outline">
                        <Input
                          colorScheme="teal_900_3f"
                          placeholder={`Your Phone`}
                          type="number"
                          pr="19px"
                          gap="35px"
                          borderRadius="30px"
                        />
                        <InputRightElement>
                          <Center w="14px" h="19px">
                            <Image src="images/img_linkedin.svg" w="14px" h="19px" />
                          </Center>
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Flex>
                  <Flex gap="8px" flexDirection="column" alignItems="start">
                    <Text>Your Address</Text>
                    <SelectBox
                      shape="round"
                      indicator={<Image src="images/img_linkedin.svg" w="11px" h="19px" />}
                      name="address"
                      placeholder={`Your Address`}
                      options={dropDownOptions}
                      style={{ gap: "1px", alignSelf: "stretch", pr: '{"base":"20px","sm":0}' }}
                    />
                  </Flex>
                  <Flex gap="6px" flexDirection="column" alignItems="start">
                    <Text>Message</Text>
                    <Textarea
                      variant="tarOutlineTeal9003f"
                      colorScheme="teal_900_3f"
                      placeholder={`Write Message..`}
                      color="teal.900_99"
                      gap="35px"
                      display="flex"
                      borderColor="teal.900_3f"
                      alignSelf="stretch"
                      borderRadius="20px"
                      pb={{ base: "20px", sm: 0 }}
                    />
                  </Flex>
                  <Button fontWeight={600} w="100%" borderRadius="30px" px={{ base: "20px", sm: "" }}>
                    Send Message
                  </Button>
                </Flex>
              </Flex>
            </Container>
            <Footer alignSelf="stretch" />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
