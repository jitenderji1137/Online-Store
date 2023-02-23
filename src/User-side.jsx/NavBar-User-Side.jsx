import { Center , ButtonGroup ,Input , Button , Heading } from "@chakra-ui/react"
import { Link , Route , Routes } from "react-router-dom"
import Home from "./home"
import { useState } from "react"
import AdminDashboard from "../Admin-side-work/Admin-main"
import MyForm from "../Admin-side-work/Add-Project"
import Search from "./User-pages/SearchPage"
import SingleProductPage from "./SingleProductPage"
import NoPageFound from "./Products-pages/NoPageFound"
function UserNavBar(){
    const [textdata,text] = useState("");
    return(
        <>
        <div style={{height:"70px",display:"flex",justifyContent:"space-around",borderBottom:"2px solid gray",margin:"10px"}}>
            <Center><Link to="/"><Heading>Online Store</Heading></Link></Center>
            <Center><div><ButtonGroup>
                <Input value={textdata} placeholder="Type to search..." onChange={(e)=>{text(e.target.value)}}/>
                <Link to="/singlepage"><Button>Enter</Button></Link>
                </ButtonGroup></div></Center>
            <Center><div>
                <ButtonGroup>
                    <Button>Account</Button>
                    <Button>Cart</Button>
                    <Link to="/admin_dashboard"><Button>Admin</Button></Link>
                </ButtonGroup>
                </div></Center>       
        </div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/search" element={<Search text={textdata}/>}></Route>
            <Route path="/login"></Route>
            <Route path="/cart"></Route>
            <Route path="/admin_dashboard" element={<AdminDashboard/>}></Route>
            <Route path="/add_products" element={<MyForm/>}></Route>
            <Route path="/singlepage" element={<SingleProductPage/>}></Route>
            <Route path="*" element={<NoPageFound/>}></Route>
        </Routes>
        </>
    )
}
export default UserNavBar