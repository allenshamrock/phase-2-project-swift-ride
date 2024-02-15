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
    >
      {stats.map((stat, index) => {
        return (
          <Card boxShadow={'md'} mt={'10px'} maxW="sm" key={index} w={"250px"} alignItems={"center"} justifyContent={'center'} h={'120px'}>
            {stat.icons}
            <Heading>
              <CountUp start={0} end={stat.amount} duration={3.25}></CountUp>+
            </Heading>
            <Text fontWeight={"md"} letterSpacing={"1px"} color={"#32bb78"}>
              {stat.category}
            </Text>
          </Card>
        );
      })}
    </Flex>
  );
}

export default Countup;
