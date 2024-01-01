import React from "react";
import "./NavBar.css";
import {
  Button,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const isMobile = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    "2xl": true,
  });
  return (
    <>
      {isMobile ? (
        <div id="mainNav">
          <div id="logo">
            <h2>LOGO</h2>
          </div>
          <div id="subNav">
            <div>
              Qualification <ChevronDownIcon />
            </div>
            <div>
              Organizations <ChevronDownIcon />
            </div>
            <div>
              Research & Analysis <ChevronDownIcon />
            </div>
            <div>
              Lorem ipsum <ChevronDownIcon />
            </div>
            <div>
              Lorem ipsum <ChevronDownIcon />
            </div>
            <SearchIcon />

            <Button id="subNavButton" bg="#FFFFFf" color="#2B6CB0" w="9rem">
              Enrollment
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div id="mainNav" className="responsiveNav">
            <div id="logo">
              <h2>LOGO</h2>
            </div>
            <Button
              id="navButton"
              ref={btnRef}
              color="#2A4365"
              onClick={onOpen}
            >
              <HamburgerIcon />
            </Button>
          </div>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader m="auto">LOGO</DrawerHeader>
              <DrawerBody>
                <VStack spacing={14}>
                  <Button mt="10" w="80%">
                    Qualification
                  </Button>
                  <Button w="80%">Organizations</Button>
                  <Button w="80%">Research & Analysis</Button>
                  <Button w="80%">Lorem ipsum</Button>
                  <Button w="80%">Lorem ipsum</Button>
                  <Button w="80%">Search</Button>
                  <Button w="80%">Enrollment</Button>
                </VStack>
              </DrawerBody>
              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
};

export default Navbar;
