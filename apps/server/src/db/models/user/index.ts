import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  InitOptions,
  Model,
  ModelAttributes,
  Sequelize,
  HasManyAddAssociationMixin,
} from 'sequelize'
import { Pokemon } from './../pokemon'

export const UserAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uuid: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
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

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: number
  declare name: string
  declare uuid: string
  declare createdAt: Date
  declare updatedAt: Date

  declare addPokemon: HasManyAddAssociationMixin<Pokemon, number>

  static associate(models) {
    // define association here
    this.belongsToMany(models.Pokemon, {
      through: models.UserPokemon,
      foreignKey: 'userId',
    })
  }

  static config(sequelize: Sequelize): InitOptions {
    return {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    }
  }
}
