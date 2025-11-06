import React, { createContext } from 'react';
import data from "../storage/data.json"

export const AppContext = createContext()


function AppContextProvider({children}) {

let dataa = data["tr"] 
 
return (
 <AppContext.Provider value={{dataa}}>
   {children}
 </AppContext.Provider>
 )
}

export default AppContextProvider