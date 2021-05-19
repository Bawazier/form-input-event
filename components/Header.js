import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  Link as ChakraLink,
  Heading,
} from "@chakra-ui/react";
// import {FaPlus} from "react-icons/fa";

function Header() {
  return (
    <Box bg="gray.500" color="white" py="4" px="8">
      <Flex>
        <Heading as="h2" size="xl">
          NavBar Brand
        </Heading>
        <Spacer />
        <HStack spacing="28px">
          <ChakraLink as={Link} href="#" size="lg">
            Add Event
          </ChakraLink>
          <ChakraLink as={Link} href="#" size="lg">
            Dashboard
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
