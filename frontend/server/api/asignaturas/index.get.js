import { Asignatura } from 'database'

export default defineEventHandler((_event) => {
    return Asignatura.findAll()
})