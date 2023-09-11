import { NextFunction, Request, Response, Router } from 'express'
import { FavoriteService } from './../../services/favorite.service'
import { validateSchema } from './../../middleware/validator.handler'
import { createFavorite } from './validation.schema'

const favoriteRouter = Router()
const favoriteService = new FavoriteService()

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
      const data = validateSchema(createFavorite, req.body)
      await favoriteService.add(data.user, data.pokemon)
      res.status(201).json()
    } catch (error) {
      next(error)
    }
  })

export { favoriteRouter }
