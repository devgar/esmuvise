import { Matricula, Alumno, Asignatura } from 'database'
import getId from '~/server/utils/getId'

export default defineEventHandler((event) => {
    const include = [Alumno, Asignatura]
    return Matricula.findByPk(getId(event), { include })
})