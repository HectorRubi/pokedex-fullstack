export type Pokemon = {
  extId: number
  height: number
  id: number
  image: string
  name: string
  stats: string
  weight: number
}

export type PokemonStat = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}
