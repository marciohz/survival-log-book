// Tipo de cada item da listagem de jogos (listagem principal)
export type Jogo = {
  id: string
  titulo: string
  genero: string
  ano: number
  imagem: string
}

// Tipo de cada item da listagem de franquias (listagem secundária)
export type Franquia = {
  id: string
  nome: string
  resumo: string
  descricao: string
  logo: string
  jogos: Jogo[]
}
