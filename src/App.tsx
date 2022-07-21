import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"



function App() {
return( 
<ShoppingCartProvider>
<Navbar />
  
  <Container className="bg-white shadow-sm mb-3">
  
  <Routes>
    <Route path="/" element={<Store/>}></Route>
  </Routes>
</Container>
</ShoppingCartProvider>
)
}

export default App
