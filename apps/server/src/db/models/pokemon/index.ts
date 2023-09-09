import { InitOptions, Model, ModelAttributes, Sequelize } from 'sequelize'

export const PokemonAttributes: ModelAttributes = {}

export class Pokemon extends Model {
  static associate() {
    // define association here
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
