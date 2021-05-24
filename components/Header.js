import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {FaPlus} from "react-icons/fa";
import { MdReorder } from "react-icons/md";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const bg = useColorModeValue("blue.500", "blue.200");
  const color = useColorModeValue("white", "gray.800");
  return (
    <Box bg={bg} color={color} py="4" px="8">
      <Container maxW="container.xl">
        <Flex>
          <Link href="/">
            <Heading as="h2" size="xl" cursor="pointer">
              NavBar Brand
            </Heading>
          </Link>

          <Spacer />
          <HStack
            display={["none", "flex"]}
            spacing="28px"
            fontSize="18px"
            fontWeight="bold"
          >
            <Button
              colorScheme="blue"
              color={color}
              leftIcon={<FaPlus />}
              variant="link"
              size="lg"
              onClick={() => router.push("/add-event")}
            >
              Add Event
            </Button>
            <Button
              colorScheme="blue"
              color={color}
              variant="link"
              size="lg"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </Button>
            <Button
              colorScheme="blue"
              color={color}
              size="sm"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? "Dark" : "Light"}
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
              <MenuItem
                onClick={() => router.push("/add-event")}
                icon={<FaPlus />}
              >
                Add Event
              </MenuItem>
              <MenuItem onClick={() => router.push("/dashboard")}>
                Dashboard
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
