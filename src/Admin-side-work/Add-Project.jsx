import { Input , Button , Select , Textarea , ButtonGroup} from "@chakra-ui/react";
import "./Admin-styles/add-product.css"
import { useRef } from "react"
import { Link } from "react-router-dom" 
import swal from 'sweetalert';
import axios from "axios"
export default function MyForm() {
  const formRef = useRef(null);
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
      "MAINCATEGORY": form.MAINCATEGORY.value
      }
       axios.post("https://api-data-iv41.onrender.com/Products",formdata)
        .then(response => {
          swal("Product Added to Site...!", "Click Ok to Continue ...!", "success");
          formRef.current.reset();
        })
        .catch(error => console.error('Error!'));
    }
    
    return (
      <>
       <div style={{display:"flex",justifyContent:"space-between" , margin:"20px 40px"}}>
          <Link to="/admin_dashboard"><Button>Back to Admin Dashboard...</Button></Link>
          <ButtonGroup>
            <Link to="/"><Button>Home Page</Button></Link>
            <Button>Create New Admin Account...</Button>
          </ButtonGroup>
        </div>
        <div style={{maxWidth:"500px",margin:"auto"}}>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="Form" ref={formRef}>
        <Textarea name="TITLE" type="text" placeholder="Title of Product ..." required />
        <Input name="PRICE" type="number" placeholder="Price of Product ..." required />
        <Input name="IMAGE1" type="text" placeholder="Img-1 URL..." required />
        <Input name="IMAGE2" type="text" placeholder="Img-2 URL..." required />
        <Input name="IMAGE3" type="text" placeholder="Img-3 URL..." required />
        <Input name="IMAGE4" type="text" placeholder="Img-4 URL..." required />
        <Textarea name="DESCRIPTION" type="text" placeholder="Des of Product..." required />
        <Select name="MAINCATEGORY" placeholder='Select Category ...' required>
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
           <Link to="/admin_dashboard"><Button>...Back</Button></Link>
           <Button type="submit">Add to Site ... </Button>
        </ButtonGroup>
      </form>
      </div>
      </>
    );
  }

