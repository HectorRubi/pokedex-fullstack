import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  InitOptions,
  Model,
  ModelAttributes,
  Sequelize,
} from 'sequelize'

export const UserPokemonAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  pokemonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'pokemon_id',
    references: {
      model: 'pokemons',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at',
    defaultValue: DataTypes.NOW,
  },
}

export class UserPokemon extends Model<
  InferAttributes<UserPokemon>,
  InferCreationAttributes<UserPokemon>
> {
  declare id: number
  declare userId: number
  declare pokemonId: number
  declare createdAt: Date
  declare updatedAt: Date

  static config(sequelize: Sequelize): InitOptions {
    return {
      sequelize,
      tableName: 'users_pokemons',
      modelName: 'UserPokemon',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  }
}
