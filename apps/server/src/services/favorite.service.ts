import { notFound } from '@hapi/boom'
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
          exclude: ['createdAt', 'updatedAt', 'created_at', 'updated_at'],
        },
      },
    })

    if (!user) {
      throw notFound()
    }

    return user
  }

  async add(userId: string, pokemonId: number) {
    const { user, pokemon } = await this._getPokemonAndUser(userId, pokemonId)
    await user.addPokemon(pokemon)
  }

  async delete(userId: string, pokemonId: number) {
    const { user, pokemon } = await this._getPokemonAndUser(userId, pokemonId)

    return await UserPokemonModel.destroy({
      where: {
        userId: user.dataValues.id,
        pokemonId: pokemon.dataValues.id,
      },
    })
  }

  private async _getPokemonAndUser(userId: string, pokemonId: number) {
    const pokemon = await PokemonModel.findOne({ where: { id: pokemonId } })
    const user = await UserModel.findOne({ where: { uuid: userId } })

    if (!pokemon || !user) {
      throw notFound()
    }

    return {
      user,
      pokemon,
    }
  }
}
