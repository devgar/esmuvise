export * from './models/index.mjs'

import db from './models/index.mjs'

export default db

export async function isEmpty () {
    return !(await db.Alumno.findOne())
}

export async function initialize () {
    try {
        const [alumnos, asignaturas, matriculas] = await Promise.all([
            import('./seed/alumnos.json', { assert: { type: "json" }}),
            import('./seed/asignaturas.json', { assert: { type: "json" }}),
            import('./seed/matriculas.json', { assert: { type: "json" }}),
        ]) 
        await Promise.all([
            db.Alumno.bulkCreate(alumnos.default),
            db.Asignatura.bulkCreate(asignaturas.default),
            db.Matricula.bulkCreate(matriculas.default),
        ])
    } catch(err){
        console.warn('Imposible to initialize due to:', err)
    }
    return null
}