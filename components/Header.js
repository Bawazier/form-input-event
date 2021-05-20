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
} from "@chakra-ui/react";
import {FaPlus} from "react-icons/fa";
import { MdReorder } from "react-icons/md";

function Header() {
  const router = useRouter();
  return (
    <Box bg="gray.500" color="white" py="4" px="8">
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
              colorScheme="whiteAlpha"
              color="white"
              leftIcon={<FaPlus />}
              variant="link"
              size="lg"
              onClick={() => router.push("/add-event")}
            >
              Add Event
            </Button>
            <Button
              colorScheme="whiteAlpha"
              color="white"
              variant="link"
              size="lg"
              onClick={() => router.push("/dashboard")}
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
              <MenuItem onClick={() => router.push("/add-event")} icon={<FaPlus />}>Add Event</MenuItem>
              <MenuItem onClick={() => router.push("/dashboard")}>Dashboard</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
