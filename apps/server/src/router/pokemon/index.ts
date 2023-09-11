import { NextFunction, Request, Response, Router } from 'express'
import { PokemonService } from './../../services/pokemon.service'
import { validateSchema } from './../../middleware/validator.handler'
import {
  getPokemonListValidator,
  getPokemonIdValidator,
} from './validation.schema'

const pokemonRouter = Router()
const pokemonService = new PokemonService()

pokemonRouter
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = validateSchema(getPokemonListValidator, req.query)
      const offset = data.offset || 0
      const limit = data.limit || 10
      const pokemonList = await pokemonService.findAll(offset, limit)
      res.send(pokemonList)
    } catch (error) {
      next(error)
    }
  })

pokemonRouter
  .route('/:id')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = validateSchema(getPokemonIdValidator, req.params)
      const pokemon = await pokemonService.findById(id)
      res.send({
        pokemon,
      })
    } catch (error) {
      next(error)
    }
  })

export { pokemonRouter }
