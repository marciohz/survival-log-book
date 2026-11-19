import type { Franquia } from "./tipos"

export const franquias: Franquia[] = [
  {
    id: "resident-evil",
    nome: "Resident Evil",
    resumo: "Vírus, experimentos secretos e sobrevivência.",
    descricao:
      "Uma franquia de survival horror sobre sobreviventes de experimentos com vírus, conspirações e criaturas, entre sustos e escassez de recursos.",
    logo: "./img/franquias/resident-evil-logo.png",
    jogos: [
      { id: "re-1", titulo: "Resident Evil", genero: "Survival horror", ano: 1996, imagem: "./img/resident-evil/residentEvil.jpg" },
      { id: "re-2", titulo: "Resident Evil 2", genero: "Survival horror", ano: 1998, imagem: "./img/resident-evil/Resident_Evil_2_capa.png" },
      { id: "re-3", titulo: "Resident Evil 3: Nemesis", genero: "Survival horror", ano: 1999, imagem: "./img/resident-evil/Resident_Evil_3_capa.png" },
      { id: "re-4", titulo: "Resident Evil 4", genero: "Survival horror", ano: 2005, imagem: "./img/resident-evil/Resident_Evil_4_capa.png" },
      { id: "re-5", titulo: "Resident Evil 5", genero: "Ação e survival horror", ano: 2009, imagem: "./img/resident-evil/Resident_Evil_5_capa.png" },
      { id: "re-6", titulo: "Resident Evil 6", genero: "Ação e survival horror", ano: 2012, imagem: "./img/resident-evil/Resident_evil_6.jpg" },
      { id: "re-7", titulo: "Resident Evil 7: Biohazard", genero: "Survival horror", ano: 2017, imagem: "./img/resident-evil/RE7.jpg" },
      { id: "re-village", titulo: "Resident Evil Village", genero: "Survival horror", ano: 2021, imagem: "./img/resident-evil/re8.jpg" },
      { id: "re-requiem", titulo: "Resident Evil Requiem", genero: "Survival horror", ano: 2026, imagem: "./img/resident-evil/re9.jpg" },
    ],
  },
  {
    id: "silent-hill",
    nome: "Silent Hill",
    resumo: "Terror psicológico entre realidade e pesadelo.",
    descricao:
      "Uma franquia de terror psicológico que mistura realidade e pesadelo, explorando o medo em suas formas mais profundas.",
    logo: "./img/franquias/Silent_Hill_series_logo.png",
    jogos: [
      { id: "sh-1", titulo: "Silent Hill", genero: "Survival horror", ano: 1999, imagem: "./img/silent-hill/silent-hill-1.png" },
      { id: "sh-2", titulo: "Silent Hill 2", genero: "Survival horror", ano: 2001, imagem: "./img/silent-hill/silent-hill-2.png" },
      { id: "sh-2-remake", titulo: "Silent Hill 2 (Remake)", genero: "Survival horror", ano: 2024, imagem: "./img/silent-hill/silent-hill-2-remake.png" },
      { id: "sh-3", titulo: "Silent Hill 3", genero: "Survival horror", ano: 2003, imagem: "./img/silent-hill/silent-hill-3.png" },
      { id: "sh-4", titulo: "Silent Hill 4: The Room", genero: "Survival horror", ano: 2004, imagem: "./img/silent-hill/silent-hill-4.png" },
      { id: "sh-homecoming", titulo: "Silent Hill: Homecoming", genero: "Survival horror", ano: 2008, imagem: "./img/silent-hill/silent-hill-homecoming.png" },
      { id: "sh-downpour", titulo: "Silent Hill: Downpour", genero: "Survival horror", ano: 2012, imagem: "./img/silent-hill/silent-hill-downpour.png" },
      { id: "sh-f", titulo: "Silent Hill f", genero: "Survival horror", ano: 2025, imagem: "./img/silent-hill/silent-hill-f.png" },
    ],
  },
  {
    id: "alien",
    nome: "Alien",
    resumo: "Terror e sobrevivência no universo Alien.",
    descricao:
      "Terror e sobrevivência no universo Alien, com um predador quase impossível de enfrentar a bordo de uma estação espacial.",
    logo: "./img/franquias/Alien.png",
    jogos: [
      { id: "alien-isolation", titulo: "Alien: Isolation", genero: "Survival horror", ano: 2014, imagem: "./img/alien/alien-isolation.png" },
    ],
  },
  {
    id: "dead-by-daylight",
    nome: "Dead by Daylight",
    resumo: "Terror multiplayer assimétrico.",
    descricao:
      "Terror multiplayer assimétrico, em que um assassino caça sobreviventes que tentam consertar geradores e escapar.",
    logo: "./img/franquias/Dead-by-Daylight-Logo.png",
    jogos: [
      { id: "dbd", titulo: "Dead by Daylight", genero: "Terror multiplayer", ano: 2016, imagem: "./img/dead-by-daylight/dead-by-daylight.png" },
    ],
  },
  {
    id: "bloodborne",
    nome: "Bloodborne",
    resumo: "Terror gótico em uma cidade amaldiçoada.",
    descricao:
      "Terror gótico e sombrio em uma cidade amaldiçoada, entre caçadas, criaturas e segredos.",
    logo: "./img/franquias/Bloodborne-Logo.png",
    jogos: [
      { id: "bloodborne-jogo", titulo: "Bloodborne", genero: "Action RPG e terror gótico", ano: 2015, imagem: "./img/bloodborne/bloodborne.png" },
    ],
  },
]