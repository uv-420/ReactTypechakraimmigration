import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeTwo1 from "../../components/HomeTwo1";
import {
  Heading,
  Box,
  Flex,
  SimpleGrid,
  Image,
  Container,
  Button,
  Textarea,
  Text,
  InputRightElement,
  InputGroup,
  Center,
  Input,
  IconButton,
} from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  { visavoyage: "Visa Voyage Agency" },
  { visavoyage: "International Access Visas" },
  { visavoyage: "Gateway to Global Citizenship" },
];
const data1 = [
  { germany: "Germany" },
  { germany: "South Korea" },
  { germany: "Japan" },
  { germany: "Indonesia" },
  { germany: "South Africa" },
  { germany: "Turkey" },
];
const data2 = [
  { k: "10k+", complete: "Complete project" },
  { k: "20+", complete: "Team member" },
  { k: "5k+", complete: "Winning award" },
  { k: "100+", complete: "Complete project" },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>DhiWise web app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box pt={{ base: "20px", sm: "30px" }} bg="white.A700" w="100%">
        <Flex gap={{ md: "120px", base: "60px", sm: "90px" }} flexDirection="column" alignItems="center">
          <Flex w={{ md: "94%", base: "100%" }} flexDirection="column" alignItems="center" p={{ md: "", base: "20px" }}>
            <Flex gap="30px" alignSelf="stretch" flexDirection="column">
              <Header flexDirection={{ md: "row", base: "column" }} />
              <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "148px", base: "20px" }} borderRadius="50px">
                <Container mb="39px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                  <Flex flexDirection="column" alignItems="start">
                    <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                      About Us
                    </Heading>
                    <Flex gap="15px" alignItems="center" flexWrap="wrap">
                      <Heading size="md" color="white.A700">
                        Home
                      </Heading>
                      <Image src="images/img_save.svg" h="16px" />
                      <Heading size="md" as="h3" color="white.A700">
                        About Us
                      </Heading>
                    </Flex>
                  </Flex>
                </Container>
              </Flex>
            </Flex>
            <Container mt="100px" px="0px">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex
                  gap="22px"
                  w={{ md: "45%", base: "100%" }}
                  justifyContent="center"
                  alignItems="center"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Flex gap="38px" w="100%" flexDirection="column" alignItems="end">
                    <Box h="368px" alignSelf="stretch" position="relative">
                      <Box
                        h="357px"
                        bg="blue_gray.100"
                        w="97%"
                        position="absolute"
                        left="0px"
                        bottom="0px"
                        right="0px"
                        top="0px"
                        m="auto"
                        borderRadius="20px"
                      />
                      <Box
                        h="346px"
                        borderColor="light_green.A700"
                        borderWidth="1px"
                        borderStyle="solid"
                        w="95%"
                        position="absolute"
                        bottom="0.00px"
                        right="0.00px"
                        m="auto"
                        borderRadius="20px"
                      />
                    </Box>
                    <Box
                      mr={{ md: "26px", base: "0px" }}
                      borderColor="teal.900_4c"
                      borderWidth="2px"
                      borderStyle="solid"
                      w={{ md: "82%", base: "100%" }}
                      p="16px"
                      borderRadius="103px"
                    >
                      <Box>
                        <Flex alignItems="start" flexWrap="wrap">
                          <Text size="xs" mt="50px" fontSize="11.48px" transform="rotate(69deg)">
                            A
                          </Text>
                          <Text
                            size="xs"
                            mb="13px"
                            ml="-3px"
                            fontSize="11.48px"
                            transform="rotate(60deg)"
                            position="relative"
                          >
                            g
                          </Text>
                          <Text size="xs" ml="-4px" fontSize="11.48px" transform="rotate(50deg)" position="relative">
                            e
                          </Text>
                          <Text size="xs" mt="18px" fontSize="11.48px" transform="rotate(40deg)">
                            n
                          </Text>
                          <Text size="xs" mt="10px" fontSize="11.48px" transform="rotate(30deg)">
                            c
                          </Text>
                          <Text size="xs" mt="6px" fontSize="11.48px" transform="rotate(21deg)">
                            y
                          </Text>
                          <Text size="xs" ml="17px" fontSize="11.48px">
                            W
                          </Text>
                          <Text size="xs" fontSize="11.48px" transform="rotate(-10deg)">
                            o
                          </Text>
                          <Text size="xs" mt="6px" ml="5px" fontSize="11.48px" transform="rotate(-21deg)">
                            r
                          </Text>
                          <Text size="xs" mt="10px" ml="6px" fontSize="11.48px" transform="rotate(-30deg)">
                            l
                          </Text>
                          <Text size="xs" h="12px" mt="18px" fontSize="11.48px" transform="rotate(-40deg)" w="12px">
                            d
                          </Text>
                          <Text
                            size="xs"
                            mb="25px"
                            ml="-3px"
                            fontSize="11.48px"
                            transform="rotate(-50deg)"
                            position="relative"
                          >
                            w
                          </Text>
                          <Text
                            size="xs"
                            mb="13px"
                            ml="-2px"
                            fontSize="11.48px"
                            transform="rotate(-60deg)"
                            position="relative"
                          >
                            i
                          </Text>
                          <Text
                            size="xs"
                            h="13px"
                            ml="-4px"
                            fontSize="11.48px"
                            transform="rotate(-69deg)"
                            position="relative"
                            w="12px"
                          >
                            d
                          </Text>
                        </Flex>
                        <Flex mt="-4px" position="relative" justifyContent="space-between" alignItems="end" gap="20px">
                          <Flex flexDirection="column" alignItems="center">
                            <Text size="xs" fontSize="11.48px" zIndex={1} transform="rotate(90deg)" position="relative">
                              n
                            </Text>
                            <Text size="xs" mt="-1px" fontSize="11.48px" transform="rotate(100deg)" position="relative">
                              o
                            </Text>
                          </Flex>
                          <Image src="images/img_search.svg" h="45px" w="45px" />
                          <Flex gap="12px" flexDirection="column" alignItems="start">
                            <Text size="xs" fontSize="11.48px" transform="rotate(-80deg)">
                              e
                            </Text>
                            <Text size="xs" fontSize="11.48px" transform="rotate(-100deg)" alignSelf="center">
                              A
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex mt="-3px" position="relative" alignItems="end" flexWrap="wrap">
                          <Text size="xs" fontSize="11.48px" zIndex={2} transform="rotate(111deg)" position="relative">
                            i
                          </Text>
                          <Text
                            size="xs"
                            mt="13px"
                            ml="-3px"
                            fontSize="11.48px"
                            zIndex={3}
                            transform="rotate(120deg)"
                            position="relative"
                          >
                            t
                          </Text>
                          <Text
                            size="xs"
                            mt="24px"
                            ml="-1px"
                            fontSize="11.48px"
                            transform="rotate(130deg)"
                            position="relative"
                          >
                            a
                          </Text>
                          <Text size="xs" mt="32px" mb="18px" fontSize="11.48px" transform="rotate(140deg)">
                            r
                          </Text>
                          <Text size="xs" mb="12px" fontSize="11.48px" transform="rotate(150deg)">
                            g
                          </Text>
                          <Text size="xs" ml="4px" fontSize="11.48px" transform="rotate(159deg)">
                            i
                          </Text>
                          <Text size="xs" fontSize="11.48px" transform="rotate(170deg)">
                            m
                          </Text>
                          <Text size="xs" fontSize="11.48px" transform="rotate(-180deg)">
                            m
                          </Text>
                          <Text size="xs" ml="8px" fontSize="11.48px" transform="rotate(-170deg)">
                            I
                          </Text>
                          <Text size="xs" mb="9px" ml="18px" fontSize="11.48px" transform="rotate(-150deg)">
                            s
                          </Text>
                          <Text
                            size="xs"
                            mb="17px"
                            fontSize="11.48px"
                            zIndex={4}
                            transform="rotate(-140deg)"
                            position="relative"
                          >
                            s
                          </Text>
                          <Text size="xs" fontSize="11.48px" zIndex={5} transform="rotate(-130deg)" position="relative">
                            e
                          </Text>
                          <Text
                            size="xs"
                            mt="13px"
                            ml="-1px"
                            fontSize="11.48px"
                            zIndex={6}
                            transform="rotate(-120deg)"
                            position="relative"
                          >
                            c
                          </Text>
                          <Text size="xs" ml="-3px" fontSize="11.48px" transform="rotate(-111deg)" position="relative">
                            c
                          </Text>
                        </Flex>
                      </Box>
                    </Box>
                  </Flex>
                  <Flex gap="23px" w="100%" flexDirection="column">
                    <Flex
                      gap="20px"
                      bg="light_green.A700"
                      justifyContent="center"
                      alignItems="center"
                      p={{ base: "20px", sm: "30px" }}
                      borderRadius="20px"
                    >
                      <Heading size="3xl" as="h4" color="white.A700" alignSelf="end">
                        25
                      </Heading>
                      <Heading size="md" as="h5" color="white.A700" w="65%" lineHeight="28px">
                        Years Of experience
                      </Heading>
                    </Flex>
                    <Box h="464px" bg="blue_gray.100" borderRadius="20px" />
                  </Flex>
                </Flex>
                <Flex gap="35px" w={{ md: "49%", base: "100%" }} flexDirection="column">
                  <Flex flexDirection="column">
                    <Flex gap="10px" alignItems="center">
                      <Image src="images/img_frame_teal_900.svg" h="20px" w="20px" />
                      <Heading size="xs" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                        Why Choose Us
                      </Heading>
                    </Flex>
                    <Heading size="3xl" as="h1" mt="10px" lineHeight="60px">
                      <Heading size="3xl" as="span" color="gray.900_01">
                        Where Wanderlust Meets&nbsp;
                      </Heading>
                      <Heading size="3xl" as="span" color="teal.900">
                        Dream Destinations &nbsp;
                      </Heading>
                    </Heading>
                    <Text color="gray.600" mt="20px" lineHeight="30px">
                      <Text as="span" color="gray.600">
                        Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu
                        massa&nbsp;
                      </Text>
                      <Text as="span" color="gray.600">
                        Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et
                        purus duis sollicitudin dignissim habitant. Egestas nulla
                      </Text>
                    </Text>
                  </Flex>
                  <Box>
                    <Flex gap="42px" flexDirection="column">
                      <Flex gap="30px" flexDirection={{ md: "row", base: "column" }}>
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {[...Array(2)].map((d, index) => (
                            <HomeTwo1
                              dynamicproperty2="Passport Plus"
                              dynamicproperty4="Beyond Border Immigration"
                              dynamicproperty6="Worldwide Visa Assistance"
                              key={"list006Browser" + index}
                            />
                          ))}
                        </Suspense>
                      </Flex>
                      <Flex
                        w={{ md: "63%", base: "100%" }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap="20px"
                      >
                        <Button
                          variant="outline"
                          rightIcon={<Image src="images/img_arrow_left.svg" w="14px" h="14px" />}
                          fontWeight={600}
                          gap="10px"
                          minW="157px"
                          borderRadius="30px"
                          px={{ base: "20px", sm: "" }}
                        >
                          Read More
                        </Button>
                        <Flex gap="15px" w="50%" justifyContent="center" alignItems="center">
                          <IconButton
                            size="3xl"
                            icon={<Image src="images/img_save.svg" />}
                            aria-label="3435_27_1172_1232_55_55-save_three"
                            w="55px"
                            borderRadius="27px"
                          />
                          <Flex gap="6px" alignSelf="end" flex={1} flexDirection="column" alignItems="start">
                            <Text>Need help?</Text>
                            <Heading size="md" as="h6">
                              (808) 555-0111
                            </Heading>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Container>
            <Box
              mt="162px"
              alignSelf="stretch"
              borderColor="gray.300"
              borderWidth="1px"
              borderStyle="solid"
              bg="white.A700"
              borderRadius="50px"
            >
              <Center
                h={{ md: "730px", base: "auto" }}
                bgImage="url(/images/img_group_28_teal_900.png)"
                bgSize="cover"
                bgRepeat="no-repeat"
                py={{ md: "119px", base: "20px" }}
                borderRadius="50px"
              >
                <Container display="flex" justifyContent="center" px="0px" p={{ md: "", base: "20px" }}>
                  <Flex gap={{ base: "30px", sm: "60px" }} w="100%" flexDirection="column" alignItems="center">
                    <Flex gap="10px" w={{ md: "49%", base: "100%" }} flexDirection="column" alignItems="center">
                      <Flex gap="10px" alignItems="center">
                        <Image src="images/img_frame_teal_900.svg" h="20px" w="20px" />
                        <Heading size="xs" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                          Process Overview
                        </Heading>
                      </Flex>
                      <Heading size="3xl" as="h1" textAlign="center" w="100%" lineHeight="60px">
                        Unforgettable Getaways Escaping Routine{" "}
                      </Heading>
                    </Flex>
                    <Flex gap="30px" alignSelf="stretch" flexDirection={{ md: "row", base: "column" }}>
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                          <Flex
                            key={"listvisavoyage" + index}
                            mb={{ md: "40px", base: "0px" }}
                            gap="17px"
                            bg="white.A700"
                            boxShadow="xs"
                            w="100%"
                            flexDirection="column"
                            alignItems="start"
                            p={{ base: "20px", sm: "30px" }}
                            borderRadius="20px"
                          >
                            <Heading as="h5" mt="74px" ml={{ md: "10px", base: "0px" }}>
                              {d.visavoyage}
                            </Heading>
                            <Text alignSelf="center" w={{ md: "94%", base: "100%" }} lineHeight="30px">
                              Lorem Ipsum is simply dummy text the printing and typeser
                            </Text>
                          </Flex>
                        ))}
                      </Suspense>
                    </Flex>
                  </Flex>
                </Container>
              </Center>
            </Box>
            <Container mt="119px" px="0px">
              <Flex gap={{ md: "119px", base: "59px", sm: "89px" }} flexDirection="column">
                <Box>
                  <Flex gap="30px" flexDirection={{ md: "row", base: "column" }}>
                    <Box h="608px" bg="blue_gray.100" w="33%" borderRadius="20px" />
                    <Flex gap="30px" flex={1} flexDirection="column" alignSelf="stretch">
                      <Box pl={{ md: "60px", base: "20px" }} bg="white.A700" borderRadius="20px">
                        <Flex alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                          <Flex gap="21px" flex={1} flexDirection="column" alignItems="start" alignSelf="stretch">
                            <Center bg="light_green.A700" flexDirection="column" p="17px" borderRadius="40px">
                              <Image src="images/img_050_worldwide.svg" h="45px" w="45px" />
                            </Center>
                            <Flex gap="23px" alignSelf="stretch" flexDirection="column" alignItems="start">
                              <Flex gap="10px" alignSelf="stretch" flexDirection="column" alignItems="start">
                                <Heading as="h5">Get our best offers quickly</Heading>
                                <Text color="gray.600" w="100%" lineHeight="30px">
                                  Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the
                                  industry&#39;s standard dummy
                                </Text>
                              </Flex>
                              <Button
                                variant="outline"
                                colorScheme="gray_300"
                                rightIcon={<Image src="images/img_arrow_left.svg" w="14px" h="14px" />}
                                color="teal.900"
                                fontWeight={600}
                                gap="10px"
                                minW="158px"
                                borderRadius="30px"
                                px={{ base: "20px", sm: "" }}
                              >
                                Contact us
                              </Button>
                            </Flex>
                          </Flex>
                          <Image
                            src="images/img_rectangle_5354.svg"
                            h="363px"
                            w={{ md: "40%", base: "100%" }}
                            borderRadius="20px"
                          />
                        </Flex>
                      </Box>
                      <Flex
                        pl="59px"
                        pr="56px"
                        gap="62px"
                        bg="light_green.A700"
                        py="59px"
                        borderRadius="20px"
                        flexDirection={{ md: "row", base: "column" }}
                        p={{ md: "", base: "20px" }}
                      >
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {data2.map((d, index) => (
                            <Flex key={"counter" + index} gap="9px" flex={1} flexDirection="column" alignItems="start">
                              <Heading size="3xl" as="h1" color="white.A700">
                                {d.k}
                              </Heading>
                              <Text color="white.A700">{d.complete}</Text>
                            </Flex>
                          ))}
                        </Suspense>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
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
            <Flex
              mt="120px"
              bg="light_green.50_01"
              alignSelf="stretch"
              justifyContent="center"
              py={{ md: "119px", base: "20px" }}
              borderRadius="50px"
            >
              <Container
                mt="19px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                px="0px"
                flexDirection={{ md: "row", base: "column" }}
                p={{ md: "", base: "20px" }}
              >
                <Box w={{ md: "47%", base: "100%" }}>
                  <Image src="images/img_image.svg" h={{ md: "671px", base: "auto" }} w="100%" />
                </Box>
                <Flex gap="40px" w={{ md: "49%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Flex gap="7px" w={{ md: "86%", base: "100%" }} flexDirection="column">
                    <Flex gap="10px" alignItems="start">
                      <Heading size="xs" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                        Contact Information
                      </Heading>
                      <Image src="images/img_object.svg" h="12px" w="13px" />
                    </Flex>
                    <Heading size="3xl" as="h1" lineHeight="60px">
                      Let Your Wanderlust Guide You
                    </Heading>
                  </Flex>
                  <Box bg="white.A700" alignSelf="stretch" p={{ base: "20px", sm: "40px" }} borderRadius="20px">
                    <Flex mt="5px" flexDirection="column" alignItems="start">
                      <Flex w={{ md: "68%", base: "100%" }} justifyContent="space-between" flexWrap="wrap" gap="20px">
                        <Text>Your Email</Text>
                        <Text>Your Phone</Text>
                      </Flex>
                      <Flex mt="8px" gap="30px" alignSelf="stretch" flexDirection={{ base: "column", sm: "row" }}>
                        <InputGroup w="100%">
                          <Input
                            colorScheme="white_A700"
                            placeholder={`Your Email`}
                            type="email"
                            pr="19px"
                            gap="35px"
                            borderColor="gray.300"
                            borderWidth="1px"
                            borderRadius="30px"
                          />
                          <InputRightElement>
                            <Center w="14px" h="19px">
                              <Image src="images/img_arrow_left.svg" w="14px" h="19px" />
                            </Center>
                          </InputRightElement>
                        </InputGroup>
                        <InputGroup w="100%">
                          <Input
                            colorScheme="white_A700"
                            placeholder={`Your Phone`}
                            type="number"
                            pr="19px"
                            gap="35px"
                            borderColor="gray.300"
                            borderWidth="1px"
                            borderRadius="30px"
                          />
                          <InputRightElement>
                            <Center w="14px" h="19px">
                              <Image src="images/img_arrow_left.svg" w="14px" h="19px" />
                            </Center>
                          </InputRightElement>
                        </InputGroup>
                      </Flex>
                      <Text mt="25px">Your Address</Text>
                      <InputGroup mt="8px">
                        <Input
                          colorScheme="white_A700"
                          placeholder={`Your Address`}
                          pr="19px"
                          gap="35px"
                          borderColor="gray.300"
                          borderWidth="1px"
                          alignSelf="stretch"
                          borderRadius="30px"
                        />
                        <InputRightElement>
                          <Center w="11px" h="19px">
                            <Image src="images/img_arrow_left.svg" w="11px" h="19px" />
                          </Center>
                        </InputRightElement>
                      </InputGroup>
                      <Text mt="27px">Message</Text>
                      <Textarea
                        variant="tarOutlineGray300"
                        placeholder={`Write Message..`}
                        color="teal.900_99"
                        mt="6px"
                        gap="35px"
                        display="flex"
                        borderColor="gray.300"
                        alignSelf="stretch"
                        borderRadius="30px"
                        pb={{ base: "20px", sm: 0 }}
                      />
                      <Button mt="20px" fontWeight={600} w="100%" borderRadius="30px" px={{ base: "20px", sm: "" }}>
                        Send Message
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </Container>
            </Flex>
            <Container mt="118px" px="0px">
              <Box>
                <Flex gap="50px" flexDirection="column" alignItems="center">
                  <Flex gap="7px" w={{ md: "49%", base: "100%" }} flexDirection="column" alignItems="center">
                    <Flex gap="10px" alignItems="start">
                      <Heading size="xs" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                        Countries category
                      </Heading>
                      <Image src="images/img_object.svg" h="12px" w="13px" />
                    </Flex>
                    <Heading size="3xl" as="h1" color="gray.900_01" textAlign="center" w="100%" lineHeight="60px">
                      Experience the World Anew Unveil Hidden{" "}
                    </Heading>
                  </Flex>
                  <Flex gap="30px" alignSelf="stretch" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
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
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="teal.900_4c">
                          Asia
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                      </Flex>
                      <Box h="1px" bg="gray.300" />
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="teal.900_4c">
                          Europe
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" />
                      </Flex>
                      <Box h="1px" bg="gray.300" />
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5">North America</Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                      </Flex>
                      <Box h="1px" bg="gray.300" />
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="teal.900_4c">
                          Australia
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                      </Flex>
                      <Box h="1px" bg="gray.300" />
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="teal.900_4c">
                          Latine America
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                      </Flex>
                      <Box h="1px" bg="gray.300" />
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="teal.900_4c">
                          Africa
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                      </Flex>
                    </Flex>
                    <SimpleGrid flex={1} gap="30px" columns={{ md: 2, base: 1 }} alignSelf="stretch">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data1.map((d, index) => (
                          <Flex
                            key={"gridview" + index}
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
                </Flex>
              </Box>
            </Container>
          </Flex>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
