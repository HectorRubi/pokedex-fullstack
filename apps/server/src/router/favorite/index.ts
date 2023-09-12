import { NextFunction, Request, Response, Router } from 'express'
import { FavoriteService } from './../../services/favorite.service'
import { validateSchema } from './../../middleware/validator.handler'
import { createFavorite, getFavorite, idFavorite } from './validation.schema'

const favoriteRouter = Router()
const favoriteService = new FavoriteService()

favoriteRouter
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user: userId } = validateSchema(getFavorite, req.query)
      const favorites = await favoriteService.get(userId)
      res.json(favorites['Pokemons'])
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

favoriteRouter
  .route('/:id')
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id: pokemonId } = validateSchema(idFavorite, req.params)
      const { user: userId } = validateSchema(getFavorite, req.query)
      const response = await favoriteService.delete(userId, pokemonId)
      res.json(response)
    } catch (error) {
      next(error)
    }
  })

export { favoriteRouter }
