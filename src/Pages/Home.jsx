import HomeCard from "../Components/HomeCard";

export default function Home(){



    return(
        <div className="p-5 sm:px-40 sm:py-10">
 
       <img src="https://picsum.photos/id/1045/500/300" className="h-60 w-full"/>
        <p className="mt-4 font-semibold text-2xl">Hakkımda</p>
       <p className="text-md py-2 text-gray-200">
            Bu blog; şiirlerimi, hikayelerimi, düşüncelerimi ve hobilerimi paylaştığım kişisel bir alan.  
            Tamamı benim tarafımdan tasarlandı ve kodlandı. Sağ üstte adıma tıklayarak portfölyo siteme gidebilirsiniz.        
        </p>       
       
       
       
        <div className="flex flex-col gap-8 border-t-1 border-gray-400 mt-10"> 

             <h3 className="text-center text-3xl font-semibold mt-6">Son Paylaşılanlar</h3>
           <HomeCard 
                title="Lorem Ipsum Dolor Sit Amet" 
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies, nunc ut commodo convallis, erat purus viverra lorem, vitae imperdiet lorem metus vel ante."
                img="https://picsum.photos/id/1005/500/300"   
                tags={["şiir", "duygu", "anı"]}
            />
            <HomeCard 
                title="Consectetur Adipiscing Elit" 
                content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                img="https://picsum.photos/id/1011/500/300"   
                tags={["hikaye", "deneme", "yazı"]}
            />

            <HomeCard 
                title="Ut Enim Ad Minim Veniam" 
                content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
                img="https://picsum.photos/id/1021/500/300"   
                tags={["fikir", "eser", "gözlem"]}
            />
         </div>
        </div>
    )
}