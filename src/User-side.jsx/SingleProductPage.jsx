import { Center ,Image} from "@chakra-ui/react"
import { fetchdata } from "../Data-manager"
import { useContext } from "react"
export default function SingleProductPage(){
    const data = useContext(fetchdata)
    console.log(data.data)
    return(
        <>
        <Center bg='aliceblue' h='50px' color='#5e3b3b' style={{fontWeight:"bolder"}}>Rewards members earn TRIPLE points on Hair Care. Ends 2/21. START EARNING</Center>
        <Center>{`Home / title`}</Center>
        <div style={{display:"flex"}}>
            <div style={{width:"10%"}}>
                <div><Image src={data.data.IMAGE1}/></div>
                <div><Image src={data.data.IMAGE2}/></div>
                <div><Image src={data.data.IMAGE3}/></div>
                <div><Image src={data.data.IMAGE4}/></div>
            </div>
            <div style={{width:"50%"}}><Image src={data.data.IMAGE1}/></div>
            <div style={{width:"40%"}}></div>
        </div>
        </>
    )
}