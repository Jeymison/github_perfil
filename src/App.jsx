import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ResposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <div className="container">
      <input type="text" className="input" required placeholder="Digite o nome do usuario Github" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </div>
  )
}

export default App
