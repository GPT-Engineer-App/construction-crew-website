import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Box as="header" position="sticky" top={0} bg="white" zIndex={10} boxShadow="md">
      <Flex maxW="6xl" mx="auto" py={4} px={4} align="center" justify="space-between">
        <Logo />
        <Navigation />
      </Flex>
    </Box>
  );
};

export default Header;
