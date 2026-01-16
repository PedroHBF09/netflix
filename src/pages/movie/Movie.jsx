import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((m) => m.id === Number(id));
        setMovie(found);
      });
  }, [id]);

  if (!movie) return null;

  return (
    <div className="min-h-screen bg-[#141414] text-white p-6 md:p-12">

      <button
        onClick={() => navigate(-1)}
        className="text-zinc-400 hover:text-white mb-8 flex items-center gap-2 transition"
      >
        <span>←</span> Voltar
      </button>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src={movie.imagem}
          alt={movie.nome}
          className="w-full md:w-80 rounded-lg shadow-2xl"
        />

        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.nome}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-green-500 font-bold">100% relevante</span>
            <span className="text-zinc-400">2023</span>
            <span className="border border-zinc-600 px-2 py-0.5 text-xs text-zinc-400">18+</span>
          </div>

          <p className="whitespace-pre-line text-zinc-300 text-lg leading-relaxed mb-8">
            {movie.descricao}
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-2 rounded font-bold hover:bg-zinc-200 transition">
              Assistir
            </button>
            <button className="bg-zinc-700/50 text-white px-8 py-2 rounded font-bold hover:bg-zinc-700 transition">
              + Minha Lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}