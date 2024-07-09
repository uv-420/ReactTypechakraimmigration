import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MegaMenu1 from "../../components/MegaMenu1";
import { Image, Button, Flex, Text, Heading, Container, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import React from "react";

export default function StorydetailsPage() {
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
                <Flex w="100%" flexDirection="column" alignItems="center">
                  <UnorderedList
                    styleType="none"
                    gap="30px"
                    display="flex"
                    alignItems="center"
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
                      <Flex gap="4px" alignItems="center" cursor="pointer">
                        <Heading size="s" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                          Home
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="10px" w="8px" />
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
                      <Flex
                        color="teal.900"
                        letterSpacing="1.40px"
                        textTransform="uppercase"
                        fontSize="15px"
                        fontWeight={700}
                        w="84px"
                        cursor="pointer"
                      >
                        Services
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
                      <Flex
                        color="teal.900"
                        letterSpacing="1.40px"
                        textTransform="uppercase"
                        fontSize="15px"
                        fontWeight={700}
                        w="48px"
                        cursor="pointer"
                      >
                        Blog
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
                  <Flex
                    mt="-26px"
                    position="relative"
                    w={{ md: "43%", base: "100%" }}
                    justifyContent="space-between"
                    gap="20px"
                  >
                    <Flex py="7px">
                      <Image src="images/img_arrow_left.svg" h="10px" />
                    </Flex>
                    <Flex py="7px">
                      <Image src="images/img_arrow_left.svg" h="10px" />
                    </Flex>
                  </Flex>
                </Flex>
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
            <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "157px", base: "20px" }} borderRadius="50px">
              <Container mb="31px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                <Flex flexDirection="column" alignItems="start">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Story Details
                  </Heading>
                  <Flex mt="-9px" gap="15px" position="relative" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" alignSelf="start" />
                    <Heading size="md" as="h3" color="white.A700">
                      Story Details
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Flex
              justifyContent="space-between"
              alignItems="start"
              gap="20px"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex mt="5px" gap="21px" w={{ md: "54%", base: "100%" }} flexDirection="column" alignItems="start">
                <Heading size="3xl">Visa Got Approved for Eygpt </Heading>
                <Flex w={{ md: "90%", base: "100%" }} flexDirection="column">
                  <Image src="images/img_thumbs_up.svg" h="75px" w="15%" />
                  <Text color="gray.600" mt="30px" lineHeight="30px">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamco rper viverra laoreet Aliquam
                    eros justo, posuere loborti viverra laoreet matti ullamc orper posuere viverra .Aliquam eros justo,
                    posu Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                    eros justo, posuere lobo rtis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                  </Text>
                  <Flex mt="20px" gap="21px" alignItems="center" flexWrap="wrap">
                    <Heading size="md" as="h3">
                      Visa Applied:
                    </Heading>
                    <Text color="gray.600">Visa Special</Text>
                  </Flex>
                  <Flex mt="22px" gap="20px" alignItems="center" flexWrap="wrap">
                    <Heading size="md" as="h4">
                      Visa Type:
                    </Heading>
                    <Text color="gray.600">10 years +</Text>
                  </Flex>
                  <Flex mt="21px" gap="21px" alignItems="center" flexWrap="wrap">
                    <Heading size="md" as="h5">
                      Approval:
                    </Heading>
                    <Text color="gray.600">adbs@gmail.com</Text>
                  </Flex>
                  <Flex mt="41px" gap="30px">
                    <Button
                      rightIcon={<Image src="images/img_arrow_left.svg" w="14px" h="14px" />}
                      color="teal.900"
                      fontWeight={600}
                      gap="10px"
                      minW="180px"
                      borderRadius="30px"
                      px={{ base: "20px", sm: "" }}
                    >
                      Apply For Visa
                    </Button>
                    <Button
                      variant="outline"
                      fontWeight={600}
                      minW="186px"
                      borderRadius="30px"
                      px={{ base: "20px", sm: "" }}
                    >
                      Read More Stories
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
              <Image src="images/img_image_blue_gray_100.svg" h="591px" w={{ md: "41%", base: "100%" }} />
            </Flex>
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
