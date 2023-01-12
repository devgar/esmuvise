import { Asignatura } from 'database'
import getId from '~/server/utils/getId'

export default defineEventHandler(async (event) => {
    const asignatura = await Asignatura.findByPk(getId(event))
    if (!asignatura) return null // TODO: return valid error
    const { RubricaGroupId } = parseInt(await readBody(event))
    if (isNan(RubricaGroupId)) return null // TODO: return valid error
    return asignatura.update({ RubricaGroupId })
})