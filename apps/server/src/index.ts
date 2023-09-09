import express, { Request, Response } from 'express'
import { RouterModule } from './router/index.js'
import { errorHandler, boomErrorHandler } from './middleware/error.handler.js'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

RouterModule.init(app)

app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
