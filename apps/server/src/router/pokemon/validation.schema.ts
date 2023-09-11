import joi from 'joi'

export const getPokemonListValidator = joi.object({
  offset: joi.number().integer(),
  limit: joi.number().integer(),
})

export const getPokemonIdValidator = joi.object({
  id: joi.number().integer().required(),
})
