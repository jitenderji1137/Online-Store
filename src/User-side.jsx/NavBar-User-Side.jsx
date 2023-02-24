import { Center , ButtonGroup ,Input , Button , Heading } from "@chakra-ui/react"
import { Link, useNavigate , Route , Routes } from "react-router-dom"
import Home from "./home"
import { useState , useContext } from "react"
import AdminDashboard from "../Admin-side-work/Admin-main"
import MyForm from "../Admin-side-work/Add-Project"
import Search from "./User-pages/SearchPage"
import SingleProductPage from "./SingleProductPage"
import NoPageFound from "./Products-pages/NoPageFound"
import CartPage from "./CartPage"
import { fetchdata } from "../Data-manager"
function UserNavBar(){
    const isAdmin = useContext(fetchdata)
    const [textdata,text] = useState("");
    const navi = useNavigate();
    return(
        <>
        <div style={{height:"70px",display:"flex",justifyContent:"space-around",borderBottom:"2px solid gray",margin:"10px"}}>
            <Center><Link to="/"><Heading>Online Store</Heading></Link></Center>
            <Center><div><ButtonGroup>
                <Input value={textdata} placeholder="Type to search..."  onKeyPress={(e) => {
                        if (e.key === "Enter") {
                             navi("/search")
                        }
                    }} onChange={(e)=>{text(e.target.value)}}/>
                <Link to="/search"><Button>Enter</Button></Link>
                </ButtonGroup></div></Center>
            <Center><div>
                <ButtonGroup>
                    <Button>Account</Button>
                    <Link to="/cart"><Button>Cart</Button></Link>
                    {isAdmin.admin?<Link to="/admin_dashboard"><Button>Admin</Button></Link>:""}
                </ButtonGroup>
                </div></Center>       
        </div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/search" element={<Search text={textdata}/>}></Route>
            <Route path="/login"></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
            <Route path="/admin_dashboard" element={<AdminDashboard/>}></Route>
            <Route path="/add_products" element={<MyForm/>}></Route>
            <Route path="/singlepage" element={<SingleProductPage/>}></Route>
            <Route path="*" element={<NoPageFound/>}></Route>
        </Routes>
        </>
    )
}
export default UserNavBar