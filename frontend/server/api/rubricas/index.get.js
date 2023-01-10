import { Rubrica } from 'database'

export default defineEventHandler(_event => {
    return Rubrica.findAll()
})