import { Alumno } from 'database'

export default defineEventHandler(async (event) => {
    return {
        params: event.context.params,
        body: await readBody(event),
    }
}) 