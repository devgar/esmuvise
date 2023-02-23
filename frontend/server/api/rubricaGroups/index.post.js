import { RubricaGroup } from 'database'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        return await RubricaGroup.create(body)
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError')
            error = createError({
                ...error,
                statusCode: 409,
                statusMessage: 'CONFLICT submited unique key already exists'
            })
        return sendError(event, error, false)
    }
})