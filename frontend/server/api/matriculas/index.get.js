import { Matricula, Alumno, Asignatura } from 'database'
import getQueryNum from '~~/server/utils/getQueryNum'

export default defineEventHandler((event) => {
    const where = {}
    const relations = new Set()
    const alumnoId = getQueryNum(event, 'alumnoId')
    if (alumnoId) {
        where.AlumnoId = alumnoId
        relations.add(Asignatura)
    }
    const asignaturaId = getQueryNum(event, 'asignaturaId')
    if (asignaturaId) {
        where.AsignaturaId = asignaturaId
        relations.add(Alumno)
    }
    const full = getQuery(event).full
    if (full !== undefined) relations.add(Alumno).add(Asignatura)
    const include = Array.from(relations)
    console.log({ include })
    return Matricula.findAll({ include, where })
})