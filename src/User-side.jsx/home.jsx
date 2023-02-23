import HomePage from "./Products-pages/Home_page";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import AllinOne from "./AllinOne"
function Home(){
    const [page , pagevalue] = useState(<HomePage/>)
    return(
        <>
        <div style={{display:"flex",justifyContent:"space-around", margin:"10px"}}>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<HomePage/>)}}>Home</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Bestsellers"/>)}}>Bestsellers</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="SkinCare"/>)}}>Skin Care</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="HairCare"/>)}}>Hair Care</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Makeup"/>)}}>Makeup</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Tools_Devices"/>)}}>Tools & Devices</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Bath_Body"/>)}}>Bath & Body</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Fragrance"/>)}}>Fragrance Shop</Button>
            <Button style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Gifts_Sets"/>)}}>Gifts & Sets</Button>
        </div>
        {page}
        </> 
    )
}
export default Home;