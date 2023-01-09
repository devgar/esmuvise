import { H3Event, sendError, createError } from 'h3'

export default function getId(event: H3Event): number {
    const stringId = event.context.params.id
    const id = parseInt(stringId)
    if (isNaN(id)) {
        const url = event.node.req.url
        const error = createError({
            statusCode: 400,
            statusMessage: `Can't parse id from <${stringId}> at ${url}`
        })
        sendError(event, error, false)
    }
    return id
}