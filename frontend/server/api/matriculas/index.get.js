import { Matricula, Alumno, Asignatura } from 'database'
export default defineEventHandler((_event) => {
    return Matricula.findAll({ include: [Alumno, Asignatura] })
})