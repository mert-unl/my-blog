import React from 'react'
import { Link } from 'react-router-dom'

function StoryCard({imgSrc,title,sum,slug}) {
  
    const slugg = slug
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

     return (
       <div className='flex flex-col gap-4 border-1 transition-transform hover:scale-104   hover:border-amber-400  hover:border-2  hover:border-1 rounded-2xl  border-[var(--accentborder1)]  rounded-xl p-5 duration-500' >
            <img className='h-60 md:h-100 rounded-lg' src={`https://picsum.photos/id/${imgSrc}/3200/3200`}/>
            <p className='text-3xl font-medium'>{title}</p>
            <p>{sum}</p>
     <Link
        to={`/stories/${slugg}`}
        className="text-amber-500 hover:text-orange-200 text-lg  transition-colors duration-300 font-medium hover:underline w-fit"
      >
        Hikayeyi Oku →
      </Link>       </div>
  )
}

export default StoryCard