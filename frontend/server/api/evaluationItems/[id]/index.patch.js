import { EvaluationItem } from 'database'

import getId from '~~/server/utils/getId'

export default defineEventHandler(async (event) => {
    const evaluationItem = await EvaluationItem.findByPk(getId(event))
    if (!evaluationItem) return null // TODO: return valid error
    const payload = await readBody(event)
    const { value, body } = payload
    // TODO: validate payload
    return evaluationItem.update({ value, body})
})