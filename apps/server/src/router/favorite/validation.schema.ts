import joi from 'joi'

export const createFavorite = joi.object({
  user: joi.string().uuid().required(),
  pokemon: joi.number().integer().required(),
})
