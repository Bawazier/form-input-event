/* eslint-disable react/prop-types */
import React from "react";
import {
  Container,
  Box,
  HStack,
  VStack,
  Image,
  Center,
  Grid,
  GridItem,
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { MdPersonAdd } from "react-icons/md";
import { FaPlus, FaFileUpload } from "react-icons/fa";

function FormEvent({ formik }) {
  return (
    <Container maxW="container.lg" p={0}>
      <Flex direction={["column", "row"]}>
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
              <FormControl id="note" isRequired size="md">
                <FormLabel fontWeight="bold" fontSize="14px">
                  Title
                </FormLabel>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                <FormHelperText color="red.500" fontSize="14px">
                  {formik.errors.title && formik.touched.title
                    ? formik.errors.title
                    : null}
                </FormHelperText>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="note" isRequired>
                <FormLabel fontWeight="bold" fontSize="14px">
                  Location
                </FormLabel>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.location}
                />
                <FormHelperText color="red.500" fontSize="14px">
                  {formik.errors.location && formik.touched.location
                    ? formik.errors.location
                    : null}
                </FormHelperText>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <HStack align="start">
                <FormControl id="note" isRequired>
                  <FormLabel fontWeight="bold" fontSize="14px">
                    Participant
                  </FormLabel>
                  <Input
                    mb="2"
                    id="participant"
                    name="participant"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.participant}
                  />
                  <FormHelperText color="red.500" fontSize="14px">
                    {formik.errors.participant && formik.touched.participant
                      ? formik.errors.participant
                      : null}
                  </FormHelperText>
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
              <FormControl id="note" isRequired>
                <FormLabel fontWeight="bold" fontSize="14px">
                  Date
                </FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                />
                <FormHelperText color="red.500" fontSize="14px">
                  {formik.errors.date && formik.touched.date
                    ? formik.errors.date
                    : null}
                </FormHelperText>
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl id="note" isRequired size="sm">
                <FormLabel fontWeight="bold" fontSize="14px">
                  Note
                </FormLabel>
                <Textarea
                  id="note"
                  name="note"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.note}
                />
                <FormHelperText color="red.500" fontSize="14px">
                  {formik.errors.note && formik.touched.note
                    ? formik.errors.note
                    : null}
                </FormHelperText>
              </FormControl>
            </GridItem>
            <GridItem colStart={4} colEnd={4}>
              <Button
                leftIcon={<FaPlus />}
                onClick={formik.handleSubmit}
                colorScheme="blue"
              >
                Add Event
              </Button>
            </GridItem>
          </Grid>
        </Box>
        <Box width={["full", "md"]}>
          {/* <Box
            w="full"
            h="full"
            borderWidth="2"
            borderColor="gray.500"
            borderStyle="dotted"
          >
            <Image
              boxSize="full"
              objectFit="cover"
              src="https://via.placeholder.com/728x90.png/?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
              alt="Thumbnail"
            />
          </Box> */}
          <Center
            w="full"
            h="full"
            borderWidth="4px"
            borderColor="gray.500"
            borderStyle="dotted"
            cursor="pointer"
          >
            <VStack>
              <FaFileUpload fontSize="60px" />
              <Text>Click / Drag and Drop</Text>
              <Text>Image</Text>
            </VStack>
          </Center>
        </Box>
      </Flex>
    </Container>
  );
}

export default FormEvent;
