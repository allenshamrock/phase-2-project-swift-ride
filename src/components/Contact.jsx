import { Box,  Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import Header from "./Header";
import { Card} from "@chakra-ui/card";

function Contact() {
  return (
    <>
      <Header />
      <Box p={'20px'} pt={'100px'}>

      <Heading textAlign="center">Get In Touch</Heading>
      <SimpleGrid
        spacing={4}
        minChildWidth={'300px'}
      >
        <Card p={{base:'20px'}} display="flex" alignItems="center"justifyContent="center">
            <Heading size="md"> Physical Address</Heading>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
        </Card>
        <Card p={{base:'20px'}} display="flex" alignItems="center"justifyContent="center">
            <Heading size="md"> Email</Heading>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
        </Card>
        <Card p={{base:'20px'}} display="flex" alignItems="center"justifyContent="center">
            <Heading size="md"> Call/Whatsapp</Heading>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
        </Card>
      </SimpleGrid>
 
      </Box>
      
         </>
  );
}

export default Contact;
