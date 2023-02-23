import { useState , useEffect} from "react";
import { Card, Image, CardBody, CardFooter , Stack , Heading , Text , Button , ButtonGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import axios from "axios";
function AdminDashboard(){
  const [dataa,datavalue] = useState([]);
  useEffect(()=>{
    axios.get("https://api-data-iv41.onrender.com/Products?_page=1&_limit=20")
    .then((data)=>{
      datavalue(data.data)
    })
  },[])
    return (
        <>
        <Link to="/add_products"><Button>Add Product to site ...</Button></Link>
        {dataa&&dataa.map((item,index)=>{
        return <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        key={index}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={item.IMAGE1}
          alt='Caffe Latte'
        />
      
        <Stack>
          <CardBody>
            <Heading size='md'>{item.TITLE}</Heading>
            <Text py='2'>
              {item.DESCRIPTION}
            </Text>
          </CardBody>
          <Heading as='h3' p="20px" size='lg'>{`Price : $${item.PRICE}.00`}</Heading>
          <CardFooter>
          <ButtonGroup variant='outline' spacing='6'>
             <Button colorScheme='blue'>Update</Button>
             <Button>Delete</Button>
          </ButtonGroup>
          </CardFooter>
        </Stack>
      </Card>
})}
        </>
    )
}
export default AdminDashboard;