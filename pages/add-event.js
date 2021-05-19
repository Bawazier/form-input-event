import React from "react";
import Header from "../components/Header";
import FormEvent from "../components/FormEvent";
import { Container, Box } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";

function AddEvent() {
  const schema = yup.object().shape({
    title: yup.string().required(),
    location: yup.string().required(),
    participant: yup.string().required(),
    date: yup.date().required(),
    note: yup.string().min(50).required(),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      location: "",
      participant: "",
      date: "",
      note: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box bg="transparent" p={0} minH="100vh">
      <Header />
      <Container maxW="container.lg" py="8">
        <FormEvent formik={formik} />
      </Container>
    </Box>
  );
}

export default AddEvent;
