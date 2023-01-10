import { EvaluationItem } from 'database'

export default defineEventHandler((_event) => {
    return EvaluationItem.findAll()
})
