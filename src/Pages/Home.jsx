import { useContext } from "react";
import HomeCard from "../Components/HomeCard";
import { AppContext } from "../context/AppContext";

export default function Home(){

     const {dataa} = useContext(AppContext)
 
     const poems = dataa.poems


    return(
    <div className="p-5 mt-20 max-w-7xl mx-auto">
 
       <img src="https://picsum.photos/id/1044/3200/3200" className="h-60    md:h-150 object-cover w-full rounded-lg"/>
        <p className="mt-4 font-semibold text-2xl">Hakkımda</p>
       <p className="text-md py-2 text-gray-200">
            Bu blog; şiirlerimi, hikayelerimi, düşüncelerimi ve hobilerimi paylaştığım kişisel bir alan.  
            Tamamı benim tarafımdan tasarlandı ve kodlandı. Sağ üstte adıma tıklayarak portfölyo siteme gidebilirsiniz.        
        </p>       
       
       
       
        <div className="flex flex-col gap-8 border-t-1 border-gray-400 mt-10"> 

             <h3 className="text-center text-3xl font-semibold mt-6">Öne Çıkanlar</h3>
             
             <div className="grid grid-cols-1 place-items-center md:grid-cols-2  gap-12 ">
          
             
             {poems.map((poem)=>
                        <HomeCard  
                              key={poem.id}
                              title={poem.title}
                              content={poem.content}
                              img={poem.imgSrc}
                              tags={poem.tags}
                        /> )
                    }
              
             </div>
         </div>
        </div>
    )
}