import { useState , useEffect , useContext } from "react"
import { Grid , Skeleton , Card , Center , Image , Stack , Heading , Text , Divider , ButtonGroup , Button , CardFooter } from "@chakra-ui/react"
import axios from "axios";
import { fetchdata } from "../Data-manager"
import SingleProductPage from "./SingleProductPage";
export default function AllinOne({value,single}){
    window.scrollTo(0, 0);
    var singledata = useContext(fetchdata)
    const [state,statevalue] = useState([]);
    const [count,countvalue] = useState(1);
    const [total,totalpage] = useState(1);
    useEffect(()=>{
        statevalue([])
     axios.get(`https://api-data-iv41.onrender.com/Products?MAINCATEGORY=${value}&_page=${count}&_limit=20`)
     .then((res)=>{
        statevalue(res.data);
        var i = (res.headers["x-total-count"]);
        totalpage( Math.ceil(i / 20));
     })
    },[count,value,total])
    useEffect(()=>{
        countvalue(1);
    },[value])
    function ControlOnClick(item){
    singledata.data = item;
    single(<SingleProductPage/>)
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
                        </div>
                        </Card>
                    )
        })}
        </Grid>
        }
        <Center m="50px">
            {count===1?<Button w="100px" isDisabled>Previous</Button>:<Button onClick={()=>{countvalue(count-1)}}>Previous</Button>}
            <Button w="50px" m="0px 20px" isDisabled>{count}</Button>
            {count===total?<Button w="100px" isDisabled>Next</Button>:<Button onClick={()=>{countvalue(count+1)}}>Next</Button>}
        </Center>
        </>
    )
}