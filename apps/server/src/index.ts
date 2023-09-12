import express, { Request, Response } from 'express'
import cors from 'cors'
import { RouterModule } from './router/index.js'
import {
  errorHandler,
  boomErrorHandler,
  sequelizeErrorHandler,
} from './middleware/error.handler.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

RouterModule.init(app)

app.use(sequelizeErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
