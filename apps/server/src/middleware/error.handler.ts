import { NextFunction, Request, Response } from 'express'
import { Boom } from '@hapi/boom'
import { ValidationError } from 'sequelize'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  res.status(500).send({
    code: 500,
    message: err.message,
  })
}

export const boomErrorHandler = (
  err: Boom | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof Boom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}

export const sequelizeErrorHandler = (
  err: ValidationError | Boom | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    })
  } else {
    next(err)
  }
}
