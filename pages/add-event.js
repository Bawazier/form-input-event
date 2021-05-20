import React from "react";
import Header from "../components/Header";
import FormEvent from "../components/FormEvent";
import { Container, Box } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation, queryClient } from "react-query";
import axios from "axios";

function AddEvent() {
  const [dataImage, setDataImage] = React.useState("");

  const mutation = useMutation(
    (newEvent) => axios.post("/api/event", newEvent),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(["event-data"]);
      },
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
    onSubmit: (values) => {
      var d = new Date();
      if(dataImage !== ""){
        mutation.mutate({
          ...values,
          thumbnail: dataImage,
          createdAt: d.toLocaleString(),
        });
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
    </Box>
  );
}

export default AddEvent;
