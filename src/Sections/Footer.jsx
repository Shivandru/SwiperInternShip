import React from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import facebook from "../assets/facebookIcon.png";
import insta from "../assets/instaIcon.png";
import linkedin from "../assets/linkedinIcon.png";
import twitter from "../assets/twitterIcon.png";
import youtube from "../assets/youtubeIcon.png";
import quora from "../assets/quoraIcon.png";
import gpsLogo from "../assets/gpsIcon.png";
import watchIcon from "../assets/watchIcon.png";
import trainIcon from "../assets/trainIcon.png";
import fotterLogo from "../assets/footer_banner.png";
const Footer = () => {
  return (
    <>
      <Flex
        w="100%"
        h="auto"
        justify="space-around"
        bgImage={`url(${fotterLogo})`}
        backgroundSize="cover"
        backgroundPosition="center"
        pb="5rem"
        direction={{ base: "column", md: "row" }}
      >
        <Box ml="2rem" w={{ base: "80%", md: "31%" }} h="100%">
          <Heading
            color="#FFFFFF"
            pt="2rem"
            fontSize="1.65rem"
            fontWeight="500"
          >
            Contact us
          </Heading>
          <Text mt="2rem" color="#FFFFFF">
            Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <Text mt="0.5rem" color="#FFFFFF">
            Email: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <Text color="#FFFFFF" mt="0.5rem">
            Phone no: 123456789
          </Text>
        </Box>
        <Box w={{ base: "80%", md: "31%" }} h="100%">
          <Heading
            textAlign="center"
            pt="2rem"
            fontSize="1.65rem"
            fontWeight="500"
            color="#FFFFFF"
            mb="2rem"
          >
            Follow us
          </Heading>
          <Flex
            w="100%"
            justify="space-around"
            ml={{ base: "1rem", md: "0rem" }}
          >
            <Image src={facebook} />
            <Image src={linkedin} />
            <Image src={insta} />
            <Image src={twitter} />
            <Image src={youtube} />
            <Image src={quora} />
          </Flex>
        </Box>
        <Box
          w={{ base: "80%", md: "31%" }}
          h="100%"
          ml={{ base: "1rem", md: "0rem" }}
        >
          <Heading
            pt="2rem"
            fontSize="1.65rem"
            fontWeight="500"
            color="#FFFFFF"
            mb="2rem"
          >
            Head Office
          </Heading>
          <Flex w="100%">
            <Image src={gpsLogo} />
            <Text fontSize="0.7rem" ml="1rem" color="#FFFFFF">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              nobis nisi sint libero quisquam, deserunt cum exercitationem.
            </Text>
          </Flex>
          <Flex mt="1rem" w="100%">
            <Image src={watchIcon} />
            <Text fontSize="0.7rem" ml="1rem" color="#FFFFFF">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Text>
          </Flex>
          <Flex mt="1rem" w="100%">
            <Image src={watchIcon} />
            <Text fontSize="0.7rem" ml="1rem" color="#FFFFFF">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Text>
          </Flex>
          <Flex mt="1rem" w="100%">
            <Image src={trainIcon} />
            <Text fontSize="0.7rem" ml="1rem" color="#FFFFFF">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box bg="#1A365D" width="100%" color="#2A4365" height="3rem">
        <Text textAlign="center" color="white" pt="0.5rem">
          © 2021 All Rights Reserved.Privacy Policy
        </Text>
      </Box>
    </>
  );
};

export default Footer;
