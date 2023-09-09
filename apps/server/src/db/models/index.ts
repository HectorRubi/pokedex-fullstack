import { Sequelize } from 'sequelize'
import { User, UserAttributes } from './user/index.js'
import { Pokemon, PokemonAttributes } from './pokemon/index.js'

export class Models {
  static setup(sequelize: Sequelize) {
    User.init(UserAttributes, User.config(sequelize))
    Pokemon.init(PokemonAttributes, Pokemon.config(sequelize))
  }
}
