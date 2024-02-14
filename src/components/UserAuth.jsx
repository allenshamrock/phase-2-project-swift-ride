import React, { useState } from "react";
import {
  signinValidationSchema,
  signupValidationSchema,
} from "../Schemas/index";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  ButtonGroup,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

const UserAuth = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeStatus, setActiveStatus] = useState("");

  const signinInitialValues = {
    email: "",
    password: "",
  };

  const signupInitialValues = {
    firstName: "",
    lastName: "",
    password: "",
  };

  function handleClickModal(clickedStatus) {
    console.log("clickedStatus");
    setActiveStatus(clickedStatus);
    onOpen();
  }
  return (
    <div>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex
              direction={"row"}
              justifyContent={"center"}
              gap={"4"}
              alignItems={"center"}
            ></Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={
                activeStatus === "signin"
                  ? signinInitialValues
                  : signupInitialValues
              }
              validationSchema={
                activeStatus === "signin"
                  ? signinValidationSchema
                  : signupValidationSchema
              }
            >
              {activeStatus === "signin" ? (
                <Form>
                  <Stack direction="column" spacing={8}>
                    <Field type="email" name="email" placeholder="Email" />
                    <Field
                      type="number"
                      name="password"
                      placeholder="Password"
                    />
                  </Stack>
                </Form>
              ) : (
                <Form>
                  <Stack direction="column" spacing={8}>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First name"
                    />
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                    />
                    <Field type="email" name="email" placeholder="Email" />
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <Field
                      type="password"
                      name="Confirm password"
                      placeholder="Confirm Password"
                    />
                  </Stack>
                </Form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
        gap={"3"}
        p={"3"}
      >
        <ButtonGroup>
          <Button
            bg="#2BD083"
            size="sm"
            onClick={() => handleClickModal("signin")}
          >
            Sign in
          </Button>
          <Button
            bg="#2BD083"
            size="sm"
            onClick={() => handleClickModal("signup")}
          >
            Sign up
          </Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default UserAuth;
