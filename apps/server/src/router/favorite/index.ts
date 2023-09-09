import { NextFunction, Request, Response, Router } from 'express'

const favoriteRouter = Router()

favoriteRouter
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({
        route: 'GET /favorite',
      })
    } catch (error) {
      next(error)
    }
  })
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({
        route: 'POST /favorite',
      })
    } catch (error) {
      next(error)
    }
  })

export { favoriteRouter }
