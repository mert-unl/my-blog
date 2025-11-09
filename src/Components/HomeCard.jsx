import { Link } from "react-router-dom"

export default function HomeCard({title,content,img,tags=[],id}){

    return(
        <>  
        <div className=" py-2 px-1  flex flex-col gap-5 transition-transform hover:scale-104   hover:border-amber-200  hover:border-1 rounded-2xl  md:p-6 duration-500 ">
            <div className="relative w-full rounded-lg md:flex  overflow-hidden">
                <img className="h-55 md:h-100 md:w-140 rounded-xl  w-full object-cover  "  src={`https://picsum.photos/id/${img}/3200/3200`}/>
                <div className="absolute bottom-2 flex gap-1 px-2">{    
                        tags.map((tag,index)=> <p  key={index} className=" px-3 py-1  md:px-5  rounded-md text-md md:text-2xl font-normal text-white tracking-wide backdrop-blur-xs bg-gray-700/30">{tag}</p>
                    )}
                </div>    
            </div>           
            <p className="text-2xl  md:text-3xl  font-semibold">{title}</p>
            <p className="text-md text-gray-300  md:w-140 line-clamp-3 md:line-clamp-4">{content}</p> 
            <p className="border-b-1 md:text-xl w-fit font-semibold text-orange-300"><Link  to={`/poems/${id}`} className="hover:text-orange-200 transition-colors duration-300">Gönderiye Git  →</Link> </p>  
        </div> 
        </>
    )
}