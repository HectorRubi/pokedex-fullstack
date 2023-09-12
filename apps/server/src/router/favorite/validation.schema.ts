import joi from 'joi'

export const createFavorite = joi.object({
  user: joi.string().uuid().required(),
  pokemon: joi.number().integer().required(),
})

export const getFavorite = joi.object({
  user: joi.string().uuid().required(),
})

export const idFavorite = joi.object({
  id: joi.number().integer().required(),
})
