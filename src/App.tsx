import "./App.css"

function App() {
  return (
    <div className="pagina">
      <header className="cabecalho">
        <div className="container">
          <h1 className="logo">
            Survival <span>Log Book</span>
          </h1>
        </div>
      </header>

      <main className="conteudo container">
        <section>
          <h2 className="titulo-lista">Franquias de terror</h2>

          <div className="grid">
            <a href="#resident-evil" className="card">
              <img className="card-logo" src="./img/franquias/resident-evil-logo.png" alt="Logo de Resident Evil" />
              <div className="card-corpo">
                <h3>Resident Evil</h3>
                <p>Vírus, experimentos secretos e sobrevivência.</p>
              </div>
              <span className="seta">→</span>
            </a>

            <a href="#silent-hill" className="card">
              <img className="card-logo" src="./img/franquias/Silent_Hill_series_logo.png" alt="Logo de Silent Hill" />
              <div className="card-corpo">
                <h3>Silent Hill</h3>
                <p>Terror psicológico entre realidade e pesadelo.</p>
              </div>
              <span className="seta">→</span>
            </a>

            <a href="#alien" className="card">
              <img className="card-logo" src="./img/franquias/Alien.png" alt="Logo de Alien" />
              <div className="card-corpo">
                <h3>Alien</h3>
                <p>Terror e sobrevivência no universo Alien.</p>
              </div>
              <span className="seta">→</span>
            </a>

            <a href="#dead-by-daylight" className="card">
              <img className="card-logo" src="./img/franquias/Dead-by-Daylight-Logo.png" alt="Logo de Dead by Daylight" />
              <div className="card-corpo">
                <h3>Dead by Daylight</h3>
                <p>Terror multiplayer assimétrico.</p>
              </div>
              <span className="seta">→</span>
            </a>

            <a href="#bloodborne" className="card">
              <img className="card-logo" src="./img/franquias/Bloodborne-Logo.png" alt="Logo de Bloodborne" />
              <div className="card-corpo">
                <h3>Bloodborne</h3>
                <p>Terror gótico em uma cidade amaldiçoada.</p>
              </div>
              <span className="seta">→</span>
            </a>
          </div>
        </section>

        <section id="resident-evil" className="secao-franquia">
          <div className="hero">
            <div className="hero-texto">
              <h2 className="hero-titulo">Resident Evil</h2>
              <p>
                Uma franquia de survival horror sobre sobreviventes de experimentos com vírus,
                conspirações e criaturas, entre sustos e escassez de recursos.
              </p>
            </div>
            <img
              className="hero-banner hero-logo"
              src="./img/franquias/resident-evil-logo.png"
              alt="Banner de Resident Evil"
            />
          </div>

          <h3 className="titulo-secao">Jogos da franquia</h3>

          <div className="grid">
            <article className="card">
              <img src="./img/resident-evil/residentEvil.jpg" alt="Resident Evil" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Resident Evil</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 1996</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/resident-evil/Resident_Evil_2_capa.png" alt="Resident Evil 2" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Resident Evil 2</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 1998</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/resident-evil/Resident_Evil_3_capa.png" alt="Resident Evil 3: Nemesis" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Resident Evil 3: Nemesis</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 1999</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/resident-evil/Resident_Evil_4_capa.png" alt="Resident Evil 4" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Resident Evil 4</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2005</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/resident-evil/Resident_Evil_5_capa.png" alt="Resident Evil 5" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Resident Evil 5</h4>
                  <span className="jogo-meta">🎮 Ação e survival horror</span>
                  <span className="jogo-meta">📅 2009</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/resident-evil/Resident_evil_6.jpg" alt="Resident Evil 6" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Resident Evil 6</h4>
                  <span className="jogo-meta">🎮 Ação e survival horror</span>
                  <span className="jogo-meta">📅 2012</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/resident-evil/RE7.jpg" alt="Resident Evil 7: Biohazard" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Resident Evil 7: Biohazard</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2017</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/resident-evil/re8.jpg" alt="Resident Evil Village" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Resident Evil Village</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2021</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/resident-evil/re9.jpg" alt="Resident Evil Requiem" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Resident Evil Requiem</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2026</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>
          </div>
        </section>

        <section id="silent-hill" className="secao-franquia">
          <div className="hero">
            <div className="hero-texto">
              <h2 className="hero-titulo">Silent Hill</h2>
              <p>
                Uma franquia de terror psicológico que mistura realidade e pesadelo, explorando o
                medo em suas formas mais profundas.
              </p>
            </div>
            <img
              className="hero-banner hero-logo"
              src="./img/franquias/Silent_Hill_series_logo.png"
              alt="Banner de Silent Hill"
            />
          </div>

          <h3 className="titulo-secao">Jogos da franquia</h3>

          <div className="grid">
            <article className="card">
              <img src="./img/silent-hill/silent-hill-1.png" alt="Silent Hill" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Silent Hill</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 1999</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/silent-hill/silent-hill-2.png" alt="Silent Hill 2" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Silent Hill 2</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2001</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/silent-hill/silent-hill-2-remake.png" alt="Silent Hill 2 (Remake)" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Silent Hill 2 (Remake)</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2024</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/silent-hill/silent-hill-3.png" alt="Silent Hill 3" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Silent Hill 3</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2003</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/silent-hill/silent-hill-4.png" alt="Silent Hill 4: The Room" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Silent Hill 4: The Room</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2004</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/silent-hill/silent-hill-homecoming.png" alt="Silent Hill: Homecoming" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Silent Hill: Homecoming</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2008</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/silent-hill/silent-hill-downpour.png" alt="Silent Hill: Downpour" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Silent Hill: Downpour</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2012</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>

            <article className="card">
              <img src="./img/silent-hill/silent-hill-f.png" alt="Silent Hill f" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Silent Hill f</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2025</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>
          </div>
        </section>

        <section id="alien" className="secao-franquia">
          <div className="hero">
            <div className="hero-texto">
              <h2 className="hero-titulo">Alien</h2>
              <p>
                Terror e sobrevivência no universo Alien, com um predador quase impossível de
                enfrentar a bordo de uma estação espacial.
              </p>
            </div>
            <img
              className="hero-banner hero-logo"
              src="./img/franquias/Alien.png"
              alt="Banner de Alien"
            />
          </div>

          <h3 className="titulo-secao">Jogos da franquia</h3>

          <div className="grid">
            <article className="card">
              <img src="./img/alien/alien-isolation.png" alt="Alien: Isolation" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Alien: Isolation</h4>
                  <span className="jogo-meta">🎮 Survival horror</span>
                  <span className="jogo-meta">📅 2014</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>
          </div>
        </section>

        <section id="dead-by-daylight" className="secao-franquia">
          <div className="hero">
            <div className="hero-texto">
              <h2 className="hero-titulo">Dead by Daylight</h2>
              <p>
                Terror multiplayer assimétrico, em que um assassino caça sobreviventes que tentam
                consertar geradores e escapar.
              </p>
            </div>
            <img
              className="hero-banner hero-logo"
              src="./img/franquias/Dead-by-Daylight-Logo.png"
              alt="Banner de Dead by Daylight"
            />
          </div>

          <h3 className="titulo-secao">Jogos da franquia</h3>

          <div className="grid">
            <article className="card">
              <img src="./img/dead-by-daylight/dead-by-daylight.png" alt="Dead by Daylight" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Dead by Daylight</h4>
                  <span className="jogo-meta">🎮 Terror multiplayer</span>
                  <span className="jogo-meta">📅 2016</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>
          </div>
        </section>

        <section id="bloodborne" className="secao-franquia">
          <div className="hero">
            <div className="hero-texto">
              <h2 className="hero-titulo">Bloodborne</h2>
              <p>
                Terror gótico e sombrio em uma cidade amaldiçoada, entre caçadas, criaturas e
                segredos.
              </p>
            </div>
            <img
              className="hero-banner hero-logo"
              src="./img/franquias/Bloodborne-Logo.png"
              alt="Banner de Bloodborne"
            />
          </div>

          <h3 className="titulo-secao">Jogos da franquia</h3>

          <div className="grid">
            <article className="card">
              <img src="./img/bloodborne/bloodborne.png" alt="Bloodborne" />
              <div className="jogo-rodape">
                <div className="jogo-info">
                  <h4>Bloodborne</h4>
                  <span className="jogo-meta">🎮 Action RPG e terror gótico</span>
                  <span className="jogo-meta">📅 2015</span>
                </div>
                <span className="seta">→</span>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container rodape-imagens">
          <img src="./img/resident-evil/Resident_Evil_2_capa.png" alt="Capa de Resident Evil 2" />
          <img src="./img/silent-hill/silent-hill-2.png" alt="Capa de Silent Hill 2" />
          <img src="./img/alien/alien-isolation.png" alt="Capa de Alien: Isolation" />
        </div>
      </footer>
    </div>
  )
}

export default App