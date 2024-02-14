import { Button, Card, CardBody, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import PropTypes from 'prop-types'


function CarItems({data}) {
  return (
    <Flex flexWrap={'wrap'} pt={'100px'} gap={'20px'} justifyContent={'center'}>
      {data.map((car)=>{
        return <Card maxW='sm'key={car.id} boxShadow='lg' rounded='md' >
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{car.brand } &nbsp; {car.model }</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Text color={'#32bb78'} fontSize='2xl'>
              ${car.price_per_day}
            </Text>

            <Button variant='solid' color={'#fff'} bg={'#32bb78'}>
              Hire
            </Button>
          </Stack>
        </CardBody>
      </Card>
      })}
    </Flex>
  )
}

export default CarItems

CarItems.propTypes={
  data: PropTypes.array,
}