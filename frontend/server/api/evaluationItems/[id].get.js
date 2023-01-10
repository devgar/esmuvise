import { EvaluationItem } from 'database'
import getId from '~/server/utils/getId'

export default defineEventHandler((event) => {
    return EvaluationItem.findByPk(getId(event))
})