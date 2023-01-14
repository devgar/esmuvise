import { EvaluationItem } from 'database'
import getQueryNum from '~~/server/utils/getQueryNum'

export default defineEventHandler((event) => {
    
    const where = {}
    
    const MatriculaId = getQueryNum(event, 'MatriculaId')
    if(MatriculaId) where.MatriculaId = MatriculaId
    const RubricaId = getQueryNum(event, 'RubricaId')
    if(RubricaId) where.RubricaId = RubricaId
    // const StudentEvaluationId = getQueryNum(event, 'StudentEvaluationId')
    // if(StudentEvaluationId) where.StudentEvaluationId = StudentEvaluationId

    return EvaluationItem.findAll({ where })
})
