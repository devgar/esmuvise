import { Matricula, Alumno, Asignatura } from 'database'
import getId from '~/server/utils/getId'

export default defineEventHandler((event) => {
    return Matricula.findByPk(getId(event), { include: [Alumno, Asignatura] })
})