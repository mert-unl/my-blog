import PoemCard from "../Components/PoemCard";

export default function Poem(){


return(

    <div className="p-5 flex flex-col gap-5">
     <h2 className="text-2xl text-center">Şiirlerim</h2>

        <PoemCard 
                      title="Dalgalanan Anıların Hüznünde" 
                     content={`Ölmeli mi insan bu yıkılmış kalpte,
Hissedebilmek için derin bir acıyı.
Görmeli mi insan yıldız kaymalarını,
O akıp giden göz yaşlarındaki umutlarını.

Ya da susmalı mı insan,
Sessizlikte, yitirilen sözcüklerle,
O engin yeşil denizlerde,
Dalgalanan anıların hüznünde.

Belki de kaybolmalı insan,
Karanlıkta yok olmuş bir iz gibi,
O kırmızı dikenli dudaklarda,
Sevgiye değen bir öpücük gibi.

Bu düşünceler arasında kaybolan yürek için,
Bir melankoli yolculuğu sahtelik çağında,
Belki de yaşanmalı bu kırık dünyada,
Duyguların en derinine dalmak için.

Ama belki insan olmanın hikayesi burada,
Bazen acıyı sevmek, bazen sevgiyi seçmek,
Ve bazen de sessizce bir köşede beklemek,
Kendinde kaybolmak ya da var olmak arasında.

Öyleyse, insan olmanın anlamını ararken,
Korkularını ve umutlarını birleştir.
Buluruz belki de gerçek benliğimizi
Bu duygusal yolculukta kaybolup giderken.

Ve bu kırmızı nehir, mavi bulutlar,
Engin denizler ve dikenli dudaklar,
Belki de bizim içimizde ki birer yansımadır,
Yaşamın sonsuzluğundaki duygu selinde
Dalgalanan anıların hüznünde.`}
                      img="https://picsum.photos/id/1022/500/300"
                      comment="Bu şiir en sevdiğim şiirler arasında yer almaktadır. Yazdığım son şiirlerden olup bir kaç farklı varyasyonu bulunmaktadır."   
                  />

   <PoemCard 
                      title="Lorem Ipsum Dolor Sit Amet" 
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies, nunc ut commodo convallis, erat purus viverra lorem, vitae imperdiet lorem metus vel ante."
                      img="https://picsum.photos/id/1022/500/300"   
                  />

    </div>
)

}