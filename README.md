# Survival Log Book

Catálogo de franquias e jogos de terror: Resident Evil, Silent Hill, Alien, Dead by Daylight e Bloodborne. Na página inicial o usuário vê as franquias e, logo abaixo, a seção de cada franquia com os seus jogos, podendo favoritar os que quiser.

Projeto do TCD de Desenvolvimento Web, feito com React, TypeScript e Vite, com estilos em CSS (`src/App.css`).

## Como executar

É preciso ter o [Node.js](https://nodejs.org/) instalado.

```bash
npm install
npm run dev
```

Depois, abra no navegador o endereço que aparece no terminal (normalmente `http://localhost:5173`).

## Fonte dos dados

- **Listagem principal (jogos):** arquivo JSON `public/jogos.json`, carregado com `fetch` dentro de um `useEffect` no `src/App.tsx`. Cada jogo tem `id`, `franquiaId`, `titulo`, `genero`, `ano` e `imagem`. Enquanto os dados não chegam, a página mostra um aviso de carregando; se a requisição falhar, mostra uma mensagem de erro.
- **Listagem secundária (franquias):** vetor de objetos declarado em `src/data/franquias.ts`.
- **Imagens:** ficam em `public/img`.

## Estrutura

```
public/
  img/            imagens das franquias e capas dos jogos
  jogos.json      dados da listagem principal
src/
  components/     componentes da página
  data/           tipos (tipos.ts) e vetor de franquias (franquias.ts)
  App.tsx         estado e composição dos componentes
  App.css         estilos, variáveis CSS e media queries
docs/             wireframes
```
