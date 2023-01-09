import { Matricula } from 'database'
import getId from '~/server/utils/getId'

export default defineEventHandler((event) => {
    return Matricula.findByPk(getId(event))
})