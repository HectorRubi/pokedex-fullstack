import { Sequelize } from 'sequelize'
import { User, UserAttributes } from './models/user'
import { Pokemon, PokemonAttributes } from './models/pokemon'
import { UserPokemon, UserPokemonAttributes } from './models/user-pokemon'

import { config } from './../config'

const sequelize = new Sequelize(`${config.dbURI}`)

// Models
User.init(UserAttributes, User.config(sequelize))
Pokemon.init(PokemonAttributes, Pokemon.config(sequelize))
UserPokemon.init(UserPokemonAttributes, UserPokemon.config(sequelize))

// Associations
User.associate(sequelize.models)
Pokemon.associate(sequelize.models)

export { sequelize, User, Pokemon, UserPokemon }
