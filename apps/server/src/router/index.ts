import { Express, Router } from 'express'
import { userRouter } from './user/index.js'
import { favoriteRouter } from './favorite/index.js'
import { pokemonRouter } from './pokemon/index.js'

export class RouterModule {
  static init(app: Express) {
    const router = Router()
    // Add routes here
    router.use('/user', userRouter)
    router.use('/favorite', favoriteRouter)
    router.use('/pokemon', pokemonRouter)

    app.use('/api', router)
  }
}
