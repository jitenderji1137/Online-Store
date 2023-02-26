import HomePage from "./Products-pages/Home_page";
import { Button } from "@chakra-ui/react";
import { useState ,useEffect } from "react";
import AllinOne from "./AllinOne"
import "./navbar.css"
function Home(){
    const [page , pagevalue] = useState(<HomePage/>)
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
          setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, [prevScrollPos]);    
    return(
        <>
        <div className={`routes ${visible ? '' : 'routes--hidden'}`} style={{display:"flex",justifyContent:"space-around",padding:"10px",borderBottom:"1px solid #d5d5d5"}}>
            <Button bg="white" style={{border:"none"}} onClick={()=>{pagevalue(<HomePage single={pagevalue}/>)}}>Home</Button>
            <Button bg="white" style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Bestsellers" single={pagevalue}/>)}}>Bestsellers</Button>
            <Button bg="white" style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="SkinCare" single={pagevalue}/>)}}>Skin Care</Button>
            <Button bg="white" style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="HairCare" single={pagevalue}/>)}}>Hair Care</Button>
            <Button bg="white" style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Makeup" single={pagevalue}/>)}}>Makeup</Button>
            <Button bg="white" style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Tools_Devices" single={pagevalue}/>)}}>Tools & Devices</Button>
            <Button bg="white" style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Bath_Body" single={pagevalue}/>)}}>Bath & Body</Button>
            <Button bg="white" style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Fragrance" single={pagevalue}/>)}}>Fragrance Shop</Button>
            <Button bg="white" style={{border:"none"}} onClick={()=>{pagevalue(<AllinOne value="Gifts_Sets" single={pagevalue}/>)}}>Gifts & Sets</Button>
        </div>
        {page}
        </> 
    )
}
export default Home;