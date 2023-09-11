import { Sequelize } from 'sequelize'
import { User, UserAttributes } from './user'
import { Pokemon, PokemonAttributes } from './pokemon'
import { UserPokemon, UserPokemonAttributes } from './user-pokemon'

export class Models {
  static setup(sequelize: Sequelize) {
    User.init(UserAttributes, User.config(sequelize))
    Pokemon.init(PokemonAttributes, Pokemon.config(sequelize))
    UserPokemon.init(UserPokemonAttributes, UserPokemon.config(sequelize))

    // Associations
    User.associate(sequelize.models)
    Pokemon.associate(sequelize.models)
  }
}
