import React from "react";
import Header from "../components/Header";
import CardEvent from "../components/CardEvent";
import { Box, Container, SimpleGrid, Button } from "@chakra-ui/react";
import { QueryClient, useInfiniteQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import axios from "axios";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const getEvent = async (page = 1) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/event?page=${page}&&limit=6`
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
  const option = {
    keepPreviousData: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
  };
  // const Event = useQuery(["event-data", page], () => getEvent(page), option);
  const {
    data,
    // status,
    // error,
    // isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    "event-data",
    async ({ pageParam = 0 }) => {
      const { data } = await axios.get(`/api/event?page=${pageParam}&&limit=6`);

      return data;
    },
    {
      ...option,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  const loadMoreButtonRef = React.useRef();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <Box bg="transparent" p={0} minH="100vh">
      <Header />
      <Container maxW="container.xl" py="8">
        {data?.pages?.map((group, i) => (
          <React.Fragment key={i}>
            <SimpleGrid columns={[1, 3]} spacing={6}>
              {group.results?.map((item, index) => (
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
          </React.Fragment>
        ))}
        <Button
          display="none"
          ref={loadMoreButtonRef}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
              ? "Load Newer"
              : "Nothing more to load"}
        </Button>
      </Container>
    </Box>
  );
}
