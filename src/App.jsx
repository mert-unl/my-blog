import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navigation from "./Components/Navigation"
import Home from "./Pages/Home"
import Poem from "./Pages/Poem"


function App() {

  return (
    <>
      <Navigation/>

      <Routes>
      
         <Route path="/" exact element={<Home/>}/>
         <Route path="/poem" exact element={<Poem/>}/>

      </Routes>

      <Footer/>



    </>
  )
}

export default App
