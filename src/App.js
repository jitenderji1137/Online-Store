import AllPages from "./User-side.jsx/User-pages/All-pages-link.jsx"
import { ChakraProvider } from '@chakra-ui/react'
import { fetchdata } from "./Data-manager.jsx";
function App() {
  return (
    <>
    <ChakraProvider>
      <fetchdata.Provider value={{admin:true}}>
       <AllPages/>
      </fetchdata.Provider>
    </ChakraProvider>
    </>
  )
}

export default App;
