import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react";
import AccordianComponent from "../Components/AccordianComponent";
const Faq = () => {
  return (
    <Container maxW="7xl" h="auto" mb="2rem">
      <Heading
        textAlign="center"
        color="#2A4365"
        mt="1rem"
        fontWeight="500"
        mb="2rem"
      >
        FAQ
      </Heading>
      <Box mt="1rem" w="100%" h="auto">
        <AccordianComponent />
      </Box>
    </Container>
  );
};

export default Faq;
