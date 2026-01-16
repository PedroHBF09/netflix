import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center text-white">
      
      <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix" 
          className="w-24 md:w-32 object-contain mb-10"
      />

      <h2 className="text-3xl font-medium mb-10">
        Quem está assistindo?
      </h2>

      <button className="group flex flex-col items-center focus:outline-none" onClick={() => navigate("/home")}>
        <div className="w-32 h-32 rounded bg-zinc-700 overflow-hidden border-2 border-transparent group-hover:border-white transition">           
            <img src={import.meta.env.BASE_URL + "user/perfil.jpeg"} alt="Perfil" className="w-full h-full object-cover" />          
        </div>

        <span className="mt-4 text-lg text-zinc-400 group-hover:text-white transition">
          Julia
        </span>
      </button>

      <button className="mt-16 border border-zinc-500 px-6 py-2 text-zinc-400 hover:text-white hover:border-white transition">
        Gerenciar perfis
      </button>
    </div>
  );
}
