import { useContext } from "react";
import PoemCard from "../Components/PoemCard";
import { AppContext } from "../context/AppContext";

export default function Poem(){

const {dataa} = useContext(AppContext)

const poems = dataa.poems

  return(

      <div className="p-5 md:px-100 md:py-10  mt-15 flex flex-col gap-5">
        <h2 className="text-2xl text-center">Şiirlerim</h2>
        <h3 className="text-xl font-bold"></h3>
          {poems.map((poem)=>
              <PoemCard  
                    key={poem.id}
                    title={poem.title}
                    content={poem.content}
                    img={poem.imgSrc}
                    comment={poem.comment}
              /> )
          }
      </div>
    )
}