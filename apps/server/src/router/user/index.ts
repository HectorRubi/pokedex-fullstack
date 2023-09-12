import { NextFunction, Request, Response, Router } from 'express'
import { UserService } from './../../services/user.service'
import { createUserValidator } from './validation.schema'
import { validateSchema } from './../../middleware/validator.handler'

const userRouter = Router()
const userService = new UserService()

userRouter
  .route('/')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = validateSchema(createUserValidator, req.body)
      const user = await userService.create(name)
      res.json({
        id: user.dataValues.uuid,
        name: user.dataValues.name,
      })
    } catch (error) {
      next(error)
    }
  })

export { userRouter }
