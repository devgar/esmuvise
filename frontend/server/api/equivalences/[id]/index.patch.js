import { Equivalence } from 'database'

import getId from '~~/server/utils/getId'

export default defineEventHandler(async (event) => {
    const equivalence = await Equivalence.findByPk(getId(event))
    if (!equivalence) return null // TODO: return valid error
    const payload = await readBody(event)
    const { max, icon, label } = payload
    return equivalence.update({ max, icon, label })
})