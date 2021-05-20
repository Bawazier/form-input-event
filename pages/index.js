import React from "react";
import Header from "../components/Header";
import CardEvent from "../components/CardEvent";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
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
      <Container maxW="container.xl" py="8">
        <SimpleGrid columns={[1, 3]} spacing={6}>
          {Event.data?.results?.map((item, index) => (
            <CardEvent
              key={index}
              title={item.title}
              location={item.location}
              date={item.date}
              participant={item.participant}
              note={item.note}
              thumbnail={item.thumbnail}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
