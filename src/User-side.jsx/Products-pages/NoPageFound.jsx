import { Button, Center, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
export default function NoPageFound(){
    return (
        <>
        <Link to="/"><Center><Button position="absolute" mt="60px">Go to Home Page ...</Button></Center></Link>
        <Image width="50%" src="https://cdn.dribbble.com/users/1627675/screenshots/4031125/kirigami-404--dribbble.gif" m="auto"/>
        </>
    )
}