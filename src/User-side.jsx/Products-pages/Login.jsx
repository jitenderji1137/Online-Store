import { Center , Heading , Input , ButtonGroup , Button } from "@chakra-ui/react"
import axios from "axios";
import swal from "sweetalert";
import { fetchdata } from "../../Data-manager"
import { useContext , useState } from "react";
import { useNavigate , Link } from "react-router-dom";
export default function Login(props){
    const aut = useContext(fetchdata);
    const [createacc,createaccount] = useState(true);
    const navi = useNavigate();
    if(createacc === true){
        document.title = "Online Store :- Login...";
    }
    else{
        document.title = "Online Store :- Create New Account...";
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        swal("Processing...")
         axios.get(`https://api-data-iv41.onrender.com/UserData?email=${form.EMAIL.value}`)
         .then((res)=>{
            if(res.data.length === 0){
                swal("No user found with this email ID ...", "");
            }
            else{
                if((res.data[0]).password === form.PASSWORD.value){
                    swal("Login Successfull ...", "");
                    localStorage.setItem("login","YES");
                    props.state("YES");
                    aut.admin = res.data[0].admin;
                    aut.userlogininfi = res.data[0];
                    localStorage.setItem("logininfo",JSON.stringify(res.data));
                    if(res.data[0].admin==="true"){
                    localStorage.setItem("admin","YES");
                    props.admin("YES");
                    }
                    else{
                        localStorage.setItem("admin","NO");
                    }
                    navi("/")
                }
                else{
                    swal("Incorrect Password ...", "");
                }
            }
         })
            
      }
      const CreateUserAccount = (e)=>{
        e.preventDefault();
        const form = e.target;
        swal("Processing...")
         axios.get(`https://api-data-iv41.onrender.com/UserData?email=${form.EMAIL.value}`)
         .then((res)=>{
            if(res.data.length === 0){
                axios.post("https://api-data-iv41.onrender.com/UserData",{
                    "name": form.NAME.value,
                    "password": form.PASSWORD.value,
                    "email": form.EMAIL.value,
                    "admin": "false",
                    "cart": []
                })
                .then((res)=>{
                    swal("Account Successfully Created...","");
                    localStorage.setItem("login","YES");
                    props.state("YES");
                    props.admin("NO")
                    aut.userlogininfi = JSON.stringify(res.data);
                    localStorage.setItem("logininfo",JSON.stringify(res.data));
                    localStorage.setItem("admin","NO");
                    navi("/")
                })
            }
            else{
                swal("This Email is Allready in Use ...","");
            }
         })
      }
    return (
        <>
        <Link to="/"><Center><Button>Home Page ...</Button></Center></Link>
        {createacc?
        <div style={{width:"400px", height:"450px",margin:"50px auto",backgroundColor:"white",borderRadius:"10px", boxShadow: "rgb(0 0 0 / 20%) -1px 6px 20px 20px"}}>
        <Center><Heading mt="35px">Login to Online Store</Heading></Center>
        <form name="submit-to-google-sheet" style={{marginBottom:"45px"}} onSubmit={handleSubmit} className="Form">
        <label style={{marginTop:"25px"}}>EMAIL ID</label>
        <Input type="email" id="EMAIL" placeholder="Your Email ID ..." required/>
        <label style={{marginTop:"45px"}}>PASSWORD</label>
        <Input type="password" id="PASSWORD" placeholder="Your Password.." required/>
        <ButtonGroup mt="35px" style={{display:"flex",justifyContent:"space-between"}}>
           <Button border="none" bg="white" onClick={()=>{createaccount(false)}}>Create new account...</Button>
           <Button type="submit">Login</Button>
        </ButtonGroup>
      </form>
        </div>:""};
        {!createacc?
        <div style={{width:"400px", height:"450px",margin:"50px auto",backgroundColor:"white",borderRadius:"10px", boxShadow: "rgb(0 0 0 / 20%) -1px 6px 20px 20px"}}>
        <Center><Heading mt="10px">Create Account...</Heading></Center>
        <form name="submit-to-google-sheet" style={{marginBottom:"30px"}} onSubmit={CreateUserAccount} className="Form">
        <label style={{marginTop:"20px"}}>NAME</label>
        <Input type="text" id="NAME" placeholder="Your Name ..." required/>
        <label style={{marginTop:"20px"}}>EMAIL ID</label>
        <Input type="email" id="EMAIL" placeholder="Your Email ID ..." required/>
        <label style={{marginTop:"20px"}}>PASSWORD</label>
        <Input type="password" id="PASSWORD" placeholder="Your Password.." required/>
        <ButtonGroup mt="20px" style={{display:"flex",justifyContent:"space-between"}}>
           <Button border="none" bg="white" onClick={()=>{createaccount(true)}}>Login...</Button>
           <Button type="submit">Create new account...</Button>
        </ButtonGroup>
      </form>
        </div>:""};
        
        </>
    )
}