import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Footer(){

    const {user} = useContext(AppContext)
const year = new Date().getFullYear();
    
    return(
            <>
                <div className="mt-10">
                <div className="border-t-1 border-gray-500"></div>
                 <div className="flex flex-row justify-center gap-12">
                    <LogoAndLink link="https://letterboxd.com/troemanes/" name="LetterBoxd" img="/letterboxd.png"/>
                    <LogoAndLink link="https://vsco.co/troemanes/gallery" name="VSCO" img="/vsco.png"/>

                </div>                
                <p className="text-center py-6">Bu blog <span className="underline">{user.name}</span> tarafından yapılmıştır.<br></br>  © {new Date().getFullYear()} Tüm hakları saklıdır.</p>

                </div>
            </>
        )
}

function LogoAndLink ({img,name,link}){
    return(<div className="flex flex-col   hover:text-orange-300 p-5 mt-6 text-center items-center align-center justify-center ">
        <a href={link} target="_blank"> 
         <img   className="object-contain size-10 w-full rounded-full" src={img}/>
         <p className="py-3 text-center text-sm  font-medium">{name}</p> 
         </a>
    </div>)
}