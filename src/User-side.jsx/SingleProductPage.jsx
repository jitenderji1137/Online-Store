import { Center ,Heading,Image,Text,Box, ButtonGroup, Button ,   Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon , Card , CardBody , Stack , Grid , CardFooter , Divider} from "@chakra-ui/react"
import { fetchdata } from "../Data-manager"
import { useContext } from "react"
export default function SingleProductPage(){
    const data = useContext(fetchdata);
    window.scrollTo(0, 0);
    return(
        <>
        <Center bg='aliceblue' h='50px' color='#5e3b3b' style={{fontWeight:"bolder"}}>Rewards members earn TRIPLE points on Hair Care. Ends 2/21. START EARNING</Center>
        <Center>{`Home / ${data.data.TITLE}`}</Center>
        <div style={{display:"flex"}}>
            <div style={{width:"10%"}}>
                <div style={{border:"2px solid gray" , margin:"5px"}}><Image src={data.data.IMAGE1}/></div>
                <div style={{border:"2px solid gray" , margin:"5px"}}><Image src={data.data.IMAGE2}/></div>
                <div style={{border:"2px solid gray" , margin:"5px"}}><Image src={data.data.IMAGE3}/></div>
                <div style={{border:"2px solid gray" , margin:"5px"}}><Image src={data.data.IMAGE4}/></div>
            </div>
            <div style={{width:"50%"}}>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 2"></button>
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
         <div className="carousel-item active" data-bs-interval="3000">
          <Image src={data.data.IMAGE1} className="d-block w-100" alt="..."/>
         </div>
        <div className="carousel-item">
         <Image src={data.data.IMAGE2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
         <Image src={data.data.IMAGE3} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
         <Image src={data.data.IMAGE4} className="d-block w-100" alt="..."/>
        </div>
        </div>
        <button className="carousel-control-prev" style={{width:"5%"}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" style={{backgroundColor:"#00382a73",borderRadius:"5px"}} aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" style={{width:"5%"}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon"  style={{backgroundColor:"#00382a73",borderRadius:"5px"}} aria-hidden="true"></span>
        </button>
      </div>
                
                </div>
            <div style={{width:"30%",margin:"50px 20px"}}>
                <Heading>{data.data.TITLE}</Heading>
                <Text mt="50px">{data.data.DESCRIPTION}</Text>
                <Box bg='white' mt="50px" w='100%' display="flex" p={4} color='black' border="2px solid black"><i className="far fa-dot-circle" style={{fontSize:"25px",margin:"0px 15px"}}></i><Text>{`$${data.data.PRICE}.00  One Time Purchase`}</Text></Box>
                <Box bg='white' w='100%' display="flex" p={4} color='gray' border="2px solid black" borderTop="none"><i className="far fa-circle" style={{fontSize:"25px",margin:"0px 15px"}}></i><Text>{`$${(data.data.PRICE)-9}.00 Auto-Replenish`}</Text></Box>
                <Heading mt="20px">{`$${data.data.PRICE}.00`}</Heading>
                <Text fontWeight="bold" mt="10px">Subscribe to this product to save 15%</Text>
                <hr style={{border: "1px solid black", margin:"20px 0px"}} />
                <Text ml="10px">Quantity</Text>
                <ButtonGroup mt="20px" ml="10px" display="flex" justifyContent="space-between">
                    <div>
                    <Button>-</Button><Button>1</Button><Button>+</Button>
                    </div>
                    <Button>ADD TO CART</Button>
                </ButtonGroup>
                <Text m="20px" fontWeight="bold"><i className="far fa-heart" style={{fontSize:"25px",margin:"10px"}}></i>Save to My Favorites</Text>
            </div>
        </div>
            <hr style={{border: "1px solid black", margin:"20px 0px"}} />
                <div style={{display:"flex"}}>
                    <div style={{width:"10%"}}></div>
                    <div style={{width:"50%" , marginRight:"40px"}}>
                    <Accordion>
                    <AccordionItem >
                        <h2>
                        <AccordionButton border="none">
                            <Box as="span"  flex='1' textAlign='left'>
                            Product Overview
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton border="none">
                            <Box as="span" flex='1' textAlign='left'>
                            How to Use
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton border="none">
                            <Box as="span" flex='1' textAlign='left'>
                            At a Glance
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem> 
                    <AccordionItem>
                        <h2>
                        <AccordionButton border="none">
                            <Box as="span" flex='1' textAlign='left'>
                            Ingredients
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                     <AccordionItem>
                        <h2>
                        <AccordionButton border="none">
                            <Box as="span" flex='1' textAlign='left'>
                            Other Details
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
                    </div>
                    <div style={{width:"30%"}}>
                    <Text>In stock</Text>
                    <hr style={{border: "1px solid black", margin:"20px 0px"}} />
                    <Text>Delivery & Returns</Text>
                    <Text m="10px 0px">Free delivery is available on all orders over $50. Please see our <span style={{fontWeight:"bolder"}}>shipping information</span> page for all available delivery options.</Text>
                    <Text>If I'm not completely happy with my item?</Text>
                    <Text m="10px 0px">Please see our <span style={{fontWeight:"bolder"}}>returns policy.</span></Text>
                    <Text>*points earned on final checkout price, after any applied discounts.</Text>
                    <hr style={{border: "1px solid black", margin:"20px 0px"}} />
                    </div>
                </div>
                    <hr style={{border: "1px solid black", margin:"20px 0px"}} />
                    <div style={{display:"flex" , justifyContent:"space-around"}}>
                    <Card maxW='md'>
                        <CardBody>
                            <Image
                            src='https://static.thcdn.com/images/small/webp/widgets/208-us/05/How_to_Hydrate_Hair_300x180-105305.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            width="100%"
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading size='md' textAlign="center">HAIR CARE</Heading>
                            <Text fontSize='xl' textAlign="center">
                            How to Moisturize Hair That's Feeling Dry
                            </Text>
                            <Text textAlign="center">
                            Dermstore Editors
                            </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                            <div style={{width:"100%",textAlign:"center"}}>
                                <Button m="20px">Read More ...</Button>
                            </div>
                        </Card><Card maxW='md'>
                        <CardBody>
                            <Image
                            src='https://static.thcdn.com/images/small/webp/widgets/208-us/31/Sunscreens_for_Color_300x180-105031.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            width="100%"
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading size='md' textAlign="center">SKIN CARE</Heading>
                            <Text fontSize='xl' textAlign="center"> 8 Great Sunscreens for Skin of Color That Wont Go on Chalky </Text>
                            <Text textAlign="center">
                            Dermstore Editors
                            </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <div style={{width:"100%",textAlign:"center"}}>
                                <Button m="20px">Read More ...</Button>
                            </div>
                        </Card><Card maxW='md'>
                        <CardBody>
                            <Image
                            src='https://static.thcdn.com/images/small/webp/widgets/208-us/57/Best_Beauty_Devices_300x180-105157.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            width="100%"
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading size='md' textAlign="center">SKIN CARE</Heading>
                            <Text fontSize='xl' textAlign="center">Best Beauty Devices to Help Solve Your Skin Care Concerns </Text>
                            <Text textAlign="center">
                            Dermstore Editors
                            </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <div style={{width:"100%",textAlign:"center"}}>
                                <Button m="20px">Read More ...</Button>
                            </div>
                        </Card>
                    </div>
        </>
    )
}