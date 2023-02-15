import { Equivalence } from 'database'

export default defineEventHandler((_event) => {
    return Equivalence.findAll()
})