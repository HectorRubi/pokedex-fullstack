import { NextFunction, Request, Response, Router } from 'express'

const userRouter = Router()

userRouter
  .route('/')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({
        route: 'POST /user',
      })
    } catch (error) {
      next(error)
    }
  })

export { userRouter }
