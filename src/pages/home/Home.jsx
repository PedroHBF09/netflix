import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-12 py-4 flex items-center justify-between ${scrolled ? "bg-black shadow-xl" : "bg-transparent"}`}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix" 
          className="w-24 md:w-28 object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex gap-6 text-md font-light">
          <span className="cursor-pointer hover:text-zinc-400 transition">Séries</span>
          <span className="cursor-pointer hover:text-zinc-400 transition">Filmes</span>
          <div className="w-8 h-8 rounded block"><img src="/user/perfil.jpeg" alt="perfil" className="w-full h-full object-cover rounded-full"/></div>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 px-4 md:px-12 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-zinc-200">
          Minha lista
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-8 md:gap-x-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="group cursor-pointer"
            >   
              <div className="relative aspect-2/3 overflow-hidden rounded-md transition-transform duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={movie.imagem}
                  alt={movie.nome}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="mt-3 text-sm md:text-base font-medium text-zinc-400 group-hover:text-white transition-colors truncate">
                {movie.nome}
              </h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}