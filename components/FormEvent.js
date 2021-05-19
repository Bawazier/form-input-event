import React from "react";
import {
  Container,
  Box,
  HStack,
  VStack,
  Center,
  Grid,
  GridItem,
  Flex,
  Text,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { MdPersonAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

function FormEvent() {
  return (
    <Container maxW="container.lg" bg="gray.500" color="black" my={4} p={0}>
      <Flex>
        <Box flex="1">
          <Grid templateColumns="repeat(4, 1fr)" gap={4} p={4}>
            <GridItem colSpan={4}>
              <HStack>
                <FaPlus />
                <Text fontWeight="bold" fontSize="18px">
                  Add Event
                </Text>
              </HStack>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl size="md">
                <FormLabel fontWeight="bold" fontSize="14px">
                  Title
                </FormLabel>
                <Input />
                <FormHelperText>input event title</FormHelperText>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontWeight="bold" fontSize="14px">
                  Location
                </FormLabel>
                <Input />
                <FormHelperText>input event location</FormHelperText>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <HStack align="start">
                <FormControl>
                  <FormLabel fontWeight="bold" fontSize="14px">
                    Participant
                  </FormLabel>
                  <Input mb="2" />
                </FormControl>
                <VStack>
                  <Box boxSize="6" display="hidden"></Box>
                  <IconButton
                    size="md"
                    aria-label="Add Paticipant"
                    icon={<MdPersonAdd />}
                    mr="4"
                  />
                </VStack>
              </HStack>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontWeight="bold" fontSize="14px">
                  Date
                </FormLabel>
                <Input type="date" />
                <FormHelperText>input event date</FormHelperText>
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl size="sm">
                <FormLabel fontWeight="bold" fontSize="14px">
                  Note
                </FormLabel>
                <Textarea placeholder="Here is a sample placeholder" />
              </FormControl>
            </GridItem>
            <GridItem colStart={4} colEnd={4}>
              <Button isLoading colorScheme="blue">
                Click me
              </Button>
            </GridItem>
          </Grid>
        </Box>
        <Box width="md">
          <Center w="full" h="full" bg="white">
            <Text>Box 1</Text>
          </Center>
        </Box>
      </Flex>
    </Container>
  );
}

export default FormEvent;
