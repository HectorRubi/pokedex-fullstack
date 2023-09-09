import { badRequest } from '@hapi/boom'
import { ObjectSchema } from 'joi'

export function validateSchema(schema: ObjectSchema, data) {
  const { error, value } = schema.validate(data, { abortEarly: false })

  if (error) {
    throw badRequest(error)
  }

  return value
}
