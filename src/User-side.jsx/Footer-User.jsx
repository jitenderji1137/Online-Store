import { Button, Heading , Text } from "@chakra-ui/react";
function Footer(){
    return (
        <>
        <hr style={{border: "1px solid black", margin:"20px 0px"}} />
        <div style={{margin:"20px",display:"flex"}}>
            <div style={{width:"55%"}}>
                <Text>Sign up to our newsletters and receive the latest exclusive discounts and deals</Text>
                <Button bg="black" color="white" m="20px">SIGN ME UP</Button>
            </div>
            <div style={{width:"45%"}}>
                <Text>Connect with us</Text>
                <div>
                <i className="fab fa-facebook" style={{fontSize:"30px",margin:"20px"}}></i>
                <i className="fab fa-instagram"  style={{fontSize:"30px",margin:"20px"}}></i>
                <i className="fab fa-telegram"  style={{fontSize:"30px",margin:"20px"}}></i>
                <i className="fab fa-twitter"  style={{fontSize:"30px",margin:"20px"}}></i>
                <i className="fab fa-youtube" style={{fontSize:"30px",margin:"20px"}}></i>
                <i className="fab fa-whatsapp" style={{fontSize:"30px",margin:"20px"}}></i>
                <i className="fab fa-linkedin" style={{fontSize:"30px",margin:"20px"}}></i>
                </div>
            </div>
        </div>
        <div>
            <div style={{display:"flex"}}>
                <div style={{width:"45%", margin:"0% 5%", borderTop:"2px solid gray"}}>
                 <span>
                    <p style={{margin:"10px"}}>Customer Service</p>
                    <div style={{margin:"10px"}}><i className="fas fa-info-circle" style={{fontSize:"25px",margin:"0px 15px"}}></i>Help Center / FAQs</div>
                    <div style={{margin:"10px"}}><i className="fas fa-sync" style={{fontSize:"25px",margin:"0px 15px"}}></i>Returns</div>
                    <div style={{margin:"10px"}}><i className="fas fa-shipping-fast" style={{fontSize:"25px",margin:"0px 15px"}}></i>Shipping Information</div>
                    <div style={{margin:"10px"}}><i className="fas fa-crosshairs" style={{fontSize:"25px",margin:"0px 15px"}}></i>Track my order</div>
                    <div style={{margin:"10px"}}><i className="fas fa-dharmachakra" style={{fontSize:"25px",margin:"0px 15px"}}></i>Cookie Settings</div>
                 </span>
                </div>
                <div style={{width:"50%",display:"flex"}}>
                <div style={{width:"30%",borderTop:"2px solid gray",margin:"0% 5%"}}>
                <div style={{margin:"10px"}}>My Account</div>
                <div style={{margin:"10px"}}>Manage My Auto-Replenishments</div>
                <div style={{margin:"10px"}}>My Rewards</div>
                <div style={{margin:"10px"}}>My Favorites</div>
                <div style={{margin:"10px"}}>Refer a Friend</div>
                <div style={{margin:"10px"}}>Order History</div>
                </div>
                <div style={{width:"30%",borderTop:"2px solid gray",margin:"0% 5%"}}>
                 <div style={{margin:"10px"}}>Company</div>
                 <div style={{margin:"10px"}}>About Us</div>
                 <div style={{margin:"10px"}}>Press</div>
                 <div style={{margin:"10px"}}>What is Klarna</div>
                </div>
                <div style={{width:"30%",borderTop:"2px solid gray",margin:"0% 5%"}}>
                 <div style={{margin:"10px"}}>Legal</div>
                 <div style={{margin:"10px"}}>Privacy Policy</div>
                 <div style={{margin:"10px"}}>Terms & Conditions</div>
                 <div style={{margin:"10px"}}>Modern Slavery Statement</div>
                 <div style={{margin:"10px"}}>Product Recall</div>
                 <div style={{margin:"10px"}}>Accessibility</div>
                </div>
                </div>
            </div>
             <hr style={{border: "1px solid black", margin:"20px 0px"}} />
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{padding:"40px",width:"50%"}}>
                    <Heading as='h1' size='4xl' noOfLines={1}>THE</Heading>
                    <Text color="gray">2023 © Online Store Ltd .</Text>
                </div>
                <div style={{width:"50%"}}>

                    <Heading>Pay securely with</Heading>
                    <div>
                            <span className="dc_payment_icons_bevel_48 dc_visa_bevel" title="Visa"></span>
                            <span className="dc_payment_icons_bevel_48 dc_visa02_bevel" title="Visa"></span>
                            <span className="dc_payment_icons_bevel_48 dc_mastercard_bevel" title="Mastercard"></span>
                            <span className="dc_payment_icons_bevel_48 dc_americanexpress_bevel" title="American Express"></span>
                            <span className="dc_payment_icons_bevel_48 dc_discover_bevel" title="Discover"></span>
                            <span className="dc_payment_icons_bevel_48 dc_dinersclub_bevel" title="Diners Club"></span>
                            <span className="dc_payment_icons_bevel_48 dc_visaelectron_bevel" title="Visa Electron"></span>
                            <span className="dc_payment_icons_bevel_48 dc_maestro_bevel" title="Maestro"></span>
                            <span className="dc_payment_icons_bevel_48 dc_solo_bevel" title="Solo"></span>
                            <span className="dc_payment_icons_bevel_48 dc_westernunion_bevel" title="Western Union"></span>
                            <span className="dc_payment_icons_bevel_48 dc_paypal_bevel" title="PayPal"></span>
                            <span className="dc_payment_icons_bevel_48 dc_worldpay_bevel" title="WorldPay"></span>
                            <span className="dc_payment_icons_bevel_48 dc_westernunion03_bevel" title="Western Union"></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;