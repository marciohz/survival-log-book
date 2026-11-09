import type { Franquia } from "../data/tipos"

type CardFranquiaProps = {
  franquia: Franquia
}

function CardFranquia({ franquia }: CardFranquiaProps) {
  return (
    <a href={`#${franquia.id}`} className="card">
      <img className="card-logo" src={franquia.logo} alt={`Logo de ${franquia.nome}`} />
      <div className="card-corpo">
        <h3>{franquia.nome}</h3>
        <p>{franquia.resumo}</p>
      </div>
      <span className="seta">→</span>
    </a>
  )
}

export default CardFranquia
