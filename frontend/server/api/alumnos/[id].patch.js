import { Alumno } from 'database'

import getId from '~~/server/utils/getId'

export default defineEventHandler(async (event) => {
    const alumno = await Alumno.findByPk(getId(event))
    if (!alumno) return null // TODO: return valid error
    const payload = await readBody(event)
    const { firstName, lastName } = payload
    return alumno.update({ firstName, lastName })
})