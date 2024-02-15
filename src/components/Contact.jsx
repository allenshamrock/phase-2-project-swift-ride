import {
  Box,
  Heading,
  Stack,
  Divider,
  SimpleGrid,
  Text,
  Flex,
} from "@chakra-ui/layout";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { TbClock24 } from "react-icons/tb";
import { CardBody } from '@chakra-ui/react';
import { Card } from "@chakra-ui/card";
import Header from "./Header";

function Contact() {
  const CardData = [
    {
      category: "General Inquiries",
      Email: "info@yourcarrentalsystem.com",
      Phone: "+254 (702) 123-456",
      Address: "123 Mombasa road ,Nairobi, 00100",
    },
    {
      category: "Reservations and Booking",
      Email: "reservations@yourcarrentalsystem.com",
      Phone: "+254 (755) 987-654",
      Address: "456 Ngong Avenue,Nairobi,02200",
    },
  ];
  const faqs = [
    {
      question: "How do I make a reservation?",
      answer:
        "To make a reservation, you can visit our website and use the online booking system or contact our reservations team at reservations@yourcarrentalsystem.com.",
    },
    {
      question: "What are your business hours?",
      answer:
        "Our regular business hours are Monday to Friday, 9:00 AM to 6:00 PM. However, you can make online reservations 24/7 through our website.",
    },
    {
      question: "How can I modify or cancel my reservation?",
      answer:
        "You can modify or cancel your reservation by logging into your account on our website or by contacting our reservations team at reservations@yourcarrentalsystem.com.",
    },
    {
      question: "What should I do in case of an emergency?",
      answer:
        "For emergencies, contact our emergency assistance line at +1 (555) 789-0123. For roadside assistance, call +1 (555) 876-5432.",
    },
    {
      question: "How can I provide feedback about my rental experience?",
      answer:
        "We welcome your feedback! You can share your thoughts through our website's feedback form or by emailing us at feedback@yourcarrentalsystem.com.",
    },
    {
      question: "Are there age restrictions for renting a car?",
      answer:
        "Yes, the minimum age for renting a car is 21. Additional fees may apply for drivers under 25.",
    },
  ];

  return (
    <>
      <Header />
      <Box p={"20px"} pt={"100px"}>
        <Heading textAlign="center"py={"30px"}>Get In Touch</Heading>
        <SimpleGrid
          spacing={8}
          minChildWidth={"350px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {CardData.map((card, index) => {
            return (
              <Card
                key={index}
                p={{ base: "20px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow={"8px 8px 0px #000000;"}
                border={"2px"}
                h={250}
              >
                <Heading fontSize={"1.4rem"} py={"4px"} color={"#32bb78"}>
                  {card.category}
                </Heading>
                <Flex flexDirection={"column"} gap={"10px"}>
                  <Flex gap={"8px"} alignItems={"center"}>
                    <IoIosMail size={"1.7rem"} />
                    <Text>{card.Email}</Text>
                  </Flex>
                  <Flex gap={"10px"} alignItems={"center"}>
                    <FaPhoneVolume size={"1.4rem"} />
                    <Text>{card.Phone}</Text>
                  </Flex>
                  <Flex gap={"8px"} alignItems={"center"}>
                    <MdLocationCity fontSize={"1.5rem"} />
                    <Text>{card.Address}</Text>
                  </Flex>
                </Flex>
              </Card>
            );
          })}
          <Card
            p={{ base: "20px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow={"8px 8px 0px #000000;"}
            border={"2px"}
            h={250}
          >
            <Heading fontSize={"1.4rem"} py={"4px"} color={"#32bb78"}>
              Emergency Assistance
            </Heading>
            <Flex flexDirection={"column"} gap={"10px"}>
              <Flex gap={"8px"} alignItems={"center"}>
                <FaPhoneVolume size={"1.4rem"} />
                <Text>+254 (755) 789-012 </Text>
              </Flex>
              <Flex gap={"8px"} alignItems={"center"}>
                <FaPhoneVolume size={"1.4rem"} />
                <Text>+254 (755) 876-543</Text>
              </Flex>
              <Flex gap={"8px"} alignItems={"center"}>
                <TbClock24 size={"1.7rem"} />
                <Text>available 24/7</Text>
              </Flex>
            </Flex>
          </Card>
        </SimpleGrid>
      </Box>
      <Box py={'20px'} px={'40px'}>
        <Heading textAlign={"center"} py={"50px"}>
          Frequently Asked Questions
        </Heading>
        <SimpleGrid spacing={8} minChildWidth={{base:"200px",md:"550px"}}>
          {faqs.map((faq, index) => {
            return (
              <Card key={index}>
                <CardBody>
                  <Stack spacing="4">
                    <Box>
                      <Heading size="xs" textTransform="uppercase" textAlign={"center"}>
                        {faq.question}
                      </Heading>
                      <Divider color={'#32bb78'}/>
                      <Text pt="2" fontSize="sm">
                        {faq.answer}
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Contact;
