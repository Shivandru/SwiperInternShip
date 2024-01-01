import React from "react";
import { Flex, Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import manLogo from "../assets/manLogo.png";
import leftIcon from "../assets/leftIcon.png";
const MainCard = () => {
  return (
    <Flex
      mt={{ base: "0.5rem", lg: "4rem" }}
      backgroundImage="linear(to right, #EDF2F7 , #FFFFFF)"
      w="100%"
      justify="space-between"
      h="auto"
      pb="1rem"
      align="center"
      direction={{ base: "column-reverse", lg: "row" }}
    >
      <Box w={{ base: "100%", lg: "30%" }} h="100%" pt="3rem" pl="4rem">
        <Heading pb="1rem">Lorem Ipsum</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, porro
          natus architecto ullam eaque laudantium reprehenderit laboriosam neque
          laborum amet, quae non voluptates! Voluptatem dignissimos mollitia
          esse pariatur sed cum.
        </Text>
        <Button bg="#2A4365" color="#FFFFFF" mt="1rem" mb="1rem">
          Know More
          <Image src={leftIcon} ml="0.5rem" w="0.75rem" />
        </Button>
      </Box>
      <Box>
        <Image src={manLogo} h="100%" p="0rem" />
      </Box>
    </Flex>
  );
};

export default MainCard;
