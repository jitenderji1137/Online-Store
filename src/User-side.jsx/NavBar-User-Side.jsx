import { Center , ButtonGroup ,Input , Button , Heading } from "@chakra-ui/react"
import { Link , Route , Routes } from "react-router-dom"
import Home from "./home"
import AdminDashboard from "../Admin-side-work/Admin-main"
import MyForm from "../Admin-side-work/Add-Project"

function UserNavBar(){
    return(
        <>
        <div style={{height:"70px",display:"flex",justifyContent:"space-around",borderBottom:"2px solid gray",margin:"10px"}}>
            <Center><Link to="/"><Heading>Online Store</Heading></Link></Center>
            <Center><div><ButtonGroup>
                <Input placeholder="Type to search..."/>
                <Link to="/search"><Button>Enter</Button></Link>
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
            <Route path="/search"></Route>
            <Route path="/login"></Route>
            <Route path="/cart"></Route>
            <Route path="/admin_dashboard" element={<AdminDashboard/>}></Route>
            <Route path="/add_products" element={<MyForm/>}></Route>
        </Routes>
        </>
    )
}
export default UserNavBar