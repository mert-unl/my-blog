import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import StoryCard from '../Components/StoryCard';

function Stories() {
   
  const {dataa}  = useContext(AppContext)

  const stories = dataa.stories;
  
    return (

<div className="mt-20 p-5 md:px-10 md:px-120">
    <div className='grid grid-cols-1 md:grid-cols-2 md:py-20 gap-12'>
       {stories.map((story)=>
      <StoryCard 
          key={story.id}
           imgSrc={story.imgSrc}
         title={story.title}
          sum={story.sum}
          slug={story.slug}
      />
    )}
</div>
    
</div>
    

)
}

export default Stories