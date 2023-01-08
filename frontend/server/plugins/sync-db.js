import { defineNitroPlugin } from '#imports'
import db from '../../database/models/index.mjs'

export default defineNitroPlugin(async _nitroApp => {
    await db.sequelize.sync()
    console.log('Nitro plugin DB :: OK')
})