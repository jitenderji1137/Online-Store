import { useState , useEffect , useContext } from "react"
import { Grid , Skeleton , Card , Center , Image , Stack , Heading , Text , Divider , ButtonGroup , Button , CardFooter } from "@chakra-ui/react"
import axios from "axios";
import { Navigate } from "react-router-dom"
import { fetchdata } from "../Data-manager"
export default function AllinOne({value}){
    var singledata = useContext(fetchdata)
    const [state,statevalue] = useState([]);
    const [redd,redirect] = useState(false);
    useEffect(()=>{
        redirect(false);
        statevalue([])
     axios.get(`https://api-data-iv41.onrender.com/Products?MAINCATEGORY=${value}`)
     .then((res)=>{
        statevalue(res.data);
     })
    },[value])
    function ControlOnClick(item){
    singledata.data = item;
    redirect(true);
    }
    return(
        <>
        {state.length === 0 ?
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} /> 
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />  
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />  
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />  
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />  
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
            <Skeleton height='300px' style={{borderRadius:"10px"}} />
      </Grid>
        :
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {state.map((item,index)=>{
            return(
                        <Card maxW='100%' m="10px" style={{width:"100%",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}} key={index}>
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
        })}
        </Grid>
        }
        </>
    )
}