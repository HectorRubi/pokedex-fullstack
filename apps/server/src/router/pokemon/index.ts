import { NextFunction, Request, Response, Router } from 'express'

const pokemonRouter = Router()

pokemonRouter
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({
        route: 'GET /pokemon',
      })
    } catch (error) {
      next(error)
    }
  })

pokemonRouter
  .route('/:id')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      res.send({
        route: `GET /pokemon/${id}`,
      })
    } catch (error) {
      next(error)
    }
  })

export { pokemonRouter }
