import { useContext } from "react";
import HomeCard from "../Components/HomeCard";
import { AppContext } from "../context/AppContext";

export default function Home(){

     const {dataa} = useContext(AppContext)
 
     const poems = dataa.poems

    return(
    <div className="p-5  py-20 md:py-30 max-w-7xl mx-auto">
 
       <img src="https://picsum.photos/id/1044/3200/3200" className="h-60    md:h-150 object-cover w-full rounded-lg"/>
        <p className="mt-4 py-2 font-semibold text-3xl">Hakkımda</p>
        <div className="text-md py-2 flex flex-col gap-2 color-[var(--accent1)]">
             <p>Merhaba, ben Mert.  Bu blog; hobilerimi, ilgi alanlarımı ve zaman zaman zihnimden geçen düşünceleri paylaştığım kişisel bir alan.</p>
             <p>Blogdaki yazılarımda bazı yazım hataları ve eksikler olabilir. Özellikle hikayelerim hala yazım ve geliştirme sürecinde, şimdilik kısa özetlerine göz atabilirsiniz.</p>
             <p>Önce THY pilotluk sınavlarına girdim, ardından kafamdaki bir girişim fikrini hayata geçirmek için mobil uygulamalar geliştirmeye başladım. Zamanla frontend geliştirmeye yöneldim ve hala bu alanda öğrenmeye devam ediyorum.</p>
             <p>Portföy siteme sağ üstte yer alan adıma tıklayarak ulaşabilirsiniz.</p>
        </div>


       
       
        <div className="flex flex-col gap-8 border-t-1 border-orange-300 mt-10"> 

             <h3 className="text-center text-3xl font-semibold mt-12">Öne Çıkanlar</h3>
             
             <div className="grid grid-cols-1 place-items-center md:grid-cols-2  gap-12 ">
          
             
             {poems.map((poem)=>
                        <HomeCard  
                              key={poem.id}
                              title={poem.title}
                              content={poem.content}
                              img={poem.imgSrc}
                              tags={poem.tags}
                              id={poem.id}
                        /> )
                    }
              
             </div>
         </div>
        </div>
    )
}