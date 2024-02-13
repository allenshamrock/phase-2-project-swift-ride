import React, { useState } from "react";
import {
  signinValidationSchema,
  signupValidationSchema,
} from "../Schemas/index";
import {
  Modal,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
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
    confirmPassword: "",
  };

  // Reset the form after successful submission
  const handleFormSubmit = async (values, actions) => {
    actions.resetForm({
      values:
        activeStatus === "signin" ? signinInitialValues : signupInitialValues,
    });
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
              onSubmit={handleFormSubmit}
            >
              {activeStatus === "signin" ? (
                <Form>
                  <Stack direction="column" spacing={8}>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <FormLabel>Email </FormLabel>
                          <Input {...field} type="type" id="email" />
                          <FormErrorMessage>
                            {form.errors.email &&
                              form.touched.email &&
                              form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <FormLabel>Password</FormLabel>
                          <Input {...field} type="password" id="email" />
                          <FormErrorMessage>
                            {form.errors.password &&
                              form.touched.password &&
                              form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Stack>
                </Form>
              ) : (
                <Form>
                  <Stack direction="column" spacing={8}>
                    <Field name="firstName">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.firstName && form.touched.firstName
                          }
                        >
                          <FormLabel>First Name</FormLabel>
                          <Input {...field} type="text" id="firstName" />
                          <FormErrorMessage>
                            {form.errors.firstName &&
                              form.touched.firstName &&
                              form.errors.firstName}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="lastName">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.lastName && form.touched.lastName
                          }
                        >
                          <FormLabel>Last Name</FormLabel>
                          <Input {...field} type="text" />
                          <FormErrorMessage>
                            {form.errors.lastName &&
                              form.touched.lastName &&
                              form.errors.lastName}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <FormLabel>Password</FormLabel>
                          <Input {...field} type="password" />
                          <FormErrorMessage>
                            {form.errors.password &&
                              form.touched.password &&
                              form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="confirmPassword">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.confirmPassword &&
                            form.touched.confirmPassword
                          }
                        >
                          <FormLabel> Confirm Password</FormLabel>
                          <Input {...field} type="password" />
                          <FormErrorMessage>
                            {form.errors.confirmPassword &&
                              form.touched.confirmPassword &&
                              form.errors.confirmPassword}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Stack direction="row" spacing={4}>
                      {activeStatus === "signin" ? (
                        <Button
                          width="70%"
                          colorScheme="teal"
                          variant="outline"
                        >
                          Sign In
                        </Button>
                      ) : (
                        <></>
                      )}

                      <Button
                        width={activeStatus === "signin" ? "30%" : "100%"}
                        bg="#32bb78"
                        variant="solid"
                        type="submit"
                      >
                        Sign Up
                      </Button>
                    </Stack>
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
            bg="#32bb78"
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
