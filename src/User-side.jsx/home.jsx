import HomePage from "./Products-pages/Home_page";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import AllinOne from "./AllinOne"
function Home(){
    const [page , pagevalue] = useState(<HomePage/>)
    return(
        <>
        <div style={{display:"flex",justifyContent:"space-around", margin:"10px"}}>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<HomePage single={pagevalue}/>)}}>Home</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Bestsellers" single={pagevalue}/>)}}>Bestsellers</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="SkinCare" single={pagevalue}/>)}}>Skin Care</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="HairCare" single={pagevalue}/>)}}>Hair Care</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Makeup" single={pagevalue}/>)}}>Makeup</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Tools_Devices" single={pagevalue}/>)}}>Tools & Devices</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Bath_Body" single={pagevalue}/>)}}>Bath & Body</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Fragrance" single={pagevalue}/>)}}>Fragrance Shop</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Gifts_Sets" single={pagevalue}/>)}}>Gifts & Sets</Button>
        </div>
        {page}
        </> 
    )
}
export default Home;