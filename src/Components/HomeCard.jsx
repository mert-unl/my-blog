export default function HomeCard({title,content,img,tags=[]}){

    return(
        <>  
        <div className=" py-2 px-1 flex flex-col gap-3 ">
            <div className="relative w-full rounded-lg overflow-hidden">
                <img className="h-55 w-full object-cover" src={img}/>
                <div className="absolute bottom-2 flex gap-1 px-2">{    
                        tags.map((tag,index)=> <p  key={index} className=" left-2 px-3 py-1  rounded-md text-md font-normal text-white tracking-wide backdrop-blur-xs bg-gray-700/30">{tag}</p>
                    )}
                </div>    
            </div>           
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-md text-gray-300">{content}</p> 
            <p className="border-b-1 w-fit font-semibold text-orange-300">Gönderiye Git</p>  
        </div> 
        </>
    )
}