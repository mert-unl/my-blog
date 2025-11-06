import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navigation from "./Components/Navigation"
import Home from "./Pages/Home"
import Poem from "./Pages/Poem"



function App() {
  //const { theme, toggleTheme } = useBlog()

  return (
    <div>
      <Navigation />

      <Routes>
      
         <Route path="/" element={<Home/>}/>
         <Route path="/poem" exact element={<Poem/>}/>

      </Routes>

      <Footer/>



    </div>
  )
}

export default App
