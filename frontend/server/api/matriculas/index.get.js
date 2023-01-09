import { Matricula } from 'database'
export default defineEventHandler((event) => {
    return Matricula.findAll()
})