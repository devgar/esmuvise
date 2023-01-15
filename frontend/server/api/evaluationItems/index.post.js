import { EvaluationItem } from 'database'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const item = await EvaluationItem.create(body)
    } catch(error) {
        if (error.name === 'SequelizeUniqueConstraintError')
            error = createError({
                ...error,
                statusCode: 409,
                statusMessage: 'CONFLICT submited unique key already exists'
            })
        return sendError(event, error, false)
    }
    return item
})