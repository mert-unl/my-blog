import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navigation from "./Components/Navigation"
import Home from "./Pages/Home"
import Poem from "./Pages/Poem"
import StoryCard from "./Components/StoryCard"
import Stories from "./Pages/Stories"
import { AppContext } from "./context/AppContext"
import ReadingStory from "./Pages/ReadingStory"
import ReadingPoem from "./Pages/ReadingPoem"
import NotFound from "./Pages/NotFound"
import Dubs from "./Pages/Dubs"
import Drawing from "./Pages/Drawing"
import Writing from "./Pages/Writing"



function App() {
  //const { theme, toggleTheme } = useBlog()
  return (
    <div>
      <Navigation />

      <Routes>
      
         <Route path="/" element={<Home/>}/>
         <Route path="/poems"  element={<Poem/>}/>
         <Route path="/poems/:id"  element={<ReadingPoem/>}/>
         <Route path="/stories"  element={<Stories/>}/>
         <Route path="/stories/:slug"  element={<ReadingStory/>}/>
         <Route path="/dubs"  element={<Dubs/>}/>
         <Route path="/drawings"  element={<Drawing/>}/>
         <Route path="/writings"  element={<Writing/>}/>

         <Route path="*"  element={<NotFound/>}/>
                  <Route path="/poems/*"  element={<NotFound/>}/>
         <Route path="/stories/*"  element={<NotFound/>}/>

      </Routes>

      <Footer/>



    </div>
  )
}

export default App
