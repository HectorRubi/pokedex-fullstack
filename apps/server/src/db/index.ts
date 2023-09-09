import { Sequelize } from 'sequelize'
import { Models } from './models/index.js'

import { config } from './../config/index.js'

const sequelize = new Sequelize(`${config.dbURI}`, {})
Models.setup(sequelize)

export { sequelize }
