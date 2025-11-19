import { useContext } from "react";
import PoemCard from "../Components/PoemCard";
import { AppContext } from "../context/AppContext";

export default function Poem(){

const {dataa} = useContext(AppContext)

const poems = dataa.poems

  return(

        <div className="p-4 md:px-120 md:py-40 mt-20  md:mt-2  grid grid-cols-1 md:grid-cols-2 gap-10">
          {poems.map((poem)=>
              <PoemCard  
                    key={poem.id}
                    title={poem.title}
                    content={poem.content}
                    img={poem.imgSrc}
                    comment={poem.comment}
                    id={poem.id}
               /> 
            )}
           </div>
    )
}