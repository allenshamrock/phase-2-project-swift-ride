import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Modal,
  useToast,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { paymentValidationSchema } from "../Schemas";
import { Formik, Form, Field } from "formik";

function CarItems({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [selectedCar, setSelectedCar] = useState(null);

  const paymentInitialValues = {
    firstName: "",
    lastName: "",
    amount: "",
  };

  function handleClick(car) {
    setSelectedCar(car);
    onOpen();
  }

  const handlePayment = (car) => {
    showToast(car.brand);
  };

  const showToast = (carBrand) => {
    toast({
      title: `Thank you for choosing ${carBrand}!`,
      description: "We've received your funds",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Flex flexWrap={"wrap"} pt={"50px"} gap={"20px"} justifyContent={"center"}>
      {data.map((car) => (
        <Card
          maxW="sm"
          key={car.id}
          boxShadow={"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"}
          rounded="md"
        >
          <CardBody>
            <Flex w="100%" h="200px">
              <Image
                objectFit="cover"
                w={"100vw"}
                src={car.image}
                alt="car image"
                borderRadius="lg"
              />
            </Flex>{" "}
            <Heading size="md" mt={"6px"} textAlign={"center"}>
              {car.brand}
              <span>, </span>
              {car.model}
            </Heading>
            <Flex gap={"1rem"}>
              <Stack mt="6" spacing="3">
                <Text>Milage: {car.mileage} km</Text>
                <Text>Gear Box: {car.gearbox}</Text>
              </Stack>
              <Stack mt="6" spacing="3">
                <Text>Vehicle type: {car.vehicle_type}</Text>
                <Text>Year : {car.year}</Text>
              </Stack>
            </Flex>
            <Text
              color={"#32bb78"}
              fontSize="xl"
              fontWeight={"600"}
              py={"5px"}
              textAlign={"center"}
            >
              price per day: &nbsp; {Math.floor(car.price_per_day * 150)} KES
            </Text>
            <Button
              variant="solid"
              color={"#fff"}
              bg={"#32bb78"}
              w={"100%"}
              onClick={() => handleClick(car)}
            >
              Hire
            </Button>
          </CardBody>
        </Card>
      ))}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Gateway</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={paymentInitialValues}
              validationSchema={paymentValidationSchema}
              onSubmit={(values, actions) => {
                handlePayment(selectedCar);
                actions.resetForm(); // Reset the form upon submission
                onClose(); // Close the modal after submission
              }}
            >
              {({ isSubmitting }) => (
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
                          <Input {...field} type="text" id="lastName" />
                          <FormErrorMessage>
                            {form.errors.lastName &&
                              form.touched.lastName &&
                              form.errors.lastName}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="amount">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.amount && form.touched.amount}
                        >
                          <FormLabel>Amount</FormLabel>
                          <Input {...field} type="text" id="amount" />
                          <FormErrorMessage>
                            {form.errors.amount &&
                              form.touched.amount &&
                              form.errors.amount}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Button
                      width="100%"
                      bg={"#32bb78"}
                      variant="outline"
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Pay
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

CarItems.propTypes = {
  data: PropTypes.array,
};

export default CarItems;
