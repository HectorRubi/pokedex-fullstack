import { notFound } from '@hapi/boom'
import { sequelize } from './../db'

const {
  models: { User: UserModel, Pokemon: PokemonModel },
} = sequelize

export class FavoriteService {
  async add(userId: number, pokemonId: number) {
    const pokemon = await PokemonModel.findOne({ where: { id: pokemonId } })
    const user = await UserModel.findOne({ where: { uuid: userId } })
    if (!pokemon || !user) {
      throw notFound()
    }

    await user.addPokemon(pokemon)
  }
}
