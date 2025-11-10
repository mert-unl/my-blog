import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from "./context/AppContext.jsx"
import ScrollTop from './Components/ScrollTop.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AppContextProvider>
        <BrowserRouter>
        <ScrollTop/>
            <App />
        </BrowserRouter>
    </AppContextProvider>
  </StrictMode>
)
