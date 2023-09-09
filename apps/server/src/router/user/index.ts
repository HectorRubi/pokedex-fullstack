import { NextFunction, Request, Response, Router } from 'express'
import { UserService } from './../../services/user.service'

const userRouter = Router()
const userService = new UserService()

userRouter
  .route('/')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body
      const user = await userService.create({ name })
      res.send({
        id: user.dataValues.uuid,
        name: user.dataValues.name,
      })
    } catch (error) {
      next(error)
    }
  })

export { userRouter }
