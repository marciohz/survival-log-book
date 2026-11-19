import type { Franquia } from "../data/tipos"

type HeroFranquiaProps = {
  franquia: Franquia
}

function HeroFranquia({ franquia }: HeroFranquiaProps) {
  return (
    <div className="hero">
      <div className="hero-texto">
        <h2 className="hero-titulo">{franquia.nome}</h2>
        <p>{franquia.descricao}</p>
      </div>
      <img
        className="hero-banner hero-logo"
        src={franquia.logo}
        alt={`Banner de ${franquia.nome}`}
      />
    </div>
  )
}

export default HeroFranquia
