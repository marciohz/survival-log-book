import type { Franquia } from "../data/tipos"
import HeroFranquia from "./HeroFranquia"
import CardJogo from "./CardJogo"

type SecaoFranquiaProps = {
  franquia: Franquia
  favoritos: string[]
  onFavoritar: (id: string) => void
}

function SecaoFranquia({ franquia, favoritos, onFavoritar }: SecaoFranquiaProps) {
  return (
    <section id={franquia.id} className="secao-franquia">
      <HeroFranquia franquia={franquia} />

      <h3 className="titulo-secao">Jogos da franquia</h3>

      <div className="grid">
        {franquia.jogos.map((jogo) => (
          <CardJogo
            key={jogo.id}
            jogo={jogo}
            favorito={favoritos.includes(jogo.id)}
            onFavoritar={onFavoritar}
          />
        ))}
      </div>
    </section>
  )
}

export default SecaoFranquia
