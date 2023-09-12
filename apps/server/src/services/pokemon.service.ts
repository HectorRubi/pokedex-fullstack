import { Op } from 'sequelize'
import { Pokeapi } from './../pokeapi'
import { Pokemon as PokemonModel } from './../db'
import {
  PokemonList as PokemonListType,
  Pokemon as PokemonType,
} from './../types/pokemon.type'

const pokemonAttributes = [
  'id',
  'extId',
  'name',
  'height',
  'weight',
  'image',
  'stats',
]

export class PokemonService {
  async findAll(offset: number, limit: number) {
    let pokemonList = []

    const dbPokemons = await PokemonModel.findAll({
      attributes: pokemonAttributes,
      where: {
        extId: {
          [Op.gt]: offset,
          [Op.lte]: limit + offset,
        },
      },
      order: ['ext_id'],
    })

    if (dbPokemons.length < limit) {
      const apiPokemons = await Pokeapi.findAll<PokemonListType>(offset, limit)

      for (let i = 0; i < apiPokemons.results.length; i++) {
        const pokemon = await Pokeapi.findByUrl<PokemonType>(
          apiPokemons.results[i].url,
        )

        const [result, created] = await PokemonModel.findOrCreate({
          attributes: pokemonAttributes,
          where: { extId: pokemon.id },
          defaults: {
            extId: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            image:
              pokemon.sprites.other['official-artwork'].front_default ||
              pokemon.sprites.front_default,
            stats: JSON.stringify(pokemon.stats),
          },
        })

        if (created) {
          delete result.dataValues.updatedAt
          delete result.dataValues.createdAt
        }

        pokemonList.push(result)
      }
    } else {
      pokemonList = dbPokemons
    }

    return pokemonList
  }

  async findById(id: number) {
    const pokemon = PokemonModel.findOne({
      attributes: pokemonAttributes,
      where: {
        id,
      },
    })
    return pokemon
  }
}
