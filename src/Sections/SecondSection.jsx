import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Flex, Box } from "@chakra-ui/react";
import BoxComponent from "../Components/BoxComponent";
function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 1500,
    loop: true,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
const SecondSection = () => {
  return (
    <Box w="100%" h="auto" bg="#EBF8FF" mt="2rem">
      <Container maxW="7xl" h="auto" pb="1rem">
        <Flex
          w="100%"
          h="100%"
          justify="space-around"
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          align={{ base: "center" }}
        >
          <BoxComponent number={<Number n={123} />} />
          <BoxComponent number={<Number n={12} />} />
          <BoxComponent number={<Number n={12} />} />
          <BoxComponent number={<Number n={123} />} />
        </Flex>
      </Container>
    </Box>
  );
};

export default SecondSection;
