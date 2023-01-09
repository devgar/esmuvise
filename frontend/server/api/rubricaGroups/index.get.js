import { RubricaGroup, Alumno } from 'database'

export default defineEventHandler((_event) => {
    return RubricaGroup.findAll()
})