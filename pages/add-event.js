import React from "react";
import {useRouter} from "next/router";
import Header from "../components/Header";
import FormEvent from "../components/FormEvent";
import {
  Container,
  Box,
  Button,
  AlertDialogCloseButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation, queryClient } from "react-query";
import axios from "axios";

function AddEvent() {
  const router = useRouter();
  const [dataImage, setDataImage] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const mutation = useMutation(
    (newEvent) => axios.post("/api/event", newEvent),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(["event-data", 1]);
      },
      onSuccess: async () => {
        await setAlertMsg("Success Add New Event");
        await setIsSuccess(true);
        onOpen();
      },
      // onError: async () => {
      //   await setAlertMsg("Sorry Add New Event Failled");
      //   await setIsSuccess(false);
      //   onOpen();
      // },
    }
  );
  const schema = yup.object().shape({
    title: yup.string().required(),
    location: yup.string().required(),
    participant: yup.array().min(2).max(3).required(),
    date: yup.date().required(),
    note: yup.string().min(50).required(),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      location: "",
      participant: [""],
      date: "",
      note: "",
    },
    validationSchema: schema,
    onSubmit: async (values, {resetForm}) => {
      var d = new Date();
      if (dataImage !== "") {
        mutation.mutate(
          {
            ...values,
            thumbnail: dataImage,
            createdAt: d.toLocaleString(),
          },
          {
            onSuccess: () => resetForm(),
          });
      } else {
        await setAlertMsg("Please Input Image for Submit Event");
        await setIsSuccess(false);
        onOpen();
      }
      
      
    },
  });
  return (
    <Box bg="transparent" p={0} minH="100vh">
      <Header />
      <Container maxW="container.lg" py="8">
        <FormEvent
          formik={formik}
          setThumbnail={(image) => setDataImage(image)}
        />
      </Container>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            {isSuccess ? "Success" : "Failled"}
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{alertMsg}</AlertDialogBody>
          {isSuccess ? (
            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => {
                  onClose();
                  setIsSuccess(false);
                }}
              >
                Add More Event
              </Button>
              <Button
                colorScheme="whatsapp"
                ml={3}
                onClick={() => router.push("/")}
              >
                Back to Home
              </Button>
            </AlertDialogFooter>
          ) : (
            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                colorScheme="red"
                ml={3}
                onClick={() => {
                  onClose();
                  setIsSuccess(false);
                }}
              >
                Try again
              </Button>
            </AlertDialogFooter>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
}

export default AddEvent;
