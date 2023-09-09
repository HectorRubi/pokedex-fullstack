import express, { Request, Response } from 'express'
import { RouterModule } from './router/index.js'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

RouterModule.init(app)

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
