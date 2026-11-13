import type { Jogo } from "../data/tipos"

type CardJogoProps = {
  jogo: Jogo
  favorito: boolean
  onFavoritar: (id: string) => void
}

function CardJogo({ jogo, favorito, onFavoritar }: CardJogoProps) {
  return (
    <article className={favorito ? "card card-favorito" : "card"}>
      <img src={jogo.imagem} alt={jogo.titulo} />
      <div className="jogo-rodape">
        <div className="jogo-info">
          <h4>{jogo.titulo}</h4>
          <span className="jogo-meta">🎮 {jogo.genero}</span>
          <span className="jogo-meta">📅 {jogo.ano}</span>
        </div>
        <div className="jogo-acoes">
          <button
            type="button"
            className={favorito ? "btn-favorito ativo" : "btn-favorito"}
            onClick={() => onFavoritar(jogo.id)}
            aria-pressed={favorito}
            aria-label={favorito ? `Remover ${jogo.titulo} dos favoritos` : `Favoritar ${jogo.titulo}`}
          >
            {favorito ? "♥" : "♡"}
          </button>
          <span className="seta">→</span>
        </div>
      </div>
    </article>
  )
}

export default CardJogo
