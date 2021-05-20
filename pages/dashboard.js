/* eslint-disable react/jsx-key */
import React from "react";
import Header from "../components/Header";
import TableEvent from "../components/TableEvent";
import { Box, Container, VStack, HStack, Input, Center } from "@chakra-ui/react";
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import axios from "axios";

const getEvent = async () => {
  const { data } = await axios.get("http://localhost:3000/api/event");

  return data;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["event-data"], () => getEvent());
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
}

export default function Home() {
  const option = {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
  };
  const Event = useQuery(["event-data"], () => getEvent(), option);
  return (
    <Box bg="transparent" p={0} minH="100vh">
      <Header />
      <Container maxW="container.lg" py="8">
        <VStack align="start" spacing="24px">
          <Input placeholder="Search..." />
          <Box w="full" overflow="auto">
            <TableEvent data={Event.data?.results} />
          </Box>
          <HStack alignSelf="center">
            <FaCaretSquareLeft fontSize="36px" />
            {[...Array(5)].map((item, index) => (
              <Center boxSize="40px" color="white" cursor="pointer">
                <Box as="span" fontWeight="bold" fontSize="lg">
                  {index + 1}
                </Box>
              </Center>
            ))}
            <FaCaretSquareRight fontSize="36px" />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
