import { sequelize } from './../db'

export class UserService {
  async create(data) {
    return await sequelize.models.User.create({ name: data.name })
  }
}
