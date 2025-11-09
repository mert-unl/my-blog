import React from 'react'
    import { useEffect, useState } from "react";

function useDarkmode() {

    const [theme,setTheme] = useState(localStorage.getItem("darkMode"))

  
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark", "orange");
    document.documentElement.classList.add(theme);
  }, [theme]);

function change(){
       
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("darkMode", newTheme);

   

    console.log("tıklandı")
  }
  return {change,theme}
};

export default useDarkmode

