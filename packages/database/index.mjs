export * from './models/index.mjs'

import db from './models/index.mjs'

export default db

export async function isEmpty () {
    return !(await db.Alumno.findOne())
}

export async function initialize () {
    // TODO: REMOVE
}