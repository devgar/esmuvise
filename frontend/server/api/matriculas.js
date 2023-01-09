import { Matricula } from 'database'

export default defineEventHandler((_event) => {
    return Matricula.findAll()
})