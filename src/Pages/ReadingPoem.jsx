import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
export default function ReadingPoem(){
     const { id } = useParams();
    const { dataa } = useContext(AppContext);
     const poem = dataa.poems.find((s) => s.id === id);
    return(
        <>  
            <div className="flex flex-col gap-4  mt-4 md:mt-12  color-[var(--accent2)] md:py-12 md:px-120  py-16 px-4 ">

                    <img className="h-55 md:h-80 w-full rounded-lg object-cover" src={`https://picsum.photos/id/${poem.imgSrc}/3200/3200`}/>

                <p className="text-xl  md:text-5xl font-medium md:py-4 font-serif italic">{poem.title}</p>
                <p className="text-sm md:text-xl  italic whitespace-pre-line leading-relaxed tracking-wide">{poem.content}</p> 
                { poem.comment && (
                    <div className="border-1  p-3 rounded-lg mt-6 w-fit border-gray-400">
                        <p className="text-sm md:text-md ">Meraklısına;</p>
                        <p className="text-sm  md:text-md  mt-1 ms-2">{poem.comment}</p>
                    </div>)
                }
            </div> 
        </>
    )
}