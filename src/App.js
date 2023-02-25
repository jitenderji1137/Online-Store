import AllPages from "./User-side.jsx/User-pages/All-pages-link.jsx"
import { ChakraProvider } from '@chakra-ui/react'
import { fetchdata } from "./Data-manager.jsx";
function App() {
  return (
    <>
    <ChakraProvider>
      <fetchdata.Provider value={{data:{"TITLE": "HairMax LaserBand 82 (1 kit)","PRICE": 799,"IMAGE1": "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12902492-1614866429334395.jpg","IMAGE2": "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12902492-1694864207892649.jpg","IMAGE3": "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12902492-1614866429334395.jpg","IMAGE4": "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12902492-1694864207892649.jpg","DESCRIPTION": "An at-home hair stimulating laser device for all hair types.\r\n","MAINCATEGORY": "HairCare"},admin:localStorage.getItem("admin")||"NO",cart:[],userlogininfi:localStorage.getItem("logininfo")||[]}}>
       <AllPages/>
      </fetchdata.Provider>
    </ChakraProvider>
    </>
  )
}

export default App;
