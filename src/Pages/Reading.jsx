import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

const CHARS_PER_PAGE = 12000;

export default function Reading() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const { dataa } = useContext(AppContext);
  const story = dataa.stories.find((s) => s.slug === slug);

  if (!story)
    return (
      <div className="p-20 text-center text-3xl text-white">Hikaye yok</div>
    );

  const text = story.content;
  const totalPages = Math.ceil(text.length / CHARS_PER_PAGE);

  const start = (page - 1) * CHARS_PER_PAGE;
  const end = start + CHARS_PER_PAGE;
  const currentText = text.slice(start, end);

  const goPage = (p) => {
    navigate(`/stories/${slug}?page=${p}`);
  };

  return (
    <div className="px-4 md:px-80 mt-10 py-20 text-white leading-relaxed">
      <h1 className="text-4xl font-bold mb-10">{story.title}</h1>

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
