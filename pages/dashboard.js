/* eslint-disable react/jsx-key */
import React from "react";
import Header from "../components/Header";
import TableEvent from "../components/TableEvent";
import { Box, Container, VStack, HStack, Input, Center, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import axios from "axios";

const getEvent = async (page = 1) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/event?page=${page}`
  );

  return data;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["event-data", 1], () => getEvent(1));
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
}

export default function Home() {
  const color = useColorModeValue("black", "white");
  const [page, setPage] = React.useState(1);
  const option = {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
  };
  const Event = useQuery(["event-data", page], () => getEvent(page), option);
  console.log(Event);
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
            <IconButton
              isDisabled={page <= 1}
              icon={<FaCaretLeft fontSize="32px" />}
              onClick={() => setPage(page - 1)}
            />
            {[...Array(Event.data?.pages)].map((item, index) => (
              <Center
                boxSize="40px"
                color={color}
                cursor="pointer"
                onClick={() => setPage(index + 1)}
              >
                <Box as="span" fontWeight="bold" fontSize="lg">
                  {index + 1}
                </Box>
              </Center>
            ))}
            <IconButton
              isDisabled={page >= Event.data?.pages}
              icon={<FaCaretRight fontSize="32px" />}
              onClick={() => setPage(page + 1)}
            />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
