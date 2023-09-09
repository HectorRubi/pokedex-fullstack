import { NextFunction, Request, Response } from 'express'
import { Boom } from '@hapi/boom'

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
  err: Boom,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}
