export default function PoemCard({title,content,img,comment=""}){

    return(
        <>  
            <div className="flex flex-col gap-4   ">
                <div className="border-t-1 mt-4 py-2 border-orange-300"></div>

                    <img className="h-55 md:h-100 w-full rounded-lg object-cover" src={`https://picsum.photos/id/${img}/3200/3200`}/>

                <p className="text-xl  md:text-4xl font-medium py-2 font-serif italic">{title}</p>
                <p className="text-sm md:text-lg  text-gray-300 italic whitespace-pre-line leading-relaxed tracking-wide">{content}</p> 
                { comment && (
                    <div className="border-1  p-2 rounded-xl mt-4 border-gray-400">
                        <p className="text-xs md:text-lg text-gray-300">Meraklısına;</p>
                        <p className="text-xs  md:text-lg  mt-1 ms-2 text-gray-300">{comment}</p>
                    </div>)
                }
            </div> 
        </>
    )
}