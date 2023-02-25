import { Center , Image , Heading , Button , Text } from "@chakra-ui/react";
import Slider from "./Product-slider"
function HomePage(){
  document.title = "Online Store | Skin Care Website for Beauty Products "
    return(<>
    <div>
        <Center bg='aliceblue' h='50px' color='#5e3b3b' style={{fontWeight:"bolder"}}>Rewards members earn TRIPLE points on Hair Care. Ends 2/21. START EARNING</Center>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
         <div className="carousel-item active" data-bs-interval="2000">
          <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/04/original-HomePage-1920x700-085804.jpeg" className="d-block w-100" alt="..."/>
         <div style={{position:"absolute",marginLeft:"55%",marginTop:"-400px",color:"white",maxWidth:"400px"}}>
         <Heading size='2xl' mb="20px">Introducing Sarah Chapman</Heading>
         <Heading fontSize='xl' mb="20px">Discover cutting-edge formulas from London's most sought-after facialist.</Heading>
           <Button bg="white" color="black" border="2px solid black" fontWeight="bolder">Shop Now...</Button>
         </div>
         </div>
        <div className="carousel-item">
         <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/50/original-Obagi_NPD_1920x700-052050.png" className="d-block w-100" alt="..."/>
         <div style={{position:"absolute",marginLeft:"55%",marginTop:"-400px",color:"black",maxWidth:"400px"}}>
         <Heading size='2xl' mb="20px">New from Obagi</Heading>
         <Heading fontSize='xl' mb="20px">Helps to restore compromised skin & support its protective barrier.</Heading>
           <Button bg="white" color="black" border="2px solid black" fontWeight="bolder">Shop Now...</Button>
         </div>
        </div>
        <div className="carousel-item">
         <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/27/original-0223_47424_DS_MH_Shot_28_Batching_HomePage-1920x700.jpeg-061027.jpg" className="d-block w-100" alt="..."/>
         <div style={{position:"absolute",marginLeft:"55%",marginTop:"-400px",color:"black",maxWidth:"400px"}}>
         <Heading size='2xl' mb="20px">Meet Our Latest Best of Dermstore</Heading>
         <Heading fontSize='xl' mb="20px">Discover some of our most indulgent & effective tools & formulas from Augustinus Bader, ELEMIS, U Beauty & more to turn your self-care day into the most luxurious spa experience.</Heading>
           <Button bg="white" color="black" border="2px solid black" fontWeight="bolder">Shop Now...</Button>
         </div>
        </div>
        </div>
        <button className="carousel-control-prev" style={{width:"5%"}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" style={{backgroundColor:"#00382a73",borderRadius:"5px"}} aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" style={{width:"5%"}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon"  style={{backgroundColor:"#00382a73",borderRadius:"5px"}} aria-hidden="true"></span>
        </button>
      </div>
      <Center>
        <Text fontSize='3xl'mt="20px" fontWeight="bolder">Last Chance: 3x Points on Hair Care</Text>
      </Center>
        <Center>
           <Text fontSize='18px' mb="20px">Rewards members earn TRIPLE points on tools, treatments & more.</Text>
        </Center>
        <div width="100%" height="500px" style={{display:"flex",justifyContent:"space-around"}}>
            <Image src="https://static.thcdn.com/images/medium/webp/widgets/208-us/13/HP_LPSQ_BANNER_676x556-100813.jpg" width="32%"/>
            <Image src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/12915557-2954917112863726.jpg" width="32%"/>
            <Image src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/12915558-1184944406995594.jpg" width="32%"/>
        </div>
        <Center>
          <Text fontSize='3xl'mt="40px" fontWeight="bolder">Shop By Category</Text>
        </Center>
        <div style={{display:"flex", justifyContent:"space-around", margin:"40px 0px 80px 0px"}}>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png" width="15%"/>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2833%29-085536.png" width="15%"/>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/32/DS_Round_Nav_-_Untitled_Page_%289%29-052632.png" width="15%"/>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/03/DS_Round_Nav_-_Untitled_Page_%2810%29-052703.png" width="15%"/>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/49/DS_Round_Nav_-_Untitled_Page_%2813%29-053649.png" width="15%"/>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2825%29-063536.png" width="15%"/>
        </div>
        <Center>
        <Text fontSize='3xl'mt="40px" fontWeight="bolder">Bestsellers</Text>
        </Center>
        <div style={{display:"-webkit-inline-box", overflow:"scroll",width:"100%"}}>
          <Slider cat="Bestsellers"/>
        </div>
          <div width="100%" height="500px" style={{display:"flex",justifyContent:"space-around",margin:"40px 0px"}}>
            <div style={{width:"30%"}}>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/17/Briogeo_NPD-052517.png"/>
             <Center>
              <Text style={{fontWeight:"bolder" , fontSize:"20px"}}>New from Briogeo</Text>
             </Center>
            <Center><Text m="0px 20px" style={{textAlign:"center"}}>A scalp & hair care system that helps promote thicker, fuller, healthier-looking hair.</Text></Center>
            </div>
            <div style={{width:"30%"}}>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/35/Bioeffect_676x556-052535.png"/>
             <Center>
              <Text style={{fontWeight:"bolder" , fontSize:"20px"}}>New from BIOEFFECT</Text>
             </Center>
            <Center><Text m="0px 20px" style={{textAlign:"center"}}>A supercharged serum to help reduce the look of fine lines, boost hydration & restore younger-looking skin.</Text></Center>
            </div>     <div style={{width:"30%"}}>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/12/Oribe_NPD-052612.png"/>
             <Center>
              <Text style={{fontWeight:"bolder" , fontSize:"20px"}}>New from Oribe</Text>
             </Center>
            <Center><Text m="0px 20px" style={{textAlign:"center"}}>A fortifying mask for healthier-looking hair & travel-ready essentials.</Text></Center>
            </div>
        </div>
        <Image src="https://static.thcdn.com/images/large/webp/widgets/208-us/56/Dermstore_Referral_BAU_Jan__-_Landing_Page_-_New_Page_%281%29-024656.png" width="100%" />
        <Center>
        <Text fontSize='3xl'mt="40px" fontWeight="bolder">New Arrivals</Text>
        </Center>
        <div style={{display:"-webkit-inline-box", overflow:"scroll",width:"100%"}}>
          <Slider cat="HairCare"/>
        </div>
          <Center>
          <Text fontSize='3xl'mt="40px" fontWeight="bolder">Featured Brands</Text>
        </Center>
        <div style={{display:"flex", justifyContent:"space-around", margin:"40px 0px 80px 0px"}}>
          <div style={{ height:"180px", width:"15%" ,display:"flex",alignItems:"center"}}>
           <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/19/SR-logo_2000x2000-060919.jpg"/>
          </div>
          <div style={{ height:"180px", width:"15%" ,display:"flex",alignItems:"center"}}>
           <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/34/original-220322-ELTAMD-LOGO-RGB-01_%28002%29-014534.png"/>
          </div><div style={{ height:"180px", width:"15%" ,display:"flex",alignItems:"center"}}>
           <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/26/original-MicrosoftTeams-image_%283%29-032926.png"/>
          </div><div style={{ height:"180px", width:"15%" ,display:"flex",alignItems:"center"}}>
           <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/08/SkinMedica-014608.jpg"/>
          </div><div style={{ height:"180px", width:"15%" ,display:"flex",alignItems:"center"}}>
           <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/21/augustinusbader-124221.gif"/>
          </div>
        </div>
       <div style={{display:"flex", justifyContent:"space-around", margin:"20px 0px 40px 0px"}}>
       <div style={{width:"30%"}}>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/59/Sunscreens_for_Color_300x180-104659.png" style={{margin:"auto"}}/>
            <Center><Text m="20px" style={{textAlign:"center"}}>{`8 Great Sunscreens for Skin of Color (That Won’t Go on Chalky)`}</Text></Center>
        </div>
        <div style={{width:"30%"}}>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/03/Best_Beauty_Devices_300x180-104603.png" style={{margin:"auto"}}/>
            <Center><Text m="20px" style={{textAlign:"center"}}>Best Beauty Devices to Help Solve Your Skin Care Concerns</Text></Center>
        </div> <div style={{width:"30%"}}>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/30/How_to_Hydrate_Hair_300x180-104630.png" style={{margin:"auto"}}/>
            <Center><Text m="20px" style={{textAlign:"center"}}>How to Moisturize Hair That’s Feeling Dry</Text></Center>
        </div> <div style={{width:"30%"}}>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/18/SkinC_300x180-055918.png" style={{margin:"auto"}}/>
            <Center><Text m="20px" style={{textAlign:"center"}}>Your Must-Have SkinCeuticals Serum Wardrobe</Text></Center>
        </div>
       </div>
         </div>
        </>
    )
}
export default HomePage;