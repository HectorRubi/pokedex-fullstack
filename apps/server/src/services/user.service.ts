import { User as UserModel } from './../db'

export class UserService {
  async create(name: string) {
    return await UserModel.create({ name })
  }
}
