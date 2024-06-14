import { Helmet } from "react-helmet";
import { Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeOne from "../../components/HomeOne";
import HomeRow from "../../components/HomeRow";
import HomeTwo from "../../components/HomeTwo";
import HomeTwo1 from "../../components/HomeTwo1";
import HomeTwo2 from "../../components/HomeTwo2";
import {
  Image,
  Link,
  Heading,
  Flex,
  Text,
  Box,
  IconButton,
  Container,
  Center,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";

const data = [
  {},
  {
    image: "images/img_049_visa.svg",
    text: "Travel Opportunities",
    text1:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
  },
  {
    image: "images/img_045_ticket.svg",
    text: "Solo Travel Planning",
    text1:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
  },
];
const data1 = [
  {},
  {
    country: "Bangladesh",
    mistakestoavoidtext: "Mistakes To Avoid",
    yourstartuptext: "Your Startup",
    knewaboutfontstext: "Knew About Fonts",
  },
  {
    country: "Australia",
    mistakestoavoidtext: "Mistakes To Avoid",
    yourstartuptext: "Your Startup",
    knewaboutfontstext: "Knew About Fonts",
  },
  {
    country: "United Kingdom",
    mistakestoavoidtext: "Mistakes To Avoid",
    yourstartuptext: "Your Startup",
    knewaboutfontstext: "Knew About Fonts",
  },
];
const data2 = [
  {},
  {
    businessvisa: "Working Visa",
    etpurusduis: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
    image: "images/img_group_1000009657_light_green_50_01.svg",
  },
  {
    businessvisa: "Student Visa",
    etpurusduis: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
    image: "images/img_group_1000009657_teal_900.svg",
  },
  {
    businessvisa: "Tourist Visa",
    etpurusduis: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
    image: "images/img_music.svg",
  },
];
const data3 = [
  { visavoyage: "Visa Voyage Agency" },
  { visavoyage: "International Access Visas" },
  { visavoyage: "Gateway to Global Citizenship" },
];
const data4 = [
  {},
  { username: "Courtney Henry", userrole: "Marketing Coordinator" },
  { username: "Albert Flores", userrole: "Web Designer" },
];

export default function Home1Page() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef<AliceCarousel>(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef<AliceCarousel>(null);
  const [sliderState3, setSliderState3] = React.useState(0);
  const sliderRef3 = React.useRef<AliceCarousel>(null);

  return (
    <>
      <Helmet>
        <title>DhiWise web app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box pt={{ base: "20px", sm: "30px" }} bg="light_green.50" w="100%">
        <Flex flexDirection="column" alignItems="center">
          <Flex w={{ md: "97%", base: "100%" }} flexDirection="column" alignItems="center" p={{ md: "", base: "20px" }}>
            <Flex gap="30px" alignSelf="stretch" flexDirection="column">
              <Header w={{ md: "97%", base: "100%" }} flexDirection={{ md: "row", base: "column" }} />
              <Box h={{ md: "801px", base: "auto" }} position="relative">
                <Flex
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Image
                    src="images/img_frame_1000009715.svg"
                    h="534px"
                    zIndex={1}
                    alignSelf="end"
                    w={{ md: "20%", base: "100%" }}
                    position="relative"
                  />
                  <Box
                    h="801px"
                    ml={{ md: "-392px", base: "0px" }}
                    pt={{ md: "115px", base: "20px" }}
                    position="relative"
                    bg="teal.900"
                    flex={{ md: 1, base: "unset" }}
                    px={{ md: "115px", base: "20px" }}
                    borderRadius="50px"
                    w={{ md: "auto", base: "100%" }}
                    alignSelf="stretch"
                  >
                    <Box h="686px" w="48%" position="absolute" right="10%" bottom="0px" top="0px" my="auto">
                      <Image
                        src="images/img_frame_1000009753.svg"
                        h="469px"
                        w="85%"
                        position="absolute"
                        bottom="1.17px"
                        left="4%"
                        m="auto"
                      />
                      <Image
                        src="images/img_frame_1000009716.svg"
                        h="534px"
                        w="60%"
                        position="absolute"
                        bottom="0.17px"
                        right="0.00px"
                        m="auto"
                      />
                      <Box
                        h="684px"
                        transform="rotate(180deg)"
                        bg="blue_gray.100"
                        w="79%"
                        position="absolute"
                        left="0.00px"
                        bottom="0px"
                        top="0px"
                        my="auto"
                      />
                    </Box>
                    <Flex gap="10px" alignItems="center" position="absolute" bottom="25%" left="25%" m="auto">
                      <IconButton
                        size="3xl"
                        colorScheme="white_A700_19"
                        icon={<Image src="images/img_overflow_menu.svg" />}
                        aria-label="3760:493-overflowmenu"
                        w="54px"
                        borderRadius="27px"
                      />
                      <Heading size="md" as="h1" color="white.A700">
                        Watch Our Videos
                      </Heading>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  gap="40px"
                  zIndex={2}
                  w="40%"
                  position="absolute"
                  flexDirection="column"
                  alignItems="start"
                  left="17%"
                  bottom="0px"
                  top="0px"
                  h="max-content"
                  my="auto"
                >
                  <Heading size="4xl" color="white.A700" textTransform="capitalize" w="100%" lineHeight="90px">
                    <Heading size="4xl" as="span" color="white.A700">
                      Visa Made Easy&nbsp;
                    </Heading>
                    <Heading size="4xl" as="span" color="white.A700">
                      Dreams Made Possible
                    </Heading>
                  </Heading>
                  <Button
                    variant="outline"
                    colorScheme="white_A700"
                    rightIcon={<Image src="images/img_save.svg" w="14px" h="14px" />}
                    fontWeight={600}
                    gap="10px"
                    minW="157px"
                    borderRadius="30px"
                    px={{ base: "20px", sm: "" }}
                  >
                    Read More{" "}
                  </Button>
                </Flex>
              </Box>
            </Flex>
            <Flex mt="30px" gap="30px" w={{ md: "95%", base: "100%" }} flexDirection={{ md: "row", base: "column" }}>
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <HomeTwo {...d} key={"card" + index} />
                ))}
              </Suspense>
            </Flex>
            <Container
              mt="120px"
              gap={{ md: "120px", base: "60px", sm: "90px" }}
              display="flex"
              flexDirection="column"
              px="0px"
            >
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
                            <Text size="xs" fontSize="11.48px" zIndex={3} transform="rotate(90deg)" position="relative">
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
                          <Text size="xs" fontSize="11.48px" zIndex={4} transform="rotate(111deg)" position="relative">
                            i
                          </Text>
                          <Text
                            size="xs"
                            mt="13px"
                            ml="-3px"
                            fontSize="11.48px"
                            zIndex={5}
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
                            zIndex={6}
                            transform="rotate(-140deg)"
                            position="relative"
                          >
                            s
                          </Text>
                          <Text size="xs" fontSize="11.48px" zIndex={7} transform="rotate(-130deg)" position="relative">
                            e
                          </Text>
                          <Text
                            size="xs"
                            mt="13px"
                            ml="-1px"
                            fontSize="11.48px"
                            zIndex={8}
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
                      <Heading size="3xl" as="h3" color="white.A700" alignSelf="end">
                        25
                      </Heading>
                      <Heading size="md" as="h4" color="white.A700" w="65%" lineHeight="28px">
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
                      <Heading size="xs" as="h5" letterSpacing="1.40px" textTransform="uppercase">
                        Why Choose Us
                      </Heading>
                    </Flex>
                    <Heading size="3xl" as="h6" mt="10px" lineHeight="60px">
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
                            <HomeTwo1 key={"list006Browser" + index} />
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
                        <Flex w="50%" justifyContent="center">
                          <Flex gap="15px" w="100%" justifyContent="center" alignItems="center">
                            <IconButton
                              size="3xl"
                              icon={<Image src="images/img_save.svg" />}
                              aria-label="3500_6119_1172_2022_55_55-save_one"
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
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
              <Flex justifyContent="space-between" gap="20px" flexDirection={{ md: "row", base: "column" }}>
                <Image src="images/img_company_logo_teal_900.svg" h="48px" w={{ md: "13%", base: "100%" }} />
                <Image src="images/img_company_logo_teal_900_48x108.svg" h="48px" w={{ md: "8%", base: "100%" }} />
                <Image src="images/img_company_logo_teal_900_48x114.svg" h="48px" w={{ md: "9%", base: "100%" }} />
                <Flex gap="6px" w={{ md: "10%", base: "100%" }} justifyContent="center" alignItems="end">
                  <Image src="images/img_lock_teal_900.svg" h="24px" mt="12px" mb="9px" />
                  <Image src="images/img_settings_teal_900.svg" h="17px" mb="12px" w="78%" />
                </Flex>
                <Image src="images/img_company_logo_teal_900_48x144.svg" h="48px" w={{ md: "11%", base: "100%" }} />
              </Flex>
            </Container>
          </Flex>
          <Center
            mt="120px"
            bg="teal.900"
            w={{ md: "94%", base: "100%" }}
            flexDirection="column"
            py={{ md: "114px", base: "20px" }}
            borderRadius="50px"
            p={{ md: "", base: "20px" }}
          >
            <Container mb="6px" gap={{ base: "30px", sm: "60px" }} display="flex" flexDirection="column" px="0px">
              <Box>
                <Flex gap="10px" flexDirection="column">
                  <Flex gap="10px" alignItems="center">
                    <Image src="images/img_frame_white_a700.svg" h="20px" w="20px" />
                    <Heading size="xs" color="white.A700" letterSpacing="1.40px" textTransform="uppercase">
                      Our Countries
                    </Heading>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    flexDirection={{ md: "row", base: "column" }}
                  >
                    <Heading size="3xl" as="h3" color="white.A700" w={{ md: "49%", base: "100%" }} lineHeight="60px">
                      Making Memories Around World Unforgettable
                    </Heading>
                    <Flex gap="20px" alignSelf="end">
                      <IconButton
                        onClick={() => {
                          sliderRef3?.current?.slidePrev();
                        }}
                        size="4xl"
                        icon={<Image src="images/img_group_6.svg" />}
                        aria-label="3761:415-iconbutton"
                        w="60px"
                      />
                      <IconButton
                        onClick={() => {
                          sliderRef3?.current?.slideNext();
                        }}
                        size="4xl"
                        icon={<Image src="images/img_save.svg" />}
                        aria-label="3761:419-iconbutton_one"
                        w="60px"
                        borderRadius="30px"
                        px={{ base: "20px", sm: "" }}
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
              <Box display="flex">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                  disableDotsControls
                  activeIndex={sliderState3}
                  onSlideChanged={(e: EventObject) => {
                    setSliderState3(e?.item);
                  }}
                  ref={sliderRef3}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <Flex gap="30px" flexDirection={{ md: "row", base: "column" }}>
                        <Flex
                          bg="blue_gray.100"
                          flex={1}
                          flexDirection="column"
                          alignItems="end"
                          p={{ base: "20px", sm: "30px" }}
                          borderRadius="20px"
                          alignSelf="stretch"
                        >
                          <Box
                            h="60px"
                            mb="302px"
                            borderColor="light_green.A700"
                            borderWidth="1px"
                            borderStyle="solid"
                            bg="blue_gray.100"
                            w="46%"
                            borderRadius="30px"
                          />
                        </Flex>
                        <Flex
                          gap={{ md: "81px", base: "40px", sm: "60px" }}
                          bg="blue_gray.100"
                          w={{ md: "33%", base: "100%" }}
                          flexDirection="column"
                          alignItems="end"
                          p="12px"
                          borderRadius="20px"
                        >
                          <Box
                            h="60px"
                            mt="18px"
                            mr={{ md: "18px", base: "0px" }}
                            borderColor="light_green.A700"
                            borderWidth="1px"
                            borderStyle="solid"
                            bg="blue_gray.100"
                            w="16%"
                            borderRadius="30px"
                          />
                          <Flex
                            bg="light_green.A700"
                            alignSelf="stretch"
                            flexDirection="column"
                            alignItems="start"
                            p={{ base: "20px", sm: "28px" }}
                            borderRadius="20px"
                          >
                            <Heading as="h4" color="white.A700" mt="7px">
                              Working Visa
                            </Heading>
                            <Text color="white.A700" mt="7px" w={{ md: "88%", base: "100%" }} lineHeight="30px">
                              Lorem Ipsum is simply dummy text the printing and provide best visa ever
                            </Text>
                            <Button
                              variant="outline"
                              colorScheme="white_A700"
                              rightIcon={<Image src="images/img_save.svg" w="14px" h="14px" />}
                              mt="20px"
                              fontWeight={600}
                              gap="10px"
                              minW="158px"
                              borderRadius="30px"
                              px={{ base: "20px", sm: "" }}
                            >
                              Apply Now
                            </Button>
                          </Flex>
                        </Flex>
                        <Flex
                          bg="blue_gray.100"
                          flex={1}
                          flexDirection="column"
                          alignItems="end"
                          p="20px"
                          borderRadius="20px"
                          alignSelf="stretch"
                        >
                          <Box
                            h="60px"
                            mt="6px"
                            mb="316px"
                            borderColor="light_green.A700"
                            borderWidth="1px"
                            borderStyle="solid"
                            bg="blue_gray.100"
                            w="40%"
                            borderRadius="30px"
                          />
                        </Flex>
                        <Flex
                          bg="blue_gray.100"
                          flex={1}
                          flexDirection="column"
                          alignItems="end"
                          p="20px"
                          borderRadius="20px"
                          alignSelf="stretch"
                        >
                          <Box
                            h="60px"
                            mt="6px"
                            mb="316px"
                            borderColor="light_green.A700"
                            borderWidth="1px"
                            borderStyle="solid"
                            bg="blue_gray.100"
                            w="40%"
                            borderRadius="30px"
                          />
                        </Flex>
                        <Flex
                          bg="blue_gray.100"
                          flex={1}
                          flexDirection="column"
                          alignItems="end"
                          p="20px"
                          borderRadius="20px"
                          alignSelf="stretch"
                        >
                          <Box
                            h="60px"
                            mt="6px"
                            mb="316px"
                            borderColor="light_green.A700"
                            borderWidth="1px"
                            borderStyle="solid"
                            bg="blue_gray.100"
                            w="40%"
                            borderRadius="30px"
                          />
                        </Flex>
                      </Flex>
                    </React.Fragment>
                  ))}
                />
              </Box>
            </Container>
          </Center>
          <Container mt="120px" px="0px" p={{ md: "", base: "20px" }}>
            <Flex gap={{ md: "119px", base: "59px", sm: "89px" }} flexDirection="column">
              <Flex gap={{ base: "30px", sm: "60px" }} flexDirection="column" alignItems="center">
                <Flex gap="10px" w={{ md: "49%", base: "100%" }} flexDirection="column" alignItems="center">
                  <Flex gap="10px" alignItems="center">
                    <Image src="images/img_frame_teal_900.svg" h="20px" w="20px" />
                    <Heading size="xs" letterSpacing="1.40px" textTransform="uppercase">
                      Visa Category
                    </Heading>
                  </Flex>
                  <Heading size="3xl" as="h3" textAlign="center" w="100%" lineHeight="60px">
                    Seeking Adventure Thrills and Excitement Await
                  </Heading>
                </Flex>
                <Box alignSelf="stretch">
                  <SimpleGrid gap="30px" rowGap="33px" columns={{ md: 2, base: 1 }}>
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data2.map((d, index) => (
                        <HomeTwo2 {...d} key={"home" + index} />
                      ))}
                    </Suspense>
                  </SimpleGrid>
                </Box>
              </Flex>
              <Flex gap={{ base: "30px", sm: "60px" }} flexDirection="column">
                <Box>
                  <Flex gap="7px" flexDirection="column">
                    <Flex gap="10px" w={{ md: "19%", base: "100%" }} alignItems="start">
                      <Heading size="xs" as="h4" letterSpacing="1.40px" textTransform="uppercase">
                        Available Countries
                      </Heading>
                      <Image src="images/img_objects_teal_900.svg" h="9px" w="22%" />
                    </Flex>
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      gap="20px"
                      flexDirection={{ md: "row", base: "column" }}
                    >
                      <Heading size="3xl" as="h5" w={{ md: "49%", base: "100%" }} lineHeight="60px">
                        Urban Escapes City Hopping Adventures
                      </Heading>
                      <Button
                        rightIcon={<Image src="images/img_save.svg" w="14px" h="14px" />}
                        fontWeight={600}
                        gap="10px"
                        alignSelf="end"
                        minW="156px"
                        borderRadius="30px"
                        px={{ base: "20px", sm: "" }}
                      >
                        View More{" "}
                      </Button>
                    </Flex>
                  </Flex>
                </Box>
                <Flex gap="30px" flexDirection={{ md: "row", base: "column" }}>
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data1.map((d, index) => (
                      <HomeOne {...d} key={"card1" + index} />
                    ))}
                  </Suspense>
                </Flex>
              </Flex>
              <Flex gap="30px" flexDirection={{ md: "row", base: "column" }}>
                <Box h="608px" bg="blue_gray.100" w="33%" borderRadius="20px" />
                <Flex gap="30px" flex={1} flexDirection="column" alignSelf="stretch">
                  <Box pl={{ md: "60px", base: "20px" }} bg="white.A700" borderRadius="20px">
                    <Flex alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                      <Flex gap="21px" flex={1} flexDirection="column" alignSelf="stretch">
                        <Box w={{ md: "17%", base: "100%" }}>
                          <Center bg="light_green.A700" flexDirection="column" p="17px" borderRadius="40px">
                            <Image src="images/img_050_worldwide.svg" h="45px" w="45px" />
                          </Center>
                        </Box>
                        <Flex gap="23px" flexDirection="column" alignItems="start">
                          <Flex gap="10px" alignSelf="stretch" flexDirection="column" alignItems="start">
                            <Heading as="h6">Get our best offers quickly</Heading>
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
                    bg="light_green.A700"
                    justifyContent="space-between"
                    gap="20px"
                    p={{ md: "59px", base: "20px" }}
                    borderRadius="20px"
                    flexDirection={{ md: "row", base: "column" }}
                  >
                    <Flex gap="9px" flexDirection="column" alignItems="start">
                      <Heading size="3xl" as="h1" color="white.A700">
                        10k+
                      </Heading>
                      <Text color="white.A700">Complete project</Text>
                    </Flex>
                    <Flex
                      w={{ md: "73%", base: "100%" }}
                      justifyContent="space-between"
                      alignItems="center"
                      gap="20px"
                      flexDirection={{ base: "column", sm: "row" }}
                    >
                      <Flex gap="7px" flexDirection="column" alignItems="start">
                        <Heading size="3xl" as="h1" color="white.A700">
                          20+
                        </Heading>
                        <Text color="white.A700">Team member</Text>
                      </Flex>
                      <Flex gap="9px" flexDirection="column" alignItems="start">
                        <Heading size="3xl" as="h1" color="white.A700">
                          5k+
                        </Heading>
                        <Text color="white.A700">Winning award</Text>
                      </Flex>
                      <Flex gap="9px" flexDirection="column" alignItems="start">
                        <Heading size="3xl" as="h1" color="white.A700">
                          100+
                        </Heading>
                        <Text color="white.A700">Complete project</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap={{ base: "30px", sm: "60px" }} flexDirection="column">
                <Box>
                  <Flex gap="10px" flexDirection="column">
                    <Flex gap="10px" alignItems="center">
                      <Image src="images/img_frame_teal_900.svg" h="20px" w="20px" />
                      <Heading size="xs" as="h6" letterSpacing="1.40px" textTransform="uppercase">
                        supporting Coaching
                      </Heading>
                    </Flex>
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      gap="20px"
                      flexDirection={{ md: "row", base: "column" }}
                    >
                      <Heading size="3xl" as="h1" w={{ md: "49%", base: "100%" }} lineHeight="60px">
                        A Tapestry of Experiences Cultural Encounters{" "}
                      </Heading>
                      <Flex gap="20px" alignSelf="end">
                        <IconButton
                          onClick={() => {
                            sliderRef2?.current?.slidePrev();
                          }}
                          size="4xl"
                          icon={<Image src="images/img_close_gray_300.svg" />}
                          aria-label="3755:257-close_one"
                          w="60px"
                        />
                        <IconButton
                          onClick={() => {
                            sliderRef2?.current?.slideNext();
                          }}
                          size="4xl"
                          icon={<Image src="images/img_save.svg" />}
                          aria-label="3755:261-iconbutton_two"
                          w="60px"
                          borderRadius="30px"
                          px={{ base: "20px", sm: "" }}
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <Box
                  gap="30px"
                  display="flex"
                  mx={{ md: "15px", base: "0px" }}
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 3 } }}
                    disableDotsControls
                    activeIndex={sliderState2}
                    onSlideChanged={(e: EventObject) => {
                      setSliderState2(e?.item);
                    }}
                    ref={sliderRef2}
                    items={[...Array(9)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <Box px="15px">
                          <Flex>
                            <Box w="100%">
                              <Box h="323px" bg="blue_gray.100" borderRadius="20px" />
                              <Box
                                mt="-75px"
                                borderTopLeftRadius="20px"
                                borderBottomLeftRadius="20px"
                                borderBottomRightRadius="20px"
                                position="relative"
                                bg="white.A700"
                                boxShadow="xs"
                                p={{ base: "20px", sm: "30px" }}
                              >
                                <Flex alignSelf="end" justifyContent="space-between" alignItems="center" gap="20px">
                                  <Flex gap="7px" w="63%" flexDirection="column" alignItems="start">
                                    <Heading as="h5">TOFEL Coaching</Heading>
                                    <Text color="gray.600" w="100%" lineHeight="30px">
                                      There are many variati of passages of engineer
                                    </Text>
                                  </Flex>
                                  <IconButton
                                    size="4xl"
                                    variant="outline"
                                    colorScheme="gray_300"
                                    icon={<Image src="images/img_arrow_left_teal_900.svg" />}
                                    aria-label="3755:264-arrowleft_one"
                                    w="60px"
                                    borderRadius="20px"
                                  />
                                </Flex>
                              </Box>
                            </Box>
                          </Flex>
                        </Box>
                      </React.Fragment>
                    ))}
                  />
                </Box>
              </Flex>
            </Flex>
          </Container>
          <Center
            h={{ md: "900px", base: "auto" }}
            mt="120px"
            bgImage="url(/images/img_group_28.svg)"
            bgSize="cover"
            bgRepeat="no-repeat"
            w={{ md: "94%", base: "100%" }}
            py={{ md: "120px", base: "20px" }}
            p={{ md: "", base: "20px" }}
          >
            <Container display="flex" justifyContent="center" px="0px">
              <Box w="100%">
                <Flex flexDirection="column">
                  <Flex gap="10px" alignItems="center">
                    <Image src="images/img_frame_teal_900.svg" h="20px" w="20px" />
                    <Heading size="xs" letterSpacing="1.40px" textTransform="uppercase">
                      Our Coaching
                    </Heading>
                  </Flex>
                  <Heading size="3xl" as="h3" mt="10px" w={{ md: "49%", base: "100%" }} lineHeight="60px">
                    Exploring the Unknown Voyages of Wonder{" "}
                  </Heading>
                  <Flex mt="60px" gap="30px" flexDirection={{ md: "row", base: "column" }}>
                    <Flex gap="30px" flex={1} flexDirection="column" alignSelf="stretch">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data4.map((d, index) => (
                          <HomeRow {...d} key={"list" + index} p="33px" />
                        ))}
                      </Suspense>
                    </Flex>
                    <Flex
                      bg="blue_gray.100"
                      w={{ md: "33%", base: "100%" }}
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="flex-end"
                      p={{ base: "20px", sm: "40px" }}
                      borderRadius="30px"
                    >
                      <Flex
                        mt="334px"
                        transform="rotate(90deg)"
                        bg="white.A700"
                        w={{ md: "48%", base: "100%" }}
                        justifyContent="center"
                        p="6px"
                        borderRadius="18px"
                      >
                        <Flex w="100%" justifyContent="space-between" alignItems="center" gap="20px">
                          <Image src="images/img_music_teal_900.svg" h="16px" w="16px" />
                          <Image src="images/img_facebook.svg" h="22px" />
                          <Image src="images/img_info.svg" h="16px" />
                          <Image src="images/img_info.svg" h="16px" alignSelf="start" />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Container>
          </Center>
          <Container mt="120px" px="0px" p={{ md: "", base: "20px" }}>
            <Box h={{ md: "645px", base: "auto" }} position="relative">
              <Box display="flex" w="100%">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                  disableDotsControls
                  activeIndex={sliderState1}
                  onSlideChanged={(e: EventObject) => {
                    setSliderState1(e?.item);
                  }}
                  ref={sliderRef1}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <Flex gap="30px" flexDirection={{ md: "row", base: "column" }}>
                        <Box h="645px" transform="rotate(180deg)" bg="blue_gray.100" w="41%" borderRadius="30px" />
                        <Flex
                          pl="60px"
                          pr="56px"
                          bg="light_green.A700"
                          flex={1}
                          flexDirection="column"
                          alignItems="start"
                          py="60px"
                          borderRadius="20px"
                          p={{ md: "", base: "20px" }}
                          alignSelf="stretch"
                        >
                          <Image src="images/img_frame_white_a700_55x72.svg" h="55px" w="12%" />
                          <Text size="lg" color="white.A700" mt="20px" w="100%" lineHeight="50px">
                            We have been operating for over an providin top-notch services to our clients and build
                            strong track record in the industry.We have been operating for over a decad providi ina
                            top-notch We have been operating
                          </Text>
                          <Flex mt="39px" gap="20px" w={{ md: "36%", base: "100%" }} alignItems="center">
                            <Box h="70px" bg="blue_gray.100" w="34%" borderRadius="35px" />
                            <Flex gap="12px" flex={1} flexDirection="column" alignItems="start">
                              <Heading color="white.A700">Albert Flores</Heading>
                              <Text color="white.A700">Web Designer</Text>
                            </Flex>
                          </Flex>
                          <Box h="1px" mt="80px" mb="9px" bg="white.A700" w="73%" />
                        </Flex>
                      </Flex>
                    </React.Fragment>
                  ))}
                />
              </Box>
              <Flex gap="20px" position="absolute" bottom="6%" right="5%" m="auto">
                <IconButton
                  size="4xl"
                  icon={<Image src="images/img_close_white_a700.svg" />}
                  aria-label="3754:71-close_three"
                  w="60px"
                  onClick={() => {
                    sliderRef1?.current?.slidePrev();
                  }}
                />
                <IconButton
                  size="4xl"
                  colorScheme="white_A700"
                  icon={<Image src="images/img_arrow_left.svg" />}
                  aria-label="3754:75-iconbutton"
                  w="60px"
                  borderRadius="30px"
                  px={{ base: "20px", sm: "" }}
                  onClick={() => {
                    sliderRef1?.current?.slideNext();
                  }}
                />
              </Flex>
            </Box>
          </Container>
          <Flex
            mt="120px"
            bg="white.A700"
            w={{ md: "94%", base: "100%" }}
            borderRadius="50px"
            p={{ md: "", base: "20px" }}
          >
            <Center
              h={{ md: "730px", base: "auto" }}
              bgImage="url(/images/img_group_28_teal_900.png)"
              bgSize="cover"
              bgRepeat="no-repeat"
              w="100%"
              py={{ md: "119px", base: "20px" }}
              borderRadius="50px"
            >
              <Container display="flex" justifyContent="center" px="0px" p={{ md: "", base: "20px" }}>
                <Flex gap={{ base: "30px", sm: "60px" }} w="100%" flexDirection="column" alignItems="center">
                  <Flex gap="10px" w={{ md: "49%", base: "100%" }} flexDirection="column" alignItems="center">
                    <Flex gap="10px" alignItems="center">
                      <Image src="images/img_frame_teal_900.svg" h="20px" w="20px" />
                      <Heading size="xs" letterSpacing="1.40px" textTransform="uppercase">
                        Process Overview
                      </Heading>
                    </Flex>
                    <Heading size="3xl" as="h3" textAlign="center" w="100%" lineHeight="60px">
                      Unforgettable Getaways Escaping Routine{" "}
                    </Heading>
                  </Flex>
                  <Flex gap="30px" alignSelf="stretch" flexDirection={{ md: "row", base: "column" }}>
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data3.map((d, index) => (
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
                          <Heading as="h4" mt="74px" ml={{ md: "10px", base: "0px" }}>
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
          </Flex>
          <Container mt="120px" px="0px" p={{ md: "", base: "20px" }}>
            <Flex gap={{ base: "30px", sm: "60px" }} flexDirection="column">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex gap="10px" w={{ md: "49%", base: "100%" }} flexDirection="column">
                  <Flex gap="10px" alignItems="center">
                    <Image src="images/img_frame_teal_900.svg" h="20px" w="20px" />
                    <Heading size="xs" letterSpacing="1.40px" textTransform="uppercase">
                      Recent Blogs
                    </Heading>
                  </Flex>
                  <Heading size="3xl" as="h3" lineHeight="60px">
                    Journeys of Discovery Uncovering Hidden{" "}
                  </Heading>
                </Flex>
                <Flex gap="20px" alignSelf="end">
                  <IconButton
                    onClick={() => {
                      sliderRef?.current?.slidePrev();
                    }}
                    size="4xl"
                    icon={<Image src="images/img_close_teal_900.svg" />}
                    aria-label="3755:291-close_five"
                    w="60px"
                  />
                  <IconButton
                    onClick={() => {
                      sliderRef?.current?.slideNext();
                    }}
                    size="4xl"
                    icon={<Image src="images/img_save.svg" />}
                    aria-label="3755:295-iconbutton_four"
                    w="60px"
                    borderRadius="30px"
                    px={{ base: "20px", sm: "" }}
                  />
                </Flex>
              </Flex>
              <Box
                gap="30px"
                display="flex"
                mx={{ md: "15px", base: "0px" }}
                flexDirection={{ md: "row", base: "column" }}
              >
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 3 } }}
                  disableDotsControls
                  activeIndex={sliderState}
                  onSlideChanged={(e: EventObject) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <Box px="15px">
                        <Flex
                          pb={{ base: "20px", sm: "40px" }}
                          gap="28px"
                          borderColor="gray.300"
                          borderWidth="1px"
                          borderStyle="solid"
                          flexDirection="column"
                          alignItems="center"
                          borderRadius="20px"
                        >
                          <Box
                            h="336px"
                            borderTopRightRadius="20px"
                            borderTopLeftRadius="20px"
                            bg="blue_gray.100"
                            alignSelf="stretch"
                          />
                          <Box w={{ md: "80%", base: "100%" }}>
                            <Flex justifyContent="space-between" gap="20px">
                              <Flex gap="5px" alignItems="center">
                                <Image src="images/img_lock.svg" h="16px" />
                                <Text color="gray.600">October 19, 2022</Text>
                              </Flex>
                              <Flex gap="5px" alignItems="center">
                                <Image src="images/img_lock.svg" h="16px" />
                                <Text color="gray.600">By admin</Text>
                              </Flex>
                            </Flex>
                            <Heading as="h4" mt="21px" lineHeight="30px">
                              World of Wander Discovering Diverse Landscapes
                            </Heading>
                            <Text color="gray.600" mt="10px" lineHeight="30px">
                              Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
                            </Text>
                          </Box>
                          <Flex
                            ml={{ md: "40px", base: "0px" }}
                            gap="10px"
                            alignSelf="start"
                            alignItems="center"
                            py="5px"
                          >
                            <Link href="#">
                              <Heading size="xs" as="h5">
                                Read More
                              </Heading>
                            </Link>
                            <Image src="images/img_arrow_left.svg" h="14px" w="14px" />
                          </Flex>
                        </Flex>
                      </Box>
                    </React.Fragment>
                  ))}
                />
              </Box>
            </Flex>
          </Container>
          <Footer mt="225px" alignSelf="stretch" />
        </Flex>
      </Box>
    </>
  );
}
