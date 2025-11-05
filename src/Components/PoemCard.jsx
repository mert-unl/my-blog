export default function PoemCard({title,content,img,comment=""}){

    return(
        <>  
        <div className=" py-2 flex flex-col gap-3 ">
            <div className="relative w-full rounded-lg overflow-hidden">
                <img className="h-55 w-full object-cover" src={img}/>
               
            </div>           
            <p className="text-[22px] font-medium py-4 font-serif italic">{title}</p>
            <p className="text-[16px] text-gray-300 italic whitespace-pre-line leading-loose tracking-wide">{content}</p> 


{ comment && (
            <div className="border-1  p-5 rounded-lg mt-5 border-gray-400">
                <p className="text-sm text-gray-300">Meraklısına;</p>
                <p className="text-sm mt-2 ms-2 text-gray-300">{comment}</p>
            </div>)
}

            <div className="border-t-2  p-5  mt-6 border-gray-600"></div>


        </div> 
        </>
    )
}