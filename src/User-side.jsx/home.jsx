import HomePage from "./Products-pages/Home_page";
import { Button } from "@chakra-ui/react";
function Home(){
    return(
        <>
        <div style={{display:"flex",justifyContent:"space-around", margin:"10px"}}>
            <Button style={{border:"none"}}>Bestsellers</Button>
            <Button style={{border:"none"}}>Skin Care</Button>
            <Button style={{border:"none"}}>Hair Care</Button>
            <Button style={{border:"none"}}>Makeup</Button>
            <Button style={{border:"none"}}>Tools & Devices</Button>
            <Button style={{border:"none"}}>Bath & Body</Button>
            <Button style={{border:"none"}}>Fragrance Shop</Button>
            <Button style={{border:"none"}}>Gifts & Sets</Button>
        </div>
        {<HomePage/>}
        </> 
    )
}
export default Home;