import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navigation from "./Components/Navigation"
import Home from "./Pages/Home"
import Poem from "./Pages/Poem"
import StoryCard from "./Components/StoryCard"
import Stories from "./Pages/Stories"
import Reading from "./Pages/Reading"
import { AppContext } from "./context/AppContext"



function App() {
  //const { theme, toggleTheme } = useBlog()

     
  return (
    <div>
      <Navigation />

      <Routes>
      
         <Route path="/" element={<Home/>}/>
         <Route path="/poem"  element={<Poem/>}/>
         <Route path="/stories"  element={<Stories/>}/>
         <Route path="/stories/:slug"  element={<Reading/>}/>

      </Routes>

      <Footer/>



    </div>
  )
}

export default App
