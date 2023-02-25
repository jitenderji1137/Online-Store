import { Navigate } from "react-router-dom";
import { useEffect , useState } from "react";
import swal from "sweetalert";
import { Button, Heading , Center, ButtonGroup, Input , Textarea } from "@chakra-ui/react";
import CartMap from "./Products-pages/CartMap";
export default function CartPage(){
    document.title = "Online Store :- Cart Page"
    const [IsAuth,isauthvalue] = useState([]);
    const [formview,itsvalue] = useState(false);
    const [isau,isauth] = useState(true);
    const [data,localdata] = useState(localStorage.getItem("login"||"NO"));
    useEffect(()=>{
        isauth(true);
        localdata(localStorage.getItem("login"||"NO"));
        var localcartdata = JSON.parse(localStorage.getItem("cartdata"))||[];
        isauthvalue(localcartdata);
        localStorage.setItem("totalprice",0);
    },[])
    return(
        <>
        {data === "NO"?<Navigate to="/">{swal("please login first...")}</Navigate>:
        <div>
        {isau?<div>{IsAuth.length === 0?<Center h="500px"><Heading>Your Cart is Empty</Heading></Center>:
        <div>
             <div style={{width:"80%",margin:"auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between", margin:"70px 60px 0px 60px"}}>
                            <div><Heading as='h4' size='md'>Product</Heading></div>
                            <div style={{display:"flex"}}>
                                <div><Heading as='h4' p="0px 60px" size='md'>Price</Heading></div>
                                <div><Heading as='h4' p="0px 60px" size='md'>Quantity</Heading></div>
                                <div><Heading as='h4' p="0px 60px" size='md'>Subtotal</Heading></div>
                            </div>
                        </div>
                       <hr style={{border: "1px solid black", margin:"0px 0px"}} />
            {IsAuth.map((itemm,index)=>{
                return <CartMap key={index} afterdelete={isauthvalue} item={itemm} />
            })}
                        <div style={{display:"flex",justifyContent:"space-between",margin:"0px 100px"}}>
                       <ButtonGroup>
                          <Input placeholder="Enter Coupon Code Her..."/>
                          <Button padding="0px 40px">  Apply Coupon  </Button>
                       </ButtonGroup>
                       <Button onClick={()=>{itsvalue(true)}}>Continue Shopping</Button>
                       </div>
            </div>           
        </div>
        }</div>:""}
        </div>
        }
        {formview? <div style={{position:"fixed",width:"400px",top:"50%",left:"50%",transform: "translate(-50%, -50%)",backgroundColor:"white",borderRadius:"10px", boxShadow: "rgb(0 0 0 / 20%) -1px 6px 20px 20px"}}>
        <Center><Heading mt="10px">Shipping Address ...</Heading></Center>
        <form name="submit-to-google-sheet" onSubmit={(e)=>{
            e.preventDefault()
            swal(`Your order of $${localStorage.getItem("totalprice")}.00 has been placed`,"","success")
            itsvalue(false);
            }} className="Form">
        <Textarea type="text" placeholder="Your Name ..." required />
        <Input type="number" placeholder="Mobile Number ..."required />
        <Input type="email" placeholder="Email ID..." required />
        <Input type="number" placeholder="Pin Code..." required />
        <Textarea type="text" placeholder="Your Address ..." required />
        <ButtonGroup style={{display:"flex",justifyContent:"space-between"}}>
           <Button onClick={()=>{itsvalue(false)}}>Cancel</Button>
           <Button type="submit">Place Order ... </Button>
        </ButtonGroup>
      </form>
        </div>:""}
        </>
    )
}