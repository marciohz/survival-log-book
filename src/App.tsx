import './App.css';

export default function App() {
  return (
    <>
      <header className="bg-[#0f0e1a] px-4 py-4 md:px-8">
        <h1 className="text-base font-semibold uppercase leading-tight text-white">
          Survival
          <br />
          <span className="text-[#8b5cf6]">Log Book</span>
        </h1>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">
        {/* ===== Listagem secundária: Franquias de terror ===== */}
        <section aria-labelledby="titulo-franquias">
          <h2
            id="titulo-franquias"
            className="mb-5 border-b-2 border-[#7c4dff] pb-3 text-xl font-semibold uppercase md:text-2xl"
          >
            Franquias de terror
          </h2>

          <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-2">
              <div className="h-32 overflow-hidden rounded bg-[#e5e5ee]">
                <img
                  src="/docs/resident-evil.png"
                  alt="Logo de Resident Evil"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 px-2 pt-3">
                <h3 className="text-base font-semibold">Resident Evil</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Survival horror com zumbis, experimentos biológicos e sobrevivência com poucos
                  recursos.
                </p>
              </div>
              <a
                href="#jogos"
                aria-label="Ver jogos de Resident Evil"
                className="self-end px-2 pb-1 text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-2">
              <div className="h-32 overflow-hidden rounded bg-[#e5e5ee]">
                <img
                  src="/docs/Silent-Hill.png"
                  alt="Logo de Silent Hill"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 px-2 pt-3">
                <h3 className="text-base font-semibold">Silent Hill</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Uma franquia de terror psicológico que mistura realidade e pesadelo, explorando
                  o medo em suas formas mais profundas.
                </p>
              </div>
              <a
                href="#jogos"
                aria-label="Ver jogos de Silent Hill"
                className="self-end px-2 pb-1 text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-2">
              <div className="h-32 overflow-hidden rounded bg-[#e5e5ee]">
                <img
                  src="/docs/alien_isolation.png"
                  alt="Imagem de Alien: Isolation"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 px-2 pt-3">
                <h3 className="text-base font-semibold">Alien</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Terror e ficção científica no espaço, com criaturas mortais e muita tensão.
                </p>
              </div>
              <a
                href="#jogos"
                aria-label="Ver jogos de Alien"
                className="self-end px-2 pb-1 text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-2">
              <div className="h-32 overflow-hidden rounded bg-[#e5e5ee]">
                <img
                  src="/docs/Dead-by-Daylight-Emblem.png"
                  alt="Emblema de Dead by Daylight"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 px-2 pt-3">
                <h3 className="text-base font-semibold">Dead by Daylight</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Terror multiplayer em que um assassino caça sobreviventes em partidas online.
                </p>
              </div>
              <a
                href="#jogos"
                aria-label="Ver jogos de Dead by Daylight"
                className="self-end px-2 pb-1 text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-2">
              <div className="h-32 overflow-hidden rounded bg-[#e5e5ee]">
                <img
                  src="/docs/Bloodborne-Logo.png"
                  alt="Logo de Bloodborne"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 px-2 pt-3">
                <h3 className="text-base font-semibold">Bloodborne</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Ação e terror gótico em uma cidade amaldiçoada.
                </p>
              </div>
              <a
                href="#jogos"
                aria-label="Ver jogos de Bloodborne"
                className="self-end px-2 pb-1 text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>
          </div>
        </section>

        {/* ===== Listagem principal: Jogos ===== */}
        <section id="jogos" aria-labelledby="titulo-jogos" className="mt-10 scroll-mt-6">
          <h2
            id="titulo-jogos"
            className="mb-5 border-b-2 border-[#7c4dff] pb-3 text-xl font-semibold uppercase md:text-2xl"
          >
            Jogos
          </h2>

          <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold">Resident Evil</h3>
                <p className="mt-1 text-sm text-gray-400">Survival horror · 1996</p>
                <p className="mt-1 text-xs text-[#8b5cf6]">PlayStation, Saturn, PC</p>
              </div>
              <a
                href="#"
                aria-label="Ver detalhes de Resident Evil"
                className="mt-3 self-end text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold">Resident Evil 2</h3>
                <p className="mt-1 text-sm text-gray-400">Survival horror · 1998</p>
                <p className="mt-1 text-xs text-[#8b5cf6]">PlayStation, PC</p>
              </div>
              <a
                href="#"
                aria-label="Ver detalhes de Resident Evil 2"
                className="mt-3 self-end text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold">Resident Evil 4</h3>
                <p className="mt-1 text-sm text-gray-400">Survival horror e ação · 2005</p>
                <p className="mt-1 text-xs text-[#8b5cf6]">GameCube, PlayStation 2</p>
              </div>
              <a
                href="#"
                aria-label="Ver detalhes de Resident Evil 4"
                className="mt-3 self-end text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold">Silent Hill</h3>
                <p className="mt-1 text-sm text-gray-400">Survival horror · 1999</p>
                <p className="mt-1 text-xs text-[#8b5cf6]">PlayStation</p>
              </div>
              <a
                href="#"
                aria-label="Ver detalhes de Silent Hill"
                className="mt-3 self-end text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold">Silent Hill 2</h3>
                <p className="mt-1 text-sm text-gray-400">Terror psicológico · 2001</p>
                <p className="mt-1 text-xs text-[#8b5cf6]">PlayStation 2, Xbox, PC</p>
              </div>
              <a
                href="#"
                aria-label="Ver detalhes de Silent Hill 2"
                className="mt-3 self-end text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold">Silent Hill 3</h3>
                <p className="mt-1 text-sm text-gray-400">Terror psicológico · 2003</p>
                <p className="mt-1 text-xs text-[#8b5cf6]">PlayStation 2, PC</p>
              </div>
              <a
                href="#"
                aria-label="Ver detalhes de Silent Hill 3"
                className="mt-3 self-end text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold">Silent Hill 4: The Room</h3>
                <p className="mt-1 text-sm text-gray-400">Survival horror · 2004</p>
                <p className="mt-1 text-xs text-[#8b5cf6]">PlayStation 2, Xbox, PC</p>
              </div>
              <a
                href="#"
                aria-label="Ver detalhes de Silent Hill 4: The Room"
                className="mt-3 self-end text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold">Alien: Isolation</h3>
                <p className="mt-1 text-sm text-gray-400">Survival horror · 2014</p>
                <p className="mt-1 text-xs text-[#8b5cf6]">PC, PlayStation 4, Xbox One</p>
              </div>
              <a
                href="#"
                aria-label="Ver detalhes de Alien: Isolation"
                className="mt-3 self-end text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold">Dead by Daylight</h3>
                <p className="mt-1 text-sm text-gray-400">Terror multiplayer · 2016</p>
                <p className="mt-1 text-xs text-[#8b5cf6]">PC, PlayStation 4, Xbox One</p>
              </div>
              <a
                href="#"
                aria-label="Ver detalhes de Dead by Daylight"
                className="mt-3 self-end text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>

            <article className="flex flex-col rounded-xl border-[1.5px] border-[#4c3a9b] bg-[#100c1c] p-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold">Bloodborne</h3>
                <p className="mt-1 text-sm text-gray-400">Ação e terror · 2015</p>
                <p className="mt-1 text-xs text-[#8b5cf6]">PlayStation 4</p>
              </div>
              <a
                href="#"
                aria-label="Ver detalhes de Bloodborne"
                className="mt-3 self-end text-xl leading-none text-[#8b5cf6] hover:text-[#c4b5fd]"
              >
                →
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
        <p className="border-t-2 border-[#4c3a9b] pt-5 text-center text-xs text-gray-500">
          Survival Log Book · Meu arquivo pessoal de jogos de terror
        </p>
      </footer>
    </>
  );
}