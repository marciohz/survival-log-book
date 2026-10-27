import "./App.css"

type Jogo = {
  nome: string
  genero: string
  ano: number
  imagem: string
}

type Franquia = {
  id: string
  nome: string
  descricao: string
  logo: string
  jogos: Jogo[]
}

const franquias: Franquia[] = [
  {
    id: "resident-evil",
    nome: "Resident Evil",
    descricao: "Vírus, experimentos secretos e sobrevivência.",
    logo: "./img/franquias/resident-evil-logo.png",
    jogos: [
      { nome: "Resident Evil", genero: "Survival horror", ano: 1996, imagem: "./img/resident-evil/residentEvil.jpg" },
      { nome: "Resident Evil 2", genero: "Survival horror", ano: 1998, imagem: "./img/resident-evil/Resident_Evil_2_capa.png" },
      { nome: "Resident Evil 3: Nemesis", genero: "Survival horror", ano: 1999, imagem: "./img/resident-evil/Resident_Evil_3_capa.png" },
      { nome: "Resident Evil 4", genero: "Survival horror", ano: 2005, imagem: "./img/resident-evil/Resident_Evil_4_capa.png" },
      { nome: "Resident Evil 5", genero: "Ação e survival horror", ano: 2009, imagem: "./img/resident-evil/Resident_Evil_5_capa.png" },
      { nome: "Resident Evil 6", genero: "Ação e survival horror", ano: 2012, imagem: "./img/resident-evil/Resident_evil_6.jpg" },
      { nome: "Resident Evil 7: Biohazard", genero: "Survival horror", ano: 2017, imagem: "./img/resident-evil/RE7.jpg" },
      { nome: "Resident Evil Village", genero: "Survival horror", ano: 2021, imagem: "./img/resident-evil/re8.jpg" },
      { nome: "Resident Evil Requiem", genero: "Survival horror", ano: 2026, imagem: "./img/resident-evil/re9.jpg" },
    ],
  },
  {
    id: "silent-hill",
    nome: "Silent Hill",
    descricao: "Terror psicológico entre realidade e pesadelo.",
    logo: "./img/franquias/Silent_Hill_series_logo.png",
    jogos: [
      { nome: "Silent Hill", genero: "Survival horror", ano: 1999, imagem: "./img/silent-hill/silent-hill-1.png" },
      { nome: "Silent Hill 2", genero: "Survival horror", ano: 2001, imagem: "./img/silent-hill/silent-hill-2.png" },
      { nome: "Silent Hill 2 (Remake)", genero: "Survival horror", ano: 2024, imagem: "./img/silent-hill/silent-hill-2-remake.png" },
      { nome: "Silent Hill 3", genero: "Survival horror", ano: 2003, imagem: "./img/silent-hill/silent-hill-3.png" },
      { nome: "Silent Hill 4: The Room", genero: "Survival horror", ano: 2004, imagem: "./img/silent-hill/silent-hill-4.png" },
      { nome: "Silent Hill: Homecoming", genero: "Survival horror", ano: 2008, imagem: "./img/silent-hill/silent-hill-homecoming.png" },
      { nome: "Silent Hill: Downpour", genero: "Survival horror", ano: 2012, imagem: "./img/silent-hill/silent-hill-downpour.png" },
      { nome: "Silent Hill f", genero: "Survival horror", ano: 2025, imagem: "./img/silent-hill/silent-hill-f.png" },
    ],
  },
  {
    id: "alien",
    nome: "Alien",
    descricao: "Terror e sobrevivência no universo Alien.",
    logo: "./img/franquias/Alien.png",
    jogos: [
      { nome: "Alien: Isolation", genero: "Survival horror", ano: 2014, imagem: "./img/alien/alien-isolation.png" },
    ],
  },
  {
    id: "dead-by-daylight",
    nome: "Dead by Daylight",
    descricao: "Terror multiplayer assimétrico.",
    logo: "./img/franquias/Dead-by-Daylight-Logo.png",
    jogos: [
      { nome: "Dead by Daylight", genero: "Terror multiplayer", ano: 2016, imagem: "./img/dead-by-daylight/dead-by-daylight.png" },
    ],
  },
  {
    id: "bloodborne",
    nome: "Bloodborne",
    descricao: "Terror gótico em uma cidade amaldiçoada.",
    logo: "./img/franquias/Bloodborne-Logo.png",
    jogos: [
      { nome: "Bloodborne", genero: "Action RPG e terror gótico", ano: 2015, imagem: "./img/bloodborne/bloodborne.png" },
    ],
  },
]

function App() {
  return (
    <div className="pagina">
      <header className="cabecalho">
        <div className="container">
          <div className="logo">
            Survival <span>Log Book</span>
          </div>
        </div>
      </header>

      <main className="conteudo container">
        <section>
          <h2 className="titulo-lista">Franquias de terror</h2>

          <div className="grid">
            {franquias.map((franquia) => (
              <a key={franquia.id} href={`#${franquia.id}`} className="card">
                <img
                  src={franquia.logo}
                  alt={`Logo de ${franquia.nome}`}
                />
                <div className="card-corpo">
                  <h3>{franquia.nome}</h3>
                  <p>{franquia.descricao}</p>
                </div>
                <span className="seta">↓</span>
              </a>
            ))}
          </div>
        </section>

        {franquias.map((franquia) => (
          <section key={franquia.id} id={franquia.id} className="secao-franquia">
            <h2 className="titulo-secao">Jogos de {franquia.nome}</h2>

            <div className="grid">
              {franquia.jogos.map((jogo) => (
                <article key={jogo.nome} className="card">
                  <img src={jogo.imagem} alt={jogo.nome} loading="lazy" />
                  <div className="jogo-rodape">
                    <div className="jogo-info">
                      <h3>{jogo.nome}</h3>
                      <span className="jogo-meta">🎮 {jogo.genero}</span>
                      <span className="jogo-meta">📅 {jogo.ano}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="rodape">
        <div className="container">
          <img src="./img/rodape.png" alt="Jogos de terror" />
        </div>
      </footer>
    </div>
  )
}

export default App