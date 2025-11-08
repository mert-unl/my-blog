import React, { createContext } from 'react';
import data from "../storage/data.json"

export const AppContext = createContext()


function AppContextProvider({children}) {

let dataa = data["tr"] 
 let user = data["user"]
return (
 <AppContext.Provider value={{dataa,user}}>
   {children}
 </AppContext.Provider>
 )
}

export default AppContextProvider