import { Alumno } from 'database'
import getId from '~/server/utils/getId'

export default defineEventHandler((event) => {
    return Alumno.findByPk(getId(event))
})