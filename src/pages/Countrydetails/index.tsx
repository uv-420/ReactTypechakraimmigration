import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MegaMenu1 from "../../components/MegaMenu1";
import { Image, Heading, Flex, Box, Text, Link, Container, Button, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";

export default function CountrydetailsPage() {
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
              <Flex gap="10px" alignItems="center">
                <Link href="#">
                  <Image src="images/img_objects.svg" h="32px" />
                </Link>
                <Heading size="2xl" letterSpacing="-1.44px">
                  RouteX
                </Heading>
              </Flex>
              <Flex
                w={{ md: "70%", base: "100%" }}
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <UnorderedList styleType="none" gap="34px" display="flex" flexDirection={{ md: "row", base: "column" }}>
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
            </Flex>
            <Flex bg="teal.900_cc" justifyContent="center" py={{ md: "148px", base: "20px" }} borderRadius="50px">
              <Container mb="39px" display="flex" px="0px" p={{ md: "", base: "20px" }}>
                <Flex flexDirection="column" alignItems="start">
                  <Heading size="4xl" as="h1" color="white.A700" textTransform="capitalize">
                    Countries Details
                  </Heading>
                  <Flex gap="15px" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" />
                    <Heading size="md" as="h3" color="white.A700">
                      Countries Details
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container px="0px" p={{ md: "", base: "20px" }}>
            <Box>
              <Flex gap="30px" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
                <Flex flex={1} flexDirection="column" alignItems="start" alignSelf="stretch">
                  <Flex alignSelf="stretch" flexDirection="column" alignItems="start">
                    <Flex gap="20px" alignSelf="stretch" flexDirection="column">
                      <Heading size="3xl" color="black.900_01" lineHeight="60px">
                        Wonders of Ancient Civilizations: A Journey Through Egypt
                      </Heading>
                      <Text color="gray.600" lineHeight="30px">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                        eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                        eros justo, posu
                      </Text>
                    </Flex>
                    <Heading size="xl" as="h3" color="black.900_01" mt="32px" textTransform="capitalize">
                      Why to choose Egypt?
                    </Heading>
                    <Text color="gray.600" mt="15px" w="100%" lineHeight="30px">
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posu
                    </Text>
                    <Heading size="md" as="h4" mt="34px">
                      Passport Assistance:
                    </Heading>
                    <Text color="gray.600" mt="10px" w="100%" lineHeight="30px">
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                      Aliquam er
                    </Text>
                    <Heading size="md" as="h5" mt="22px">
                      Car Rental Services:
                    </Heading>
                    <Text color="gray.600" mt="12px" w="100%" lineHeight="30px">
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                      Aliquam er
                    </Text>
                    <Heading size="md" as="h6" mt="24px">
                      Travel Organization:
                    </Heading>
                    <Text color="gray.600" mt="10px" w="100%" lineHeight="30px">
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                      Aliquam er
                    </Text>
                  </Flex>
                  <Heading size="xl" as="h3" color="black.900_01" mt="51px" textTransform="capitalize">
                    Our Service For Egypt
                  </Heading>
                  <Heading size="md" as="h6" mt="29px">
                    Cultural Immersion Experiences
                  </Heading>
                  <Text color="gray.600" mt="10px" w={{ md: "87%", base: "100%" }} lineHeight="30px">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra
                  </Text>
                  <Heading size="md" as="h6" mt="24px">
                    Educational Travel Programs
                  </Heading>
                  <Text color="gray.600" mt="10px" w={{ md: "87%", base: "100%" }} lineHeight="30px">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra
                  </Text>
                  <Heading size="md" as="h6" mt="24px">
                    Volunteer and Service Travel Opportunities
                  </Heading>
                  <Text color="gray.600" mt="10px" w={{ md: "87%", base: "100%" }} lineHeight="30px">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra
                  </Text>
                </Flex>
                <Box w={{ md: "33%", base: "100%" }}>
                  <Box
                    pb={{ md: "42px", base: "20px" }}
                    borderColor="gray.300"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="white.A700"
                    borderRadius="20px"
                  >
                    <Flex gap="23px" flexDirection="column" alignItems="start">
                      <Heading
                        as="h5"
                        pt="13px"
                        pb={{ base: "20px", sm: "28px" }}
                        pl="30px"
                        pr="35px"
                        borderTopLeftRadius="20px"
                        borderTopRightRadius="20px"
                        bg="light_green.50_01"
                        px={{ base: "20px", sm: "" }}
                      >
                        Plan Your Trip Now
                      </Heading>
                      <Flex ml={{ md: "30px", base: "0px" }} w={{ md: "62%", base: "100%" }}>
                        <Flex w="100%" flexDirection="column">
                          <Flex gap="19px" alignItems="center">
                            <Image src="images/img_checkmark.svg" h="22px" />
                            <Text alignSelf="end">(629) 555-0129</Text>
                          </Flex>
                          <Flex mt="29px" gap="20px" alignItems="start">
                            <Image src="images/img_checkmark.svg" h="16px" w="16px" />
                            <Text>info@example.com</Text>
                          </Flex>
                          <Flex mt="25px" gap="20px" alignItems="center">
                            <Image src="images/img_checkmark.svg" h="22px" />
                            <Text alignSelf="end">6391 Elgin St. Celina, 10299</Text>
                          </Flex>
                          <Flex mt="44px" gap="6px" alignItems="center">
                            <Link href="#" alignSelf="end">
                              <Heading size="xs" as="h6" color="black.900_01">
                                Contact Us
                              </Heading>
                            </Link>
                            <Image src="images/img_arrow_left_teal_900.svg" h="24px" />
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                  <Flex mt="96px" gap="20px" flexDirection="column" alignItems="start">
                    <Heading size="md" as="h6">
                      Find Country
                    </Heading>
                    <Flex
                      borderColor="gray.300"
                      borderWidth="2px"
                      borderStyle="solid"
                      bg="white.A700"
                      alignSelf="stretch"
                      justifyContent="space-between"
                      alignItems="center"
                      gap="20px"
                      p="16px"
                      borderRadius="20px"
                    >
                      <Text color="gray.600" ml={{ md: "13px", base: "0px" }} alignSelf="end">
                        Select country name
                      </Text>
                      <Image src="images/img_arrow_left.svg" h="20px" mr={{ md: "13px", base: "0px" }} />
                    </Flex>
                  </Flex>
                  <Box
                    mt="30px"
                    borderBottomLeftRadius="20px"
                    borderBottomRightRadius="20px"
                    bg="white.A700"
                    boxShadow="xs"
                    p={{ base: "20px", sm: "40px" }}
                  >
                    <Flex gap="20px" flexDirection="column">
                      <Box>
                        <Flex gap="20px" flexDirection="column">
                          <Flex justifyContent="space-between" alignItems="start" gap="20px">
                            <Heading as="h5" color="black.900_01">
                              Asia
                            </Heading>
                            <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                          </Flex>
                          <Box h="1px" bg="gray.300" />
                        </Flex>
                      </Box>
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="black.900_01">
                          Europe
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" />
                      </Flex>
                      <Box h="1px" bg="gray.300" />
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="light_green.A700">
                          North America
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                      </Flex>
                      <Box>
                        <Flex gap="20px" flexDirection="column">
                          <Box h="1px" bg="gray.300" />
                          <Flex justifyContent="space-between" alignItems="start" gap="20px">
                            <Heading as="h5" color="black.900_01">
                              Australia
                            </Heading>
                            <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                          </Flex>
                          <Box h="1px" bg="gray.300" />
                        </Flex>
                      </Box>
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="black.900_01">
                          Latine America
                        </Heading>
                        <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                      </Flex>
                      <Box>
                        <Flex gap="20px" flexDirection="column">
                          <Box h="1px" bg="gray.300" />
                          <Flex justifyContent="space-between" alignItems="start" gap="20px">
                            <Heading as="h5" color="black.900_01">
                              Africa
                            </Heading>
                            <Image src="images/img_arrow_left.svg" h="14px" mt="5px" />
                          </Flex>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
