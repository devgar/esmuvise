import { defineNitroPlugin } from '#imports'
import db, { isEmpty, initialize } from 'database'

export default defineNitroPlugin(async _nitroApp => {
    await db.sequelize.sync()
    if (await isEmpty())
    {
        await initialize()
        console.log("Nitro plugin DB :: Database initialized")
    }
    console.log('Nitro plugin DB :: OK')
})