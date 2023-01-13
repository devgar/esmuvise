import { EvaluationItem } from 'database'
import getQueryNum from '~~/server/utils/getQueryNum'

export default defineEventHandler((event) => {
    
    const where = {}
    
    const AlumnoId = getQueryNum('AlumnoId')
    if(AlumnoId) where.AlumnoId = AlumnoId
    const RubricaId = getQueryNum('RubricaId')
    if(RubricaId) where.RubricaId = RubricaId
    const AsignaturaId = getQueryNum('AsignaturaId')
    if(AsignaturaId) where.AsignaturaId = AsignaturaId

    return EvaluationItem.findAll({ where })
})
