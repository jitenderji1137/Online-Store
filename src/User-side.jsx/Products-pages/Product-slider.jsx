import { Image , CardFooter , Card , Button , Text , Center , Heading } from "@chakra-ui/react"
import { Navigate } from "react-router-dom"
import axios from "axios";
import { useState , useEffect ,useContext } from "react";
import { fetchdata } from "../../Data-manager";
function Slider({cat}){
    const [ dataa , datavalue] = useState([]);
    var singledata = useContext(fetchdata)
    const [redd,redirect] = useState(false);
    useEffect(() => {
        datavalue([])
        redirect(false)
        axios.get(`https://api-data-iv41.onrender.com/Products?MAINCATEGORY=${cat}&_page=1&_limit=15`)
        .then((res)=>{
            datavalue(res.data);
        })
       },[cat])
       function ControlOnClick(item){
        singledata.data = item;
        redirect(true);
        }
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
                <div width="100%" style={{backgroundColor:"black"}} onClick={()=>{ControlOnClick(item)}}>
                <Center color="white" fontWeight="bolder" padding="10px">
                QUICK BUY
                </Center>
                {redd?<Navigate to="/singlepage"/>:""}
                </div>
        </Card>
            )
        })
        
    }
    </>
    )
}
export default Slider;