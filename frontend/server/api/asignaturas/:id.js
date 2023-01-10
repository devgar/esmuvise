import { Asignatura } from 'database'
import getId from '~/server/utils/getId'

export default defineEventHandler((event) => {
    return Asignatura.findByPk(getId(event))
})