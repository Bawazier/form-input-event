import React from "react";
import Header from "../components/Header";
import CardEvent from "../components/CardEvent";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="transparent" p={0} minH="100vh">
      <Header />
      <Container maxW="container.xl" py="8">
        <SimpleGrid columns={[1, 3]} spacing={6}>
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
