import joi from 'joi'

export const createUserValidator = joi.object({
  name: joi.string().trim().required(),
})
