import { useState , useEffect , useRef} from "react";
import { Image , Heading , Text , Button , ButtonGroup , Grid, Center,Skeleton,Textarea,Input,Select } from '@chakra-ui/react'
import { Link , useNavigate } from "react-router-dom"
import axios from "axios";
import swal from 'sweetalert';
function AdminDashboard(){
  window.scrollTo(0, 0);
  const navi = useNavigate();
  if((localStorage.getItem("admin")||"NO")==="NO"){
   navi("/")
  }
  document.title = "Online Store :- Admin Dashboard...";
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const [dataa,datavalue] = useState([]);
  const [count,countvalue] = useState(1);
  const [total,totalpage] = useState(1);
  const formRef = useRef(null);
  const [formview,itsvalue] = useState(false)
  const [tit,titlee] = useState("")
  const [pri,pricee] = useState("")
  const [img1,image1] = useState("")
  const [img2,image2] = useState("")
  const [img3,image3] = useState("")
  const [img4,image4] = useState("")
  const [des,description] = useState("")
  const [cate,cateogry] = useState("")
  const [singlid,singleproductid] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    swal("Processing...!", {
      buttons: false,
    });
    const formdata = {
    "TITLE": form.TITLE.value,
    "PRICE": form.PRICE.value,
    "IMAGE1": form.IMAGE1.value,
    "IMAGE2": form.IMAGE2.value,
    "IMAGE3": form.IMAGE3.value,
    "IMAGE4": form.IMAGE4.value,
    "DESCRIPTION": form.DESCRIPTION.value,
    "MAINCATEGORY": form.MAINCATEGORY.value,
    "id": singlid
    }
     axios.put(`https://api-data-iv41.onrender.com/Products/${singlid}`,formdata)
      .then(response => {
        swal("Product Updated to Site...!", "Click Ok to Continue ...!", "success");
        itsvalue(false)
        axios.get(`https://api-data-iv41.onrender.com/Products?_page=${count}&_limit=20`)
        .then((data)=>{
          datavalue(data.data)
        })
      })
      .catch(error => console.error('Error!'));
  }
  useEffect(()=>{
    datavalue([])
    axios.get(`https://api-data-iv41.onrender.com/Products?_page=${count}&_limit=20`)
    .then((data)=>{
      datavalue(data.data)
      var i = (data.headers["x-total-count"]);
        totalpage( Math.ceil(i / 20));
    })
  },[count])
  function Deletefun(id){
  console.log(id)
  axios.delete(`https://api-data-iv41.onrender.com/Products/${id}`)
  .then((res)=>{
    console.log(res)
    swal("Product Deleted ...","", "success");
    axios.get(`https://api-data-iv41.onrender.com/Products?_page=${count}&_limit=20`)
    .then((data)=>{
      datavalue(data.data)
    })
  })
  }
  function Delete(id){
    swal({
      title: "Are you sure? You want to delete",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Deletefun(id)
      }
    });
  }
  function Update(item){
    itsvalue(true)
    titlee(item.TITLE);
    pricee(item.PRICE);
    image1(item.IMAGE1);
    image2(item.IMAGE2);
    image3(item.IMAGE3);
    image4(item.IMAGE4);
    description(item.DESCRIPTION);
    cateogry(item.MAINCATEGORY);
    singleproductid(item.id);
  }
    return (
        <>
        <div style={{display:"flex",justifyContent:"space-between" , margin:"20px 40px"}}>
          <Link to="/"><Button>Home Page</Button></Link>
          <ButtonGroup>
            <Link to="/add_products"><Button>Add New Product...</Button></Link>
            <Link to="./create_admin_account"><Button>Create New Admin Account...</Button></Link>
          </ButtonGroup>
        </div>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
         {dataa.length === 0?
           arr.map((item)=>{
             return(
               <Skeleton key={item} height='100px' style={{borderRadius:"10px"}} />
             )
           })
         :dataa.map((item,index)=>{
          return(
            <div key={index} style={{border:"1px solid gray",display:"flex", borderRadius:"10px"}}>
              <div style={{width:"15%", borderRadius:"10px"}}>
                <Image src={item.IMAGE1} borderRadius="10px"/>
              </div>
              <div style={{width:"55%"}}>
                <Text fontSize="15px" fontWeight="bold" m="20px" noOfLines={1}>Title : {item.TITLE}...</Text>
                <Text fontSize="10px" fontWeight="bold" m="20px">Price : {`$${item.PRICE}.00`}</Text>
              </div>
              <div style={{display:"flex",alignItems:"end"}}>
                <ButtonGroup>
                  <Button onClick={()=>{Update(item)}}>Update</Button>
                  <Button onClick={()=>{Delete(item.id)}}>Delete</Button>
                </ButtonGroup>
              </div>
            </div>
          )
         })}
        </Grid>
        <Center m="50px">
            {count===1?<Button w="100px" isDisabled>Previous</Button>:<Button onClick={()=>{countvalue(count-1)}}>Previous</Button>}
            <Button w="50px" m="0px 20px" isDisabled>{count}</Button>
            {count===total?<Button w="100px" isDisabled>Next</Button>:<Button onClick={()=>{countvalue(count+1)}}>Next</Button>}
        </Center>
       {formview? <div style={{position:"fixed",width:"400px",top:"50%",left:"50%",zIndex:"9999",transform: "translate(-50%, -50%)",backgroundColor:"white",borderRadius:"10px", boxShadow: "rgb(0 0 0 / 20%) -1px 6px 20px 20px"}}>
        <Center><Heading mt="10px">Update data</Heading></Center>
        <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="Form" ref={formRef}>
        <Textarea value={tit} name="TITLE" type="text" placeholder="Title of Product ..." onChange={(e)=>{titlee(e.target.value)}} required />
        <Input value={pri} name="PRICE" type="number" placeholder="Price of Product ..." onChange={(e)=>{pricee(e.target.value)}} required />
        <Input value={img1} name="IMAGE1" type="text" placeholder="Img-1 URL..." onChange={(e)=>{image1(e.target.value)}} required />
        <Input value={img2} name="IMAGE2" type="text" placeholder="Img-2 URL..." onChange={(e)=>{image2(e.target.value)}} required />
        <Input value={img3} name="IMAGE3" type="text" placeholder="Img-3 URL..." onChange={(e)=>{image3(e.target.value)}} required />
        <Input value={img4} name="IMAGE4" type="text" placeholder="Img-4 URL..." onChange={(e)=>{image4(e.target.value)}} required />
        <Textarea value={des} name="DESCRIPTION" type="text" placeholder="Des of Product..." onChange={(e)=>{description(e.target.value)}} required />
        <Select value={cate} name="MAINCATEGORY" placeholder='Select Category ...' onChange={(e)=>{cateogry(e.target.value)}} required>
          <option value='Bestsellers'>Bestsellers</option>
          <option value='SkinCare'>Skin Care</option>
          <option value='HairCare'>Hair Care</option>
          <option value='Makeup'>Makeup</option>
          <option value='Tools_Devices'>Tools & Devices</option>
          <option value='Bath_Body'>Bath & Body</option>
          <option value='Fragrance'>Fragrance Shop</option>
          <option value='Gifts_Sets'>Gifts & Sets</option>
        </Select>
        <ButtonGroup style={{display:"flex",justifyContent:"space-between"}}>
           <Button onClick={()=>{itsvalue(false)}}>Cancel</Button>
           <Button type="submit">Update to Site ... </Button>
        </ButtonGroup>
      </form>
        </div>:""}
        </>
    )
}
export default AdminDashboard;