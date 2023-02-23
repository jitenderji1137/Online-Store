import { Center, Heading , Text } from "@chakra-ui/react";
function Footer(){
    return (
        <>
        <div>
            <div style={{display:"flex"}}>
                <div style={{width:"50%"}}>
                 <span>
                    <p>Customer Service</p>
                    <div>Help Center / FAQs</div>
                    <div>Returns</div>
                    <div>Shipping Information</div>
                    <div>Track my order</div>
                    <div>Cookie Settings</div>
                 </span>
                </div>
                <div style={{width:"50%",display:"flex"}}>
                <div style={{width:"30%"}}>
                <div>My Account</div>
                <div>Manage My Auto-Replenishments</div>
                <div>My Rewards</div>
                <div>My Favorites</div>
                <div>Refer a Friend</div>
                <div>Order History</div>
                </div>
                <div style={{width:"30%"}}>
                 <div>Company</div>
                 <div>About Us</div>
                 <div>Press</div>
                 <div>What is Klarna</div>
                </div>
                <div style={{width:"30%"}}>
                 <div>Legal</div>
                 <div>Privacy Policy</div>
                 <div>Terms & Conditions</div>
                 <div>Modern Slavery Statement</div>
                 <div>Product Recall</div>
                 <div>Accessibility</div>
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