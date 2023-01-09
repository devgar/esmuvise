import { EvaluationItem } from 'database'

export default defineEventHandler(async (event) => {
    const body = readBody(event)
    const item = await EvaluationItem.create(body)
    return item
})