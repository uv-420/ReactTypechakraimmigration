import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MegaMenu1 from "../../components/MegaMenu1";
import {
  Button,
  Image,
  Text,
  Flex,
  Heading,
  Box,
  SimpleGrid,
  Container,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

export default function PricingtablesPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);
  const [menuOpen4, setMenuOpen4] = React.useState(false);
  const [menuOpen5, setMenuOpen5] = React.useState(false);
  const [menuOpen6, setMenuOpen6] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>DhiWise web app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box pt={{ base: "20px", sm: "30px" }} bg="white.A700" w="100%">
        <Flex gap={{ md: "110px", base: "55px", sm: "82px" }} flexDirection="column" alignItems="center">
          <Flex gap="30px" w={{ md: "94%", base: "100%" }} flexDirection="column" p={{ md: "", base: "20px" }}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              position="relative"
              gap="20px"
              flexDirection={{ md: "row", base: "column" }}
              as="header"
            >
              <Image src="images/img_header_logo.png" h="41px" w="157px" fit="contain" />
              <Flex w={{ md: "40%", base: "100%" }} justifyContent="center">
                <Box h={{ md: "26px", base: "auto" }} w="100%" position="relative">
                  <Image src="images/img_arrow_left.svg" h="10px" ml={{ md: "55px", base: "0px" }} />
                  <UnorderedList
                    styleType="none"
                    gap="34px"
                    display="flex"
                    alignItems="center"
                    position={{ md: "absolute", base: "relative" }}
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    h="max-content"
                    w="max-content"
                    m="auto !important"
                    flexDirection={{ md: "row", base: "column" }}
                  >
                    <ListItem
                      onMouseLeave={() => {
                        setMenuOpen(false);
                      }}
                      onMouseEnter={() => {
                        setMenuOpen(true);
                      }}
                    >
                      <Flex
                        color="teal.900"
                        letterSpacing="1.40px"
                        textTransform="uppercase"
                        fontSize="15px"
                        fontWeight={700}
                        w="51px"
                        cursor="pointer"
                      >
                        Home
                      </Flex>
                      {menuOpen ? <MegaMenu1 /> : null}
                    </ListItem>
                    <ListItem
                      onMouseLeave={() => {
                        setMenuOpen1(false);
                      }}
                      onMouseEnter={() => {
                        setMenuOpen1(true);
                      }}
                    >
                      <Flex gap="4px" alignItems="center" cursor="pointer">
                        <Heading size="s" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                          About Us
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="10px" w="8px" />
                      </Flex>
                      {menuOpen1 ? <MegaMenu1 /> : null}
                    </ListItem>
                    <ListItem
                      onMouseLeave={() => {
                        setMenuOpen2(false);
                      }}
                      onMouseEnter={() => {
                        setMenuOpen2(true);
                      }}
                    >
                      <Flex gap="4px" alignItems="center" cursor="pointer">
                        <Heading size="s" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                          Services
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="10px" w="8px" />
                      </Flex>
                      {menuOpen2 ? <MegaMenu1 /> : null}
                    </ListItem>
                    <ListItem
                      onMouseLeave={() => {
                        setMenuOpen3(false);
                      }}
                      onMouseEnter={() => {
                        setMenuOpen3(true);
                      }}
                    >
                      <Flex gap="4px" alignItems="center" cursor="pointer">
                        <Heading size="s" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                          Projects
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="10px" w="8px" />
                      </Flex>
                      {menuOpen3 ? <MegaMenu1 /> : null}
                    </ListItem>
                    <ListItem
                      onMouseLeave={() => {
                        setMenuOpen4(false);
                      }}
                      onMouseEnter={() => {
                        setMenuOpen4(true);
                      }}
                    >
                      <Flex gap="4px" alignItems="center" cursor="pointer">
                        <Heading size="s" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                          Blog
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="10px" w="8px" />
                      </Flex>
                      {menuOpen4 ? <MegaMenu1 /> : null}
                    </ListItem>
                    <ListItem
                      onMouseLeave={() => {
                        setMenuOpen5(false);
                      }}
                      onMouseEnter={() => {
                        setMenuOpen5(true);
                      }}
                    >
                      <Flex gap="4px" alignItems="center" cursor="pointer">
                        <Heading size="s" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                          Page
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="10px" w="8px" />
                      </Flex>
                      {menuOpen5 ? <MegaMenu1 /> : null}
                    </ListItem>
                    <ListItem
                      onMouseLeave={() => {
                        setMenuOpen6(false);
                      }}
                      onMouseEnter={() => {
                        setMenuOpen6(true);
                      }}
                    >
                      <Flex gap="4px" alignItems="center" cursor="pointer">
                        <Heading size="s" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                          Contact
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="10px" w="8px" />
                      </Flex>
                      {menuOpen6 ? <MegaMenu1 /> : null}
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Flex>
              <Button
                rightIcon={<Image src="images/img_save.svg" w="14px" />}
                fontWeight={600}
                gap="10px"
                minW="223px"
                borderRadius="30px"
                px={{ base: "20px", sm: "" }}
              >
                Get An Appointment
              </Button>
            </Flex>
            <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "156px", base: "20px" }} borderRadius="50px">
              <Container mb="31px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                <Flex flexDirection="column" alignItems="start">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Pricing Tables
                  </Heading>
                  <Flex mt="-9px" gap="15px" position="relative" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" alignSelf="start" />
                    <Heading size="md" as="h3" color="white.A700">
                      Pricing Tables
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <SimpleGrid gap="30px" columns={{ md: 3, base: 1, sm: 2 }} justifyContent="center">
              <Flex
                pb={{ base: "20px", sm: "40px" }}
                borderColor="gray.300"
                borderWidth="1px"
                borderStyle="solid"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                flexDirection="column"
                alignItems="start"
                borderRadius="20px"
                _hover={{ boxShadow: "xs" }}
              >
                <Flex
                  borderTopLeftRadius="20px"
                  borderTopRightRadius="20px"
                  alignSelf="stretch"
                  bg="light_green.50_01"
                  justifyContent="center"
                  p={{ base: "20px", sm: "28px" }}
                >
                  <Heading size="xl" textTransform="capitalize">
                    Stater Plan
                  </Heading>
                </Flex>
                <Flex mt="29px" gap="5px" alignSelf="center" alignItems="center" flexWrap="wrap">
                  <Heading size="3xl" as="h3">
                    $19
                  </Heading>
                  <Heading as="h4" alignSelf="end">
                    /mo
                  </Heading>
                </Flex>
                <Box h="1px" mt="27px" alignSelf="center" bg="gray.300" w="80%" />
                <Flex
                  mt="29px"
                  ml={{ md: "39px", base: "0px" }}
                  gap="10px"
                  w={{ md: "45%", base: "100%" }}
                  flexDirection="column"
                  p={{ md: "", base: "20px" }}
                >
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Mistakes To Avoid</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text alignSelf="end">Your Startup</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Knew About Fonts</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Knew About Fonts</Text>
                  </Flex>
                </Flex>
                <Button
                  variant="outline"
                  rightIcon={<Image src="images/img_arrow_left.svg" w="14px" h="14px" />}
                  mt="40px"
                  ml={{ md: "40px", base: "0px" }}
                  fontWeight={600}
                  gap="10px"
                  minW="142px"
                  borderRadius="30px"
                  px={{ base: "20px", sm: "" }}
                >
                  Buy Plan
                </Button>
              </Flex>
              <Flex
                pb={{ base: "20px", sm: "39px" }}
                borderColor="gray.300"
                borderWidth="1px"
                borderStyle="solid"
                bg="white.A700"
                boxShadow="xs"
                w="100%"
                cursor="pointer"
                flexDirection="column"
                alignItems="start"
                borderRadius="20px"
                _hover={{ boxShadow: "xs" }}
              >
                <Flex
                  borderTopLeftRadius="20px"
                  borderTopRightRadius="20px"
                  alignSelf="stretch"
                  bg="light_green.50_01"
                  justifyContent="center"
                  p={{ base: "20px", sm: "28px" }}
                >
                  <Heading size="xl" as="h5" textTransform="capitalize">
                    Basic Plan
                  </Heading>
                </Flex>
                <Flex mt="29px" gap="5px" alignSelf="center" alignItems="center" flexWrap="wrap">
                  <Heading size="3xl" as="h6">
                    $29
                  </Heading>
                  <Heading as="h5" alignSelf="end">
                    /mo
                  </Heading>
                </Flex>
                <Box h="1px" mt="27px" alignSelf="center" bg="gray.300" w="80%" />
                <Flex
                  mt="29px"
                  ml={{ md: "39px", base: "0px" }}
                  gap="10px"
                  w={{ md: "45%", base: "100%" }}
                  flexDirection="column"
                  p={{ md: "", base: "20px" }}
                >
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Mistakes To Avoid</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text alignSelf="end">Your Startup</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Knew About Fonts</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Knew About Fonts</Text>
                  </Flex>
                </Flex>
                <Button
                  rightIcon={<Image src="images/img_save.svg" w="14px" h="14px" />}
                  mt="40px"
                  ml={{ md: "40px", base: "0px" }}
                  fontWeight={600}
                  gap="10px"
                  minW="142px"
                  borderRadius="30px"
                  px={{ base: "20px", sm: "" }}
                >
                  Buy Plan
                </Button>
              </Flex>
              <Flex
                borderColor="gray.300"
                borderWidth="1px"
                borderStyle="solid"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                flexDirection="column"
                borderRadius="20px"
                _hover={{ boxShadow: "xs" }}
              >
                <Flex mb="38px" flexDirection="column" alignItems="start">
                  <Heading
                    size="xl"
                    as="h3"
                    borderTopLeftRadius="20px"
                    borderTopRightRadius="20px"
                    textTransform="capitalize"
                    bg="light_green.50_01"
                    px="35px"
                    py="29px"
                    p={{ base: "20px", sm: "" }}
                  >
                    Premium Plan
                  </Heading>
                  <Flex mt="29px" gap="5px" alignSelf="center" alignItems="center" flexWrap="wrap">
                    <Heading size="3xl" as="h1">
                      $89
                    </Heading>
                    <Heading as="h5" alignSelf="end">
                      /mo
                    </Heading>
                  </Flex>
                  <Flex
                    mt="57px"
                    ml={{ md: "38px", base: "0px" }}
                    gap="10px"
                    w={{ md: "45%", base: "100%" }}
                    flexDirection="column"
                  >
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Text>Mistakes To Avoid</Text>
                    </Flex>
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Text alignSelf="end">Your Startup</Text>
                    </Flex>
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Text>Knew About Fonts</Text>
                    </Flex>
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Text>Knew About Fonts</Text>
                    </Flex>
                  </Flex>
                  <Button
                    variant="outline"
                    rightIcon={<Image src="images/img_arrow_left.svg" w="14px" h="14px" />}
                    mt="40px"
                    ml={{ md: "38px", base: "0px" }}
                    fontWeight={600}
                    gap="10px"
                    minW="142px"
                    borderRadius="30px"
                    px={{ base: "20px", sm: "" }}
                  >
                    Buy Plan
                  </Button>
                </Flex>
              </Flex>
              <Flex
                pb={{ base: "20px", sm: "40px" }}
                borderColor="gray.300"
                borderWidth="1px"
                borderStyle="solid"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                flexDirection="column"
                alignItems="start"
                borderRadius="20px"
                _hover={{ boxShadow: "xs" }}
              >
                <Flex
                  borderTopLeftRadius="20px"
                  borderTopRightRadius="20px"
                  alignSelf="stretch"
                  bg="light_green.50_01"
                  justifyContent="center"
                  p={{ base: "20px", sm: "25px" }}
                >
                  <Heading size="xl" as="h3" mt="7px" textTransform="capitalize">
                    Popular Plan
                  </Heading>
                </Flex>
                <Flex mt="29px" gap="5px" alignSelf="center" alignItems="center" flexWrap="wrap">
                  <Heading size="3xl" as="h1">
                    $49
                  </Heading>
                  <Heading as="h5" alignSelf="end">
                    /mo
                  </Heading>
                </Flex>
                <Box h="1px" mt="27px" alignSelf="center" bg="gray.300" w="80%" />
                <Flex
                  mt="29px"
                  ml={{ md: "39px", base: "0px" }}
                  gap="10px"
                  w={{ md: "45%", base: "100%" }}
                  flexDirection="column"
                  p={{ md: "", base: "20px" }}
                >
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Mistakes To Avoid</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text alignSelf="end">Your Startup</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Knew About Fonts</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Knew About Fonts</Text>
                  </Flex>
                </Flex>
                <Button
                  variant="outline"
                  rightIcon={<Image src="images/img_arrow_left.svg" w="14px" h="14px" />}
                  mt="40px"
                  ml={{ md: "40px", base: "0px" }}
                  fontWeight={600}
                  gap="10px"
                  minW="142px"
                  borderRadius="30px"
                  px={{ base: "20px", sm: "" }}
                >
                  Buy Plan
                </Button>
              </Flex>
              <Flex
                pb={{ base: "20px", sm: "39px" }}
                gap="32px"
                borderColor="gray.300"
                borderWidth="1px"
                borderStyle="solid"
                bg="white.A700"
                boxShadow="xs"
                w="100%"
                cursor="pointer"
                flexDirection="column"
                alignItems="start"
                borderRadius="20px"
                _hover={{ boxShadow: "xs" }}
              >
                <Flex
                  borderTopLeftRadius="20px"
                  borderTopRightRadius="20px"
                  alignSelf="stretch"
                  bg="light_green.50_01"
                  justifyContent="center"
                  p={{ base: "20px", sm: "28px" }}
                >
                  <Heading size="xl" as="h3" textTransform="capitalize">
                    Master Plan
                  </Heading>
                </Flex>
                <Flex
                  gap="27px"
                  alignSelf="center"
                  w={{ md: "80%", base: "100%" }}
                  flexDirection="column"
                  alignItems="center"
                  p={{ md: "", base: "20px" }}
                >
                  <Flex gap="5px" alignItems="center" flexWrap="wrap">
                    <Heading size="3xl" as="h1">
                      $57
                    </Heading>
                    <Heading as="h5" alignSelf="end">
                      /mo
                    </Heading>
                  </Flex>
                  <Box h="1px" bg="gray.300" alignSelf="stretch" w="100%" />
                </Flex>
                <Flex
                  ml={{ md: "39px", base: "0px" }}
                  gap="10px"
                  w={{ md: "45%", base: "100%" }}
                  flexDirection="column"
                  p={{ md: "", base: "20px" }}
                >
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Mistakes To Avoid</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text alignSelf="end">Your Startup</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Knew About Fonts</Text>
                  </Flex>
                  <Flex gap="14px" alignItems="center">
                    <Image src="images/img_checkmark.svg" h="16px" />
                    <Text>Knew About Fonts</Text>
                  </Flex>
                </Flex>
                <Button
                  variant="outline"
                  rightIcon={<Image src="images/img_arrow_left.svg" w="14px" h="14px" />}
                  ml={{ md: "40px", base: "0px" }}
                  fontWeight={600}
                  gap="10px"
                  minW="142px"
                  borderRadius="30px"
                  px={{ base: "20px", sm: "" }}
                >
                  Buy Plan
                </Button>
              </Flex>
              <Flex
                borderColor="gray.300"
                borderWidth="1px"
                borderStyle="solid"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                flexDirection="column"
                borderRadius="20px"
                _hover={{ boxShadow: "xs" }}
              >
                <Flex mb="38px" flexDirection="column" alignItems="start">
                  <Button
                    size="8xl"
                    colorScheme="light_green_50_01"
                    color="teal.900"
                    borderTopLeftRadius="20px"
                    borderTopRightRadius="20px"
                    textTransform="capitalize"
                    fontWeight={600}
                    w="100%"
                    px={{ base: "20px", sm: "" }}
                  >
                    Gold Plan
                  </Button>
                  <Flex mt="29px" gap="5px" alignSelf="center" alignItems="center" flexWrap="wrap">
                    <Heading size="3xl" as="h1">
                      $99
                    </Heading>
                    <Heading as="h5" alignSelf="end">
                      /mo
                    </Heading>
                  </Flex>
                  <Flex
                    mt="57px"
                    ml={{ md: "38px", base: "0px" }}
                    gap="10px"
                    w={{ md: "45%", base: "100%" }}
                    flexDirection="column"
                  >
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Text>Mistakes To Avoid</Text>
                    </Flex>
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Text alignSelf="end">Your Startup</Text>
                    </Flex>
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Text>Knew About Fonts</Text>
                    </Flex>
                    <Flex gap="14px" alignItems="center">
                      <Image src="images/img_checkmark.svg" h="16px" />
                      <Text>Knew About Fonts</Text>
                    </Flex>
                  </Flex>
                  <Button
                    variant="outline"
                    rightIcon={<Image src="images/img_arrow_left.svg" w="14px" h="14px" />}
                    mt="40px"
                    ml={{ md: "38px", base: "0px" }}
                    fontWeight={600}
                    gap="10px"
                    minW="142px"
                    borderRadius="30px"
                    px={{ base: "20px", sm: "" }}
                  >
                    Buy Plan
                  </Button>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
