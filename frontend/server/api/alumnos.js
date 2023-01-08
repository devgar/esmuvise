import db from '../../database/models/index.mjs'

export default defineEventHandler((_event) => {
    return db.Alumno.findAll()
})