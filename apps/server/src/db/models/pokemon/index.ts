import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  InitOptions,
  Model,
  ModelAttributes,
  Sequelize,
} from 'sequelize'

export const PokemonAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  extId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    field: 'ext_id',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  image: {
    type: DataTypes.TEXT,
  },
  stats: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
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

export class Pokemon extends Model<
  InferAttributes<Pokemon>,
  InferCreationAttributes<Pokemon>
> {
  declare id: number
  declare extId: number
  declare name: string
  declare height: number
  declare weight: number
  declare image: string | null
  declare stats: string
  declare createdAt: Date
  declare updatedAt: Date

  static associate(models) {
    // define association here
    this.belongsToMany(models.User, {
      through: models.UserPokemon,
      foreignKey: 'pokemonId',
    })
  }

  static config(sequelize: Sequelize): InitOptions {
    return {
      sequelize,
      tableName: 'pokemons',
      modelName: 'Pokemon',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  }
}
