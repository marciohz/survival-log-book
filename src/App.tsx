import { useState } from "react"
import "./App.css"
import { franquias } from "./data/franquias"
import Cabecalho from "./components/Cabecalho"
import CardFranquia from "./components/CardFranquia"
import SecaoFranquia from "./components/SecaoFranquia"
import Rodape from "./components/Rodape"

function App() {
  // Estado: ids dos jogos favoritados
  const [favoritos, setFavoritos] = useState<string[]>([])

  function alternarFavorito(id: string) {
    setFavoritos((atuais) =>
      atuais.includes(id) ? atuais.filter((item) => item !== id) : [...atuais, id]
    )
  }

  return (
    <div className="pagina">
      <Cabecalho />

      <main className="conteudo container">
        <section>
          <h2 className="titulo-lista">Franquias de terror</h2>

          <div className="grid">
            {franquias.map((franquia) => (
              <CardFranquia key={franquia.id} franquia={franquia} />
            ))}
          </div>
        </section>

        {franquias.map((franquia) => (
          <SecaoFranquia
            key={franquia.id}
            franquia={franquia}
            favoritos={favoritos}
            onFavoritar={alternarFavorito}
          />
        ))}
      </main>

      <Rodape />
    </div>
  )
}

export default App
