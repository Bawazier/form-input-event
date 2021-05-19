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

function CardEvent() {
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
          src="https://via.placeholder.com/728x90.png/?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
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
          >
            Pisangan timur, jakarta
          </Text>
        </HStack>
        <VStack align="start" spacing="1px">
          <Text fontSize="3xl" fontWeight="hairline" maxW="full" isTruncated>
            Meeting With CEO
          </Text>
          <Text color="gray.800" fontSize="14px" fontWeight="light">
            17 Agustus 2020
          </Text>
        </VStack>
        <HStack shouldWrapChildren wrap="wrap">
          <HStack>
            <IoPersonCircle color="#3182ce" />
            <Text fontSize="14px" color="gray.800" maxW="24" isTruncated>
              Rio Jainadi lacus sed turpis tincidunt id aliquet risus feugiat
            </Text>
          </HStack>
          <HStack>
            <IoPersonCircle color="#3182ce" />
            <Text fontSize="14px" color="gray.800" maxW="24" isTruncated>
              Dimas P.
            </Text>
          </HStack>
          <HStack>
            <IoPersonCircle color="#3182ce" />
            <Text fontSize="14px" color="gray.800" maxW="24" isTruncated>
              Raditsian
            </Text>
          </HStack>
        </HStack>
        <Box>
          <VStack align="start" spacing="2px">
            <Text fontWeight="bold">Note :</Text>
            <Text fontSize="14px" color="gray.800" noOfLines={4}>
              lacus sed turpis tincidunt id aliquet risus feugiat in ante metus
              dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu
              non odio euismod lacinia at quis risus sed vulputate odio ut enim
              blandit volutpat maecenas volutpat blandit aliquam etiam erat
              velit scelerisque in dictum non consectetur a erat nam
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CardEvent;
