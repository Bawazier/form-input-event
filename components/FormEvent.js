/* eslint-disable react/jsx-key */
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

function FormEvent({ formik, setThumbnail }) {
  const [dataImage, setDataImage] = React.useState("");
  const [participant, setParticipant] = React.useState(1);
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  // eslint-disable-next-line no-unused-vars
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  }; // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    if (!fileUploaded) {
      console.log("Please select image.");
      setDataImage("");
    } else if (!fileUploaded.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      console.log("Please select valid image.");
      setDataImage("");
    } else if (fileUploaded.size > 2 * 1024 * 1024) {
      console.log("Gagal pilih gambar!", "File gambar harus kurang dari 2MB");
      setDataImage("");
    } else {
      let reader = new FileReader();
      reader.onload = async (e) => {
        await setDataImage(e.target.result);
        await setThumbnail(e.target.result);
      };
      await reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <Container maxW="container.lg" p={0}>
      <HStack>
        <FaPlus />
        <Text fontWeight="bold" fontSize="18px">
          Add Event
        </Text>
      </HStack>
      <Flex direction={["column-reverse", "row"]} py="4">
        <Box flex="1">
          <Grid templateColumns="repeat(4, 1fr)" gap={4} p={4}>
            <GridItem colSpan={[4, 2]}>
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
            <GridItem colSpan={[4, 2]}>
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
            <GridItem colSpan={[4, 2]}>
              <FormControl id="note" isRequired>
                <FormLabel fontWeight="bold" fontSize="14px">
                    Participant
                </FormLabel>
                <Input
                  mb="2"
                  id="participant"
                  name="participant[0]"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.participant[0]}
                />
                <Input
                  mb="2"
                  id="participant"
                  name="participant[1]"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.participant[1]}
                />
                <Input
                  mb="2"
                  id="participant"
                  name="participant[2]"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.participant[2]}
                />
                <FormHelperText color="red.500" fontSize="14px">
                  {formik.errors.participant && formik.touched.participant
                    ? formik.errors.participant
                    : null}
                </FormHelperText>
              </FormControl>
            </GridItem>
            <GridItem colSpan={[4, 2]}>
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
          {dataImage !== "" ? (
            <Box w="full" h="full" cursor="pointer" onClick={handleClick}>
              <Image
                boxSize="full"
                objectFit="cover"
                src={dataImage}
                alt="Thumbnail"
              />
            </Box>
          ) : (
            <Center
              w="full"
              h="full"
              borderWidth="4px"
              borderColor="gray.500"
              borderStyle="dashed"
              cursor="pointer"
              onClick={handleClick}
            >
              <VStack>
                <FaFileUpload fontSize="60px" />

                <Text>Click / Drag and Drop</Text>
                <Text>Image</Text>
              </VStack>
            </Center>
          )}
          <Input
            display="none"
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default FormEvent;
