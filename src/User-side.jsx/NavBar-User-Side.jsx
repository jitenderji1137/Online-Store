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
import Login from "./Products-pages/Login"
import { fetchdata } from "../Data-manager"
import swal from "sweetalert"
import CreateAdminAccount from "../Admin-side-work/createadminaccount"
function UserNavBar(){
    const isAdmin = useContext(fetchdata)
    const [auth,admine] = useState(isAdmin.admin)
    const [textdata,text] = useState("");
    const navi = useNavigate();
    const [login,loginn] = useState(localStorage.getItem("login")||"NO");
    const checkfun = ()=>{
        login==="YES"?swal({
            title: "Are you sure? You want to LogOut?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("You have successfully Logout...", {
                icon: "success",
              });
              localStorage.setItem("login","NO")
              admine("NO")
              loginn("NO");
              isAdmin.admin = false;
              isAdmin.userlogininfi = [];
              localStorage.setItem("logininfo",JSON.stringify([]));
              localStorage.setItem("admin","NO");
              navi("/")
            }
          }):navi("/login")
    }
    return(
        <>
        <div style={{height:"70px",display:"flex",justifyContent:"space-around",borderBottom:"2px solid gray",margin:"10px"}}>
            <Center><Link to="/"><Heading><span style={{fontSize:"70px",color:"red"}}>O</span>nline <span style={{fontSize:"50px",color:"red"}}>S</span>tore</Heading></Link></Center>
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
                    <Button onClick={checkfun}>{login==="YES"?"Logout":"Login"}</Button>
                    <Link to="/cart"><Button>Cart</Button></Link>
                    {auth==="YES"?<Link to="/admin_dashboard"><Button>Admin</Button></Link>:""}
                </ButtonGroup>
                </div></Center>       
        </div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/search" element={<Search text={textdata}/>}></Route>
            <Route path="/login" element={<Login state={loginn} admin={admine}/>}></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
            <Route path="/admin_dashboard" element={<AdminDashboard/>}></Route>
            <Route path="/add_products" element={<MyForm/>}></Route>
            <Route path="/singlepage" element={<SingleProductPage/>}></Route>
            <Route path="/admin_dashboard/create_admin_account" element={<CreateAdminAccount/>}></Route>
            <Route path="/add_products/create_admin_account" element={<CreateAdminAccount/>}></Route>
            <Route path="*" element={<NoPageFound/>}></Route>
        </Routes>
        </>
    )
}
export default UserNavBar