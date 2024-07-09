import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import MegaMenu1 from "../../components/MegaMenu1";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Image,
  Button,
  InputRightElement,
  InputGroup,
  Center,
  Input,
  Text,
  Flex,
  Heading,
  Container,
  UnorderedList,
  ListItem,
  Link,
  Box,
} from "@chakra-ui/react";
import React from "react";

export default function ErrorPage() {
  const [searchBarValue11, setSearchBarValue11] = React.useState("");
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
                    404 Error
                  </Heading>
                  <Flex gap="15px" alignItems="center" flexWrap="wrap">
                    <Heading size="md" color="white.A700">
                      Home
                    </Heading>
                    <Image src="images/img_save.svg" h="16px" />
                    <Heading size="md" as="h3" color="white.A700">
                      404 Error
                    </Heading>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container
            gap={{ md: "80px", base: "40px", sm: "60px" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            px="0px"
            p={{ md: "", base: "20px" }}
          >
            <Flex
              gap={{ base: "30px", sm: "60px" }}
              w={{ md: "62%", base: "100%" }}
              flexDirection="column"
              alignItems="center"
            >
              <Flex gap="21px" alignSelf="stretch" flexDirection="column" alignItems="center">
                <Heading size="3xl" textAlign="center" w="100%" lineHeight="60px">
                  Oopps!Check Your Connection and Try Again
                </Heading>
                <Flex gap="40px" w={{ md: "89%", base: "100%" }} flexDirection="column" alignItems="center">
                  <Text color="gray.600" textAlign="center" w="100%" lineHeight="30px">
                    Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                    posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra
                  </Text>
                  <InputGroup w="88%">
                    <Input
                      colorScheme="light_green_50_01"
                      placeholder={`Search Here`}
                      value={searchBarValue11}
                      onChange={(e) => setSearchBarValue11(e.target.value)}
                      color="gray.600"
                      gap="35px"
                      borderRadius="30px"
                      pl={{ base: "20px", sm: 0 }}
                    />
                    <InputRightElement>
                      <Center w="60px" h="60px" bg="light_green.A700" borderRadius="50%">
                        {searchBarValue11?.length > 0 ? (
                          <CloseIcon onClick={() => setSearchBarValue11("")} />
                        ) : (
                          <Image src="images/img_save.svg" w="16px" h="22px" />
                        )}
                      </Center>
                    </InputRightElement>
                  </InputGroup>
                </Flex>
              </Flex>
              <Button fontWeight={600} minW="155px" borderRadius="30px" px={{ base: "20px", sm: "" }}>
                Back to Home
              </Button>
            </Flex>
            <Image src="images/img_frame.svg" h={{ md: "790px", base: "auto" }} w="100%" />
          </Container>
          <Footer alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
