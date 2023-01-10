import { Alumno } from 'database'

export default defineEventHandler((_event) => {
    return Alumno.findAll()
})