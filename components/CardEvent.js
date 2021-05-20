/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import {
  Container,
  Box,
  VStack,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";
import {MdLocationOn} from "react-icons/md";
import {IoPersonCircle} from "react-icons/io5";

function CardEvent({title, location, date, participant, note, thumbnail}) {
  return (
    <Container
      maxW="340px"
      bg="white"
      color="black"
      borderRadius="xl"
      boxShadow="4xl"
      p="0"
      overflow="hidden"
    >
      <Box w="full" h="56">
        <Image
          boxSize="full"
          objectFit="cover"
          src={thumbnail}
          alt="Thumbnail"
        />
      </Box>
      <VStack px="4" py="2" align="start" spacing="18px">
        <HStack>
          <MdLocationOn color="#E53E3E" fontSize="14px" />
          <Text
            fontSize="14px"
            color="black"
            fontWeight="black"
            casing="uppercase"
            noOfLines={1}
          >
            {location}
          </Text>
        </HStack>
        <VStack align="start" spacing="1px">
          <Text fontSize="3xl" fontWeight="hairline" maxW="full" isTruncated>
            {title}
          </Text>
          <Text color="gray.800" fontSize="14px" fontWeight="light">
            {date}
          </Text>
        </VStack>
        <HStack shouldWrapChildren wrap="wrap">
          {participant?.map((item) => (
            <HStack>
              <IoPersonCircle color="#3182ce" />
              <Text fontSize="14px" color="gray.800" maxW="20" isTruncated>
                {item}
              </Text>
            </HStack>
          ))}
        </HStack>
        <Box>
          <VStack align="start" spacing="2px">
            <Text fontWeight="bold">Note :</Text>
            <Text fontSize="14px" color="gray.800" noOfLines={4}>
              {note}
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CardEvent;
