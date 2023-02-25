import { Center , Heading , Input , ButtonGroup , Button } from "@chakra-ui/react"
import axios from "axios";
import swal from "sweetalert";
import { useNavigate , Link } from "react-router-dom";
export default function CreateAdminAccount(){
    const navi = useNavigate();
    if((localStorage.getItem("admin")||"NO")==="NO"){
     navi("/")
    }
    document.title = "Online Store :- Create Admin Account..."
    const CreateAdminAccount = (e)=>{
        e.preventDefault();
        const form = e.target;
         axios.get(`https://api-data-iv41.onrender.com/UserData?email=${form.EMAIL.value}`)
         .then((res)=>{
            if(res.data.length === 0){
                axios.post("https://api-data-iv41.onrender.com/UserData",{
                    "name": form.NAME.value,
                    "password": form.PASSWORD.value,
                    "email": form.EMAIL.value,
                    "admin": "true",
                    "cart": []
                })
                .then((res)=>{
                    swal("Admin Account Successfully created...","")
                    navi("/admin_dashboard")
                })
            }
            else{
                swal("This Email is Allready in Use ...","");
            }
         })
      }
    return (
        <>
        <div style={{width:"400px", height:"450px",margin:"50px auto",backgroundColor:"white",borderRadius:"10px", boxShadow: "rgb(0 0 0 / 20%) -1px 6px 20px 20px"}}>
        <Center><Heading mt="10px">Create Admin Account...</Heading></Center>
        <form name="submit-to-google-sheet" style={{marginBottom:"30px"}} onSubmit={CreateAdminAccount} className="Form">
        <label style={{marginTop:"20px"}}>NAME</label>
        <Input type="text" id="NAME" placeholder="Your Name ..." required/>
        <label style={{marginTop:"20px"}}>EMAIL ID</label>
        <Input type="email" id="EMAIL" placeholder="Your Email ID ..." required/>
        <label style={{marginTop:"20px"}}>PASSWORD</label>
        <Input type="password" id="PASSWORD" placeholder="Your Password.." required/>
        <ButtonGroup mt="20px" style={{display:"flex",justifyContent:"space-between"}}>
           <Link to="/admin_dashboard"><Button border="none" bg="white">Cancel</Button></Link>
           <Button type="submit">Create new Admin account...</Button>
        </ButtonGroup>
      </form>
        </div>
        </>
    )
}