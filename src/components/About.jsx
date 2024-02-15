import Header from "./Header";
import { Box, Heading } from "@chakra-ui/react"; 

function About() {
  return (
    <>
      <Header />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={"100vh"}
      >
        <Box flex="1">
          {}
          <Heading as="h2" size="xl" mb="4">
            About SwiftRides
          </Heading>
          <p>
            Welcome to SwiftRides, your go-to destination for reliable and affordable car rentals.
            Whether you need a car for a business trip, vacation, or daily commute, we &apos;ve got you covered.
            Our extensive fleet of vehicles ensures that you&apos;ll find the perfect ride for your needs.
            With convenient booking options and exceptional customer service, we make renting a car a breeze.
          </p>
        </Box>
        <Box flex="1">
          <img
            src="https://plus.unsplash.com/premium_photo-1661636643271-de8ae41c91b1?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="SwiftRides"
            style={{ maxWidth: '100%' }}
          />
        </Box>
      </Box>
    </>
  );
}

export default About;


