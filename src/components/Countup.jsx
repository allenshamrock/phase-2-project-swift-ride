import { Card} from "@chakra-ui/card";
import { RiUserLocationFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import {
  Flex,
  Heading,
  Text,
} from "@chakra-ui/layout";
import CountUp from "react-countup";

function Countup() {
  const stats = [
    { category: "Satisfied clients", amount: "2381",icons:<BiSolidLike size={"2rem"}/>},
    // { category: "Success Rate", amount: "92.6" },
    { category: "Visits", amount: "3000" ,icons:<RiUserLocationFill size={"2rem"}/>},
    { category: "Refferals", amount: "769",icons:<IoIosPeople size={"2.2rem"}/> },
  ];
  return (
    <Flex
      gap={"80px"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      my={8}
    >
      {stats.map((stat, index) => {
        return (
      
          <Card  bg={'#32bb78'} borderTop={'5px solid #111'} maxW="sm" key={index} w={"250px"} alignItems={"center"} justifyContent={'center'} h={'120px'} boxShadow={'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);'}>
            {stat.icons}
            <Heading color={'#fff'}>
              <CountUp start={0} end={stat.amount} duration={3.25}></CountUp>+
            </Heading>
            <Text fontWeight={"md"} textTransform={'lowercase'} letterSpacing={"1px"} color={"#111"}>
              {stat.category}
            </Text>
          </Card>
        );
      })}
    </Flex>
  );
}

export default Countup;
