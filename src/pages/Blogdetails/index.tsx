import { Helmet } from "react-helmet";
import BlogdetailsStackview from "../../components/BlogdetailsStackview";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Box,
  Heading,
  Text,
  InputRightElement,
  InputGroup,
  Image,
  Center,
  Input,
  Checkbox,
  Textarea,
  IconButton,
  Container,
} from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  {},
  { datetext: "October 19, 2022", findyourtext: "Ravel Beyond Your Imagination" },
  { datetext: "October 19, 2022", findyourtext: "Adventure Awaits Around Every Corner" },
];

export default function BlogdetailsPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

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
                    Blog Details
                  </Heading>
                  <Flex mt="-9px" gap="15px" position="relative" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" alignSelf="start" />
                    <Heading size="md" as="h3" color="white.A700">
                      Blog Details
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Flex gap="30px" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
              <Flex flex={1} flexDirection="column" alignItems="start" alignSelf="stretch">
                <Box h="416px" bg="blue_gray.100" alignSelf="stretch" borderRadius="20px" />
                <Flex mt="26px" w={{ md: "49%", base: "100%" }} flexDirection={{ base: "column", sm: "row" }}>
                  <Flex gap="5px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text color="gray.900_03">By admin</Text>
                  </Flex>
                  <Flex ml={{ base: "0px", sm: "16px" }} gap="5px" flex={1} alignItems="center" alignSelf="stretch">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text color="gray.900_03">October 30, 2024</Text>
                  </Flex>
                  <Flex ml={{ base: "0px", sm: "20px" }} gap="4px" flex={1} alignItems="center" alignSelf="stretch">
                    <Image src="images/img_checkmark.svg" h="16px" w="15px" />
                    <Text color="gray.900_03">Comments (05)</Text>
                  </Flex>
                </Flex>
                <Flex mt="26px" gap="10px" alignSelf="stretch" flexDirection="column" alignItems="start">
                  <Heading size="3xl">Unity Bridge Visa Consultants</Heading>
                  <Text color="gray.600" w="100%" lineHeight="30px">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam
                    eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                    posu Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                    eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posu
                  </Text>
                  <Text color="gray.600" w="100%" lineHeight="30px">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam
                    eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                    posu
                  </Text>
                </Flex>
                <Box mt="30px" alignSelf="stretch">
                  <Flex gap="29px" flexDirection={{ md: "row", base: "column" }}>
                    <Box h="342px" bg="blue_gray.100" w="100%" borderRadius="20px" />
                    <Flex w="100%" flexDirection="column">
                      <Heading size="xl" as="h3" textTransform="capitalize" lineHeight="36px">
                        Explore Beyond Boundaries Wanderlust Unleashed
                      </Heading>
                      <Text color="gray.600" mt="20px" lineHeight="30px">
                        Aliquam eros justo, posuere loborti viverra laoreet mat ti ullamcorper posuere viverra .Aliquam
                        eros justo, po suere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                        Aliquam
                      </Text>
                      <Flex mt="20px" gap="14px" alignItems="center">
                        <Image src="images/img_checkmark.svg" h="16px" />
                        <Text color="black.900_01">Mistakes To Avoid</Text>
                      </Flex>
                      <Flex mt="10px" gap="14px" alignItems="center">
                        <Image src="images/img_checkmark.svg" h="16px" />
                        <Text color="black.900_01" alignSelf="end">
                          Your Startup
                        </Text>
                      </Flex>
                      <Flex mt="10px" gap="14px" alignItems="center">
                        <Image src="images/img_checkmark.svg" h="16px" />
                        <Text color="black.900_01">Knew About Fonts</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <Flex
                  mt="30px"
                  gap="20px"
                  bg="white.A700"
                  boxShadow="xs"
                  alignSelf="stretch"
                  flexDirection="column"
                  alignItems="start"
                  justifyContent="center"
                  p={{ md: "50px", base: "20px" }}
                  borderRadius="20px"
                >
                  <IconButton
                    size="2xl"
                    variant="outline"
                    icon={<Image src="images/img_close_light_green_a700.svg" />}
                    aria-label="3435_302_365_1980_51_51-close_one"
                    w="51px"
                    borderRadius="25px"
                  />
                  <Text size="md" w="100%" lineHeight="30px">
                    With a commitment to driving technological evolution, our IT solutions and tour desigm services are
                    the cornerstone of your digital progression. We transcend boundariesi enabling businesses to not{" "}
                  </Text>
                  <Flex gap="10px" flexDirection="column" alignItems="start">
                    <Heading as="h4">Stanio lainto</Heading>
                    <Text color="gray.600">Authore</Text>
                  </Flex>
                </Flex>
                <Heading size="xl" as="h5" mt="32px" textTransform="capitalize">
                  Roam the Globe Write Your Story
                </Heading>
                <Flex mt="15px" gap="30px" alignSelf="stretch" flexDirection="column">
                  <Text color="gray.600" lineHeight="30px">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam
                    eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                    posu Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                    eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posu
                  </Text>
                  <Box>
                    <Flex gap="39px" flexDirection="column">
                      <Box h="1px" bg="gray.300" />
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        gap="20px"
                        flexDirection={{ base: "column", sm: "row" }}
                      >
                        <Flex gap="20px" w={{ base: "100%", sm: "43%" }} justifyContent="center">
                          <Button size="md" colorScheme="light_green_50_01" flex={1} w="100%" borderRadius="20px">
                            Spa Retreats
                          </Button>
                          <Button size="md" colorScheme="light_green_50_01" minW="102px" borderRadius="20px">
                            Wine Tours
                          </Button>
                          <Button size="md" colorScheme="light_green_50_01" minW="104px" borderRadius="20px">
                            Travel Pack
                          </Button>
                        </Flex>
                        <Image
                          src="images/img_group_1000008681.svg"
                          h="35px"
                          alignSelf="start"
                          w={{ base: "100%", sm: "20%" }}
                        />
                      </Flex>
                      <Box h="1px" bg="gray.300" />
                    </Flex>
                  </Box>
                </Flex>
                <Box
                  mt="79px"
                  bg="light_green.50_01"
                  alignSelf="stretch"
                  p={{ base: "20px", sm: "39px" }}
                  borderRadius="20px"
                >
                  <Flex gap="24px" flexDirection="column" alignItems="start">
                    <Heading size="xl" as="h6" textTransform="capitalize">
                      Add a comment
                    </Heading>
                    <Text>By using form u agree with the message sorage, you can contact us directly now</Text>
                    <Flex gap="10px" alignSelf="stretch" flexDirection={{ md: "row", base: "column" }}>
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
                      <Input
                        size="xs"
                        colorScheme="white_A700"
                        placeholder={`Your Website`}
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
                      alignSelf="stretch"
                      borderRadius="20px"
                      pb={{ base: "20px", sm: 0 }}
                      pr={{ base: "20px", sm: 0 }}
                    />
                    <Flex
                      alignSelf="stretch"
                      justifyContent="space-between"
                      alignItems="center"
                      gap="20px"
                      flexDirection={{ base: "column", sm: "row" }}
                    >
                      <Checkbox value="false" color="teal.900" mb="11px" fontSize="16px" gap="10px" alignSelf="end">
                        Save my name email and website
                      </Checkbox>
                      <Button size="xl" fontWeight={600} minW="202px" borderRadius="25px" px={{ base: "20px", sm: "" }}>
                        Post comment
                      </Button>
                    </Flex>
                  </Flex>
                </Box>
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
                      value={searchBarValue2}
                      onChange={(e) => setSearchBarValue2(e.target.value)}
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
                        {searchBarValue2?.length > 0 ? (
                          <CloseIcon onClick={() => setSearchBarValue2("")} />
                        ) : (
                          <Image src="images/img_search_teal_900.svg" w="25px" h="25px" />
                        )}
                      </Center>
                    </InputRightElement>
                  </InputGroup>
                </Flex>
                <Flex
                  mt="31px"
                  gap="16px"
                  bg="white.A700"
                  boxShadow="xs"
                  flexDirection="column"
                  alignItems="start"
                  justifyContent="center"
                  p={{ base: "20px", sm: "30px" }}
                  borderRadius="20px"
                >
                  <Heading as="h5">Popular Post</Heading>
                  <Box h="1px" bg="gray.300" alignSelf="stretch" borderRadius="1px" />
                  <Flex gap="20px" alignSelf="stretch" flexDirection="column">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <BlogdetailsStackview {...d} key={"blogdetails" + index} />
                      ))}
                    </Suspense>
                  </Flex>
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
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
