import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

const WORDS_PER_PAGE = 1500;

export default function ReadingStory() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const { dataa } = useContext(AppContext);
  const story = dataa.stories.find((s) => s.slug === slug);

 useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  if (!story)
    return (
      <div className="p-20 text-center text-3xl text-white">Hikaye yok</div>
    );

 
  const words = story.content.split(" ");
  const totalPages = Math.ceil(words.length / WORDS_PER_PAGE);

  const start = (page - 1) * WORDS_PER_PAGE;
  const end = start + WORDS_PER_PAGE;


  const currentText = words.slice(start, end).join(" ");


  const goPage = (p) => {
    navigate(`/stories/${slug}?page=${p}`);
  };

  return (
    <div className="px-4 md:px-80 mt-10 py-20  flex  flex-col gap-4 color-[var(--accent2)] leading-relaxed">
       <p>Sayfa: {page} / {totalPages}</p> 
      <img  className="w-screen h-60  md:h-110 rounded-xl  object-cover"  src={`https://picsum.photos/id/${story.imgSrc}/3200/3200`}/>
     <h1 className="text-4xl font-bold py-2">{story.title}</h1>

      <p className="text-base md:text-lg whitespace-pre-line mb-10">{currentText}</p>

      {totalPages > 1 && (
        <div className="flex gap-4 justify-center items-center mt-10">
          <button
            disabled={page === 1}
            onClick={() => goPage(page - 1)}
            className="border border-amber-400 rounded-lg font-medium py-2 px-6 disabled:opacity-40 hover:text-orange-300 transition-colors duration-300 cursor-pointer"
          >
            Önceki
          </button>

          <span className="border border-amber-400 px-4 py-2 text-xl rounded">
            {page} / {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => goPage(page + 1)}
            className="border border-amber-400 rounded-lg font-medium py-2 px-6 disabled:opacity-40 hover:text-orange-300 transition-colors duration-300 cursor-pointer"
          >
            Sonraki
          </button>
        </div>
      )}
    </div>
  );
}
