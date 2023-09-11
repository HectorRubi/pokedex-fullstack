export type PokemonList = {
  count: number
  next: string | null
  previews: string | null
  results: { name: string; url: string }[]
}

export type PokemonStats = {
  effort: number
  base_stat: number
  stat: {
    name: string
  }
}

export type PokemonSprites = {
  front_default: string
  other: {
    'official-artwork': {
      front_default: string
    }
  }
}

export type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  stats: PokemonStats[]
  sprites: PokemonSprites
}
