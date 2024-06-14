import { ChakraProps } from "@chakra-ui/react";
import MegaMenu1 from "../MegaMenu1";
import { Button, Image, Heading, Flex, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);
  const [menuOpen4, setMenuOpen4] = React.useState(false);
  const [menuOpen5, setMenuOpen5] = React.useState(false);
  const [menuOpen6, setMenuOpen6] = React.useState(false);

  return (
    <Flex {...props} justifyContent="space-between" alignItems="center" position="relative" gap="20px" as="header">
      <Image src="images/img_header_logo.png" h="41px" w="157px" fit="contain" />
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
  );
}
