import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { layoutGenerator } from "react-break";
import {
  Box,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
  Card,
  Button,
  Center,
  useDisclosure,
  Image,
  Modal,
  useToast,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { paymentValidationSchema } from "../../Schemas";

const VehicleSlider = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  function handleClick(vehicle) {
    setSelectedCar(vehicle);
    onOpen();
  }

  const paymentInitialValues = {
    firstName: "",
    lastName: "",
    amount: "",
  };

  const handlePayment = (vehicle) => {
    showToast(vehicle.brand);
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://swift-ride-backend.onrender.com/offers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });
  const OnTablet = layout.is("tablet");
  const OnPhablet = layout.is("phablet");
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");

  const displayVehicles = vehicles.map((vehicle) => (
    <SplideSlide m={"auto"} key={vehicle.id}>
      <Box textAlign={"center"}>
        <Card
          maxW="md"
          boxShadow={"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"}
          rounded="md"
          maxH={"550px"}
        >
          <CardBody>
            <Flex w="100%">
              <Image
                objectFit="cover"
                w={"100vw"}
                h={"280px"}
                src={vehicle.image}
                alt="vehicle image"
                borderRadius="lg"
              />
            </Flex>
            <Heading size="md" mt={"6px"} textAlign={"center"}>
              {vehicle.brand}
              <span>, </span>
              {vehicle.model}
            </Heading>
            <Stack mt="4" spacing="3" flexDirection={"column"}>
              <Text>Gear Box: {vehicle.gearbox}</Text>
              <Text>Vehicle type: {vehicle.vehicle_type}</Text>
              <Text>Year : {vehicle.year}</Text>
            </Stack>
            <Text
              color={"#32bb78"}
              fontSize="xl"
              fontWeight={"600"}
              py={"5px"}
              textAlign={"center"}
            >
              price per day: &nbsp; {Math.floor(vehicle.price_per_day * 150)}{" "}
              KES
            </Text>
            <Center>
              <Button
                variant="solid"
                color={"#fff"}
                bg={"#32bb78"}
                w={"30%"}
                p={"2"}
                onClick={() => handleClick(vehicle)}
              >
                Hire
              </Button>
            </Center>
          </CardBody>
        </Card>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay style={{ background: "rgba(0, 0, 0, 0.1)" }} />
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
                            isInvalid={
                              form.errors.amount && form.touched.amount
                            }
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
      </Box>
    </SplideSlide>
  ));

  return (
    <Box bg={"#32BB78"} h={"600px"}>
      <Text textAlign={"center"} fontSize={"2rem"} fontWeight={"bold"} p={"3"}>
        Special offers
      </Text>
      <OnDesktop>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pauseOnHover: true,
            pauseOnFocus: true,
            pagination: false,
            autoplay: false,
            speed: 5500,
            type: "loop",
            interval: 4000,
            rewindByDrag: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayVehicles}
        </Splide>
      </OnDesktop>
      <OnTablet>
        <Splide
          options={{
            perPage: 2,
            arrows: false,
            autoplay: true,
            speed: 10000,
            pagination: false,
            type: "loop",
            interval: 5000,
            rewindByDrag: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayVehicles}
        </Splide>
      </OnTablet>
      <OnPhablet>
        <Splide
          options={{
            perPage: 1,
            arrows: false,
            autoplay: true,
            speed: 6000,
            pagination: false,
            type: "loop",
            interval: 5000,
            rewindByDrag: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayVehicles}
        </Splide>
      </OnPhablet>
      <OnMobile>
        <Splide
          options={{
            perPage: 1,
            arrows: true,
            rewindByDrag: true,
            padding: { left: "20px" },
            gap: "10px",
            pagination: false,
            type: "loop",

            drag: "free",
          }}
        >
          {displayVehicles}
        </Splide>
      </OnMobile>
    </Box>
  );
};

export default VehicleSlider;


