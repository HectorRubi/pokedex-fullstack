import joi from 'joi'

export const getPokemonListValidator = joi.object({
  offset: joi.number(),
  limit: joi.number(),
})
