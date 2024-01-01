import React from "react";
import {
  Input,
  Flex,
  Box,
  Heading,
  Container,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import handLogo from "../assets/subscribeLogo.png";
import leftIcon from "../assets/leftIcon.png";
const Subscribe = () => {
  return (
    <Container maxW="7xl" h="auto">
      <Flex
        justify="space-around"
        direction={{ base: "column-reverse", sm: "column-reverse", md: "row" }}
        align={{ base: "center" }}
      >
        <Box w={{ base: "100%", md: "47%" }} h="auto">
          <Heading mt="3rem" color="#2C5282" mb="1rem" fontWeight="500">
            Subscribe
          </Heading>
          <Text mb="1rem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            officiis fugiat saepe dicta placeat minus dolorem impedit,
            distinctio est esse quas unde beatae vitae numquam excepturi minima
            autem adipisci animi!
          </Text>
          <Input
            border="1px solid #A0AEC0"
            size="md"
            width={{ base: "100%", sm: "100%", md: "80%", lg: "60%" }}
            placeholder="Enter your Email Address"
          />
          <Button
            p="1.25rem"
            ml="1rem"
            mt={{ base: "1rem", sm: "1rem", md: "1rem", lg: "0rem" }}
            bg="#2A4365"
            color="#FFFFFF"
          >
            Subscribe Now
            <Image src={leftIcon} ml="0.5rem" />
          </Button>
        </Box>
        <Box w={{ base: "100%", md: "47%" }} h="100%">
          <Image src={handLogo} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Subscribe;
