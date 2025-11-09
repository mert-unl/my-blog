import { NavLink,Link } from "react-router-dom"

export default function PoemCard({title,content,id,img,comment=""}){

    return(
        <>  
       <div className='flex flex-col gap-4 border-1 transition-transform hover:scale-104   hover:border-amber-400  hover:border-2  rounded-2xl border-amber-200  p-5 duration-500' >

                    <img className="h-50 md:h-105 w-full rounded-lg object-cover" src={`https://picsum.photos/id/${img}/3200/3200`}/>

                  <p className="text-lg  md:text-2xl font-medium py-2 font-serif">{title}</p>
                 <p>{comment}</p>
                  <Link
                        to={`/poems/${id}`}
                        className="text-amber-400 flex align-bottom hover:text-orange-200 text-xl  transition-colors duration-300 font-medium hover:underline w-fit"
                      >
                        Şiiri Oku →
                      </Link> 

            </div> 
        </>
    )
}