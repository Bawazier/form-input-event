import React from "react";
import {
  Box,
  Container,
  Flex,
  Spacer,
  HStack,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {FaPlus} from "react-icons/fa";
import { MdReorder } from "react-icons/md";

function Header() {
  return (
    <Box bg="gray.500" color="white" py="4" px="8">
      <Container maxW="container.xl">
        <Flex>
          <Heading as="h2" size="xl">
            NavBar Brand
          </Heading>
          <Spacer />
          <HStack
            display={["none", "flex"]}
            spacing="28px"
            fontSize="18px"
            fontWeight="bold"
          >
            <Button
              colorScheme="whiteAlpha"
              color="white"
              leftIcon={<FaPlus />}
              variant="link"
              size="lg"
            >
              Add Event
            </Button>
            <Button
              colorScheme="whiteAlpha"
              color="white"
              variant="link"
              size="lg"
            >
              Dashboard
            </Button>
          </HStack>
          <Menu display={["block", "none"]}>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<MdReorder />}
              variant="outline"
              display={["flex", "none"]}
            />
            <MenuList>
              <MenuItem icon={<FaPlus />}>Add Event</MenuItem>
              <MenuItem>Dashboard</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
