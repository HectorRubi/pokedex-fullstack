import { notFound, unauthorized } from '@hapi/boom'
import {
  User as UserModel,
  Pokemon as PokemonModel,
  UserPokemon as UserPokemonModel,
} from './../db'

export class FavoriteService {
  async get(userId: string) {
    const user = await UserModel.findOne({
      attributes: [],
      where: { uuid: userId },
      include: {
        model: PokemonModel,
        through: {
          attributes: [],
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    })

    if (!user) {
      throw unauthorized()
    }

    return user
  }

  async add(userId: string, pokemonId: number) {
    const user = await this._getUser(userId)
    const pokemon = await this._getPokemon(pokemonId)
    await user.addPokemon(pokemon)
  }

  async delete(userId: string, pokemonId: number) {
    const user = await this._getUser(userId)
    const pokemon = await this._getPokemon(pokemonId)

    return await UserPokemonModel.destroy({
      where: {
        userId: user.dataValues.id,
        pokemonId: pokemon.dataValues.id,
      },
    })
  }

  private async _getUser(userId: string) {
    const user = await UserModel.findOne({ where: { uuid: userId } })
    if (!user) {
      throw unauthorized()
    }
    return user
  }

  private async _getPokemon(pokemonId: number) {
    const pokemon = await PokemonModel.findOne({ where: { id: pokemonId } })
    if (!pokemon) {
      throw notFound()
    }
    return pokemon
  }
}
