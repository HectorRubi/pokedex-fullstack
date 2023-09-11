import { Express, Router } from 'express'
import { userRouter } from './user'
import { favoriteRouter } from './favorite'
import { pokemonRouter } from './pokemon'

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
