import { Image , CardFooter , Card , Button , Text , Center , Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import axios from "axios";
import { useState , useEffect } from "react";
function Slider({cat}){
    const [ dataa , datavalue] = useState([]);
    useEffect(() => {
        axios.get(`https://api-data-iv41.onrender.com/Products?MAINCATEGORY=${cat}&_page=1&_limit=15`)
        .then((res)=>{
            datavalue(res.data);
        })
       },[cat])
    return(
        <>
        {dataa.map((item,index)=>{
            return(
                <Card maxW='20%' m="10px" style={{width:"100%",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}} key={index}>
            <Image
            objectFit='cover'
            src={item.IMAGE1}
            alt='Chakra UI'
            borderRadius="10px 10px 0px 0px"
            height="200px"
        />
        <Center><Text fontSize='xl' p="20px" noOfLines={1} style={{textAlign:"center"}}>{item.TITLE}...</Text></Center>
        <Center><Heading as='h4' size='md' p="20px">{`Price : $${item.PRICE}.00`}</Heading></Center>
            <Link to="/singlepage" width="100%" style={{backgroundColor:"black"}}>
            <Center color="white" fontWeight="bolder" padding="10px">
            QUICK BUY
            </Center>
            </Link>
        </Card>
            )
        })
        
    }
    </>
    )
}
export default Slider;