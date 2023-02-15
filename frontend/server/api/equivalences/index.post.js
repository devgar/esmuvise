import { Equivalence } from "database"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log({ body })
    try {
        return await Equivalence.create(body)
    } catch (error) {
        console.log(error)
        return sendError(event, error, false)
    }
})