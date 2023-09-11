import { Sequelize } from 'sequelize'
import { Models } from './models'

import { config } from './../config'

const sequelize = new Sequelize(`${config.dbURI}`, {})
Models.setup(sequelize)

export { sequelize }
