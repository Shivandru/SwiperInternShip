import React from "react";
import { Flex, Box, Container, Heading, Text, Image } from "@chakra-ui/react";
import SwiperComponent from "../Components/SwiperComponent";
const FirstSection = () => {
  return (
    <Container maxW="7xl" h="auto" mt="4rem" paddingBottom="2rem">
      <Flex
        h="auto"
        w="100%"
        justify="space-around"
        direction={{ base: "column", md: "column", lg: "row" }}
        align={{ base: "center", md: "flex-start", lg: "flex-start" }}
      >
        <Box
          w={{ base: "50%", md: "50%", lg: "20%" }}
          h="70%"
          borderRight={{ base: "none", md: "none", lg: "2px solid #A0AEC0" }}
          borderBottom={{
            base: "2px solid #A0AEC0",
            md: "2px solid #A0AEC0",
            lg: "none",
          }}
          mb={{ base: "2rem", md: "2rem", lg: "0rem" }}
        >
          <Heading fontSize="1.5rem" color="#2B6CB0">
            Upcoming Examinations
          </Heading>
          <Text color="#A0AEC0">
            Enquire about the examination & register for the exams
          </Text>
        </Box>
        <Flex w={{ base: "70%", md: "23%" }} h="70%" mb="1rem">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/661/661512.png"
            alt="calendarLogo"
            w="3rem"
            h="3rem"
          />
          <Box ml="0.35rem">
            <Text color="#2B6CB0" fontWeight="700">
              02th October 2014
            </Text>
            <Text color="#A0AEC0">Level 1 exam</Text>
          </Box>
        </Flex>
        <Flex w={{ base: "70%", md: "23%" }} h="70%" mb="1rem">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/661/661512.png"
            alt="calendarLogo"
            w="3rem"
            h="3rem"
          />
          <Box ml="0.35rem">
            <Text color="#2B6CB0" fontWeight="700">
              Nov-Dec 2016
            </Text>
            <Text color="#A0AEC0">Level 2 exam</Text>
            <Text color="#A0AEC0">Lorem Ipsum</Text>
            <Text color="#A0AEC0">Lorem Ipsum</Text>
          </Box>
        </Flex>
        <Flex w={{ base: "70%", md: "23%" }} h="70%" mb="1rem">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/661/661512.png"
            alt="calendarLogo"
            w="3rem"
            h="3rem"
          />
          <Box ml="0.35rem">
            <Text color="#2B6CB0" fontWeight="700">
              Ongoing this year
            </Text>
            <Text color="#A0AEC0">Level 3 (Grad)</Text>
          </Box>
        </Flex>
      </Flex>
      <SwiperComponent />
    </Container>
  );
};

export default FirstSection;
