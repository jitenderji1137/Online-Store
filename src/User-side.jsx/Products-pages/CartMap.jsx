import { CloseButton , Image , Text , Heading , ButtonGroup , Button} from "@chakra-ui/react"
import { useState , useEffect } from "react"
export default function CartMap({item,keyy,afterdelete}){
    const [count,countvalue] = useState(1);
    const [tot,total] = useState(0);
    useEffect(()=>{
     total(item.PRICE)
    const totalprice= localStorage.getItem("totalprice")||0;
    localStorage.setItem("totalprice",(+totalprice+Number(item.PRICE)));
    },[item.PRICE])
    function deleteItem(item){
    var localcartdata = JSON.parse(localStorage.getItem("cartdata"))||[];
    let arr = localcartdata.filter((obj) => obj.id !== item.id)
    localStorage.setItem("cartdata",JSON.stringify(arr));
    afterdelete(arr);
    localStorage.setItem("totalprice",+localStorage.getItem("totalprice")-tot)
    }
    return(
        <>
        <div key={keyy} style={{display:"flex",margin:"30px"}}>
                    <CloseButton size='lg' width="5%" p="30px" border="none" onClick={()=>{deleteItem(item)}} />
                    <Image src={item.IMAGE1} width="10%" />
                    <Text padding="30px" width="34%">{(item.TITLE).slice(0,35)} . . .</Text>
                    <Heading fontSize='xl'>{`$${item.PRICE}.00`}</Heading>
                    <ButtonGroup margin="0px 90px">
                        <Button isDisabled={count===1} onClick={()=>{
                            countvalue(count-1)
                            total(tot-item.PRICE)
                            localStorage.setItem("totalprice",+localStorage.getItem("totalprice")-item.PRICE)
                            }}>-</Button>
                        <Button>{count}</Button>
                        <Button onClick={()=>{
                            countvalue(count+1)
                            total(tot+item.PRICE)
                            localStorage.setItem("totalprice",+localStorage.getItem("totalprice")+item.PRICE)
                        }}>+</Button>
                    </ButtonGroup>
                    <Heading fontSize='xl'>{`$${tot}.00`}</Heading>
        </div>
        <hr style={{border: "-1.5px solid black", margin:"50px 20px"}} />
        </>
    )
}