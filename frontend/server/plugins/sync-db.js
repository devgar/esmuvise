import { defineNitroPlugin } from '#imports'
import db from 'database'

export default defineNitroPlugin(async _nitroApp => {
    await db.sequelize.sync()
    console.log('Nitro plugin DB :: OK')
})