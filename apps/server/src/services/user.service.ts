import { sequelize } from './../db'

const {
  models: { User: UserModel },
} = sequelize

export class UserService {
  async create(data) {
    return await UserModel.create({ name: data.name })
  }
}
